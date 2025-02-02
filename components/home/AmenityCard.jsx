export default function AmenityCard({ title, iconColor }) {
    return (
      <div className="flex flex-col grow items-center px-16 py-9 w-full text-2xl font-medium text-center text-black bg-zinc-300 rounded-[50px] max-md:px-5 max-md:mt-9">
        <div className={`flex shrink-0 rounded-full bg-${iconColor} h-[76px] w-[76px]`} />
        <div className="mt-7">{title}</div>
      </div>
    );
  }