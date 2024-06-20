import Conversation from "@/components/server-components/conversation";
import DatFlow from "@/components/server-components/dat-flow";
import DiversitySource from "@/components/server-components/diversity-sources";
import GettingStarted from "@/components/server-components/getting-started";
import Intro from "@/components/server-components/intro";
import ReadyToBuild from "@/components/server-components/ready-to-build";
import UnStructuredLlms from "@/components/server-components/unstructured-llms";

export default function Home() {
  return (
    <div className="w-11/12 lg:w-8/12">
      <GettingStarted />
      <Intro />
      <UnStructuredLlms />
      <DatFlow />
      <Conversation />
      <DiversitySource />
      <ReadyToBuild />
    </div>
  );
}
