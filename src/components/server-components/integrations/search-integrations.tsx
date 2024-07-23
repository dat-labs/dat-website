"use client";

import { Button } from "@/components/ui/button";
import IntegrationHeaderImage from "@/assets/images/integration-header.svg";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import RequestConnector from "@/components/client-components/request-connector";

export default function SearchIntegrations() {
  return (
    <div className="bg-[#1F1F1F] p-7 lg:p-10 rounded-2xl flex justify-between items-center">
      <div className="lg:w-11/12 w-full">
        <p className="lg:text-4xl text-4xl leading-[3.5rem] text-background font-semibold">
          Search your integration
        </p>
        <p className="text-muted-foreground mt-3 w-full lg:w-9/12 lg:text-base text-xl pr-10">
          <span className="font-[Comfortaa]">dat </span>provides an expanding
          array of 50+ plug-and-play data sources, generators & destination{" "}
        </p>
        <div className="flex lg:flex-row flex-col gap-3 mt-5">
          <RequestConnector />
          <Link href={"https://github.com/dat-labs/dat-main"} target="_blank">
            <Button variant="secondary" className="lg:w-fit w-7/12">
              <Image
                width={25}
                height={25}
                src="https://cdn.icon-icons.com/icons2/2428/PNG/512/github_black_logo_icon_147128.png"
                alt="github logo"
                className="mr-3"
              />
              Contribute
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center lg:block hidden">
        <IntegrationHeaderImage className="h-40" />
      </div>
    </div>
  );
}
