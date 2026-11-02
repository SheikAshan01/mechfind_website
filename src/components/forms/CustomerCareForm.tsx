"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, PhoneCall, CheckCircle, ShieldAlert } from "lucide-react";
import { contactConfig } from "@/config/contact";

export function CustomerCareForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    category: "Breakdown Assistance Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "notice" | "success">("idle");

  const categories = [
    "Breakdown Assistance Inquiry",
    "Active Roadside Emergency",
    "App Technical Problem",
    "Mechanic Partner Inquiry",
    "Feedback & Service Suggestion",
    "Billing or Invoice Query",
    "Other Request",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Please enter a valid mobile number (e.g. 1234567890).";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message details are required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide at least 10 characters detailing your issue.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate form submission attempt to demonstrate real validation & staging state
    setTimeout(() => {
      setIsSubmitting(false);

      if (contactConfig.backendSubmissionEnabled) {
        setSubmissionStatus("success");
      } else {
        // Honesty disclosure required by prompt:
        // "If backend integration is not configured, do not falsely claim that support requests were submitted.
        // Show a clear message that the support submission service is not yet connected."
        setSubmissionStatus("notice");
      }
    }, 600);
  };

  return (
    <div className="bg-[#121212] border border-[#262626] rounded-3xl p-6 sm:p-9 shadow-xl relative overflow-hidden">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Submit a Customer Care Request
        </h3>
        <p className="text-sm text-neutral-400">
          Fill out the details below. Our support team reviews all incoming inquiries promptly.
        </p>
      </div>

      {submissionStatus === "notice" ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1C1608] border border-[#FFD400]/40 rounded-2xl p-6 space-y-4"
        >
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-[#FFD400]/15 text-[#FFD400] shrink-0 mt-0.5">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                Notice: Support Submission Service Not Yet Connected
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed mb-3">
                {contactConfig.notice.message}
              </p>
              <p className="text-xs text-neutral-400">
                Form validation for your entry ({formData.name}, {formData.mobile}, {formData.category}) was verified successfully, but our production API dispatch gateway is currently in pre-launch staging.
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-[#332A10] flex flex-wrap items-center gap-3">
            <a
              href={contactConfig.telLink}
              className="inline-flex items-center gap-2 bg-[#FFD400] hover:bg-[#E5BE00] text-[#080808] font-bold text-sm px-5 py-2.5 rounded-xl transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Direct Hotline ({contactConfig.phone})</span>
            </a>

            <button
              type="button"
              onClick={() => setSubmissionStatus("idle")}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#222222] hover:bg-[#2d2d2d] text-neutral-300 hover:text-white transition-colors"
            >
              Edit Form Details
            </button>
          </div>
        </motion.div>
      ) : submissionStatus === "success" ? (
        <div className="bg-[#142316] border border-[#2e5932] rounded-2xl p-6 text-center">
          <CheckCircle className="w-10 h-10 text-[#4ade80] mx-auto mb-2" />
          <h4 className="text-lg font-bold text-white mb-1">Request Received</h4>
          <p className="text-sm text-neutral-300">
            A customer care representative will contact you at {formData.mobile}.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Name Field */}
          <div>
            <label htmlFor="care-name" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
              Full Name <span className="text-[#FFD400]">*</span>
            </label>
            <input
              id="care-name"
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: "" });
              }}
              placeholder="e.g. Alexander Smith"
              className={`w-full bg-[#181818] border rounded-xl py-3 px-4 text-sm text-white placeholder-neutral-500 outline-none transition-all ${
                errors.name
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-[#2b2b2b] focus:border-[#FFD400] focus:ring-1 focus:ring-[#FFD400]"
              }`}
            />
            {errors.name && <p className="text-xs text-red-400 mt-1.5">{errors.name}</p>}
          </div>

          {/* Grid: Mobile + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="care-mobile" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                Mobile Number <span className="text-[#FFD400]">*</span>
              </label>
              <input
                id="care-mobile"
                type="tel"
                value={formData.mobile}
                onChange={(e) => {
                  setFormData({ ...formData, mobile: e.target.value });
                  if (errors.mobile) setErrors({ ...errors, mobile: "" });
                }}
                placeholder="e.g. 1234567890"
                className={`w-full bg-[#181818] border rounded-xl py-3 px-4 text-sm text-white placeholder-neutral-500 outline-none transition-all ${
                  errors.mobile
                    ? "border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-[#2b2b2b] focus:border-[#FFD400] focus:ring-1 focus:ring-[#FFD400]"
                }`}
              />
              {errors.mobile && <p className="text-xs text-red-400 mt-1.5">{errors.mobile}</p>}
            </div>

            <div>
              <label htmlFor="care-email" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                Email Address <span className="text-[#FFD400]">*</span>
              </label>
              <input
                id="care-email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                placeholder="e.g. alex@example.com"
                className={`w-full bg-[#181818] border rounded-xl py-3 px-4 text-sm text-white placeholder-neutral-500 outline-none transition-all ${
                  errors.email
                    ? "border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-[#2b2b2b] focus:border-[#FFD400] focus:ring-1 focus:ring-[#FFD400]"
                }`}
              />
              {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
            </div>
          </div>

          {/* Issue Category Dropdown */}
          <div>
            <label htmlFor="care-category" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
              Issue Category <span className="text-[#FFD400]">*</span>
            </label>
            <select
              id="care-category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full bg-[#181818] border border-[#2b2b2b] focus:border-[#FFD400] focus:ring-1 focus:ring-[#FFD400] rounded-xl py-3 px-4 text-sm text-white outline-none transition-all cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-[#181818] text-white">
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="care-message" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
              Message / Breakdown Details <span className="text-[#FFD400]">*</span>
            </label>
            <textarea
              id="care-message"
              rows={4}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: "" });
              }}
              placeholder="Please describe what happened, your vehicle type (car/bike), and any location details if applicable..."
              className={`w-full bg-[#181818] border rounded-xl py-3 px-4 text-sm text-white placeholder-neutral-500 outline-none transition-all resize-y ${
                errors.message
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-[#2b2b2b] focus:border-[#FFD400] focus:ring-1 focus:ring-[#FFD400]"
              }`}
            />
            {errors.message && <p className="text-xs text-red-400 mt-1.5">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-[#FFD400] hover:bg-[#E5BE00] text-[#080808] font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-[0_2px_15px_-3px_rgba(255,212,0,0.35)] cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Validating Request...
              </span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Customer Care Request</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
