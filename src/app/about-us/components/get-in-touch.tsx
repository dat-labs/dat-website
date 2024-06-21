import { LogoWithoutColor } from "@/assets";
import { ContactUsForm } from "./contact-us-form";

function GetInTouch() {
  return (
    <div className="w-11/12 lg:w-8/12 mx-auto lg:p-10 p-5">
      <div className="flex justify-between lg:flex-row flex-col gap-16">
        <div className="lg:w-5/12 flex flex-start items-center">
          <LogoWithoutColor className="opacity-[0.06]" />
          <p className="font-semibold text-7xl lg:w-9/12 -ml-[100px]">Get in touch with us</p>
        </div>
        <div className="lg:w-6/12">
          <div className="border p-10">
            <h1 className="text-2xl font-semibold mb-5">Contact Us</h1>
            <div className="border-2 mb-5"></div>
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
