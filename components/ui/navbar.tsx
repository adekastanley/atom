"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950 text-zinc-50">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <span className="text-cyan-400 text-3xl leading-none">*</span> ATOM TechServe
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild className="bg-white text-zinc-950 hover:bg-zinc-200 rounded-full px-6">
            <Link href="/contact">Free Consultation</Link>
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-zinc-300 hover:text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950">
          <nav className="container mx-auto flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-zinc-300 transition-colors hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-4 bg-white text-zinc-950 hover:bg-zinc-200 rounded-full">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Free Consultation
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
