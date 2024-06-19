import React from "react";
import { Button } from "../ui/button";

const DiversitySource = () => {
  return (
    <div className="mt-24">
      <div className="h-[325px] p-10 rounded-2xl bg-[url('/assets/diversity-of-sources.svg')] bg-cover">
        <p className="text-3xl font-semibold">
          Diversity of <br /> sources
        </p>
        <Button variant="outline" className="mt-6">
          View All Connectors
        </Button>
      </div>
    </div>
  );
};

export default DiversitySource;
