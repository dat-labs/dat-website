import ReadyToBuild from "@/components/server-components/integrations/ready-to-build";
import SearchForIntegrations from "@/components/server-components/integrations/search-for-integrations";
import SearchIntegrations from "@/components/server-components/integrations/search-integrations";
import React from "react";

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
