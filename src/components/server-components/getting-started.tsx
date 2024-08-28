"use client";

import { DeployDatButton, StarUsButton } from "@/assets";
import React from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const GettingStarted = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="lg:p-10 p-4 ">
      <div className="flex justify-center mt-2">
        <div className="flex items-center">
          <div className="rounded-xl bg-muted flex gap-2 p-2">
            <div className="p-1 bg-background rounded-xl text-blue-600 pl-3 pr-3">
              Open Source
            </div>
            <div className="flex items-center">ETL for Vector Stores</div>
          </div>
        </div>
      </div>
      <div className="lg:mt-8 mt-6 text-center text-[#15172B]">
        <p className="lg:text-4xl text-xl font-semibold">
          Unlock the Power of Your
        </p>
        <p className="lg:text-7xl text-[36px] font-bold">Unstructured Data</p>
        <div className="flex flex-col">
          <p className="lg:mt-6 mt-2 w-full lg:text-xl text-[14px]">
            Make your Gen AI initiatives production ready by keeping your Vector
            databases current with changes in your source data at all times.
            Provide up-to-date context to your RAG applications.
          </p>
          <div className="flex lg:flex-row flex-col gap-4 mt-6 mx-auto">
            <Link
              href={"https://github.com/dat-labs/dat-main"}
              className="lg:mx-0 mx-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DeployDatButton className="h-12 hover:opacity-85" />
            </Link>

            <Link
              href={"https://github.com/dat-labs/dat-main"}
              className="lg:mx-0 mx-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StarUsButton className="h-12 hover:opacity-85" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-16 p-6 pb-0 bg-[url('/assets/dat_connection_screen_bg.svg')] bg-cover rounded-md">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="m-0">
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index} className="p-0 w-auto h-auto">
                <div>
                  <Card className="rounded-bl-none rounded-br-none">
                    <CardContent className="flex items-bottom justify-bottom p-0 h-[650px] w-full">
                      <Image
                        objectFit="cover"
                        height={1000}
                        width={1500}
                        src={`/assets/Intro${index + 1}.png`}
                        alt={`Intro${index + 1}`}
                        role="img"
                        aria-label="Image of dat ui showing the connections list."
                        className="mx-auto"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* <p className="text-[10px] lg:text-base text-center font-semibold mt-6">
        Making the data movement effortless for thousands of companies
      </p> */}

      {/* <div className="mt-10 text-center">
        <p>Add moving Brands bar</p>
      </div> */}
    </div>
  );
};

export default GettingStarted;
