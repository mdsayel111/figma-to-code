import Image from "next/image";

export default function Badge({ imageUrl, altText }) {
    return (
      <Image
        src={imageUrl}
        alt={altText}
        height={400}
        width={400}
        className="w-8 h-8 rounded-full border-2 border-white -ml-3 first:ml-0"
      />
    );
  }
  