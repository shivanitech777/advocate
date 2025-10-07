
import DemoHero from "@/components/DemoHero";
import Count from "@/components/Count";
import TargetSection from "@/components/Target";
import AboutPage from "@/components/About";
import ProcessSection from "@/components/ui/process";
import FAQAndConsultation from "@/components/Factual";
import Areas from "@/components/Areas";



export default function Home() {
  return (
    <>
    <DemoHero/>
    <Count/>
     <TargetSection/>
    <AboutPage show={true}/>
    <ProcessSection/>
    <Areas/>
    <FAQAndConsultation/>
    </>
  );
}
