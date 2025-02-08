export default function EventCard({ title, image }) {
  return (
    <div className="flex flex-col">
      <div className="relative overflow-hidden flex flex-col grow px-16 pt-14 text-5xl text-center uppercase h-[490px] w-full rounded-3xl text-amber-500 text-opacity-80 max-md:px-5 max-md:pb-24 max-md:mt-4 max-md:max-w-full max-md:text-4xl">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="object-cover w-[100%] h-full absolute inset-0"
        />
        <p className="z-[99] font-modern absolute font-semibold opacity-75">{title}</p>
      </div>
    </div>
  );
}
