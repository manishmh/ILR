import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/about";
import Card from "@/components/card";
import FormWrapper from "@/components/form-wrapper";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main>
      <div className="mx-auto ">
        <div className="flex flex-col ">
          <Navbar />
          <hr />

          <Hero />
        </div>
        <About />
        <Card />
        <FormWrapper />
        <Footer />
      </div>
    </main>
  );
}
