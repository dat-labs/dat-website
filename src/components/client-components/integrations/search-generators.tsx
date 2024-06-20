import React from "react";
import { sourcesData } from "@/data/sourcesData";
import ActorCard from "../actor-card";

export default function SearchGenerators({ search }: { search: string }) {
  const filterSourceData = (data: any) => {
    const filteredData = data.filter((actor: any) =>
      actor.name.toLowerCase().includes(search.toLowerCase())
    );
    return filteredData;
  };
  return (
    <div>
      <p className="text-2xl font-semibold mt-6">Generators</p>
      <div className="flex flex-wrap mt-2">
        {filterSourceData(sourcesData).map((source, index) => (
          <div key={index} className="w-full lg:w-3/12 p-2">
            <ActorCard
              name={source.name}
              type={source.type}
              icon={source.icon}
              isVerified={source.isVerified}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
