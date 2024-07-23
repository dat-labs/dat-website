import React, { useState } from "react";
import {
  ArrowTopRightIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

function RequestConnector() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-fit"
          onClick={() => setIsOpen(true)}
        >
          <span className="p-0.5 bg-black rounded-full mr-2">
            <ArrowTopRightIcon color="white" className="size-4" />
          </span>
          Request a Connector
        </Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 lg:w-8/12">
        <DialogHeader>
          <DialogTitle className="font-bold text-xl">
            Request a new Integration
          </DialogTitle>
        </DialogHeader>
        <div
          className="h-[1px] mb-6 rounded-sm w-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #EEEEEE 0%, #888888 50%, #EEEEEE 100%)",
          }}
        ></div>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <Label htmlFor="name" className="flex text-left font-semibold">
              Integration Type
              <span className="mx-1 text-[#DC2626]">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Source/Destination/Generators" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Integration</SelectLabel>
                  <SelectItem value="Source">Source</SelectItem>
                  <SelectItem value="Generator">Generator</SelectItem>
                  <SelectItem value="Destination">Destination</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="name" className="flex text-left font-semibold">
              Integration Name
              <span className="mx-1 text-[#DC2626]">*</span>
              <QuestionMarkCircledIcon color="gray" fontSize={14} />
            </Label>
            <Input
              id="name"
              placeholder="Name of integration"
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="connectorWeb"
              className="flex text-left font-semibold gap-1"
            >
              Connector Website for Reference
              <QuestionMarkCircledIcon color="gray" fontSize={14} />
            </Label>
            <Input
              id="connectorWeb"
              className="col-span-3"
              placeholder="Please mention the website of connector"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="email" className="flex text-left font-semibold">
              Your Email-Address
              <span className="mx-1 text-[#DC2626]">*</span>
              <QuestionMarkCircledIcon color="gray" fontSize={14} />
            </Label>
            <Input
              id="email"
              className="col-span-3"
              type="email"
              placeholder="Required so you'll be notified when integration will be released"
            />
          </div>
        </div>
        <DialogFooter className="mt-4 flex flex-row gap-4">
          <Button
            type="reset"
            variant="outline"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button type="submit">Request</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default RequestConnector;
