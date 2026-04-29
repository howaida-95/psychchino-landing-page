import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
