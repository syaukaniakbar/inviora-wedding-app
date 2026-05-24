import Footer from "@/components/custom/Footer";

function Home(props) {
  return (
    <section className="flex flex-col min-h-screen bg-black justify-between">
      {props.children}
      <Footer />
    </section>
  );
}

export default Home;
