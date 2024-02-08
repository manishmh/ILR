"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import FormOne from "@/components/form-one";
import FormTwo from "@/components/form-two";

function ProfileForm() {
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
    <div className="px-4 py-6">
      <div className="flex flex-col md:flex-row gap-4 max-w-md md:max-w-7xl mx-auto md:gap-20 justify-between items-center bg-gray-400 py-8">
        <div className="flex md:flex-col  gap-4 md:w-1/3 max-w-sm">
          <Button size="lg" onClick={() => handleInputParent("kiit")} 
            className={`transition-all duration-500 ${inputParent.kiit && "h-16 scale-[105%] bg-blue-700 hover:bg-blue-600 active-parent rounded-r-full "}`}
          > 
            KIIT
          </Button>
          <Button size="lg" onClick={() => handleInputParent("kiss")}
            className={`transition-all duration-500 ${inputParent.kiss && "h-16 scale-[105%] bg-blue-700 hover:bg-blue-600 active-parent rounded-r-full "}`} 
          >
            KISS
          </Button>
        </div>
        <div className="w-full max-w-2xl">
          {inputParent.kiit && (
            <FormTwo />
            )}
          {inputParent.kiss && (
            <FormOne />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
