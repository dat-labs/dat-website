import React from "react";
import ActorCard from "../actor-card";
import { LineDashed, LineDashedMobile } from "@/assets";
import { Skeleton } from "@/components/ui/skeleton";

export default function SearchGenerators({
  search,
  generatorsData,
}: {
  search: string;
  generatorsData: any;
}) {
  const filterSourceData = (data: any) => {
    const filteredData = data.filter((actor: any) =>
      actor.title.toLowerCase().includes(search.toLowerCase())
    );
    return filteredData;
  };

  const filteredData = filterSourceData(generatorsData);

  return (
    <div>
      <div className="flex text-2xl font-semibold mt-6 px-2">
        <p className="pr-5">Generators</p>
        <LineDashed className="lg:inline hidden" />
        <LineDashedMobile className="lg:hidden" />
      </div>
      {generatorsData.length > 0 ? (
        <div className="flex flex-wrap mt-2">
          {filteredData.length > 0 ? (
            filteredData.map((generators, index) => (
              <div key={index} className="w-full lg:w-3/12 p-2">
                <ActorCard
                  name={generators.title}
                  type={"DATABASE"}
                  icon={`/assets/integrations/${generators.slug}.svg`}
                  isVerified={true}
                  path={generators.path}
                />
              </div>
            ))
          ) : (
            <div className="mx-auto">
              <p>No Actor Found</p>
            </div>
          )}
        </div>
      ) : (
        <Skeleton className="h-[125px] w-full rounded-xl my-2" />
      )}
    </div>
  );
}
