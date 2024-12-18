import Image from "next/image";

import ReviewerAvatars from "./ReviewerAvatars";
import CuisineTag from "./CuisineTag";


const restaurantData = {
  name: "Epicure Bistro",
  image: "/chowmin.png",
  cuisines: ["Turkish", "Thai", "Chinese"],
  reviewers: [
    { id: 1, image: "/chowmin.png", name: "Reviewer 1" },
    { id: 2, image: "/chowmin.png", name: "Reviewer 2" },
    { id: 3, image: "/chowmin.png", name: "Reviewer 3" },
  ],
  extraReviewers: 5,
};

export function RestaurantCardVo() {
  return (
    <div className="max-w-sm overflow-hidden bg-white rounded-xl shadow-lg">
      <div className="relative aspect-square">
        <Image
          src={restaurantData.image}
          alt={restaurantData.name}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold text-gray-800">
            {restaurantData.name}
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {restaurantData.cuisines.map((cuisine) => (
            <CuisineTag key={cuisine} name={cuisine} />
          ))}
        </div>

        <div className="flex items-center">
          <span className="mr-2 text-sm text-gray-600">
            Influencers reviewed
          </span>
          <ReviewerAvatars
            reviewers={restaurantData.reviewers}
            extraCount={restaurantData.extraReviewers}
          />
        </div>
      </div>
    </div>
  );
}

