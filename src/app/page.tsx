import Companies from "@/components/server-components/companies";
import Conversation from "@/components/server-components/conversation";
import DatFlow from "@/components/server-components/dat-flow";
import DiversitySource from "@/components/server-components/diversity-sources";
import Footer from "@/components/server-components/footer";
import GettingStarted from "@/components/server-components/getting-started";
import Intro from "@/components/server-components/intro";
import UnStructuredLlms from "@/components/server-components/unstructured-llms";

export default function Home() {
  return (
    <div>
      <GettingStarted />
      {/* <Companies /> */}
      <Intro />
      <UnStructuredLlms />
      <DatFlow />
      <Conversation />
      <DiversitySource />
      <Footer/>
    </div>
  );
}
