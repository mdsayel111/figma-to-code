import Badge from "./Badge";

export default function Influencers({ influencers, reviewCount }) {
  return (
    <div className="flex items-center mt-4">
      <div className="flex">
        {influencers.map((influencer, index) => (
          <Badge key={index} imageUrl={influencer.imageUrl} altText={influencer.name} />
        ))}
      </div>
      <span className="ml-4 text-sm font-medium text-gray-700">
        {reviewCount} Influencers reviewed
      </span>
    </div>
  );
}
