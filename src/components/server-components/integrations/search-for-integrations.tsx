"use client";

import SearchDestinations from "@/components/client-components/integrations/search-destinations";
import SearchGenerators from "@/components/client-components/integrations/search-generators";
import SearchSources from "@/components/client-components/integrations/search-sources";
import { Input } from "@/components/ui/input";
import React from "react";

export default function SearchForIntegrations() {
  const [searchValue, setSearchValue] = React.useState("");

  const [selected, setSelected] = React.useState("All");

  const TabOptions = [
    {
      label: "All",
    },
    {
      label: "Sources",
    },
    {
      label: "Generators",
    },
    {
      label: "Destinations",
    },
  ];

  return (
    <div className="mt-12">
      <div className="flex flex-row items-center">
        <Input
          className="h-11"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          placeholder="Search for any Source, Generator or Destination"
        />
      </div>

      <div className="flex flex-row gap-2 bg-gray-100 border h-[40px] lg:w-[600px] w-full p-0.5 rounded-lg mt-10">
        {TabOptions.map((tab, ind) => (
          <div
            key={ind}
            onClick={() => setSelected(tab.label)}
            className={`h-full w-1/4 cursor-pointer ${
              selected === tab.label ? "bg-white text-black" : "text-gray-400"
            } rounded-md lg:text-sm text-xs font-semibold flex justify-center items-center`}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div
        id="Sources"
        className={`${
          selected === "All" || selected === "Sources" ? "block" : "hidden"
        } `}
      >
        <SearchSources search={searchValue} />
      </div>
      <div
        id="Generators"
        className={`${
          selected === "All" || selected === "Generators" ? "block" : "hidden"
        } `}
      >
        <SearchGenerators search={searchValue} />
      </div>
      <div
        id="Destinations"
        className={`${
          selected === "All" || selected === "Destinations" ? "block" : "hidden"
        } `}
      >
        <SearchDestinations search={searchValue} />
      </div>
    </div>
  );
}
