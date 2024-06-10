import { ConnectionImage } from "@/assets";
import React from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

const GettingStarted = () => {
  return (
    <main className="flex flex-col items-center py-8">
      <section className="flex flex-col items-center text-center max-w-7xl mx-auto">
        <div className="mb-10 w-[301px] h-[45px] px-2.5 py-2 bg-zinc-100 rounded-[15px] justify-center items-center gap-2.5 inline-flex">
          <div className="px-2.5 py-1.5 bg-white rounded-[10px] shadow justify-center items-center gap-2.5 flex">
            <div className="text-blue-600 text-sm font-semibold font-['Plus Jakarta Sans'] leading-[16.80px]">
              Open Source{" "}
            </div>
          </div>
          <div className="text-neutral-400 text-base font-semibold font-['Plus Jakarta Sans'] leading-tight">
            ETL for Vector Stores
          </div>
        </div>
        <div className="flex-col justify-center items-center gap-1 inline-flex">
          <div className="text-gray-900 text-[45px] font-bold font-['DM Sans'] leading-[47.47px]">
            Unlock the Power of Your
          </div>
          <div className="text-gray-900 text-[90px] font-bold leading-[61px]">
            Unstructured Data
          </div>
        </div>
        {/* <p className="text-5xl font-bold">Unlock the Power of Your</p>
          <p className="text-8xl font-bold leading-100 ">Unstructured Data</p> */}
        <div className="mt-10 w-[970px] text-[#15172B] text-center text-xl font-normal">
          <p className="justify-center">
            Make your Gen AI initiatives production ready by keeping your Vector
            databases current with changes in your source data at all times.
            Provide up-to-date context to your RAG applications.
          </p>
        </div>

        <div className="mb-10 w-full mt-10 flex justify-center">
          <Button className="mr-2">
            <ArrowTopRightIcon className="mr-2" /> Deploy dot Open Source
          </Button>
          <Button variant="outline">Star us</Button>
        </div>
        {/* </div> */}
        <div>
          <ConnectionImage className="w-[1131px] h-[590px] shrink-0 border-[var(--Dimensions-0,] border-[solid_var(--color-border,#E4E4E7)] [background:#FFF] shadow-[0px_-4px_6px_-4px_rgba(16,24,40,0.10),0px_-10px_15px_-3px_rgba(0,0,0,0.10)] rounded-[12px_12px_0px_0px] " />
        </div>
      </section>
    </main>
  );
};

export default GettingStarted;
