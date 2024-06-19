import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatDat1 } from "@/assets";

const Intro = () => {
  return (
    <main
      className="py-8 rounded-lg p-10 mt-16 w-full "
      style={{
        borderWidth: "0.5px",
        borderStyle: "solid",
        borderRadius: "10px",
        borderImage:
          "linear-gradient(90deg, #EEEEEE 0%, #888888 50%, #EEEEEE 100%) 1 !important",
      }}
    >
      <p className="text-4xl text-muted-foreground font-semibold mb-7">
        What is <span className="text-foreground">dat</span>?
      </p>
      <p className="text-md font-normal leading-6 text-muted-foreground">
        Moving generative AI applications to production often requires using
        Vector stores to provide them with relevant context. Keeping these
        vector stores up-to-date with changes in your data is critical for the
        continued performance of these applications. dat makes this possible by
        setting up pipelines to update your vector stores as your source data
        changes.
      </p>
      <div className="flex mt-12 mb-6 w-12/12 flex-wrap">
        <div className="lg:w-3/12 w-12/12 p-3">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>
                <div className="flex gap-2 items-center">
                  <div>
                    <div className="h-8 w-8 rounded-full bg-blue-200 flex justify-center items-center">
                      <WhatDat1 className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <p>Extract Unstructured data</p>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pl-6 pr-6">
              <p className="text-xs">
                Breaking down silos and enabling seamless integration with any
                vector database and LLM frameworks.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="lg:w-3/12 w-12/12 lg:mt-20 p-3">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>
                <div className="flex gap-2 items-center">
                  <div>
                    <div className="h-8 w-8 rounded-full bg-blue-200 flex justify-center items-center">
                      <WhatDat1 className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <p>Extract Unstructured data</p>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pl-6 pr-6">
              <p className="text-xs">
                Breaking down silos and enabling seamless integration with any
                vector database and LLM frameworks.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="lg:w-3/12 w-12/12 p-3">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>
                <div className="flex gap-2 items-center">
                  <div>
                    <div className="h-8 w-8 rounded-full bg-blue-200 flex justify-center items-center">
                      <WhatDat1 className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <p>Extract Unstructured data</p>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pl-6 pr-6">
              <p className="text-xs">
                Breaking down silos and enabling seamless integration with any
                vector database and LLM frameworks.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="lg:w-3/12 w-12/12 lg:mt-20 p-3">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>
                <div className="flex gap-2 items-center">
                  <div>
                    <div className="h-8 w-8 rounded-full bg-blue-200 flex justify-center items-center">
                      <WhatDat1 className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <p>Extract Unstructured data</p>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pl-6 pr-6">
              <p className="text-xs">
                Breaking down silos and enabling seamless integration with any
                vector database and LLM frameworks.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Intro;
