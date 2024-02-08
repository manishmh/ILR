"use client";

import FormOne from "@/components/form-one";
import FormTwo from "@/components/form-two";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { FaCheck } from "react-icons/fa6";

function FormWrapper() {
  const [isPending, startTransition] = useTransition();
  const [inputParent, setInputParent] = useState({
    kiit: true,
    kiss: false,
  });

  function handleInputParent(parent: string) {
    setInputParent((prevInputParent) => ({
      ...prevInputParent,
      kiit: false,
      kiss: false,

      [parent]: true,
    }));
  }

  return (
    <div id="register" className="px-4 pt-6 font-sans bg-[#F5F7F8]">
      <div className="flex flex-col md:flex-row gap-4 max-w-md md:max-w-screen-2xl justify-center mx-auto md:gap-32 items-center py-20">
        <div className="flex flex-col  gap-4 md:w-1/3 max-w-sm">
          <h1 className="text-3xl font-semibold font-sans text-[#373A3C]">
            Get in touch with our team
          </h1>
          <div className="text-sm text-gray-700 space-y-3">
            <h2 className="">Learn what you can</h2>
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-700" />
              <span>Connect curriculum to careers</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-700" />
              <span>Strengthen employment outcomes</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-700" />
              <span>Enhance learning experiences</span>
            </div>
          </div>
          <h2 className="font-sans text-xl font-semibold text-[#373A3C] mt-4">
            Join KIIT and KISS&apos;s Indigenous Language Repository.
          </h2>
          <Button
            size="lg"
            onClick={() => handleInputParent("kiit")}
            className={`transition-all duration-500 max-w-xs ${
              inputParent.kiit &&
              "h-16 bg-blue-700 hover:bg-blue-600 active-parent max-w-none"
            }`}
          >
            KIIT
          </Button>
          <Button
            size="lg"
            onClick={() => handleInputParent("kiss")}
            className={`transition-all duration-500 max-w-xs mb-8 md:mb-0 ${
              inputParent.kiss &&
              "h-16 scale-[105%] bg-blue-700 hover:bg-blue-600 active-parent max-w-none"
            }`}
          >
            KISS
          </Button>
        </div>
        <div className="w-full md:max-w-sm lg:max-w-md xl:max-w-lg border px-2 sm:px-4 py-8 border-gray-800">
          {inputParent.kiit && <FormTwo />}
          {inputParent.kiss && <FormOne />}
        </div>
      </div>
    </div>
  );
}

export default FormWrapper;
