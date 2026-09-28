import Hero from "@/components/Hero";
import HomeServicesPreview from "@/components/HomeServicesPreview";
import HomeWorkPreview from "@/components/HomeWorkPreview";
import Process from "@/components/Process";
import Addons from "@/components/Addons";
import Testimonials from "@/components/Testimonials";
import HomeContactCTA from "@/components/HomeContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeServicesPreview />
      <HomeWorkPreview />
      <Process />
      <Addons />
      <Testimonials />
      <HomeContactCTA />
    </main>
  );
}
