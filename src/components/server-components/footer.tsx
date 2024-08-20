import { DiscordBlueIcon, LogoBlack, YoutubeIcon } from "@/assets";
import Image from "next/image";
import React from "react";
import FooterDatLogoAsset from "@/assets/images/asset-footer.svg";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute left-1/3 -top-5 ">
          <div className="lg:translate-x-36 -translate-x-10">
            <FooterDatLogoAsset
              className="h-10"
              role="img"
              aria-label="fotter dat logo asset"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:w-10/12 lg:mx-auto ml-10 w-11/12 py-6 lg:p-0 !pt-12 mb-10 ">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="lg:w-4/12 w-full mb-12 lg:mb-0 flex flex-col lg:mx-0 mx-2 lg:mb-0 mt-5">
            <Link href={"/"}>
              <LogoBlack
                className="h-14 w-28 "
                role="img"
                aria-label="dat logo"
              />
            </Link>

            <p className="mt-6 text-muted-foreground lg:text-md text-sm w-11/12 lg:w-9/12">
              Seamlessly moving your data and making it accessible to any vector
              database and popular LLM (Large Language Model) frameworks.
            </p>
            <div className="flex mt-6 gap-4">
              <Link
                href={"https://github.com/dat-labs/dat-main"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubLogoIcon
                  className="size-10"
                  role="img"
                  aria-label="Go to the dat github"
                />
              </Link>
              <Link
                href={"https://discord.gg/3Qr5dt39xH"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordBlueIcon
                  className="size-10"
                  role="img"
                  aria-label="Go to the dat discord server"
                />
              </Link>
              <Link
                href={"https://www.youtube.com/@mydatHub"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeIcon
                  className="size-10"
                  role="img"
                  aria-label="Go to the dat youtube channel"
                />
              </Link>
              {/* <Twitter
                className="size-10"
                role="img"
                aria-label="Join dat at twitter"
              />
              <LinkedIn
                className="size-10"
                role="img"
                aria-label="Join dat on youtube"
              /> */}
            </div>
          </div>

          <div className="lg:w-5/12 w-full flex lg:flex-row flex-col lg:pl-16 lg:mx-0 mx-2 gap-8 ">
            <div className="lg:w-5/12 w-full flex flex-col">
              <p className="text-md font-semibold">EXPLORE CONNECTORS</p>
              <Link
                href={"/integrations/#Sources"}
                className="text-muted-foreground text-md mt-3"
                arai-label="View all the sources"
              >
                Sources
              </Link>
              <Link
                href={"/integrations/#Generators"}
                className="text-muted-foreground text-md mt-3"
                arai-label="View all the Generators"
              >
                Generators
              </Link>
              <Link
                href={"/integrations/#Destination"}
                className="text-muted-foreground text-md mt-3"
                arai-label="View all the Destination"
              >
                Destination
              </Link>
            </div>
            <div className="lg:w-3/12 w-full flex flex-col">
              <p className="text-md font-semibold">RESOURCES</p>
              <Link
                href={"https://datlabs.gitbook.io/datlabs"}
                className="text-muted-foreground text-md mt-3"
                target="_blank"
                rel="noopener noreferrer"
                arai-label="View dat documentation"
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
            <div className="lg:w-3/12 w-full flex flex-col">
              <p className="text-md font-semibold">ABOUT US</p>
              <Link
                href={"/about-us"}
                className="text-muted-foreground text-md mt-3"
                arai-label="Go to the contact us page"
              >
                Contact Us
              </Link>
              {/* <Link href={} className="text-muted-foreground text-md mt-3" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Link> */}
              <Link
                href={"https://www.youtube.com/@mydatHub"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground text-md mt-3"
                arai-label="Go to dat youtube"
              >
                YouTube
              </Link>
              <Link
                href={"https://discord.gg/3Qr5dt39xH"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground text-md mt-3"
                arai-label="Go to the dat discord"
              >
                Discord
              </Link>
              <Link
                href={"https://github.com/dat-labs/dat-main"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground text-md mt-3"
                arai-label="Go to dat github repo"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-3 lg:justify-between lg:w-full w-fit lg:mx-0 ml-16 lg:mt-24 mt-10 text-sm text-zinc-400">
          <p>© 2024 DAT. All rights reserved.</p>
          <div className="flex lg:flex-row flex-col gap-2 lg:mr-8 lg:text-left text-center">
            <Link href={"/"}>
              <p>Terms & Condition</p>
            </Link>
            <Link href={"/"}>
              <p>Privacy Policy</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
