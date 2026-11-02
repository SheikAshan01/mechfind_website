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
    "Roadside Support Question",
    "App Technical Inquiry",
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

    setTimeout(() => {
      setIsSubmitting(false);

      if (contactConfig.backendSubmissionEnabled) {
        setSubmissionStatus("success");
      } else {
        // Honesty disclosure required by prompt
        setSubmissionStatus("notice");
      }
    }, 600);
  };

  return (
    <div className="bg-white border border-[#E6E9EF] rounded-3xl p-6 sm:p-9 shadow-sm relative overflow-hidden">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-black text-[#142235] mb-2 font-heading">
          Submit a Customer Care Request
        </h3>
        <p className="text-sm text-[#667085]">
          Fill out the details below. Our support team reviews all incoming inquiries.
        </p>
      </div>

      {submissionStatus === "notice" ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#FBF4E7] border border-[#D6A84F]/40 rounded-2xl p-6 space-y-4"
        >
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-white text-[#D6A84F] shrink-0 mt-0.5 border border-[#D6A84F]/30 shadow-2xs">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#142235] mb-1 font-heading">
                Notice: Support Submission Service Not Yet Connected
              </h4>
              <p className="text-sm text-[#475467] leading-relaxed mb-3">
                {contactConfig.notice.message}
              </p>
              <p className="text-xs text-[#667085]">
                Form validation for your entry ({formData.name}, {formData.mobile}, {formData.category}) passed successfully. For urgent roadside assistance, please contact our direct hotline.
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-[#D6A84F]/20 flex flex-wrap items-center gap-3">
            <a
              href={contactConfig.telLink}
              className="inline-flex items-center gap-2 bg-[#142235] hover:bg-[#1D3048] text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#D6A84F]" />
              <span>Call Direct Hotline ({contactConfig.phone})</span>
            </a>

            <button
              type="button"
              onClick={() => setSubmissionStatus("idle")}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-white hover:bg-[#F7F8FA] text-[#142235] border border-[#E6E9EF] transition-colors cursor-pointer"
            >
              Edit Form Details
            </button>
          </div>
        </motion.div>
      ) : submissionStatus === "success" ? (
        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-6 text-center">
          <CheckCircle className="w-10 h-10 text-[#16A34A] mx-auto mb-2" />
          <h4 className="text-lg font-bold text-[#142235] mb-1 font-heading">Request Received</h4>
          <p className="text-sm text-[#475467]">
            A customer care representative will contact you at {formData.mobile}.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="care-name" className="block text-xs font-semibold text-[#142235] uppercase tracking-wider mb-1.5">
              Full Name <span className="text-[#D6A84F]">*</span>
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
              className={`w-full bg-[#F7F8FA] border rounded-xl py-2.5 px-4 text-sm text-[#172334] placeholder-[#98A2B3] outline-none transition-all ${
                errors.name
                  ? "border-red-500 focus:bg-white focus:ring-1 focus:ring-red-500"
                  : "border-[#E6E9EF] focus:bg-white focus:border-[#142235] focus:ring-1 focus:ring-[#142235]"
              }`}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Grid: Mobile + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="care-mobile" className="block text-xs font-semibold text-[#142235] uppercase tracking-wider mb-1.5">
                Mobile Number <span className="text-[#D6A84F]">*</span>
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
                className={`w-full bg-[#F7F8FA] border rounded-xl py-2.5 px-4 text-sm text-[#172334] placeholder-[#98A2B3] outline-none transition-all ${
                  errors.mobile
                    ? "border-red-500 focus:bg-white focus:ring-1 focus:ring-red-500"
                    : "border-[#E6E9EF] focus:bg-white focus:border-[#142235] focus:ring-1 focus:ring-[#142235]"
                }`}
              />
              {errors.mobile && <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>}
            </div>

            <div>
              <label htmlFor="care-email" className="block text-xs font-semibold text-[#142235] uppercase tracking-wider mb-1.5">
                Email Address <span className="text-[#D6A84F]">*</span>
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
                className={`w-full bg-[#F7F8FA] border rounded-xl py-2.5 px-4 text-sm text-[#172334] placeholder-[#98A2B3] outline-none transition-all ${
                  errors.email
                    ? "border-red-500 focus:bg-white focus:ring-1 focus:ring-red-500"
                    : "border-[#E6E9EF] focus:bg-white focus:border-[#142235] focus:ring-1 focus:ring-[#142235]"
                }`}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Issue Category Dropdown */}
          <div>
            <label htmlFor="care-category" className="block text-xs font-semibold text-[#142235] uppercase tracking-wider mb-1.5">
              Issue Category <span className="text-[#D6A84F]">*</span>
            </label>
            <select
              id="care-category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full bg-[#F7F8FA] border border-[#E6E9EF] focus:bg-white focus:border-[#142235] focus:ring-1 focus:ring-[#142235] rounded-xl py-2.5 px-4 text-sm text-[#172334] outline-none transition-all cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="care-message" className="block text-xs font-semibold text-[#142235] uppercase tracking-wider mb-1.5">
              Message / Breakdown Details <span className="text-[#D6A84F]">*</span>
            </label>
            <textarea
              id="care-message"
              rows={4}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: "" });
              }}
              placeholder="Describe your issue, vehicle type (bike/car), or question..."
              className={`w-full bg-[#F7F8FA] border rounded-xl py-2.5 px-4 text-sm text-[#172334] placeholder-[#98A2B3] outline-none transition-all resize-y ${
                errors.message
                  ? "border-red-500 focus:bg-white focus:ring-1 focus:ring-red-500"
                  : "border-[#E6E9EF] focus:bg-white focus:border-[#142235] focus:ring-1 focus:ring-[#142235]"
              }`}
            />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-[#142235] hover:bg-[#1D3048] text-white font-semibold py-3 px-6 rounded-xl text-sm transition-all shadow-xs cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Validating Request...
              </span>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#D6A84F]" />
                <span>Submit Customer Care Request</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
