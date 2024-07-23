import {
  HeartHandshake,
  LinkedIn,
  LovedByBuildersMobile,
  Twitter,
} from "@/assets";
import { Button } from "@/components/ui/button";
import { LovedByBuilders } from "@/assets";

function LovedByDevelopers() {
  return (
    <div className="w-11/12 lg:w-8/12 mx-auto flex flex-col">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <HeartHandshake className="h-12 w-12" />
            <h2 className="lg:text-[38.909px] text-2xl font-bold">
              Loved by Builders.
            </h2>
          </div>
          <p className="text-zinc-500 mt-2 ml-2 text-base">
            <span className="font-[Comfortaa] text-black">dat </span> is the
            data movement tool for everyone who values collaboration. Follow us
            on social media.
          </p>
        </div>
        <div className="flex items-center lg:mt-0 ml-2">
          <div className="mt-6 p-0.5 w-fit rounded-sm bg-gradient-to-r from-[#BDDFFF] via-[#CECCFF] to-[#FFCFD9]">
            <Button
              variant="outline"
              className="text-base gap-2 h-12 shadow-md rounded-sm"
            >
              Connect with us over
              <LinkedIn className="w-[25px] h-[25px]" />
              <Twitter className="w-[25px] h-[25px]" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8 mb-20">
        <LovedByBuilders className="h-full w-full lg:block hidden" />
        <LovedByBuildersMobile className="h-full w-full lg:hidden" />
      </div>
    </div>
  );
}

export default LovedByDevelopers;
