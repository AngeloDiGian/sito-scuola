import About from "@/components/about";
import EdCivica from "@/components/ed-civica";
import Intro from "@/components/intro";
import PCTOSection from "@/components/pcto-section";
import SectionYDivider from "@/components/section-y-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionYDivider />
      <About />
      <PCTOSection />
      <EdCivica />
    </main>
  );
}
