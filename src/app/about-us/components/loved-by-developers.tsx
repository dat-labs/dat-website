import { HeartHandshake, LinkedIn, Twitter } from "@/assets";
import { Button } from "@/components/ui/button";
import { LovedByBuilders } from "@/assets";
import Link from "next/link";

function LovedByDevelopers() {
  return (
    <div className="w-11/12 lg:w-8/12 mx-auto flex flex-col">
      <div className="flex justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-4">
            <HeartHandshake className="h-12 w-12" />
            <h2 className="text-[38.909px] font-bold">Loved by Builders.</h2>
          </div>
          <p className="font-sans text-zinc-500">
            DAT is the data movement tool for everyone who values collaboration.
            Follow us on social media.
          </p>
        </div>
        <div className="flex items-center">
          <Link
            href={"https://discord.gg/En7TRBYE"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="text-lg gap-2 h-12 shadow-md">
              Connect with us over
              <LinkedIn className="w-[34px] h-[34px]" />
              <Twitter className="w-[34px] h-[34px]" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-8 mb-20">
        <LovedByBuilders className="h-full w-full" />
      </div>
    </div>
  );
}

export default LovedByDevelopers;
