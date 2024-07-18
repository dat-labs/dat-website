import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function ReadyToBuild() {
  return (
    <div className="mt-24 mb-2">
      <div className="h-[410px] bg-[url('/assets/ready-to-build.svg')] bg-cover w-full p-10 rounded-3xl">
        <p className="text-3xl text-secondary font-semibold mt-10">
          Ready to build your
        </p>
        <p className="text-3xl text-secondary font-semibold">
          Retrieval based LLM apps on top of <br /> synced data ?
        </p>
        <div className="flex mb-10 mt-6 gap-4">
          <Link
            href={"https://github.com/dat-labs/dat-main"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <ArrowTopRightIcon className="mr-2 h-5 w-5" />
              Try Dat
            </Button>
          </Link>

          <Link
            href={"https://github.com/dat-labs/dat-main"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
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
    </div>
  );
}
