import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ReadyToBuild() {
  return (
    <div className="bg-foreground p-7 lg:p-10 rounded-2xl mt-12">
      <p className=" text-2xl lg:text-3xl text-muted-foreground font-semibold">
        Ready to build your{" "}
      </p>
      <p className="text-background  text-3xl lg:text-4xl font-semibold mt-3 w-full lg:w-6/12">
        own Data Movement Tool ?
      </p>
      <div className="flex gap-3 mt-5">
        <Link href={"https://github.com/dat-labs/dat-main"}>
          <Button
            variant="secondary"
            aria-label="Go to the dat installation repo"
          >
            <ArrowTopRightIcon className="mr-2 h-5 w-5" /> Try Dat
          </Button>
        </Link>
        <Link href={"https://github.com/dat-labs/dat-main"}>
          <Button
            variant="secondary"
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
