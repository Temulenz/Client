"use client";
import React, { useEffect, useState } from "react";
import UserFoodCard from "./userFoodCard";

type Food = {
  _id: string;
  name: string;
  price: number;
  ingredients: string;
  imageUrl: string;
  categoryId: Categor;
};

type Categor = {
  name: string;
  _id: string;
};

const UserFoodContainer = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [categories, setCategories] = useState<Categor[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const getCategories = async () => {
    const result = await fetch(
      "https://be-seven-blond.vercel.app/api/addCategory"
    );
    const responseData = await result.json();
    console.log({ responseData });
    const { data } = responseData;
    console.log(data);
    setCategories(data);
  };

  const getFoods = async () => {
    const result = await fetch("https://be-seven-blond.vercel.app/api/addDish");
    const responseData = await result.json();
    setFoods(responseData.data);
  };

  useEffect(() => {
    getCategories();
    getFoods();
  }, []);
  console.log({ foods });

  return (
    <div>
      <div className="px-[88px] pb-22">
        {categories.map((categor) => (
          <div key={categor._id} className="text-white ">
            <div className="text-2xl pt-[48px]  pb-12 font-bold">
              {categor.name}
            </div>
            <div className="flex flex-wrap gap-9 mt-4">
              {foods
                .filter((food) => food.categoryId._id === categor._id)
                .map((food) => (
                  <UserFoodCard
                    onAddToCart={handleAddToCart}
                    key={food._id}
                    food={food}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserFoodContainer;
