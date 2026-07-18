import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return <PagePlaceholder title="About Us" description="Corporate profile, philosophy, quality policy, and infrastructure — coming in Phase 2." />;
}
