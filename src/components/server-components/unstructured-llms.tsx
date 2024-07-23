import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import flow from "@/assets/images/flow.gif";
import Image from "next/image";

const UnStructuredLlms = () => {
  return (
    <div className="mt-24">
      <div className="flex items-center flex-wrap">
        <div className="lg:w-3/12 w-12/12 lg:pr-8">
          <div className="">
            <Card>
              <CardHeader className="">
                <CardTitle>
                  <p className="text-center text-2xl">
                    Make your Unstructured data ready for LLMs
                  </p>
                </CardTitle>
              </CardHeader>
              <CardContent className="pl-8 pr-8">
                <p className="text-md text-muted-foreground">
                  dat moves your unstructured and semi-structured data and makes
                  it accessible to any vector database & popular LLM frameworks.
                </p>
                <ul className="list-disc ml-6 mt-4">
                  <li className="text-md">Easy to use User Interface</li>
                  <li className="text-md">Deploy on your own infra </li>
                  <li className="text-md">Complete control over your data </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="lg:w-9/12 w-12/12 lg:pl-8 mt-6 lg:mt-0">
          <Image
            src={flow}
            className="rounded-xl"
            alt="Gif showing a high level flow for dat."
          />
        </div>
      </div>
    </div>
  );
};

export default UnStructuredLlms;
