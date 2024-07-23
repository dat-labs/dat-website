import React from "react";
import { sourcesData } from "@/data/sourcesData";
import ActorCard from "../actor-card";
import { LineDashed, LineDashedMobile } from "@/assets";

export default function SearchGenerators({ search }: { search: string }) {
  const filterSourceData = (data: any) => {
    const filteredData = data.filter((actor: any) =>
      actor.name.toLowerCase().includes(search.toLowerCase())
    );
    return filteredData;
  };

  const filteredData = filterSourceData(sourcesData);

  return (
    <div>
      <div className="flex text-2xl font-semibold mt-6 px-2">
        <p className="pr-5">Generators</p>
        <LineDashed className="lg:inline hidden" />
        <LineDashedMobile className="lg:hidden" />
      </div>
      <div className="flex flex-wrap mt-2">
        {filteredData.length > 0 ? (
          filteredData.map((source, index) => (
            <div key={index} className="w-full lg:w-3/12 p-2">
              <ActorCard
                name={source.name}
                type={source.type}
                icon={source.icon}
                isVerified={source.isVerified}
              />
            </div>
          ))
        ) : (
          <div className="mx-auto">
            <p>No Actor Found</p>
          </div>
        )}
      </div>
    </div>
  );
}
