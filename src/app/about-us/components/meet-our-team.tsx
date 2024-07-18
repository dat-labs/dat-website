import {
  Sandeep,
  Aditya,
  Rijumone,
  Rahul,
  Ankit,
  Rupesh,
  Raghav,
  LinkedIn,
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
    icon: Raghav,
    name: "Shivam Kashyap",
    designation: "UX Designer",
    linkedInId: "https://www.linkedin.com/in/shivam-kashyap-326796147/",
  },
];

function MeetOurTeam() {
  return (
    <div className="[background:#1F1F1F] text-white lg:p-3  p-6">
      <div className="w-11/12 lg:w-8/12 mx-auto mt-4">
        <h2 className="text-white lg:text-6xl text-4xl font-bold mb-4">
          Meet our Team
        </h2>
        <h3 className="text-white lg:text-4xl text-2xl font-bold mb-4">
          Vision
        </h3>
        <p className="text-lg text-zinc-400 mb-4">
          Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.
        </p>
        <div className="grid lg:grid-cols-4 gap-4 p-8 text-zinc-400">
          {teamMember.map((member, index) => (
            <div key={index} className="flex flex-col">
              <div className="lg:w-50 lg:h-50 mx-auto">
                <member.icon className="w-full h-full" />
              </div>

              <div className="mx-auto px-3 text-center relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full size-12 bg-white rounded-full">
                  <Link href={member.linkedInId}>
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
