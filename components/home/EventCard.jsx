export default function EventCard({ title, image, width }) {
    return (
      <div className={`flex flex-col w-[${width}] max-md:ml-0 max-md:w-full`}>
        <div className="flex relative flex-col grow px-16 pt-14 text-5xl text-center uppercase min-h-[590px] pb-[483px] rounded-[50px] text-amber-500 text-opacity-80 max-md:px-5 max-md:pb-24 max-md:mt-4 max-md:max-w-full max-md:text-4xl">
          <img
            loading="lazy"
            src={image}
            alt={title}
            className="object-cover absolute inset-0 size-full"
          />
          {title}
        </div>
      </div>
    );
  }