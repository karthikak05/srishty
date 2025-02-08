import * as React from "react";
import EventCard from "./EventCard";
import { eventCards } from "@/data/eventCards";
import { Sparkles } from "../Reusables/Particles";
import Bottle from "../icons/Bottle";

export default function CelebrationsPage() {
  return (
    <div className="flex flex-col self-stretch py-16 w-full bg-black max-md:max-w-full">
      <div className="self-center text-5xl font-medium text-center text-white max-md:text-4xl">
        Elevate your
      </div>
      <div className="font-stylish self-center text-center text-white text-[182px] max-md:max-w-full max-md:text-4xl">
        Celebrations
      </div>

      {/* Grid Layout */}
      <div className="grid grid-rows-2 gap-6 max-md:grid-rows-auto mx-4">
        {/* Row 1 */}
        <div className="grid grid-cols-[44%_55%] gap-4 max-md:grid-cols-1">
          {eventCards.slice(0, 2).map((card, i) => (
            <EventCard key={i} {...card} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-[30%_40%_25%] gap-4 max-md:grid-cols-1">
          {eventCards.slice(2, 5).map((card, i) => (
            <EventCard key={i + 2} {...card} />
          ))}
          <div className="teal-gradient px-4 py-6 rounded-3xl text-white relative">
            <h3 className="text-2xl font-semibold">Reserve Your Moment Now</h3>
            <p className="mt-5">From corporate meetings to dream weddings, our venue is perfect for every occasion</p>
            <div className="absolute bottom-0"><Bottle/></div>
            <div className='relative h-[90%] overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 '>
              <Sparkles
                  density={800}
                  speed={1}
                  size={1.1}
                  direction='top'
                  opacitySpeed={2}
                  color='#FFFFFF'
                  className='absolute inset-x-0 bottom-0 h-full w-full '
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
