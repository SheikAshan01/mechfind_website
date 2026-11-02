"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Wrench, CheckCircle2, Sparkles } from "lucide-react";
import { contactConfig } from "@/config/contact";

export function MechanicPartnerForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    workshopName: "",
    vehicleType: "Both Bikes and Cars",
    experienceYears: "3-5 years",
    cityOrArea: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required.";
    if (!formData.phone.trim()) errs.phone = "Phone number is required.";
    else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim()))
      errs.phone = "Valid contact number required.";
    if (!formData.cityOrArea.trim()) errs.cityOrArea = "City or operating area required.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-[#121212] border border-[#262626] rounded-3xl p-6 sm:p-9 shadow-xl relative overflow-hidden">
      <div className="flex items-center gap-2 text-xs uppercase font-extrabold text-[#FFD400] mb-2 tracking-wider">
        <Sparkles className="w-4 h-4" />
        Partner Onboarding
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
        Register as a Mechanic Partner
      </h3>
      <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
        Join our growing network of verified automotive specialists. Receive real-time roadside breakdown requests directly on your phone.
      </p>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#181814] border border-[#FFD400]/40 rounded-2xl p-6 space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-[#FFD400]/15 text-[#FFD400]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Partner Application Logged</h4>
              <p className="text-xs text-neutral-400">
                Candidate: {formData.name} ({formData.phone}) • {formData.vehicleType}
              </p>
            </div>
          </div>

          <div className="bg-[#101010] p-4 rounded-xl border border-[#222222] text-xs text-neutral-300 leading-relaxed space-y-2">
            <p>
              <strong>Notice:</strong> Your partner interest registration has been validated. Our partner verification desk will reach out as network onboarding commences in <em>{formData.cityOrArea}</em>.
            </p>
            <p className="text-neutral-400">
              For any urgent partner inquiries, call our operations desk at{" "}
              <a href={contactConfig.telLink} className="text-[#FFD400] underline font-bold">
                {contactConfig.phone}
              </a>.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs font-semibold text-neutral-300 hover:text-white px-4 py-2 bg-[#252525] rounded-xl transition-colors"
          >
            Submit Another Application
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label htmlFor="mech-name" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-[#FFD400]">*</span>
            </label>
            <input
              id="mech-name"
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: "" });
              }}
              placeholder="e.g. Marcus Miller"
              className={`w-full bg-[#181818] border rounded-xl py-2.5 px-4 text-sm text-white placeholder-neutral-500 outline-none transition-all ${
                errors.name ? "border-red-500" : "border-[#2b2b2b] focus:border-[#FFD400]"
              }`}
            />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="mech-phone" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                Mobile Number <span className="text-[#FFD400]">*</span>
              </label>
              <input
                id="mech-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: "" });
                }}
                placeholder="e.g. 1234567890"
                className={`w-full bg-[#181818] border rounded-xl py-2.5 px-4 text-sm text-white placeholder-neutral-500 outline-none transition-all ${
                  errors.phone ? "border-red-500" : "border-[#2b2b2b] focus:border-[#FFD400]"
                }`}
              />
              {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="mech-workshop" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                Garage / Workshop Name (Optional)
              </label>
              <input
                id="mech-workshop"
                type="text"
                value={formData.workshopName}
                onChange={(e) => setFormData({ ...formData, workshopName: e.target.value })}
                placeholder="e.g. Miller Auto Works or Mobile Unit"
                className="w-full bg-[#181818] border border-[#2b2b2b] focus:border-[#FFD400] rounded-xl py-2.5 px-4 text-sm text-white placeholder-neutral-500 outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="mech-vehicle" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                Service Specialty
              </label>
              <select
                id="mech-vehicle"
                value={formData.vehicleType}
                onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                className="w-full bg-[#181818] border border-[#2b2b2b] focus:border-[#FFD400] rounded-xl py-2.5 px-4 text-sm text-white outline-none cursor-pointer"
              >
                <option value="Both Bikes and Cars">Both Bikes & Cars</option>
                <option value="Cars & SUVs Only">Cars & SUVs Only</option>
                <option value="Two-Wheelers / Bikes Only">Two-Wheelers / Bikes Only</option>
                <option value="Heavy Vehicles / Commercial">Commercial / Towing</option>
              </select>
            </div>

            <div>
              <label htmlFor="mech-exp" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                Experience
              </label>
              <select
                id="mech-exp"
                value={formData.experienceYears}
                onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                className="w-full bg-[#181818] border border-[#2b2b2b] focus:border-[#FFD400] rounded-xl py-2.5 px-4 text-sm text-white outline-none cursor-pointer"
              >
                <option value="1-2 years">1-2 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="6-10 years">6-10 years</option>
                <option value="10+ years">10+ years</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="mech-city" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
              City / Operating Base Location <span className="text-[#FFD400]">*</span>
            </label>
            <input
              id="mech-city"
              type="text"
              value={formData.cityOrArea}
              onChange={(e) => {
                setFormData({ ...formData, cityOrArea: e.target.value });
                if (errors.cityOrArea) setErrors({ ...errors, cityOrArea: "" });
              }}
              placeholder="e.g. Central Metro, Highway Corridor"
              className={`w-full bg-[#181818] border rounded-xl py-2.5 px-4 text-sm text-white placeholder-neutral-500 outline-none transition-all ${
                errors.cityOrArea ? "border-red-500" : "border-[#2b2b2b] focus:border-[#FFD400]"
              }`}
            />
            {errors.cityOrArea && <p className="text-xs text-red-400 mt-1">{errors.cityOrArea}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-[#FFD400] hover:bg-[#E5BE00] text-[#080808] font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-[0_2px_15px_-3px_rgba(255,212,0,0.35)] cursor-pointer disabled:opacity-50 mt-2"
          >
            {isSubmitting ? (
              <span>Validating Information...</span>
            ) : (
              <>
                <Wrench className="w-4 h-4" />
                <span>Submit Mechanic Partner Application</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
