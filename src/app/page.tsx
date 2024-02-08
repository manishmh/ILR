import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Card from "@/components/card";
import FormWrapper from "@/components/form-wrapper";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main>
      <div className="mx-auto ">
        <div className="min-h-screen  flex flex-col ">
          <Navbar />
          <hr />
          <Hero />
        </div>
        <Card />
        <FormWrapper />
        <Footer />
      </div>
    </main>
  );
}
