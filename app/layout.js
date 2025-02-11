import "./globals.css";
import Navbar from "@/components/Reusables/Navbar";
import LenisScroll from "@/hooks/SmoothScroll";

export const metadata = {
  title: "Srishty Garden Resorts - Luxury & Comfort in Nature",
  description: "Experience luxury and tranquility at Srishty Garden Resorts. Nestled in nature, we offer premium stays, fine dining, and top-notch amenities for a perfect getaway.",
  keywords: "luxury resorts, nature resorts, best resorts, Srishty Garden Resorts, vacation stay, resort booking, holiday retreat",
  author: "Srishty Garden Resorts",
  openGraph: {
    title: "Srishty Garden Resorts - Your Perfect Getaway",
    description: "Unwind in the lap of nature with our world-class amenities, scenic views, and unmatched hospitality.",
    url: "https://www.srishtygardenresorts.com",
    type: "website",
    images: [
      {
        url: "https://www.srishtygardenresorts.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Srishty Garden Resorts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Srishty Garden Resorts - A Luxurious Escape",
    description: "Book your stay at Srishty Garden Resorts and indulge in the perfect blend of luxury and nature.",
    image: "https://www.srishtygardenresorts.com/twitter-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <LenisScroll>{children}</LenisScroll>
      </body>
    </html>
  );
}
