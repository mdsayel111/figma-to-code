import Image from "next/image";

function ReviewerAvatars({ reviewers, extraCount = 0 }) {
  return (
    <div className="flex items-center -space-x-2">
      {reviewers.map((reviewer) => (
        <div
          key={reviewer.id}
          className="relative w-8 h-8 border-2 border-white rounded-full overflow-hidden"
        >
          <Image
            src={reviewer.image}
            alt={`${reviewer.name}'s review`}
            layout="fill"
            className="object-cover"
          />
        </div>
      ))}
      {extraCount > 0 && (
        <div className="flex items-center justify-center w-8 h-8 text-sm font-medium text-white bg-gray-400 border-2 border-white rounded-full">
          +{extraCount}
        </div>
      )}
    </div>
  );
}

export default ReviewerAvatars;
