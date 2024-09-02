"use client";

import React from "react";
import { Button } from "../ui/button";
import { ConnectImage } from "@/assets";
import DatGif from "@/assets/images/dat.gif";
import Image from "next/image";
import ScheduleAndMonitor from "@/assets/images/schedule-monitor.svg";
import LogsAndSchedule from "@/assets/images/logs-schedule.svg";
import LogsAndScheduleMobile from "@/assets/images/logs-schedule-mobile.svg";

import Link from "next/link";
import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const DatFlow = () => {
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="mt-16 lg:mt-24">
      <div className="flex flex-wrap justify-between">
        <div className="text-center lg:text-left">
          <p className="text-3xl font-semibold">
            Open source and completely free to use
          </p>
          <p className="lg:text-lg text-base text-muted-foreground mt-4 w-10/12 lg:w-full mx-auto lg:mx-0">
            Address all your needs while retaining complete control over your
            data
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:mt-0 mt-5 lg:mx-0 mx-auto lg:space-y-0 space-y-2">
          <Link
            className="lg:mx-0 mx-auto"
            href={"https://github.com/dat-labs/dat-main"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              aria-label="Go to the contribution github repo of dat."
            >
              <GitHubLogoIcon className="mr-2 size-6" />
              <p className="font-semibold">Contribute to Project</p>
            </Button>
          </Link>
          <Link
            className="lg:mx-0 mx-auto"
            href={"https://github.com/dat-labs/dat-main"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button aria-label="Go to the installation github repo of dat.">
              <span className="bg-white rounded-full p-0.5 mr-2 my-auto">
                <ArrowTopRightIcon color="black" />
              </span>
              Try DAT
            </Button>
          </Link>
        </div>
      </div>

      <div
        className="h-[0.5px] mt-12 rounded-sm hidden lg:block"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #EEEEEE 0%, #888888 50%, #EEEEEE 100%)",
        }}
      ></div>
      <div>
        <div className="flex items-center flex-wrap border-[#FFCFD9] border-l-4 border-b-4 rounded-bl-3xl lg:border-none pb-12 lg:pb-0">
          <div className="lg:w-6/12 lg:h-[450px] w-full flex flex-col justify-center lg:my-auto lg:px-12 lg:py-0 px-0 pt-12 pb-4 pl-4 lg:border-[#FFCFD9] lg:border-l-4 lg:border-b-4 lg:rounded-bl-3xl">
            <p className="text-2xl lg:text-muted-foreground text-zinc-400 opacity-60 font-semibold mb-2">
              STEP 1
            </p>
            <p className="text-3xl font-semibold mb-2">Connect</p>
            <p className="text-md text-muted-foreground mb-2">
              Seamlessly link your data sources with our platform, ensuring a
              smooth flow of information from all your key locations.
            </p>
          </div>

          <div className="lg:w-6/12 lg:h-[450px] w-full lg:rotate-0 rotate-6">
            <ConnectImage
              className="size-11/12 m-auto"
              role="img"
              aria-label="Step 1 of dat flow. Connect your source"
            />
          </div>
        </div>

        <div className="flex items-center flex-wrap border-[#FFCFD9] border-r-4 border-b-4 rounded-br-3xl lg:border-none pb-12 lg:pb-0">
          <div className="lg:w-6/12 lg:h-[450px] w-full lg:block hidden lg:mt-4">
            {isClient && (
              <video autoPlay loop muted className="size-11/12 lg:m-auto pt-5">
                <source src="/assets/dat.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          <div className="lg:w-6/12 lg:h-[450px] w-full flex flex-col justify-center lg:my-auto lg:px-12 px-0 lg:py-0 pt-6 pl-4 lg:border-[#BDDFFF] lg:border-r-4 lg:border-b-4 lg:rounded-br-3xl">
            <p className="text-2xl lg:text-muted-foreground text-zinc-400 opacity-60 font-semibold mb-2">
              STEP 2
            </p>
            <p className="text-3xl font-semibold mb-2">Embed</p>
            <p className="text-md text-muted-foreground mb-2">
              Transform your text data into powerful embeddings, optimized for
              efficient search and analysis.
            </p>
          </div>

          <div className="lg:w-6/12 h-full w-full px-4 lg:hidden">
            {isClient && (
              <video
                autoPlay
                loop
                muted
                aria-label="Video showing embedding generation"
              >
                <source src="/assets/dat.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>

        <div className="flex items-center flex-wrap border-[#BDDFFF] border-l-4 border-b-4 rounded-bl-3xl lg:border-none pb-12 lg:pb-0">
          <div className="lg:w-6/12 lg:h-[450px] w-full flex flex-col justify-center lg:my-auto lg:px-12 lg:py-0 px-0 pt-12 pb-4 pl-4 lg:border-[#FFCFD9] lg:border-l-4 lg:border-b-4 lg:rounded-bl-3xl">
            <p className="text-2xl lg:text-muted-foreground text-zinc-400 opacity-60 font-semibold mb-2">
              STEP 3
            </p>
            <p className="text-3xl font-semibold mb-2">Store</p>
            <p className="text-md text-muted-foreground mb-2">
              Securely store your embeddings in a robust vector database, ready
              for instant retrieval and use.
            </p>
          </div>
          <div className="flex flex-col justify-between lg:w-6/12 lg:h-[450px] m-auto">
            <Image
              className="size-10/12 lg:size-full m-auto rounded-xl"
              src={DatGif}
              alt="dat-gif"
            />
          </div>
        </div>

        <div className="flex items-center flex-wrap border-[#BDDFFF] border-r-4  lg:border-none pb-12 lg:pb-0">
          <div className="lg:w-6/12 w-full lg:h-[450px] flex flex-col justify-between lg:mt-0 mt-6">
            <ScheduleAndMonitor className="size-11/12 m-auto lg:rotate-0 -rotate-6" />
          </div>

          <div className="lg:w-6/12 lg:h-[450px] w-full flex flex-col justify-center lg:my-auto lg:px-12 px-0 lg:py-0 pt-6 pl-4 lg:border-[#BDDFFF] lg:border-r-4 lg:border-b-4 lg:rounded-br-3xl">
            <p className="text-2xl lg:text-muted-foreground text-zinc-400 opacity-60 font-semibold mb-2">
              STEP 4
            </p>
            <p className="text-3xl font-semibold mb-4">Schedule and Monitor</p>
            <p className="text-md text-muted-foreground mb-2">
              Automate your data processing with flexible scheduling, and keep
              track of your operations with real-time monitoring.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:mt-24 mt-4">
        <p className="text-center text-3xl font-semibold">
          Logs, Advanced Scheduling & Last Run Status all in one
        </p>
        <LogsAndSchedule
          role="img"
          aria-label="Step 4 of dat flow. Schedule and monitor you connections for periodic generation and storing."
          className="lg:inline hidden w-full h-full mt-16"
        />
        <LogsAndScheduleMobile
          role="img"
          aria-label="Step 4 of dat flow. Schedule and monitor you connections for periodic generation and storing."
          className="lg:hidden w-full h-full mt-4"
        />
      </div>
    </div>
  );
};

export default DatFlow;
