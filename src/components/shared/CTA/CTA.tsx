import Image from "next/image";
import Link from "next/link";
import { contactInfo } from "@/data/navigation";
import { assets } from "@/data/assets";
import { cn } from "@/lib/cn";

interface CTAProps {
  variant?: "default" | "hero";
  className?: string;
}

const heroItems = [
  {
    href: "/contact",
    icon: assets.icons.form,
    label: "CONTACT",
  },
  {
    href: `tel:${contactInfo.phone}`,
    icon: assets.icons.contact,
    label: contactInfo.phone,
  },
  {
    href: "/contact",
    icon: assets.icons.chat,
    label: contactInfo.chatLabel,
  },
  {
    href: `mailto:${contactInfo.email}`,
    icon: assets.icons.email,
    label: "EMAIL",
  },
] as const;

export default function CTA({ variant = "default", className = "" }: CTAProps) {
  if (variant === "hero") {
    return (
      <div className={cn("contact-details-banner-cta", className)}>
        {heroItems.map((item) => (
          <div key={item.label} className="contact-icn-box-banner-cta">
            <Link href={item.href}>
              <Image src={item.icon} alt="" width={25} height={25} />
              <p>{item.label}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-wrap gap-6", className)}>
      <Link href={`tel:${contactInfo.phone}`} className="flex items-center gap-2.5 hover:opacity-85">
        <Image src={assets.icons.contact} alt="" width={32} height={32} />
        <div className="flex flex-col">
          <span className="text-[11px] font-bold uppercase tracking-widest text-text-dim">Contact</span>
          <span className="text-sm font-semibold">{contactInfo.phone}</span>
        </div>
      </Link>
      <Link href="/contact" className="flex items-center gap-2.5 hover:opacity-85">
        <Image src={assets.icons.chat} alt="" width={32} height={32} />
        <span className="text-[11px] font-bold uppercase tracking-widest text-text-dim">
          {contactInfo.chatLabel}
        </span>
      </Link>
      <Link href={`mailto:${contactInfo.email}`} className="flex items-center gap-2.5 hover:opacity-85">
        <Image src={assets.icons.email} alt="" width={32} height={32} />
        <span className="text-[11px] font-bold uppercase tracking-widest text-text-dim">Email</span>
      </Link>
    </div>
  );
}
