import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";

function Home(props) {
  return (
    <section className="flex flex-col min-h-screen bg-black justify-between space-y-7 sm:space-y-0">
      <Navbar />
      {props.children}
      <Footer />
    </section>
  );
}

export default Home;
