import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return <PagePlaceholder title="Events & Exhibitions" description="Trade show history and upcoming events — coming in Phase 4." />;
}
