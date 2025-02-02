import AboutUs from "@/components/home/About";
import CelebrationsPage from "@/components/home/Celebrations";
import HeroImage from "@/components/home/MaskImage";
import Rooms from "@/components/home/Rooms";

export default function Home() {
  return (
    <div className="mx-4">
      <section>
        <div className="h-[600px] w-[100%] flex items-center justify-center relative">
          <HeroImage/>
          <div className='blue-gradient h-[300px] w-[300px] rounded-2xl absolute left-0 bottom-0 text-white px-4 py-2'>
            <h1 className="text-2xl">Luxury Stays</h1>
          </div>
          <div className='blue-gradient h-[80px] w-[350px] rounded-2xl absolute right-[50px] bottom-0 flex items-center justify-center'>
            <h2 className="text-xl text-white">Stay in Harmony with Nature</h2>
          </div>
        </div>
      </section>

      <section className="mt-[200px] border-test">
        <AboutUs/>
      </section>

      <section className="mt-[200px] border-test">
        <Rooms/>
      </section>
      {/* <CelebrationsPage/> */}
    </div>
  );
}
