import Layout from "@/layouts/Layout";
import Hero from "@/components/custom/Hero";
import MarqueeShowcase from "@/components/custom/MarqueeShowcase";

function Home() {
  return (
    <Layout>
      <Hero />
      <MarqueeShowcase />
    </Layout>
  );
}

export default Home;
