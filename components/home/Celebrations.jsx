import * as React from "react";
import EventCard from "./EventCard";
import ReserveCard from "./ReserveCard";
import AmenityCard from "./AmenityCard";
import { amenityRows } from "@/data/amenities";
import { eventCards } from "@/data/eventCards";

export default function CelebrationsPage() {
  return (
    <div className="flex overflow-hidden flex-col items-center py-20 bg-neutral-200">
      <div className="flex flex-col self-stretch px-6 py-16 w-full bg-black max-md:px-5 max-md:max-w-full">
        <div className="self-center text-5xl font-medium text-center text-white max-md:text-4xl">
          Elevate your
        </div>
        <div className="self-center text-center text-white text-[222px] max-md:max-w-full max-md:text-4xl">
          Celebrations
        </div>

        <div className="z-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {eventCards.slice(0,2).map((card, index) => (
              <EventCard key={index} {...card} />
            ))}
          </div>
        </div>

        <div className="mt-4 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {eventCards.slice(2).map((card, index) => (
              <EventCard key={index} {...card} />
            ))}
            <ReserveCard />
          </div>
        </div>
      </div>

      {amenityRows.map((row, rowIndex) => (
        <div key={rowIndex} className={`mt-${rowIndex === 0 ? '96' : '12'} w-full max-w-[1361px] max-md:mt-10 max-md:max-w-full`}>
          <div className="flex gap-5 max-md:flex-col">
            {row.map((amenity, index) => (
              <div key={index} className={`flex flex-col ${index > 0 ? 'ml-5' : ''} w-${12/row.length}/12 max-md:ml-0 max-md:w-full`}>
                <AmenityCard title={amenity.title} iconColor={amenity.icon} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}