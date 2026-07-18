import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = { title: "Clients" };

export default function ClientsPage() {
  return <PagePlaceholder title="Clients" description="Client logos grouped by industry — coming in Phase 4." />;
}
