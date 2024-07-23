"use client";

import SearchDestinations from "@/components/client-components/integrations/search-destinations";
import SearchGenerators from "@/components/client-components/integrations/search-generators";
import SearchSources from "@/components/client-components/integrations/search-sources";
import { Input } from "@/components/ui/input";
import React from "react";

export default function SearchForIntegrations() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div className="mt-12">
      <Input
        className="h-11"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        placeholder="Search for any Source, Generator or Destination"
        aria-label="Search for any Source, Generator or Destination"
      />
      <SearchSources search={searchValue} />
      <SearchGenerators search={searchValue} />
      <SearchDestinations search={searchValue} />
    </div>
  );
}
