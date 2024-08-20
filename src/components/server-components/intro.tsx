import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatDat1, LoadPopularVectors, RAG, Security } from "@/assets";
import DatTypography from "./dat-typography";

const svgClassNames = [
  "absolute -ml-[8px] -mt-[4px]",
  "absolute right-0 -mr-[8px] -mt-[4px]",
  "absolute bottom-0 -ml-[8px]",
  "absolute bottom-0 right-0 -mr-[8px]",
];

const Intro = () => {
  return (
    <main
      className=" rounded-lg  mt-16 w-full relative"
      style={{
        borderWidth: "0.5px",
        borderStyle: "solid",
        borderRadius: "10px",
        borderImage:
          "linear-gradient(90deg, #EEEEEE 0%, #888888 50%, #EEEEEE 100%) 1 !important",
      }}
    >
      {svgClassNames.map((className) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="43"
          className={className}
          viewBox="0 0 16 43"
          fill="none"
          role="img"
          aria-label="vorder images for the container."
        >
          <path
            d="M2.86005 3.13023C4.23034 1.75994 6.04448 0.997862 7.96817 0.985153C9.89445 0.973722 11.6996 1.71119 13.0533 3.06297C14.4054 4.41379 15.1433 6.21536 15.1299 8.13906C15.1274 8.53371 15.0813 8.95003 14.9864 9.44993C14.9603 9.57905 14.9257 9.71924 14.8901 9.85846C14.816 10.1392 14.73 10.4152 14.6248 10.6961C14.5705 10.84 14.5158 10.9823 14.4497 11.1256C14.3295 11.3823 14.1819 11.6509 14.0127 11.9154L13.9183 12.0819C13.9013 12.1131 13.8859 12.144 13.8675 12.1733L12.7893 13.4163C12.6326 13.5608 12.4483 13.7026 12.2545 13.8506L12.2138 13.8817C12.148 13.9352 12.0995 13.9787 12.0503 14.0234C12.033 14.0393 12.0164 14.056 11.9972 14.07L11.9386 14.1112L11.89 14.1566C11.8017 14.2404 11.7153 14.3236 11.6305 14.4084C9.66733 16.3715 8.55406 19.1363 8.57746 21.9942C8.60059 24.8427 9.75539 27.553 11.745 29.4291L11.8023 29.4832L11.8685 29.5272C11.9417 29.5763 12.0051 29.6371 12.0722 29.6956C12.126 29.7436 12.1804 29.7915 12.2391 29.8391L12.4128 29.9776C12.5173 30.0586 12.6233 30.1405 12.7196 30.2322L13.706 31.3725L13.7233 31.4042L13.7445 31.4254C13.7628 31.4561 13.8618 31.6391 13.8618 31.6391C14.0686 31.9764 14.2072 32.2311 14.3155 32.4699C14.3746 32.602 14.4249 32.743 14.4777 32.8878C14.5762 33.1531 14.6625 33.4351 14.7373 33.7356L14.7487 33.7822C14.7774 33.8997 14.8061 34.0164 14.8293 34.1394C14.9169 34.6339 14.9576 35.0477 14.9545 35.4353C14.9417 37.3615 14.1806 39.1767 12.8094 40.5479C11.4391 41.9182 9.62494 42.6796 7.69995 42.693C3.72718 42.7176 0.515931 39.5031 0.542157 35.5307C0.544046 35.1367 0.59084 34.7119 0.686604 34.2305C0.710145 34.0968 0.739027 33.99 0.767929 33.8794L0.784185 33.8193C0.861603 33.5204 0.95058 33.2389 1.04618 32.985C1.10255 32.8346 1.15626 32.6946 1.21869 32.56C1.34027 32.2968 1.48484 32.0331 1.66293 31.7501C1.6996 31.6902 1.73074 31.634 1.76253 31.5784C1.78186 31.5449 1.80023 31.5098 1.82086 31.4763L2.87911 30.2609C3.03 30.1242 3.20292 29.9892 3.38495 29.8478L3.46342 29.7867C3.52237 29.7406 3.57322 29.6943 3.62307 29.6509C3.64295 29.6329 3.66219 29.6137 3.684 29.5977L3.72698 29.5643L3.78073 29.5183C3.86874 29.4367 3.95481 29.3539 4.03993 29.2688C6.00372 27.305 7.1173 24.5399 7.09487 21.6836C7.07239 18.8345 5.91761 16.1229 3.928 14.2448L3.87003 14.1901L3.80424 14.1445C3.73583 14.1002 3.67463 14.0436 3.61309 13.9905C3.54962 13.9349 3.48678 13.8818 3.42103 13.8285C3.36913 13.7864 3.30208 13.733 3.2347 13.6806C3.14058 13.6054 3.04643 13.5334 2.96077 13.451L1.93905 12.2656C1.91724 12.2314 1.8974 12.1927 1.87627 12.1539L1.80613 12.0264C1.61628 11.7224 1.4709 11.4564 1.35684 11.2053C1.29775 11.0732 1.24587 10.9274 1.19143 10.779C1.09367 10.513 1.00925 10.2382 0.937273 9.94312C0.902214 9.80241 0.869372 9.67043 0.844942 9.53969C0.754273 9.02834 0.71442 8.62586 0.718563 8.23412C0.731603 6.30945 1.49237 4.49791 2.86005 3.13023Z"
            fill="#E2EEFF"
          />
        </svg>
      ))}

      <div className="p-10">
        <p className="text-4xl text-muted-foreground font-semibold mb-7">
          What is{" "}
          <span className="text-foreground">
            <DatTypography className="font-extrabold" />
          </span>
          ?
        </p>
        <p className="lg:text-lg text-sm leading-6 text-gray-500">
          Moving generative AI applications to production often requires using
          Vector stores to provide them with relevant context. Keeping these
          vector stores up-to-date with changes in your data is critical for the
          continued performance of these applications.{" "}
          <span className="font-[Comfortaa]">dat </span>makes this possible by
          setting up pipelines to update your vector stores as your source data
          changes.
        </p>
        <div className="flex mt-12 mb-6 w-12/12 flex-wrap">
          <div className="lg:w-3/12 w-10/12 lg:mx-0 mx-auto p-2">
            <Card className="border-[#E5EBFF] rounded">
              <CardHeader className="p-4">
                <CardTitle>
                  <div className="pl-2 flex gap-2 items-center">
                    <div>
                      <div className="size-9 rounded-full bg-blue-200 flex justify-center items-center">
                        <WhatDat1 className="h-6 w-6 m-auto" />
                      </div>
                    </div>
                    <div>
                      <p>Extract Unstructured data</p>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="lg:px-3 px-6">
                <p className="text-xs">
                  Breaking down silos and enabling seamless integration with any
                  vector database and LLM frameworks.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="lg:w-3/12 w-10/12 lg:mx-0 mx-auto lg:mt-16 p-2">
            <Card className="border-[#E5EBFF] rounded">
              <CardHeader className="p-4">
                <CardTitle>
                  <div className="pl-2 flex gap-2 items-center">
                    <div>
                      <div className="size-9 rounded-full bg-blue-200 flex justify-center items-center">
                        <LoadPopularVectors
                          className="h-6 w-6 m-auto"
                          role="img"
                          aria-label="Load pupular vector image."
                        />
                      </div>
                    </div>
                    <div>
                      <p className="leading-5">Load to Popular Vector Stores</p>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="lg:px-3 px-6">
                <p className="text-xs">
                  Build your own connector and collaborate with growing DAT’s
                  community for assistance and queries.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="lg:w-3/12 w-10/12 lg:mx-0 mx-auto p-2">
            <Card className="border-[#E5EBFF] rounded">
              <CardHeader className="p-4">
                <CardTitle>
                  <div className="pl-2 flex gap-2 items-center">
                    <div>
                      <div className="size-9 rounded-full bg-blue-200 flex justify-center items-center">
                        <RAG
                          className="h-4 w-4 m-auto"
                          role="img"
                          aria-label="Image of RAG specific transformations."
                        />
                      </div>
                    </div>
                    <div>
                      <p className="leading-5">RAG specific transformations</p>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="lg:px-3 px-6">
                <p className="text-xs">
                  Protect your data with robust security features, including
                  encryption, access controls, and audit trails, ensuring
                  compliance and data integrity.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="lg:w-3/12 w-10/12 lg:mx-0 mx-auto lg:mt-16 p-2">
            <Card className="border-[#E5EBFF] rounded">
              <CardHeader className="p-4">
                <CardTitle>
                  <div className="pl-2 flex gap-2 items-center">
                    <div>
                      <div className="size-9 rounded-full bg-blue-200 flex justify-center items-center">
                        <Security
                          className="h-6 w-6 m-auto"
                          role="img"
                          aria-label="Image of dat security."
                        />
                      </div>
                    </div>
                    <div>
                      <p>Security</p>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="lg:px-3 px-6">
                <p className="text-xs">
                  Protect your data with robust security features, including
                  encryption, access controls, and audit trails, ensuring
                  compliance and data integrity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Intro;
