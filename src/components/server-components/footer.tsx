import { LogoBlack } from "@/assets";
import Image from "next/image";
import React from "react";
const Footer = () => {
  return (
    <div>
      <div
        className="h-[1px] mt-12 mb-12 rounded-sm"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #EEEEEE 0%, #888888 50%, #EEEEEE 100%)",
        }}
      ></div>
      <div className="flex justify-center mb-16">
        <div className="lg:w-8/12 w-11/12 flex justify-between flex-wrap">
          <div className="lg:w-4/12 w-12/12 mb-12 lg:mb-0">
            <LogoBlack className="h-10 w-24" />
            <p className="text-md mt-6 text-muted-foreground">
              Seamlessly moving your data and making it accessible to any vector
              database and popular LLM (Large Language Model) frameworks.
            </p>
            <div className="flex mt-6 gap-4">
              <Image
                width={25}
                height={25}
                src="data:image/png;base64,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"
                alt="slack logo"
              />
              <Image
                width={25}
                height={25}
                src="https://cdn.icon-icons.com/icons2/2428/PNG/512/github_black_logo_icon_147128.png"
                alt="github logo"
              />
              <Image
                width={25}
                height={25}
                src="https://cdn-icons-png.flaticon.com/512/60/60580.png"
                alt="slack logo"
              />
              <Image
                width={25}
                height={25}
                src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
                alt="slack logo"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-4/12">
              <p className="text-lg">EXPLORE CONNECTORS</p>
              <p className="text-muted-foreground text-md mt-3">Sources</p>
              <p className="text-muted-foreground text-md mt-3">Generators</p>
              <p className="text-muted-foreground text-md mt-3">Destination</p>
            </div>
            <div className="w-4/12">
              <p className="text-lg">RESOURCES</p>
              <p className="text-muted-foreground text-md mt-3">
                Documentation
              </p>
              <p className="text-muted-foreground text-md mt-3">Blogs</p>
              <p className="text-muted-foreground text-md mt-3">Newsletter</p>
            </div>
            <div className="w-4/12">
              <p className="text-lg">ABOUT US</p>
              <p className="text-muted-foreground text-md mt-3">Contact Us</p>
              <p className="text-muted-foreground text-md mt-3">LinkedIn</p>
              <p className="text-muted-foreground text-md mt-3">YouTube</p>
              <p className="text-muted-foreground text-md mt-3">Slack</p>
              <p className="text-muted-foreground text-md mt-3">GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
