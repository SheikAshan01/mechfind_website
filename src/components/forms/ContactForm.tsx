"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Info } from "lucide-react";
import { contactConfig } from "@/config/contact";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedNotice, setSubmittedNotice] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
      errs.email = "Invalid email format.";
    if (!formData.subject.trim()) errs.subject = "Subject is required.";
    if (!formData.message.trim()) errs.message = "Message is required.";
    else if (formData.message.trim().length < 8)
      errs.message = "Message must be at least 8 characters.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedNotice(true);
    }, 500);
  };

  return (
    <div className="bg-white border border-[#E6E9EF] rounded-3xl p-6 sm:p-9 shadow-sm">
      <h3 className="text-xl sm:text-2xl font-black text-[#142235] mb-2 font-heading">
        Send Us a Message
      </h3>
      <p className="text-sm text-[#667085] mb-6">
        Have questions regarding our roadside platform, partnerships, or general inquiries?
      </p>

      {submittedNotice ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#FBF4E7] border border-[#D6A84F]/40 rounded-2xl p-5 space-y-3"
        >
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#D6A84F] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-[#142235] text-sm mb-1 font-heading">
                Notice: Pre-Launch Staging Endpoint
              </h4>
              <p className="text-xs text-[#475467] leading-relaxed mb-3">
                Thank you, {formData.name}. Your inquiry details have passed client validation. Our production messaging gateway is currently in pre-launch staging.
              </p>
              <p className="text-xs text-[#667085]">
                For immediate responses, please contact us directly at{" "}
                <a href={`mailto:${contactConfig.contactEmail}`} className="text-[#142235] font-semibold underline">
                  {contactConfig.contactEmail}
                </a>{" "}
                or phone{" "}
                <a href={contactConfig.telLink} className="text-[#142235] font-bold underline">
                  {contactConfig.phone}
                </a>.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSubmittedNotice(false)}
            className="text-xs font-semibold text-[#142235] hover:text-[#1D3048] px-3 py-1.5 bg-white border border-[#E6E9EF] rounded-lg mt-2 cursor-pointer"
          >
            Reset Form
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold text-[#142235] uppercase tracking-wider mb-1.5">
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: "" });
              }}
              placeholder="e.g. Rachel Adams"
              className={`w-full bg-[#F7F8FA] border rounded-xl py-2.5 px-4 text-sm text-[#172334] placeholder-[#98A2B3] outline-none transition-all ${
                errors.name
                  ? "border-red-500 focus:bg-white"
                  : "border-[#E6E9EF] focus:bg-white focus:border-[#142235]"
              }`}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-xs font-semibold text-[#142235] uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: "" });
              }}
              placeholder="e.g. rachel@example.com"
              className={`w-full bg-[#F7F8FA] border rounded-xl py-2.5 px-4 text-sm text-[#172334] placeholder-[#98A2B3] outline-none transition-all ${
                errors.email
                  ? "border-red-500 focus:bg-white"
                  : "border-[#E6E9EF] focus:bg-white focus:border-[#142235]"
              }`}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="contact-subject" className="block text-xs font-semibold text-[#142235] uppercase tracking-wider mb-1.5">
              Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              value={formData.subject}
              onChange={(e) => {
                setFormData({ ...formData, subject: e.target.value });
                if (errors.subject) setErrors({ ...errors, subject: "" });
              }}
              placeholder="e.g. Fleet Assistance Partnership Inquiry"
              className={`w-full bg-[#F7F8FA] border rounded-xl py-2.5 px-4 text-sm text-[#172334] placeholder-[#98A2B3] outline-none transition-all ${
                errors.subject
                  ? "border-red-500 focus:bg-white"
                  : "border-[#E6E9EF] focus:bg-white focus:border-[#142235]"
              }`}
            />
            {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold text-[#142235] uppercase tracking-wider mb-1.5">
              Message
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: "" });
              }}
              placeholder="How can we assist you today?..."
              className={`w-full bg-[#F7F8FA] border rounded-xl py-2.5 px-4 text-sm text-[#172334] placeholder-[#98A2B3] outline-none transition-all resize-y ${
                errors.message
                  ? "border-red-500 focus:bg-white"
                  : "border-[#E6E9EF] focus:bg-white focus:border-[#142235]"
              }`}
            />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-[#142235] hover:bg-[#1D3048] text-white font-semibold py-3 px-5 rounded-xl text-sm transition-all shadow-xs cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Validating...</span>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#D6A84F]" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
