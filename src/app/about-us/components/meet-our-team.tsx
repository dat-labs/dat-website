import {
  Sandeep,
  Aditya,
  Rijumone,
  Rahul,
  Ankit,
  Rupesh,
  Raghav,
} from "@/assets";

const teamMember = [
  {
    icon: Sandeep,
    name: "Sandeep Singh",
    designation: "Co-Founder & CTO",
  },
  {
    icon: Aditya,
    name: "Aditya Sudan",
    designation: "Head of Product",
  },
  {
    icon: Rijumone,
    name: "Rijumone Chowdhary",
    designation: "Lead Developer",
  },
  {
    icon: Rahul,
    name: "Rahul Kumar",
    designation: "Senior Developer",
  },
  {
    icon: Ankit,
    name: "Ankit Juneja",
    designation: "Senior Developer",
  },
  {
    icon: Rupesh,
    name: "Rupesh",
    designation: "Developer",
  },
  {
    icon: Raghav,
    name: "Raaghav Gaur",
    designation: "Associate Product Manager",
  },
];

function MeetOurTeam() {
  return (
    <div className="[background:#1F1F1F] text-white lg:p-3  p-6">
      <div className="w-11/12 lg:w-8/12 mx-auto mt-4">
        <h2 className="text-white lg:text-6xl text-4xl font-bold">
          Meet our Team
        </h2>
        <h3 className="text-white lg:text-4xl text-2xl font-bold mb-2">
          Vision
        </h3>
        <p className="text-lg text-zinc-400">
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
              <div className="lg:w-40 lg:h-40">
                <member.icon className="w-full h-full"/>
              </div>
              <p>{member.name}</p>
              <p>{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeetOurTeam;
