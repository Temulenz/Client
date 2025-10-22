"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Userheader = () => {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    setEmail(storedEmail);
  }, []);

  const router = useRouter();

  const hanldeUserclick = () => {
    router.push("/");
  };

  return (
    <div className="bg-[#18181B] w-screen px-22 py-4">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img className="w-[36px] h-[29px] mr-[8px]" src="NOMNOM.png" />
          <div className="text-white">
            <div className="font-semibold">NomNom</div>
            <div className="text-[12px]">Swift Delivery</div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-white flex px-4 py-2.5 border rounded-full">
            <div className="text-red-500 mx-1 ">Delivery address:</div>
            <input
              className="text-gray-600"
              placeholder="Add location"
              type="text"
            />
          </div>

          <button
            type="button"
            className="relative rounded-full mx-4 py-2 px-4 bg-white"
          >
            <img src="shop.svg" />
          </button>

          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="rounded-full  py-4 px-4 bg-red-400"
              >
                <img src="user.svg" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-50">
              <div className="flex justify-center font-semibold ">{email}</div>
              <div className="flex justify-center border rounded-full bg-gray-300">
                <button onClick={hanldeUserclick}>Sign out</button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Userheader;
