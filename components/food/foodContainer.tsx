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

  const hanldeAddToCart = (food: Food) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(food);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.length);
    alert(`${food.name} added to cart`);
  };
  const getCategories = async () => {
    const result = await fetch(
      "https://be-seven-blond.vercel.app/api/addCategory"
    );
    const responseData = await result.json();
    const { data } = responseData;
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

    const Cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(Cart.length);
  }, []);

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
                    onAddToCart={() => hanldeAddToCart(food)}
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
