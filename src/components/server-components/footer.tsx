import { DiscordBlueIcon, LinkedIn, LogoBlack, Twitter } from "@/assets";
import Image from "next/image";
import React from "react";
import FooterDatLogoAsset from "@/assets/images/asset-footer.svg";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute w-screen -top-5">
          <div className="flex w-12/12 justify-center">
            <FooterDatLogoAsset className="h-10 pl-2 pr-2" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-16">
        <div className="lg:w-10/12 ml-10 w-11/12 py-6 lg:p-0 flex justify-between flex-wrap !pt-12">
          <div className="lg:w-4/12 w-12/12 mb-12 lg:mb-0">
            <LogoBlack className="h-10 w-24" />
            <p className="text-md mt-6 text-muted-foreground">
              Seamlessly moving your data and making it accessible to any vector
              database and popular LLM (Large Language Model) frameworks.
            </p>
            <div className="flex mt-6 gap-4">
              <DiscordBlueIcon className="size-10" />
              <GitHubLogoIcon className="size-10" />
              <Twitter className="size-10" />
              <LinkedIn className="size-10" />
            </div>
          </div>
          <div className="lg:w-5/12 flex lg:flex-row flex-col pl-16 space-x-8">
            <div className="lg:w-5/12">
              <p className="text-md font-semibold">EXPLORE CONNECTORS</p>
              <p className="text-muted-foreground text-md mt-3">Sources</p>
              <p className="text-muted-foreground text-md mt-3">Generators</p>
              <p className="text-muted-foreground text-md mt-3">Destination</p>
            </div>
            <div className="lg:w-3/12">
              <p className="text-md font-semibold">RESOURCES</p>
              <p className="text-muted-foreground text-md mt-3">
                Documentation
              </p>
              <p className="text-muted-foreground text-md mt-3">Blogs</p>
              <p className="text-muted-foreground text-md mt-3">Newsletter</p>
            </div>
            <div className="lg:w-3/12">
              <p className="text-md font-semibold">ABOUT US</p>
              <p className="text-muted-foreground text-md mt-3">Contact Us</p>
              <p className="text-muted-foreground text-md mt-3">LinkedIn</p>
              <p className="text-muted-foreground text-md mt-3">YouTube</p>
              <p className="text-muted-foreground text-md mt-3">Slack</p>
              <p className="text-muted-foreground text-md mt-3">GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
