import {
  Blogs,
  CtaBand,
  Footer,
  Header,
  Hero,
  HowItWorks,
  IncomingBooks,
  NiceToMeetYou,
  Services,
  Testimonials,
  Therapists,
  WhatICanHelpWith,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatICanHelpWith />
        <NiceToMeetYou />
        <Services />
        <IncomingBooks />
        <HowItWorks />
        <Therapists />
        <Testimonials />
        <Blogs />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
