import type { Metadata } from "next";
import PrivacyPolicyContent from "@/components/sections/PrivacyPolicyContent/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Video Caddy's privacy policy to learn how we collect, use, protect, and manage your personal information.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
