import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function ActorCard({
  type,
  icon,
  name,
  isVerified,
  path,
}: {
  type: string;
  icon: string;
  name: string;
  isVerified: boolean;
  path: string;
}) {
  return (
    <Card className="">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-md text-muted-foreground">{type}</p>
          {isVerified && (
            <p className="text-blue-500 p-1 pl-2 pr-2 text-sm border-blue-500 border rounded-lg">
              Verified
            </p>
          )}
        </div>
        <div className="flex justify-between items-center bg-muted p-2 rounded-md">
          <div className="flex items-center">
            <Image src={icon} height={25} width={25} alt="icon" />
            <p className="text-md ml-2">{name}</p>
          </div>
          <div>
            <Link href={`https://docs.dat-hub.com/${path}`} target="_blank">
              <ArrowTopRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
