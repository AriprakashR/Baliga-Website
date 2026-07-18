import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return <PagePlaceholder title="Products" description="Searchable product catalog — coming in Phase 3." />;
}
