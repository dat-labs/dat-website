import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function ReadyToBuild() {
  return (
    <div className="lg:mt-24 mt-12 mb-2">
      <div className="lg:h-full h-[600px] lg:bg-[url('/assets/ready-to-build.svg')] bg-[url('/assets/ready-to-build-mobile.svg')] bg-cover w-full p-6 rounded-3xl">
        <div className="lg:ml-6">
          <p className="text-3xl text-zinc-600 font-semibold  lg:mt-10 mt-4 leading-[3rem]">
            Ready to build your
          </p>
          <p className="text-3xl text-white font-semibold leading-[3rem]">
            Retrieval based LLM apps on top of{" "}
            <br className="hidden lg:inline" /> synced{" "}
            <br className="lg:hidden" /> data ?
          </p>
          <div className="flex my-6 gap-4 lg:justify-start justify-center">
            <Link
              href={"https://github.com/dat-labs/dat-main"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="text-[#020617] text-md"
                size={"lg"}
                aria-label="Try Dat. Go to the dat installation github repo."
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
              >
                <Image
                  width={25}
                  height={25}
                  src="https://cdn.icon-icons.com/icons2/2428/PNG/512/github_black_logo_icon_147128.png"
                  alt="github logo"
                  className="mr-3"
                  aria-label="Try Dat. Go to the dat contribution github repo."
                />
                Github
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
