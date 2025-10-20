import React from "react";

const Userheader = () => {
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
            className="rounded-full mx-4 py-2 px-4 bg-white"
          >
            <img src="shop.svg" />
          </button>

          <button type="button" className="rounded-full  py-2 px-4 bg-red-400">
            <img src="user.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Userheader;
