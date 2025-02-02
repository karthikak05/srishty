export default function ReserveCard() {
    return (
      <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow items-start pt-12 pr-10 w-full font-medium text-white bg-[linear-gradient(148deg,#00B2B2_33.63%,#163E54_95.41%)] rounded-[50px] max-md:mt-5 max-md:max-w-full">
          <div className="self-stretch mr-3 ml-8 text-3xl max-md:mx-2.5">
            Reserve Your Moment
          </div>
          <div className="mt-3.5 ml-8 text-base max-md:ml-2.5">
            From corporate meetings to dream weddings, our venue is perfect for every occasion
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/2b4a6fcd01cf43b4b259a1a23997a0b8/997b99aba05ec08b166f63dfdec2e2300e6a8321fa5991b46d40a6cd6e4d8e97?apiKey=2b4a6fcd01cf43b4b259a1a23997a0b8&"
            alt=""
            className="object-contain mt-20 w-full aspect-square max-md:mt-10"
          />
        </div>
      </div>
    );
  }