import Layout from "@/layouts/Layout";
import Hero from "@/components/custom/Hero";
import WeddingOpeningScreen from "@/components/custom/WeddingOpeningScreen";
import WeddingEvent from "@/components/custom/WeddingEvent";
import Gallery from "@/components/custom/Gallery";
import WeddingGuestbookPreview from "@/components/custom/WeddingGuestbookPreview";

function Home() {
  return (
    <Layout>
      <WeddingOpeningScreen />
      <Hero />
      <Gallery />
      <WeddingEvent />
      <WeddingGuestbookPreview />
    </Layout>
  );
}

export default Home;
