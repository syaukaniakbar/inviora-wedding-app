import Navbar from "@/components/custom/Navbar";
import Hero from "@/components/custom/Hero";
import Footer from "@/components/custom/Footer";

function Home() {
  return (
    <section className="min-h-screen max-h-screen bg-black flex flex-col justify-between box-border">
      <Navbar />
      <Hero />
      <Footer />
    </section>
  );
}

export default Home;
