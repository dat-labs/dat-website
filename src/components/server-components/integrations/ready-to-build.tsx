import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ReadyToBuild() {
  return (
    <div className="lg:h-[330px] h-[520px] lg:bg-center bg-bottom lg:bg-[url('/assets/ready-to-build.svg')] bg-[url('/assets/ready-to-build-mobile.svg')] bg-cover p-6 lg:p-10 rounded-2xl mt-12">
      <p className="text-3xl leading-[3rem] lg:text-4xl text-muted-foreground font-semibold lg:mt-10">
        Ready to build your
      </p>
      <p className="text-background text-3xl leading-[3rem] lg:text-4xl font-semibold w-full lg:w-6/12">
        own Data Movement Tool ?
      </p>
      <div className="flex w-full mx-auto lg:justify-start gap-3 justify-between lg:mt-8 mt-4">
        <Link
          href={"https://github.com/dat-labs/dat-main"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="text-[#020617] text-md"
            size={"lg"}
            aria-label="Go to the dat installation repo"
          >
            <span className="p-0.5 bg-black rounded-full mr-2">
              <ArrowTopRightIcon className="h-5 w-5" color="white" />
            </span>
            Try dat
          </Button>
        </Link>

        <Link
          href={"https://github.com/dat-labs/dat-main"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="text-[#020617] text-md"
            size={"lg"}
            aria-label="Go to the dat contribution repo"
          >
            <Image
              width={25}
              height={25}
              src="https://cdn.icon-icons.com/icons2/2428/PNG/512/github_black_logo_icon_147128.png"
              alt="github logo"
              className="mr-3"
            />
            Github
          </Button>
        </Link>
      </div>
    </div>
  );
}
