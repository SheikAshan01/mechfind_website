import { test, expect } from "@playwright/test";

test.describe("MECHFIND Official Website Verification", () => {
  const pages = [
    { path: "/", titleFragment: "MECHFIND" },
    { path: "/about", titleFragment: "About Us" },
    { path: "/how-it-works", titleFragment: "How MECHFIND Operates" },
    { path: "/features", titleFragment: "Features Matrix" },
    { path: "/customers", titleFragment: "For Drivers & Riders" },
    { path: "/mechanics", titleFragment: "For Mechanics" },
    { path: "/tutorials", titleFragment: "Tutorials" },
    { path: "/faq", titleFragment: "Frequently Asked Questions" },
    { path: "/contact", titleFragment: "Contact Us" },
    { path: "/customer-care", titleFragment: "Customer Care" },
    { path: "/privacy", titleFragment: "Privacy Policy" },
    { path: "/terms", titleFragment: "Terms & Conditions" },
  ];

  test("1. All 12 pages load with 200 OK and render correctly with zero console errors", async ({
    page,
  }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    for (const p of pages) {
      const response = await page.goto(p.path);
      expect(response?.status()).toBe(200);
      const content = await page.content();
      expect(content).toContain("MECHFIND");
    }

    expect(consoleErrors).toEqual([]);
  });

  test("2. Exact Brand Logo is present with correct image", async ({ page }) => {
    await page.goto("/");
    const logo = page.locator('img[alt*="MECHFIND"]').first();
    await expect(logo).toBeVisible();
    const src = await logo.getAttribute("src");
    expect(src).toContain("mechfind-logo");
  });

  test("3. App Download Coming Soon modal opens and functions properly", async ({
    page,
  }) => {
    await page.goto("/");
    // Click Download App in header
    const downloadBtn = page.getByRole("button", { name: /Download App/i }).first();
    await downloadBtn.click();

    // Verify modal is visible
    const modal = page.getByRole("dialog");
    await expect(modal).toBeVisible();
    await expect(modal).toContainText("MECHFIND Mobile App");
    await expect(modal).toContainText("Coming Soon to Stores");

    // Close modal
    const closeBtn = page.getByLabel("Close download dialog");
    await closeBtn.click();
    await expect(modal).not.toBeVisible();
  });

  test("4. Customer Care form validation & staging honesty notice", async ({
    page,
  }) => {
    await page.goto("/customer-care");

    // Check emergency hotline link
    const phoneLink = page.locator('a[href="tel:1234567890"]').first();
    await expect(phoneLink).toBeVisible();

    // Submit without filling
    const submitBtn = page.getByRole("button", {
      name: /Submit Customer Care Request/i,
    });
    await submitBtn.click();

    // Verify validation errors appear
    await expect(page.getByText("Full name is required.")).toBeVisible();
    await expect(page.getByText("Mobile number is required.")).toBeVisible();

    // Fill valid data
    await page.fill("#care-name", "John Tester");
    await page.fill("#care-mobile", "1234567890");
    await page.fill("#care-email", "john@example.com");
    await page.fill(
      "#care-message",
      "My car battery died and I need roadside jumpstart assistance."
    );

    // Submit
    await submitBtn.click();

    // Expect staging notice as required by prompt
    await expect(
      page.getByText("Notice: Support Submission Service Not Yet Connected")
    ).toBeVisible();
  });

  test("5. FAQ Accordions expand and collapse smoothly", async ({ page }) => {
    await page.goto("/faq");

    // Find the accordion button for "What is MECHFIND?"
    const firstAccordion = page.getByRole("button", {
      name: /What is MECHFIND\?/i,
    });
    await expect(firstAccordion).toBeVisible();

    // Click to toggle
    await firstAccordion.click();
    // Click another question
    const secondAccordion = page.getByRole("button", {
      name: /Does MECHFIND support bikes and cars\?/i,
    });
    await secondAccordion.click();
    await expect(
      page.getByText("Yes. MECHFIND supports both two-wheelers")
    ).toBeVisible();
  });

  test("6. Responsive Viewports Test - Zero Horizontal Overflow", async ({
    page,
  }) => {
    const viewports = [
      { width: 320, height: 600, label: "320px mobile" },
      { width: 375, height: 667, label: "375px mobile" },
      { width: 425, height: 800, label: "425px mobile" },
      { width: 768, height: 1024, label: "768px tablet" },
      { width: 1024, height: 768, label: "1024px laptop" },
      { width: 1440, height: 900, label: "1440px desktop" },
      { width: 1920, height: 1080, label: "1920px large desktop" },
    ];

    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/");

      const hasHorizontalOverflow = await page.evaluate(() => {
        return (
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth
        );
      });

      expect(
        hasHorizontalOverflow,
        `Horizontal overflow detected on ${vp.label}`
      ).toBe(false);
    }
  });
});
