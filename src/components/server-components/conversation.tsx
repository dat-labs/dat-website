import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { DiscordButton, DiscordIcon, StarUsButton } from "@/assets";

const Conversation = () => {
  return (
    <div className="lg:mt-24 mt-10">
      <div className="relative rounded-2xl border bg-[url('/assets/join-conversation.svg')] bg-cover">
        <div className="absolute inset-0 bg-white opacity-40"></div>
        <div className="relative lg:p-10 p-0 flex lg:flex-row flex-col">
          <div className="px-2 lg:ml-0 ml-3 w-full lg:w-6/12">
            <p className="lg:text-3xl text-2xl font-bold lg:mt-0 mt-6">
              Join the Conversation
            </p>
            <p className="text-sm text-muted-foreground my-6 ">
              Have questions, feedback, or ideas? Join the{" "}
              <span className="font-[Comfortaa]">dat </span>community forum to
              connect with fellow users and developers.
            </p>
            <div className="lg:space-x-4 hidden lg:flex">
              <Link
                href={"https://discord.gg/En7TRBYE"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordButton className="h-[42px] hover:opacity-90" />
              </Link>

              <Link
                href={"https://github.com/dat-labs/dat-main"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StarUsButton className="h-[42px] hover:opacity-90" />
              </Link>
            </div>

            <div className="flex-col mb-4 space-y-4 flex lg:hidden">
              <Link
                href={"https://github.com/dat-labs/dat-main"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StarUsButton className="h-[42px] hover:opacity-90" />
              </Link>
              <Link
                href={"https://discord.gg/En7TRBYE"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordButton className="h-[42px] hover:opacity-90" />
              </Link>
            </div>
          </div>

          <div
            className="h-[0.7px] mt-12 rounded-sm w-full lg:hidden"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #EEEEEE 0%, #888888 50%, #EEEEEE 100%)",
            }}
          ></div>

          <div className="leading-[4rem] px-2 ml-3 lg:ml-24 text-5xl font-semibold lg:my-0 my-4 bg-gradient-to-b from-[#FFD9D2] to-[#99827E] bg-clip-text text-transparent">
            <div className="lg:border-l lg:pl-10">
              Explore, <br className="hidden lg:block" /> Discover &
              <br className="hidden lg:block" />
              Collaborate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
