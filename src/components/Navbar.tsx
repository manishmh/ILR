import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="w-full py-4 flex justify-between transition-all duration-300 items-center max-w-screen-2xl mx-auto px-4 gap-4">
      <div>
        <div className="text-[#0056D2] font-semibold text-4xl leading-8">
          KILR
        </div>
        <div className="text-blue-700 uppercase text-xs tracking-wide">
          Kalinga Indigenous Language Repository
        </div>
      </div>
      <div className="space-x-8 font-sans flex-shrink-0">
        <Link href="#register">
          <Button
            className="bg-[#0056D2] font-semibold hover:bg-blue-600"
            size={"sm"}
          >
            Register
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
