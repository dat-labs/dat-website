import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const DiversitySource = () => {
  return (
    <div className="mt-24">
      <div className="h-[325px] p-10 rounded-2xl bg-[url('/assets/diversity-of-sources.svg')] bg-cover">
        <p className="text-3xl font-semibold">
          Diversity of <br /> sources
        </p>
        <Link href={"/integrations"}>
          <Button
            variant="outline"
            className="mt-6"
            aria-label="See all the connectors available in dat."
          >
            View All Connectors
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DiversitySource;
