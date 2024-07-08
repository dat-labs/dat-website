import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import IntegrationHeaderImage from "@/assets/images/integration-header.svg";
import Image from "next/image";
import React from "react";

export default function SearchIntegrations() {
  return (
    <div className="bg-foreground p-7 lg:p-10 rounded-2xl flex justify-between items-center">
      <div className="w-6/12">
        <p className="lg:text-4xl text-2xl text-background font-semibold">
          Search your integration
        </p>
        <p className="text-muted mt-3 w-full lg:w-6/12">
          DAT provides an expanding array of 50+ plug-and-play data sources,
          generators & destination{" "}
        </p>
        <div className="flex gap-3 mt-5">
          <Button variant="secondary">
            <ArrowTopRightIcon className="mr-2 h-5 w-5" /> Request a connector
          </Button>
          <Button variant="secondary">
            {" "}
            <Image
              width={25}
              height={25}
              src="https://cdn.icon-icons.com/icons2/2428/PNG/512/github_black_logo_icon_147128.png"
              alt="github logo"
              className="mr-3"
            />
            Connectors
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <IntegrationHeaderImage className="h-40" />
      </div>
    </div>
  );
}
