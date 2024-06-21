import { HeartHandshake, LinkedIn, Twitter } from "@/assets";
import { Button } from "@/components/ui/button";

function LovedByDevelopers() {
  return (
    <div className="w-11/12 lg:w-8/12 mx-auto">
      <div className="flex justify-between">
        <div>
          <div className="flex justify-between">
            <div>
              <div className="flex items-center gap-4">
                <HeartHandshake className="h-12 w-12" />
                <h2 className="text-[38.909px] font-bold">
                  Loved by Builders.
                </h2>
              </div>
              <p>
                DAT is the data movement tool for everyone who values
                collaboration. Follow us on social media.
              </p>
            </div>
            <div className="flex items-center ">
              <Button variant="outline" className="text-lg gap-2 h-12">
                Connect with us over
                <LinkedIn className="w-[34px] h-[34px]" />
                <Twitter className="w-[34px] h-[34px]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LovedByDevelopers;
