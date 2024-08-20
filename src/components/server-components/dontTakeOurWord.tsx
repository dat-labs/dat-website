import React from "react";
import { Card } from "../ui/card";
import { Webflow } from "@/assets";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

function DontTakeOurWord() {
  return (
    <div className="lg:mt-24 mt-12 flex flex-col lg:flex-row w-full gap-5">
      <div className="flex flex-col space-y-4 lg:w-1/2 w-full">
        <div className="flex flex-col ml-2 gap-4 mb-6">
          <p className="text-4xl font-bold mr-5">
            Don&apos;t take our word for it
          </p>
          <p className="text-zinc-500 mr-10 text-xl">
            Why <span className="font-[Comfortaa] text-black">dat </span> ? Hear
            from hundreds of data teams & companies driving their business 10x
          </p>

          <Link href={"/"}>
            <div className="p-0.5 w-fit rounded-lg max-w-sm bg-gradient-to-r from-[#BDDFFF] via-[#CECCFF] to-[#FFCFD9]">
              <Button variant="outline" className="text-sm">
                <ArrowTopRightIcon className="mr-2 size-5" />
                <p className="font-semibold">View Success Stories</p>
              </Button>
            </div>
          </Link>
        </div>

        <Card className="flex flex-col p-6 space-y-4">
          <Webflow className="h-7 w-fit" />
          <p className="text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua quis
            nostrud exercitation ullamco
          </p>
          <div className="flex space-x-4">
            <span className="rounded-full bg-blue-200 size-12"></span>
            <div className="flex flex-col">
              <p className="text-[#170F49] font-bold">Sophie Moore</p>
              <p className="text-zinc-500">Product Developer at Webflow</p>
            </div>
          </div>
        </Card>
      </div>
      <div className="flex flex-col lg:w-1/2 w-full space-y-5">
        <Card className="flex flex-col p-6 space-y-4">
          <Webflow className="h-7 w-fit" />
          <p className="text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua quis
            nostrud exercitation ullamco
          </p>
          <div className="flex space-x-4">
            <span className="rounded-full bg-blue-200 size-12"></span>
            <div className="flex flex-col">
              <p className="text-[#170F49] font-bold">Sophie Moore</p>
              <p className="text-zinc-500">Product Developer at Webflow</p>
            </div>
          </div>
        </Card>
        <Card className="flex flex-col p-6 space-y-4">
          <Webflow className="h-7 w-fit" />
          <p className="text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua quis
            nostrud exercitation ullamco
          </p>
          <div className="flex space-x-4">
            <span className="rounded-full bg-blue-200 size-12"></span>
            <div className="flex flex-col">
              <p className="text-[#170F49] font-bold">Sophie Moore</p>
              <p className="text-zinc-500">Product Developer at Webflow</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default DontTakeOurWord;
