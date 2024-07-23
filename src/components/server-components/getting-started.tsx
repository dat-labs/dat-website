import { ConnectionImage } from "@/assets";
import React from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

const GettingStarted = () => {
  return (
    <div className="lg:p-10 p-5">
      <div className="flex justify-center mt-2">
        <div className="flex items-center">
          <div className="">
            <div className="rounded-xl bg-muted flex gap-2 p-2">
              <div className="p-1 bg-background rounded-xl text-blue-600 pl-3 pr-3">
                Open Source
              </div>
              <div className="flex items-center">ETL for Vector Stores</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="lg:text-4xl text-2xl font-semibold">
          Unlock the Power of Your{" "}
        </p>
        <p className="lg:text-7xl text-5xl font-bold">Unstructured Data</p>
        <div className="flex justify-center">
          <p className="mt-6 w-10/12 lg:text-lg text-md">
            Make your Gen AI initiatives production ready by keeping your Vector
            databases current with changes in your source data at all times.
            Provide up-to-date context to your RAG applications.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <ConnectionImage
          className="h-full w-full"
          role="img"
          aria-label="Image of dat ui showing the connections list."
        />
      </div>
    </div>
  );
};

export default GettingStarted;
