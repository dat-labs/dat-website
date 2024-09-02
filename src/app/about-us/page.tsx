import BuildSomething from "./components/build-something";
import GetInTouch from "./components/get-in-touch";
import LovedByDevelopers from "./components/loved-by-developers";
import MeetOurTeam from "./components/meet-our-team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DAT - About Us",
  description: "Meet the dat team.",
  openGraph: {
    title: "DAT - About Us",
    description: "Meet the dat team.",
    type: "website",
    siteName: "Dat Website",
  },
};

function AboutUs() {
  return (
    <div>
      <BuildSomething />
      {/* <LovedByDevelopers /> */}
      <MeetOurTeam />
      <GetInTouch />
    </div>
  );
}

export default AboutUs;
