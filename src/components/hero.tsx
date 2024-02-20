import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="bg-[#F5F7F8] py-12 md:py-36 font-sans px-4 flex-1 flex flex-col sm:flex-row items-center">
      <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center gap-12 justify-between pb-4 md:pb-0">
        <div className="gap-10 xl:flex-1 md:gap-16 justify-center ">
          <h1 className="font-semibold flex flex-col text-2xl my-8 md:mt-0 md:text-4xl md:leading-[48px]  text-[#373A3C] tracking-[-0.03em] gap-2">
            <span className="italic text-xl md:text-2xl">Celebrating Heritage, Preserving Voices:</span>
            <p>
              KISS & KIIT&apos;s Indigenous Language Repository, a  Digital Tapestry of Rich Heritage.
            </p>
          </h1>
          <div className="flex gap-16 flex-col md:flex-row">
            <Link href="#register">
              <Button
                className="bg-[#0056D2] font-sans font-extrabold hover:bg-blue-600"
                size={"lg"}
              >
                Register
              </Button>
            </Link>

          </div>
        </div>
        <div className="">
          <Image
            src="/hero.jpg"
            alt="hero-image-love-to-learn"
            width={900}
            height={600}
            priority
            className="border-8 border-white rounded-lg shadow-2xl"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;
