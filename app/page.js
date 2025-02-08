import HoverLight from "@/components/Reusables/HoverLight";
import AboutUs from "@/components/home/About";
import Amenities from "@/components/home/Amenities";
import CelebrationsPage from "@/components/home/Celebrations";
import Footer from "@/components/home/Footer";
import HeroImage from "@/components/home/MaskImage";
import Rooms from "@/components/home/Rooms";

export default function Home() {
  return (
    <div>
      <section className="mx-4">
        <div className="h-[600px] w-[100%] flex items-center justify-center relative">
          <HeroImage/>
            <div className='bg-black flex flex-col items-center justify-between h-[300px] w-[300px] rounded-2xl absolute left-0 bottom-0 text-white px-4 py-6 hover:scale-105 border-[2px] border-red-400 smooth'>
              <p className="text-2xl text-gradient">Luxury Stays</p>
              <p className="text-2xl text-gradient">Serenic Views</p>
              <p className="text-2xl text-gradient">Paradise Escape</p>
            </div>
          <div className='bg-black h-[80px] w-[350px] rounded-2xl absolute right-[50px] bottom-0 flex items-center justify-center'>
            <h2 className="text-xl text-gradient">Stay in Harmony with Nature</h2>
          </div>
        </div>
      </section>

      <section className="mt-[200px] mx-4">
        <AboutUs/>
      </section>

      <section className="mt-[200px] mx-4">
        <Rooms/>
      </section>
      
      <section>
        <CelebrationsPage/>
      </section>

      <section>
        <Amenities/>
      </section>

      <Footer/>
    </div>
  );
}
