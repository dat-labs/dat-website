"use client";

import React from "react";
import { Button } from "../ui/button";
import { ConnectImage } from "@/assets";
import DatGif from "@/assets/images/dat.gif";
import Image from "next/image";
import ScheduleAndMonitor from "@/assets/images/schedule-monitor.svg";
import LogsAndSchedule from "@/assets/images/logs-schedule.svg";

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
          <Button variant="outline">Contribute to Project</Button>
          <Button>Try DAT</Button>
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
        <div className="flex items-center mt-12 flex-wrap">
          <div className="lg:w-6/12 w-full lg:p-10">
            <p className="text-2xl text-muted-foreground">STEP 1</p>
            <p className="text-3xl font-semibold">Connect</p>
            <p className="text-md text-muted-foreground">
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <div className="lg:w-6/12 w-full">
            <ConnectImage className="h-full w-full" />
          </div>
        </div>
        <div className="flex items-center mt-24 flex-wrap">
          <div className="lg:w-6/12 w-full">
            {isClient && (
              <video autoPlay loop muted>
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
        <div className="flex items-center mt-16 flex-wrap">
          <div className="lg:w-6/12 w-full lg:p-10">
            <p className="text-2xl text-muted-foreground">STEP 3</p>
            <p className="text-3xl font-semibold">Store</p>
            <p className="text-md text-muted-foreground">
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <div className="lg:w-6/12 w-full">
            <Image className="h-full w-full" src={DatGif} alt="dat-gif" />
          </div>
        </div>
        <div className="flex items-center mt-16 flex-wrap">
          <div className="lg:w-6/12 w-full">
            <ScheduleAndMonitor className="h-full w-full" />
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
        <LogsAndSchedule className="w-full h-full mt-16" />
      </div>
    </div>
  );
};

export default DatFlow;
