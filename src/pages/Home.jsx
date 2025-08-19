import Navbar from "@/components/custom/Navbar";
import Hero from "@/components/custom/Hero";
import MarqueeShowcase from "@/components/custom/MarqueeShowcase";
import Footer from "@/components/custom/Footer";

function Home() {
  return (
    <section className="flex flex-col min-h-screen bg-black justify-between space-y-7 sm:space-y-0">
      <Navbar />
      <Hero />
      <MarqueeShowcase />
      <Footer />
    </section>
  );
}

export default Home;
