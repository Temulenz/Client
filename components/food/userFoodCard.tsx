import React from "react";
import { FaPlus } from "react-icons/fa6";

type Categor = {
  name: string;
  _id: string;
};

type Food = {
  _id: string;
  name: string;
  price: number;
  ingredients: string;
  imageUrl: string;
  categoryId: Categor;
};

type Props = {
  food: Food;
  onAddToCart: () => void;
};

const UserFoodCard = ({ food, onAddToCart }: Props) => {
  return (
    <div className="border w-[397px] relative rounded-2xl p-4 bg-white">
      <div className="h-[210px] relative">
        <img className="w-[365px] h-[210px]" src={food.imageUrl} />
        <button
          onClick={onAddToCart}
          className="border absolute top-40 right-9 py-3.5 px-3.5 rounded-full bg-white"
        >
          <FaPlus className="text-red-500" />
        </button>
      </div>
      <div className="flex justify-between mt-4 mb-2">
        <div className="text-red-600 text-[24px] font-semibold">
          {food.name}
        </div>
        <div className="text-[18px] text-black">${food.price}</div>
      </div>
      <div className="text-gray-600 text-[14px]">{food.ingredients}</div>
    </div>
  );
};

export default UserFoodCard;
