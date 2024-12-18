import Image from "next/image";

const RestaurantCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src="/chowmin.png"
        alt="Restaurant Image"
        width={300}
        height={200}
        className="w-full object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              width={300}
              height={200}
              src="/chowmin.png"
              alt="Restaurant Logo"
              className="w-10 h-10 rounded-full mr-2"
            />
            <h3 className="text-xl font-bold text-gray-800">Epicure Bistro</h3>
          </div>
          <div className="flex space-x-2">
            <span className="px-2 py-1 rounded-full bg-blue-500 text-white">
              Turkish
            </span>
            <span className="px-2 py-1 rounded-full bg-green-500 text-white">
              Thai
            </span>
            <span className="px-2 py-1 rounded-full bg-red-500 text-white">
              Chinese
            </span>
          </div>
        </div>
        <div className="flex items-center mt-2">
          <Image
            width={300}
            height={200}
            src="/chowmin.png"
            alt="Influencer Profile 1"
            className="w-8 h-8 rounded-full mr-2"
          />
          <Image
            width={300}
            height={200}
            src="/chowmin.png"
            alt="Influencer Profile 2"
            className="w-8 h-8 rounded-full mr-2"
          />
          <Image
            width={300}
            height={200}
            src="/chowmin.png"
            alt="Influencer Profile 3"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-gray-500">5+ Influencers reviewed</span>
        </div>
      </div>
    </div>
  );
};


export default RestaurantCard;