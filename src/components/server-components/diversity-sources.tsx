"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import RequestConnector from "../client-components/request-connector";

const DiversitySource = () => {
  return (
    <div className="lg:mt-24 mt-12">
      <div className="hidden lg:flex justify-between h-[300px] w-full p-10 rounded-2xl bg-[url('/assets/diversity-of-sources.svg')] bg-cover ">
        <div className="flex flex-col">
          <p className="text-3xl font-semibold">
            Diversity of <br /> sources
          </p>
          <Link href={"/integrations"}>
            <div className="mt-6 p-0.5 w-fit rounded-sm max-w-sm bg-gradient-to-r from-[#BDDFFF] via-[#CECCFF] to-[#FFCFD9]">
              <Button variant="outline" className="rounded-sm">
                <ArrowTopRightIcon className="mr-2 size-5" />
                <p className="font-semibold">View All Connectors</p>
              </Button>
            </div>
          </Link>
        </div>

        <div className="border-dashed border-2 border-zinc-500 rounded p-2 w-fit h-fit">
          <RequestConnector />
        </div>
      </div>

      <div className="lg:hidden h-[700px] w-full p-10 rounded-2xl bg-[url('/assets/diversityOfSourcesMobile.svg')] bg-cover">
        <p className="text-5xl font-semibold">
          Diversity of <br /> sources
        </p>
        <div className="flex flex-col w-full">
          <Link href={"/integrations"}>
            <div className="my-6 p-0.5 w-fit rounded-lg max-w-sm bg-gradient-to-r from-[#BDDFFF] via-[#CECCFF] to-[#FFCFD9]">
              <Button variant="outline">
                <ArrowTopRightIcon className="mr-2 size-5" />
                <p className="font-semibold text-base">View All Connectors</p>
              </Button>
            </div>
          </Link>

          <div className="border-dashed border-2 border-zinc-500 rounded p-2 w-3/4">
            <RequestConnector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiversitySource;
