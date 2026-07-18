import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = { title: "Certifications" };

export default function CertificationsPage() {
  return <PagePlaceholder title="Certifications" description="ATEX, IECEx, and ISO 9001:2015 certificates — coming in Phase 2." />;
}
