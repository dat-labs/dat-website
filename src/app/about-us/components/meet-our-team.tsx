import {
  Sandeep,
  Aditya,
  Rijumone,
  Rahul,
  Ankit,
  Rupesh,
  Raghav,
  LinkedIn,
  Shivam,
} from "@/assets";
import Link from "next/link";

const teamMember = [
  {
    icon: Sandeep,
    name: "Sandeep Singh",
    designation: "Co-Founder & CTO",
    linkedInId: "https://www.linkedin.com/in/sandeep-singh-a435b65/",
  },
  {
    icon: Aditya,
    name: "Aditya Sudan",
    designation: "Head of Product",
    linkedInId: "https://www.linkedin.com/in/aditya-sudan-1a0729253/",
  },
  {
    icon: Rijumone,
    name: "Rijumone Chowdhary",
    designation: "Lead Developer",
    linkedInId: "https://www.linkedin.com/in/rijumone/",
  },
  {
    icon: Rahul,
    name: "Rahul Kumar",
    designation: "Senior Developer",
    linkedInId: "https://www.linkedin.com/in/rahul-kumar-b67b9280/",
  },
  {
    icon: Ankit,
    name: "Ankit Juneja",
    designation: "Senior Developer",
    linkedInId: "https://www.linkedin.com/in/dev-ankitjuneja/",
  },
  {
    icon: Rupesh,
    name: "Rupesh",
    designation: "Developer",
    linkedInId: "https://www.linkedin.com/in/rupesh-mishra-745102151/",
  },
  {
    icon: Raghav,
    name: "Raaghav Gaur",
    designation: "Associate Product Manager",
    linkedInId: "https://www.linkedin.com/in/raaghav-gaur-b6637965/",
  },
  {
    icon: Shivam,
    name: "Shivam Kashyap",
    designation: "UX Designer",
    linkedInId: "https://www.linkedin.com/in/shivam-kashyap-326796147/",
  },
];

function MeetOurTeam() {
  return (
    <div className="[background:#1F1F1F] text-white lg:p-3 p-6 lg:mx-0 mx-6">
      <div className="w-11/12 lg:w-8/12 mx-auto mt-4">
        <h2 className="text-white lg:text-6xl text-4xl font-bold mb-4">
          Meet our Team
        </h2>
        <h4 className="text-white lg:text-4xl text-2xl font-bold mb-4">
          DAT Vision Statement
        </h4>
        <p className="text-lg text-zinc-400 mb-4">
          At DAT, our vision is to revolutionize the landscape of Generative AI
          by ensuring that your AI initiatives are always production-ready. We
          believe in the power of real-time, accurate data to fuel the next
          generation of AI applications. Our open-source SaaS platform is
          designed to keep your vector databases perpetually synchronized with
          the latest changes in your source data, providing your AI models with
          the most current and relevant context.
        </p>
        <p className="text-lg text-zinc-400 mb-4">
          By bridging the gap between dynamic data sources and AI-driven
          insights, we empower organizations to deliver precise, reliable, and
          context-aware solutions. Whether you're building cutting-edge RAG
          (Retrieval-Augmented Generation) applications or deploying large-scale
          AI systems, DAT ensures that your AI models operate with the freshest
          data, unlocking new levels of performance and accuracy.
        </p>
        <p className="text-lg text-zinc-400 mb-4">
          Our mission is to make generative AI not just smart, but truly
          intelligent—driven by data that reflects the present, not the past.
          With DAT, your AI initiatives aren't just set for today—they're ready
          for tomorrow.
        </p>
        <div className="grid lg:grid-cols-4 gap-4 p-8 text-zinc-400">
          {teamMember.map((member, index) => (
            <div key={index} className="flex flex-col">
              <div className="lg:w-50 lg:h-50 mx-auto">
                <member.icon className="w-full h-full" />
              </div>

              <div className="mx-auto px-3 text-center relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full size-12 bg-white rounded-full">
                  <Link
                    href={member.linkedInId}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn />
                  </Link>
                </div>
                <p className="mt-2">{member.name}</p>
                <p>{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeetOurTeam;
