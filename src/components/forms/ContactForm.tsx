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
    <div className="bg-[#121212] border border-[#262626] rounded-3xl p-6 sm:p-9 shadow-xl">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Send Us a Message</h3>
      <p className="text-sm text-neutral-400 mb-6">
        Have questions regarding our roadside platform, partnerships, or press inquiries? Let us know.
      </p>

      {submittedNotice ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1a180e] border border-[#FFD400]/40 rounded-2xl p-5 space-y-3"
        >
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#FFD400] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-white text-sm mb-1">
                Notice: Pre-Launch Staging Endpoint
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed mb-3">
                Thank you, {formData.name}. Your inquiry has passed form validation. Note that our web submission gateway is currently staging prior to public commercial rollout.
              </p>
              <p className="text-xs text-neutral-400">
                For immediate responses, please contact us directly at{" "}
                <a href={`mailto:${contactConfig.contactEmail}`} className="text-[#FFD400] underline">
                  {contactConfig.contactEmail}
                </a>{" "}
                or phone{" "}
                <a href={contactConfig.telLink} className="text-[#FFD400] underline font-bold">
                  {contactConfig.phone}
                </a>.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSubmittedNotice(false)}
            className="text-xs font-semibold text-neutral-300 hover:text-white px-3 py-1.5 bg-[#252525] rounded-lg mt-2"
          >
            Reset Form
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
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
              className={`w-full bg-[#181818] border rounded-xl py-2.5 px-4 text-sm text-white placeholder-neutral-500 outline-none transition-all ${
                errors.name
                  ? "border-red-500"
                  : "border-[#2b2b2b] focus:border-[#FFD400]"
              }`}
            />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
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
              className={`w-full bg-[#181818] border rounded-xl py-2.5 px-4 text-sm text-white placeholder-neutral-500 outline-none transition-all ${
                errors.email
                  ? "border-red-500"
                  : "border-[#2b2b2b] focus:border-[#FFD400]"
              }`}
            />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="contact-subject" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
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
              placeholder="e.g. Workshop Fleet Partnership Inquiry"
              className={`w-full bg-[#181818] border rounded-xl py-2.5 px-4 text-sm text-white placeholder-neutral-500 outline-none transition-all ${
                errors.subject
                  ? "border-red-500"
                  : "border-[#2b2b2b] focus:border-[#FFD400]"
              }`}
            />
            {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
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
              className={`w-full bg-[#181818] border rounded-xl py-2.5 px-4 text-sm text-white placeholder-neutral-500 outline-none transition-all resize-y ${
                errors.message
                  ? "border-red-500"
                  : "border-[#2b2b2b] focus:border-[#FFD400]"
              }`}
            />
            {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-[#FFD400] hover:bg-[#E5BE00] text-[#080808] font-bold py-3 px-5 rounded-xl text-sm transition-all shadow-[0_2px_15px_-3px_rgba(255,212,0,0.35)] cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Validating...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
