import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="bg-[#F5F7F8] font-sans px-4 flex-1 flex flex-col sm:flex-row items-center">
      <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center gap-4 justify-between pb-4 md:pb-0">
        <div className="flex flex-col gap-10 md:gap-16 justify-center">
          <div>
            <h1 className="font-bold text-2xl mt-8 md:mt-0 md:text-4xl lg:text-5xl text-[#373A3C] trackingtight uppercase">
              {/* Celebrating Heritage,
              <br /> Preserving Voices : KISS & KIIT&apos;s
              <br /> Indigenous Language Repository,
              <br /> a Digital Tapestry of Rich Heritage. */}
              INDIGENOUS LANGUAGE REPOSITORY
            </h1>
            <h2 className="text-sm md:text-base mt-4 text-gray-700 font-medium">
              Celebrating Heritage, Preserving Voices: KISS & KIIT&apos;s
              Indigenous Language Repository,
              <br /> a Digital Tapestry of Rich Heritage.
            </h2>
          </div>
          <div>
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
        <div className=" h-full">
          <Image
            src="/love-to-learn.jpg"
            alt="hero-image-love-to-learn"
            width={700}
            height={600}
            priority
            className=" max-h-72 object-cover sm:h-[600px] sm:max-h-none xl:h-auto"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;
