import React from "react";
import { Button } from "../ui/button";

export default function ReadyToBuild() {
  return (
    <div className="mt-24 mb-2">
      <div className="h-[410px] bg-[url('/assets/ready-to-build.svg')] bg-cover w-full p-10">
        <p className="text-3xl text-secondary font-semibold mt-10">
          Ready to build your
        </p>
        <p className="text-3xl text-secondary font-semibold">
          Retrieval based LLM apps on top of <br /> synced data ?
        </p>
        <div className="flex mb-10 mt-6 gap-4">
          <Button variant="outline">Try Dat</Button>
          <Button variant="outline">Github</Button>
        </div>
      </div>
    </div>
  );
}
