"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import React, { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans selection:bg-cyan-200 selection:text-cyan-900">
      
      {/* Header Section (Dark with Cyan Glow) */}
      <section className="relative bg-zinc-950 text-white pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-zinc-300 mb-8 backdrop-blur-md">
              <span className="text-cyan-400">✦</span> Let's Talk
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              Get in Touch
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              Whether you need a consultation, have a project in mind, or want to explore our solutions, our team is ready to assist you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content (Clean White) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 md:gap-24">
            
            {/* Contact Information */}
            <FadeIn direction="right">
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">Contact Info</h2>
                  <p className="text-lg text-zinc-500 leading-relaxed font-medium">
                    Reach out to us directly through any of our channels below. We strive to respond to all inquiries within 24 hours.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-zinc-900" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-zinc-900 mb-1">Phone Number</h3>
                      <a href="tel:+2347063267111" className="text-zinc-600 hover:text-cyan-600 transition-colors font-medium">
                        +234 706 326 7111
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-zinc-900" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-zinc-900 mb-1">Email Address</h3>
                      <a href="mailto:atomtechserve@gmail.com" className="text-zinc-600 hover:text-cyan-600 transition-colors font-medium">
                        atomtechserve@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-zinc-900" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-zinc-900 mb-3">Office Locations</h3>
                      <div className="space-y-4 text-zinc-600 font-medium">
                        <p className="flex flex-col gap-1">
                          <span className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Abuja HQ</span>
                          No 151, Adetokunbo Ademola cresent Wuse 2
                        </p>
                        <p className="flex flex-col gap-1">
                          <span className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Kwara Branch</span>
                          No 24 Sokoto road, Sabo-Oke, Ilorin
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="left">
              <div className="bg-zinc-50 p-8 md:p-12 rounded-[2.5rem] border border-zinc-100 h-full">
                <h2 className="text-2xl font-bold text-zinc-900 mb-8">Send us a Message</h2>
                
                {submitted ? (
                  <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-6">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                      <Send className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-zinc-900">Message Sent!</h3>
                    <p className="text-lg text-zinc-500 font-medium max-w-sm mx-auto">
                      Thank you for reaching out to ATOM TechServe. A member of our team will get back to you shortly.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-8 rounded-full h-12 px-8 border-zinc-200 text-zinc-900 hover:bg-zinc-100">
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-zinc-900">Full Name</label>
                        <input
                          id="name"
                          type="text"
                          required
                          className="w-full h-14 rounded-xl border border-zinc-200 bg-white px-4 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-zinc-900">Email Address</label>
                        <input
                          id="email"
                          type="email"
                          required
                          className="w-full h-14 rounded-xl border border-zinc-200 bg-white px-4 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-bold text-zinc-900">Service of Interest</label>
                      <select
                        id="service"
                        className="w-full h-14 rounded-xl border border-zinc-200 bg-white px-4 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 text-zinc-900"
                      >
                        <option value="">Select a service...</option>
                        <option value="data">Data Collection & Aggregation</option>
                        <option value="analytics">Data Modeling & Visualization</option>
                        <option value="mobile">Mobile Application Development</option>
                        <option value="digital">Digital Solutions</option>
                        <option value="melr">MELR Frameworks</option>
                        <option value="licensing">Software Licensing</option>
                        <option value="hardware">Computer Hardware Supply</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-zinc-900">Message</label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        className="w-full rounded-xl border border-zinc-200 bg-white p-4 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                    </div>

                    <Button type="submit" className="w-full h-14 text-base font-bold bg-zinc-900 text-white hover:bg-zinc-800 rounded-xl mt-4" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
