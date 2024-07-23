"use client";

import React from "react";
import { Button } from "../ui/button";
import { ConnectImage } from "@/assets";
import DatGif from "@/assets/images/dat.gif";
import Image from "next/image";
import ScheduleAndMonitor from "@/assets/images/schedule-monitor.svg";
import LogsAndSchedule from "@/assets/images/logs-schedule.svg";
import Link from "next/link";

const DatFlow = () => {
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="mt-24">
      <div className="flex flex-wrap justify-between">
        <div>
          <p className="text-3xl font-semibold">
            Open source and completely free to use
          </p>
          <p className="text-md text-muted-foreground">
            Address all your needs while retaining complete control over your
            data{" "}
          </p>
        </div>
        <div className="flex gap-2 lg:mt-0 mt-5">
          <Link href={"https://github.com/dat-labs/dat-main"}>
            <Button
              variant="outline"
              aria-label="Go to the contribution github repo of dat."
            >
              Contribute to Project
            </Button>
          </Link>
          <Link href={"https://github.com/dat-labs/dat-main"}>
            <Button aria-label="Go to the installation github repo of dat.">
              Try DAT
            </Button>
          </Link>
        </div>
      </div>
      <div
        className="h-[1px] mt-12 rounded-sm"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #EEEEEE 0%, #888888 50%, #EEEEEE 100%)",
        }}
      ></div>
      <div>
        <div className="flex items-center mt-12 flex-wrap border-l-4 border-rose-200 border-b-4 pb-12 rounded-bl-3xl">
          <div className="lg:w-6/12 w-full lg:p-10">
            <p className="text-2xl text-muted-foreground">STEP 1</p>
            <p className="text-3xl font-semibold">Connect</p>
            <p className="text-md text-muted-foreground">
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <div className="lg:w-6/12 w-full">
            <ConnectImage
              className="h-full w-full"
              role="img"
              aria-label="Step 1 of dat flow. Connect your source"
            />
          </div>
        </div>
        <div className="flex items-center flex-wrap border-rose-200 border-r-4 border-b-4 pt-12 pb-12 rounded-br-3xl">
          <div className="lg:w-6/12 w-full">
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
          <div className="lg:w-6/12 w-full lg:p-10 flex-wrap mt-12 lg:mt-0">
            <p className="text-2xl text-muted-foreground">STEP 2</p>
            <p className="text-3xl font-semibold">Embed</p>
            <p className="text-md text-muted-foreground">
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-wrap border-rose-200 border-b-4 border-l-4 pt-12 pb-12 rounded-bl-3xl">
          <div className="lg:w-6/12 w-full lg:p-10">
            <p className="text-2xl text-muted-foreground">STEP 3</p>
            <p className="text-3xl font-semibold">Store</p>
            <p className="text-md text-muted-foreground">
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <div className="lg:w-6/12 w-full">
            <Image
              className="h-full w-full"
              src={DatGif}
              alt="dat-gif"
              role="img"
              aria-label="Step 3 of dat flow. Storing your generated embeddings"
            />
          </div>
        </div>
        <div className="flex items-center flex-wrap border-rose-200 border-r-4 pt-12 pb-12 ">
          <div className="lg:w-6/12 w-full">
            <ScheduleAndMonitor
              className="h-full w-full"
              role="img"
              aria-label="Step 4 of dat flow. Schedule and monitor you connections for periodic generation and storing."
            />
          </div>
          <div className="lg:w-6/12 w-full lg:p-10 mt-12 lg:mt-0">
            <p className="text-2xl text-muted-foreground">STEP 4</p>
            <p className="text-3xl font-semibold">Schedule & Monitor</p>
            <p className="text-md text-muted-foreground">
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <p className="text-center text-2xl font-semibold">
          Logs, Advanced Scheduling & Last Run Status all in one
        </p>
        <LogsAndSchedule
          className="w-full h-full mt-16"
          role="img"
          aria-label="Image showing the logs and scheduling ui of dat."
        />
      </div>
    </div>
  );
};

export default DatFlow;
