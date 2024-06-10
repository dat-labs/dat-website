import Companies from "@/components/client-components/companies";
import Conversation from "@/components/client-components/conversation";
import DatFlow from "@/components/client-components/dat-flow";
import DiversitySource from "@/components/client-components/diversity-sources";
import Footer from "@/components/client-components/footer";
import GettingStarted from "@/components/client-components/getting-started";
import Intro from "@/components/client-components/intro";
import UnStructuredLlms from "@/components/client-components/unstructured-llms";

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
