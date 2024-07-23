import ReadyToBuild from "@/components/server-components/integrations/ready-to-build";
import SearchForIntegrations from "@/components/server-components/integrations/search-for-integrations";
import SearchIntegrations from "@/components/server-components/integrations/search-integrations";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DAT - Integrations",
  description: "Explore all the integrations dat supports out of the box.",
  openGraph: {
    title: "DAT - Integrations",
    description: "Explore all the integrations dat supports out of the box.",
    type: "website",
    siteName: "Dat Website",
  },
};

export default function Integrations() {
  return (
    <div className="w-11/12 lg:w-8/12">
      <div className="mt-12">
        <SearchIntegrations />
        <SearchForIntegrations />
        <ReadyToBuild />
      </div>
    </div>
  );
}
