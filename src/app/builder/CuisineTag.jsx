import * as React from "react";

export function CuisineTag({ cuisine }) {
  return (
    <div className="gap-2.5 self-stretch px-1.5 py-1 whitespace-nowrap rounded-lg border border-red-600 border-solid min-h-[22px]" style={{ width: cuisine.length * 7 + 21 }}>
      {cuisine}
    </div>
  );
}