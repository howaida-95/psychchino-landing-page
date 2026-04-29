import {
  CtaBand,
  Footer,
  Header,
  Hero,
  HowItWorks,
  Services,
  Testimonials,
  Therapists,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Therapists />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
