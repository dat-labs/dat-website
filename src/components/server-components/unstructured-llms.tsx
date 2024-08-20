import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import flow from "@/assets/images/flow.gif";
import Infographics from "@/assets/images/Infographics.gif";

import Image from "next/image";

const UnStructuredLlms = () => {
  return (
    <div className="mt-12">
      <div className="flex items-center flex-wrap">
        <div className="lg:w-4/12 w-full lg:pr-8">
          <div className="mx-auto lg:hidden">
            <Image
              src={Infographics}
              className="rounded-xl"
              alt="infographics-gif"
            />
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>
                  <p className="text-center lg:text-3xl text-4xl">
                    Make your <br /> Unstructured data <br /> ready for LLMs
                  </p>
                </CardTitle>
              </CardHeader>
              <CardContent className="pl-5 text-base">
                <p className="text-muted-foreground">
                  <span className="font-[Comfortaa] text-black">dat </span>
                  moves your unstructured and semi-structured data and makes it
                  accessible to any vector database & popular LLM frameworks.
                </p>
                <div className="flex flex-col space-y-4 mt-4">
                  <div className="flex space-x-2">
                    <img
                      src="/assets/check_circle.svg"
                      alt="Check"
                      className="inline-block"
                    />
                    <p>Easy to use User Interface</p>
                  </div>

                  <div className="flex space-x-2">
                    <img
                      src="/assets/check_circle.svg"
                      alt="Check"
                      className="inline-block"
                    />
                    <p>Deploy on your own infra</p>
                  </div>

                  <div className="flex space-x-2">
                    <img
                      src="/assets/check_circle.svg"
                      alt="Check"
                      className="inline-block"
                    />
                    <p>Complete control over your data</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="hidden lg:inline lg:w-8/12 w-full lg:pl-8 mt-6 lg:mt-0">
          <Image
            src={flow}
            className="rounded-xl"
            layout="responsive"
            unoptimized={true}
            alt="Gif showing a high level flow for dat."
          />
        </div>
      </div>
    </div>
  );
};

export default UnStructuredLlms;
