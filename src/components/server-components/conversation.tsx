import React from "react";
import { Button } from "../ui/button";

const Conversation = () => {
  return (
    <div className="mt-24">
      <div className="rounded-2xl border">
        <div className="p-10">
          <p className="text-3xl font-semibold">Join the Conversation</p>
          <p className="text-md text-muted-foreground mt-6 w-6/12">
            Have questions, feedback, or ideas? Join the dat community forum to
            connect with fellow users and developers.
          </p>
          <div className="flex mt-6 gap-3">
            <Button>Join Slack</Button>
            <Button variant="outline">Join Github</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
