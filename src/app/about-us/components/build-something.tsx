import { GitHubLogoIcon, EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { DiscordBlueIcon } from "@/assets";
import { MailBoxIcon } from "@/assets";

const community = [
  {
    icon: GitHubLogoIcon,
    infoText: "Contribute on github",
  },
  {
    icon: DiscordBlueIcon,
    infoText: "Join our growing Slack community",
  },
  {
    icon: MailBoxIcon,
    infoText: "Subscribe to our newsletter to stay up-to-date.",
  },
];

const BuildWithData = () => {
  const renderCommunity = () => {
    return (
      <>
        {community.map((item, index) => (
          <div
            className="lg:gap-7.5 w-11/12 lg:w-10/12 inline-flex flex-col items-center gap-7.5"
            key={index}
          >
            <div className="flex items-center justify-center border shadow-lg size-36 rounded-[0.6875rem] border-[var(--Dimensions-px,]  border-zinc-500 bg-white">
              <item.icon className="h-24 w-24" />
            </div>
            <p className="lg:w-58 w-9/12 lg:text-zinc-400 text-center font-dm-sans text-xl font-medium mt-8">
              {item.infoText}
            </p>
          </div>
        ))}
      </>
    );
  };

  return (
    // <div className="w-11/12 lg:w-8/12 mx-auto lg:p-10 p-12">
    //   <div className="flex flex-col">
    //     <div className="flex flex-col gap-2">
    //       <p className="lg:text-4xl text-2xl font-bold">Helps you to</p>
    //       <p className="lg:text-7xl text-5xl font-bold w-10/12">
    //         Build something amazing with your data
    //       </p>
    //     </div>
    //     <div className="flex lg:flex-row flex-col items-center justify-between mt-20 lg:gap-0 gap-12">
    //       {renderCommunity()}
    //     </div>
    //   </div>
    // </div>

    <div className="relative w-full bg-buildSomething bg-cover mb-6">
      <div className="absolute inset-0 bg-white opacity-90"></div>
      <div className="relative w-full lg:w-8/12 mx-auto lg:p-10 p-3 flex flex-col justify-center items-start gap-2">
        <div className="text-gray-900 font-dm-sans lg:text-4xl text-2xl font-bold leading-[47.469px]">
          Helps you to
        </div>
        <div className="text-gray-900 lg:w-10/12 font-dm-sans lg:text-6xl text-4xl font-bold leading-[113.495%]">
          Build something amazing with your data
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-between lg:mt-16 mt-12 lg:gap-0 gap-12">
          {renderCommunity()}
        </div>
      </div>
    </div>
  );
};

export default BuildWithData;
