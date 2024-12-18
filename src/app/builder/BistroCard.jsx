import * as React from "react";
import { CuisineTag } from "./CuisineTag";
import Image from "next/image";

export function BistroCard() {
  const cuisines = ["Turkish", "Thai", "Chinese"];

  return (
    <div className="flex overflow-hidden flex-col max-w-[414px] text-neutral-800">
      <Image
      
        src="/chowmin.png"
        alt="The Grove Bistro restaurant exterior"
        height={400}
        width={400}
        className="object-contain w-full rounded-xl aspect-[1.01]"
      />
      <div className="flex flex-col self-center pr-2.5 mt-5 max-w-full w-[392px]">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-2.5 text-2xl font-medium">
            <Image
             height={400}
             width={400}
              src="/chowmin.png"
              alt="The Grove Bistro logo"
              className="object-contain shrink-0 w-9 rounded-xl aspect-square"
            />
            <div className="my-auto basis-auto">The Grove Bistro</div>
          </div>
          <div className="flex gap-1.5 my-auto text-base">
            {cuisines.map((cuisine, index) => (
              <CuisineTag key={index} cuisine={cuisine} />
            ))}
          </div>
        </div>
        <div className="flex gap-4 self-start mt-4 text-2xl font-light tracking-wide">
          <div 
            className="flex shrink-0 rounded-full border border-red-600 border-solid bg-zinc-300 h-[34px] w-[127px]"
            role="img"
            aria-label="Influencer review indicator"
          />
          <div className="my-auto basis-auto">Influencers reviewed</div>
        </div>
      </div>
    </div>
  );
}