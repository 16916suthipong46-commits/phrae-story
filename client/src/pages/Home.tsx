/**
 * Phrae Field Notes: หน้าบันทึกการเดินทางแนว Contemporary Vernacular Editorial ใช้ครีม ไม้สัก เขียวป่า และทองช่อแฮ
 */
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import GeographySection from "@/components/GeographySection";
import HeroVideo from "@/components/HeroVideo";
import HighlightSection from "@/components/HighlightSection";
import HistorySection from "@/components/HistorySection";
import Navbar from "@/components/Navbar";
import TouristSpots from "@/components/TouristSpots";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -28px" }
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f2e8] text-[#2d2118]">
      <Navbar />
      <main>
        <HeroVideo />
        <HistorySection />
        <GeographySection />
        <TouristSpots />
        <HighlightSection />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
