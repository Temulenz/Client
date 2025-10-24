"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Drawer } from "vaul";
import { Button } from "@/components/ui/button";
import { DrawerTitle, DrawerDescription } from "@/components/ui/drawer";

type Food = {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  ingredients: string;
};

const Userheader = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [cart, setCart] = useState<Food[]>([]);
  const handleRemoveItem = (id: string) => {
    setCart(cart.filter((item) => item._id !== id));
  };
  const router = useRouter();
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    setEmail(storedEmail);

    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const hanldeSignOut = () => {
    localStorage.removeItem("userEmail");
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
          <Drawer.Root>
            <Drawer.Trigger asChild>
              <button className="relative rounded-full mx-4 py-2 px-4 bg-white">
                <img src="shop.svg" />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </Drawer.Trigger>

            <Drawer.Portal>
              <Drawer.Content className="fixed top-0 right-0 h-screen w-[470px] bg-[#404040] p-5 overflow-y-auto ">
                <div className="flex justify-between items-center">
                  <DrawerTitle className="text-white text-lg font-semibold mb-2">
                    <div className="flex ">
                      <img src="shops.svg" alt="" />
                      <div className="ml-3"> Order detail</div>
                    </div>
                  </DrawerTitle>

                  <Drawer.Close asChild>
                    <button className=" bg-[#404040] border  hover:bg-red-500 text-white rounded-full px-2 mb-4 py-2 font-medium">
                      <img src="x.svg" alt="" />
                    </button>
                  </Drawer.Close>
                </div>

                <div>
                  <div className="bg-white flex justify-center rounded-full py-0.5 ">
                    <div className=" px-[89px] hover:bg-red-500 py-0.5 rounded-full">
                      <button>Cart</button>
                    </div>
                    <div className=" px-[87px] py-0.5  hover:bg-red-500 rounded-full">
                      <button>Order</button>
                    </div>
                  </div>
                </div>

                {cart.length === 0 ? (
                  <div className="text-center text-gray-500">
                    No items in cart
                  </div>
                ) : (
                  <div className="py-6 ">
                    <div className="bg-white rounded-2xl  px-5">
                      <div className="text-[24px] font-semibold text-[#71717A] pt-4">
                        My Cart
                      </div>
                      {cart.map((item) => (
                        <div key={item._id} className="py-4">
                          <div className="flex">
                            <img
                              src={item.imageUrl}
                              className="w-[124px] h-[120px] rounded"
                            />

                            <div className="pl-[10px] w-[439px[">
                              <div className="flex items-center ">
                                <div className="font-semibold text-red-600">
                                  {item.name}
                                </div>
                                <div className="border rounded-full  py-0.5 px-1">
                                  <button
                                    onClick={() => {
                                      handleRemoveItem(item._id);
                                    }}
                                  >
                                    <img src="xx.svg" />
                                  </button>
                                </div>
                              </div>

                              <div>{item.ingredients}</div>
                              <div className="font-semibold">${item.price}</div>
                            </div>
                          </div>
                        </div>
                      ))}

                      <Drawer.Description className="text-gray-300 mb-4">
                        Your cart items are listed below.
                      </Drawer.Description>
                    </div>
                  </div>
                )}
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>

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
                <button onClick={hanldeSignOut}>Sign out</button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Userheader;
