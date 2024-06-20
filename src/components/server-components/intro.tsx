import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatDat1, LoadPopularVectors, RAG, Security } from "@/assets";

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
        <div className="lg:w-3/12 w-12/12 lg:mt-16 p-3">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>
                <div className="flex gap-2 items-center">
                  <div>
                    <div className="h-8 w-8 rounded-full bg-blue-200 flex justify-center items-center">
                      <LoadPopularVectors className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <p>Load to Popular Vector Stores</p>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pl-6 pr-6">
              <p className="text-xs">
                Build your own connector and collaborate with growing DAT’s
                community for assistance and queries.
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
                      <RAG className="h-4 w-4" />
                    </div>
                  </div>
                  <div>
                    <p>RAG specific transformations</p>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pl-6 pr-6">
              <p className="text-xs">
                Protect your data with robust security features, including
                encryption, access controls, and audit trails, ensuring
                compliance and data integrity.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="lg:w-3/12 w-12/12 lg:mt-16 p-3">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>
                <div className="flex gap-2 items-center">
                  <div>
                    <div className="h-8 w-8 rounded-full bg-blue-200 flex justify-center items-center">
                      <Security className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <p>Security</p>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pl-6 pr-6">
              <p className="text-xs">
                Protect your data with robust security features, including
                encryption, access controls, and audit trails, ensuring
                compliance and data integrity.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Intro;
