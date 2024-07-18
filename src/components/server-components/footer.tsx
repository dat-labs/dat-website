import { DiscordBlueIcon, LinkedIn, LogoBlack, Twitter } from "@/assets";
import Image from "next/image";
import React from "react";
import FooterDatLogoAsset from "@/assets/images/asset-footer.svg";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

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
      <div className="flex flex-col lg:w-10/12 mx-auto w-11/12 py-6 lg:p-0 !pt-12 mb-10">
        <div className="flex flex-row justify-between">
          <div className="lg:w-4/12 w-12/12 mb-12 lg:mb-0">
            <Link href={"/"}>
              <LogoBlack className="h-10 w-24" />
            </Link>

            <p className="text-md mt-6 text-muted-foreground w-10/12">
              Seamlessly moving your data and making it accessible to any vector
              database and popular LLM (Large Language Model) frameworks.
            </p>
            <div className="flex mt-6 gap-4">
              <Link
                href={"https://github.com/dat-labs/dat-main"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubLogoIcon className="size-10" />
              </Link>
              <Link
                href={"https://discord.gg/En7TRBYE"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordBlueIcon className="size-10" />
              </Link>
              <Twitter className="size-10" />
              <LinkedIn className="size-10" />
            </div>
          </div>

          <div className="lg:w-5/12 flex lg:flex-row flex-col pl-16 space-x-8">
            <div className="lg:w-5/12 flex flex-col">
              <p className="text-md font-semibold">EXPLORE CONNECTORS</p>
              <Link
                href={"/integrations"}
                className="text-muted-foreground text-md mt-3"
              >
                Sources
              </Link>
              <Link
                href={"/integrations"}
                className="text-muted-foreground text-md mt-3"
              >
                Generators
              </Link>
              <Link
                href={"/integrations"}
                className="text-muted-foreground text-md mt-3"
              >
                Destination
              </Link>
            </div>
            <div className="lg:w-3/12 flex flex-col">
              <p className="text-md font-semibold">RESOURCES</p>
              <Link
                href={"https://datlabs.gitbook.io/datlabs"}
                className="text-muted-foreground text-md mt-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </Link>
              {/* <Link href={} className="text-muted-foreground text-md mt-3" target="_blank" rel="noopener noreferrer">
                Blogs
              </Link>
              <Link href={} className="text-muted-foreground text-md mt-3" target="_blank" rel="noopener noreferrer">
                Newsletter
              </Link> */}
            </div>
            <div className="lg:w-3/12 flex flex-col">
              <p className="text-md font-semibold">ABOUT US</p>
              <Link
                href={"/about-us"}
                className="text-muted-foreground text-md mt-3"
              >
                Contact Us
              </Link>
              {/* <Link href={} className="text-muted-foreground text-md mt-3" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Link> */}
              <Link
                href={"https://www.youtube.com/"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground text-md mt-3"
              >
                YouTube
              </Link>
              <Link
                href={"https://discord.gg/En7TRBYE"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground text-md mt-3"
              >
                Discord
              </Link>
              <Link
                href={"https://github.com/dat-labs/dat-main"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground text-md mt-3"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between w-full mt-32 text-xs text-zinc-400">
          <p>© 2024 DAT. All rights reserved.</p>
          <span className="flex flex-row space-x-2 mr-10">
            <p>Term & Condition</p>
            <p>Privacy Policy</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
