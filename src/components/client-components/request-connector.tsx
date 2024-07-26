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

import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

function RequestConnector() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const validateURL = (value) => {
    if (!value) return true;
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "(?:www\\.)?" +
        "(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+" +
        "(?:\\.[a-zA-Z]{2,})" +
        "(?:\\/[^\\s]*)?$",
      "i"
    );
    return urlPattern.test(value) || "Please enter a valid URL";
  };

  const onSubmit = (data) => {
    var templateParams = {
      email: data.email,
      name: data.email.split("@")[0],
      message: `Kindly add ${data.name} which is a type of ${
        data.integrationType
      } to dat-ui.
      ${
        data.connectorWeb.length > 0
          ? `\nYou can find the integration here: ${data.connectorWeb} .`
          : ""
      }`,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICEID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_INTERGRATION!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then((response) => {
        toast.success("Request sent successfully!");
        reset();
      })
      .catch((error) => {
        toast.error("Request submission failed.");
        console.log(error);
      });
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <Label
                htmlFor="integrationType"
                className="flex text-left font-semibold"
              >
                Integration Type
                <span className="mx-1 text-[#DC2626]">*</span>
              </Label>
              <Controller
                name="integrationType"
                control={control}
                rules={{ required: "Integration Type is required" }}
                render={({ field: { onChange, value } }) => (
                  <Select onValueChange={onChange} value={value}>
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
                )}
              />
              {errors.integrationType && (
                <span className="text-red-500">
                  {errors?.integrationType?.message}
                </span>
              )}
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
                {...register("name", {
                  required: "Integration Name is required",
                })}
              />
              {errors.name && (
                <span className="text-red-500">{errors?.name?.message}</span>
              )}
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
                {...register("connectorWeb", {
                  validate: validateURL,
                })}
              />
              {errors.connectorWeb && (
                <span className="text-red-500">
                  {errors.connectorWeb.message}
                </span>
              )}
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
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Entered value does not match email format",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500">{errors?.email?.message}</span>
              )}
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
            <Button type="submit" onClick={() => setIsOpen(false)}>
              Request
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default RequestConnector;
