import { LogoWithoutColor } from "@/assets";
import { ContactUsForm } from "./contact-us-form";
import { Card } from "@/components/ui/card";

function GetInTouch() {
  return (
    <div className="w-11/12 mx-auto lg:p-10 p-5">
      <div className="flex justify-between lg:flex-row flex-col lg:gap-16 gap-6">
        <div className="lg:w-6/12 flex flex-start items-center lg:mt-0 mt-8">
          <div className="opacity-50 h-full translate-x-[138px] w-px bg-gradient-to-b from-[#EEEEEE] via-[#888888] to-[#EEEEEE]"></div>

          <LogoWithoutColor className="opacity-[0.06] lg:w-9/12 w-11/12" />

          <p className="font-semibold lg:text-7xl text-4xl w-full lg:-ml-[105px] -ml-[40px]">
            Get in <br /> touch with us
          </p>
        </div>

        <div className="w-1/12 flex">
          <div className="opacity-50 h-full w-px bg-gradient-to-b from-[#EEEEEE] via-[#888888] to-[#EEEEEE]"></div>
        </div>

        <div className="rotate-90 opacity-50 h-full -translate-y-[145px] w-px bg-gradient-to-b from-[#EEEEEE] via-[#888888] to-[#EEEEEE]"></div>

        <div className="lg:w-6/12">
          <Card className="border p-10">
            <h1 className="text-2xl font-semibold mb-5">Contact Us</h1>
            <div className="border-b mb-5"></div>
            <ContactUsForm />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
