import FoodCard from "./FoodCard";

export default function Card() {
  const data = {
    imageUrl: "/chowmin.png", // Replace with your static image path
    title: "Epicure Bistro",
    tags: ["Turkish", "Thai", "Chinese"],
    influencers: [
      { imageUrl: "/chowmin.png", name: "Influencer 1" },
      { imageUrl: "/chowmin.png", name: "Influencer 2" },
      { imageUrl: "/chowmin.png", name: "Influencer 3" },
    ],
    reviewCount: "5+",
  };

  return (
    <FoodCard
      imageUrl={data.imageUrl}
      title={data.title}
      tags={data.tags}
      influencers={data.influencers}
      reviewCount={data.reviewCount}
    />
  );
}
