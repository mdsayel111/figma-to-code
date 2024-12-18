import Influencers from "./Influencers";
import Tags from "./Tags";

import Image from "next/image";

export default function FoodCard({
  imageUrl,
  title,
  tags,
  influencers,
  reviewCount,
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-4 w-80">
      <Image
        height={400}
        width={400}
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-4">{title}</h2>

      <Tags tags={tags} />
      <Influencers influencers={influencers} reviewCount={reviewCount} />
    </div>
  );
}
