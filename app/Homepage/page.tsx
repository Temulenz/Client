import React from "react";
import UserLayout from "../_components/UserLayout";
import UserFoodContainer from "@/components/food/foodContainer";

const page = () => {
  return (
    <div className="bg-[#404040]">
      <UserLayout></UserLayout>

      <UserFoodContainer></UserFoodContainer>
    </div>
  );
};

export default page;
