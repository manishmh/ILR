import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full py-4 flex justify-between transition-all duration-300 items-center max-w-screen-2xl mx-auto px-4 gap-4">
        <Link href="/">
      <div>
        <div className="text-[#0056D2] font-semibold text-4xl leading-8">
          KILR
        </div>
        <div className="text-blue-700 uppercase text-xs tracking-wide">
          Kalinga Indigenous Language Repository
        </div>
      </div>
        </Link>
      <div>

        <div className="space-x-4 flex font-sans flex-shrink-0 items-center">
          <div className="rounded-full overflow-hidden border-4  border-blue-600 w-24 h-24 flex self-center">
            <Image
              src={"/Achyuta-Samanta.jpg"}
              alt="achyuta-samanta-hero-image"
              width={300}
              height={300}
              className="rounded-full object-cover w-full h-full"
            ></Image>
          </div>
          <div>
            <h3>Prof. Achyuta Samanta</h3>
            <p>Founder – KIIT & KISS</p>
            <a href="https://achyutasamanta.com">achyutasamanta.com</a>
          </div>
        </div>
        {/* <Link href="#register">
          <Button
            className="bg-[#0056D2] font-semibold hover:bg-blue-600"
            size={"sm"}
          >
            Register
          </Button>
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
