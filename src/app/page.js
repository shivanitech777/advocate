
import DemoHero from "@/components/DemoHero";
import Count from "@/components/Count";
import TargetSection from "@/components/Target";
import AboutPage from "@/components/About";
import Factual from "@/components/Factual";
import Practice from "@/components/Areas";
import ProcessSection from "@/components/ui/process";







export default function Home() {
  return (
    <>
    <DemoHero/>
    <Count/>
     <TargetSection/>
    <AboutPage show={true}/>
    <ProcessSection/>
    <Practice/>
    <Factual/>
    
    
    </>
  );
}
