import React from "react";
import ActorCard from "../actor-card";
import { LineDashed, LineDashedMobile } from "@/assets";
import { Skeleton } from "@/components/ui/skeleton";

export default function SearchSources({
  search,
  sourcesData,
}: {
  search: string;
  sourcesData: any;
}) {
  const filterSourceData = (data: any) => {
    const filteredData = data.filter((actor: any) =>
      actor.title.toLowerCase().includes(search.toLowerCase())
    );
    return filteredData;
  };

  const filteredData = filterSourceData(sourcesData);

  return (
    <div>
      <div className="flex text-2xl font-semibold mt-6 px-2">
        <p className="pr-5">Sources</p>
        <LineDashed className="lg:inline hidden" />
        <LineDashedMobile className="lg:hidden" />
      </div>
      {sourcesData.length > 0 ? (
        <div className="flex flex-wrap mt-2">
          {filteredData.length > 0 ? (
            filteredData.map((source, index) => (
              <div key={index} className="w-full lg:w-3/12 p-2">
                <ActorCard
                  name={source.title}
                  type={""}
                  icon={`/assets/integrations/${source.slug}.svg`}
                  isVerified={true}
                  path={source.path}
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
