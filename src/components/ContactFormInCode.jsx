import React, { useState } from "react";
import { Send, CheckCircle2, MapPin, Mail, Phone, MessageSquare, Terminal, Sparkles } from "lucide-react";
import { developerInfo } from "../data/portfolioData";
import { LinkedInIcon, GithubIcon } from "./icons/TechIcons";

export function ContactFormInCode() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Project Inquiry",
    message: "",
  });

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const fullMsg = `Hi Shubham,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    const url = `https://wa.me/917889843353?text=${encodeURIComponent(fullMsg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto font-sans text-[var(--text-main)]">
      {/* Code Header Decoration */}
      <div className="mb-6 pb-4 border-b border-[var(--border-color)]">
        <div className="flex items-center space-x-2 text-xs font-mono text-[var(--text-comment)]">
          <span>// ContactController.kt</span>
          <span>•</span>
          <span className="text-[#3DDC84]">Direct WhatsApp: +91 7889843353</span>
        </div>
        <h2 className="text-2xl font-bold text-[var(--text-main)] mt-2">
          Get In Touch
        </h2>
        <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
          Have an Android app, IoT hardware project, or AI/ML model to build? Message Shubham directly on WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Contact Info Sidebar */}
        <div className="md:col-span-5 space-y-4 font-mono text-xs">
          <div className="p-4 rounded-xl bg-emerald-600/15 border border-emerald-500/30 text-emerald-400 space-y-2">
            <span className="font-bold text-xs flex items-center space-x-1.5">
              <MessageSquare size={16} />
              <span>Direct WhatsApp</span>
            </span>
            <p className="text-sm font-bold text-white">+91 7889843353</p>
            <a
              href="https://wa.me/917889843353"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-1 rounded-md bg-emerald-600 text-white font-bold text-[10px] hover:bg-emerald-500 transition-colors cursor-pointer"
            >
              Open WhatsApp Chat 💬
            </a>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] glass-panel space-y-3">
            <div className="flex items-center space-x-2 text-[var(--text-muted)]">
              <Phone size={14} className="text-[#3574F0]" />
              <a href="tel:+917889843353" className="hover:underline text-[var(--text-main)]">
                +91 7889843353
              </a>
            </div>

            <div className="flex items-center space-x-2 text-[var(--text-muted)]">
              <MapPin size={14} className="text-rose-400" />
              <span>Surat, Gujarat, India</span>
            </div>

            <div className="pt-2 border-t border-[var(--border-color)] flex space-x-3">
              <a
                href={developerInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#56A8F5] hover:underline flex items-center space-x-1 text-[11px]"
              >
                <LinkedInIcon size={14} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Form */}
        <div className="md:col-span-7">
          <div className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] glass-panel shadow-xl">
            <form onSubmit={handleWhatsAppSend} className="space-y-3 text-xs">
              <div>
                <label className="block text-[11px] font-mono text-[var(--text-muted)] mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Rahul Sharma / Recruiter"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-3.5 py-2.5 text-[var(--text-main)] focus:outline-none focus:border-[#3574F0]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[var(--text-muted)] mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="email@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-3.5 py-2.5 text-[var(--text-main)] focus:outline-none focus:border-[#3574F0]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[var(--text-muted)] mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi Shubham, I would like to discuss an opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-3.5 py-2.5 text-[var(--text-main)] focus:outline-none focus:border-[#3574F0]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold font-mono text-xs shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2"
              >
                <MessageSquare size={15} />
                <span>Send via WhatsApp (+91 7889843353) 🚀</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
