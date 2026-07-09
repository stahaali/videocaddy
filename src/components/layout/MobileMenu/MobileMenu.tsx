"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/shared/Button/Button";
import { mainNavigation, contactInfo } from "@/data/navigation";
import { cn } from "@/lib/cn";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[1001] bg-black/70 transition-all duration-300",
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        className={cn(
          "fixed top-0 right-0 z-[1002] h-screen w-[min(320px,85vw)] overflow-y-auto bg-bg-section px-8 pt-[calc(88px+1rem)] pb-8 transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <ul className="mb-8 flex flex-col gap-1">
          {mainNavigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "block border-b border-white/10 py-3.5 font-heading text-base font-semibold uppercase tracking-wider text-text-muted transition-all duration-200 hover:pl-2 hover:text-primary",
                  pathname === item.href && "pl-2 text-primary"
                )}
                onClick={onClose}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 border-t border-white/15 pt-4">
          <div className="text-sm text-text-muted">
            <strong className="mb-1 block text-white">Call Us</strong>
            <a href={`tel:${contactInfo.phone}`} className="hover:text-primary">
              {contactInfo.phone}
            </a>
          </div>
          <div className="text-sm text-text-muted">
            <strong className="mb-1 block text-white">Email</strong>
            <a href={`mailto:${contactInfo.email}`} className="hover:text-primary">
              {contactInfo.email}
            </a>
          </div>
          <Button href="/contact" variant="primary" fullWidth onClick={onClose}>
            Get Started
          </Button>
        </div>
      </nav>
    </>
  );
}
