export default function AmenityCard({ title, icon }) {
  return (
    <div className="bg-[#D9D9D9] rounded-3xl flex flex-col gap-5 items-center justify-center my-3 w-[20%] py-5 hover:bg-primary transition-all duration-500 ease-in-out">
      <div className="group bg-white rounded-full h-[50px] w-[50px] smooth flex items-center justify-center">
        {icon}
      </div>
      <p className="font-semibold">{title}</p>
    </div>
  );
}
