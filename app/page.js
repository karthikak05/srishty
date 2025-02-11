import AboutUs from "@/components/home/About";
import Amenities from "@/components/home/Amenities";
import CelebrationsPage from "@/components/home/Celebrations";
import ContactUs from "@/components/home/ContactUs";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Rooms from "@/components/home/Rooms";

export default function Home() {
  return (
    <div>
      <section className="mx-4">
        <Hero/>
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

      <section>
        <ContactUs/>
      </section>

      <Footer/>
    </div>
  );
}
