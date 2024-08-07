import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Conversation = () => {
  return (
    <div className="mt-24">
      <div className="rounded-2xl border bg-[url('/assets/join-conversation.svg')] bg-cover">
        <div className="p-10">
          <p className="text-3xl font-semibold">Join the Conversation</p>
          <p className="text-md text-muted-foreground mt-6 w-6/12">
            Have questions, feedback, or ideas? Join the dat community forum to
            connect with fellow users and developers.
          </p>
          <div className="flex mt-6 gap-3">
            <Link href={"https://discord.gg/En7TRBYE"}>
              <Button aria-label="Join the discord channel for dat.">
                Join Discord
              </Button>
            </Link>

            <Link href={"https://github.com/dat-labs/dat-main"}>
              <Button variant="outline" aria-label="Join the github for dat.">
                Join Github
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
