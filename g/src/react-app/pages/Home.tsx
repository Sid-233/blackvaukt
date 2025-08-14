import Hero from "@/react-app/components/Hero";
import ServiceOverview from "@/react-app/components/ServiceOverview";
import Testimonials from "@/react-app/components/Testimonials";
import Partners from "@/react-app/components/Partners";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServiceOverview />
      <Testimonials />
      <Partners />
    </div>
  );
}
