import React from "react";
import { BistroCard } from "./builder/BistroCard";
import RestaurantCard from "./blackbox/RestaurantCard";
import { RestaurantCardVo } from "./v0dev/RestaurantCardVo";
import Card from "./chatgpt/Card";

export default function hello() {
  return (
    <div className="flex gap-4 flex-wrap">
      <div className="bg-yellow-50 p-10">
        <p>Builder.io</p>
        <BistroCard />
      </div>
      <div><p>voDev</p>
      <RestaurantCardVo/>
      </div>
      <div>
        <p>BlackBox</p>
        <RestaurantCard/>
      </div>
      <div>
        <p>Chatgpt</p>
        <Card/>
      </div>
    </div>
  );
}
