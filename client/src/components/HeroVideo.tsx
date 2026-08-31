/**
 * Phrae Field Notes: ฮีโร่ภาพยนตร์โทนเขียวป่า/ไม้สัก ใช้ภาพนิ่งที่เตรียมไว้เป็น fallback ที่อ่านข้อความสีอ่อนได้ชัด
 */
import { ArrowDown, Play, VolumeX } from "lucide-react";
import { useState } from "react";

export default function HeroVideo() {
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section id="top" className="relative isolate flex min-h-[700px] h-screen items-end overflow-hidden bg-[#1f2d22] text-white">
      <img
        src="/manus-storage/phrae-hero-fallback_417abce9.jpg"
        alt="เทือกเขาและป่าจังหวัดแพร่ยามเช้า"
        className="absolute inset-0 -z-30 h-full w-full object-cover"
        fetchPriority="high"
      />
      {!videoFailed && (
        <video
          className={`absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/manus-storage/phrae-hero-fallback_417abce9.jpg"
          aria-label="วิดีโอทิวทัศน์ภูเขาและป่าภาคเหนือ"
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
        >
          <source src="/manus-storage/phrae-hero_96698e34.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(17,27,19,0.56)_0%,rgba(17,27,19,0.32)_42%,rgba(17,27,19,0.78)_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.35)_0.5px,transparent_0.5px)] [background-size:4px_4px]" />

      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-5 pb-14 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
        <div className="hero-enter max-w-4xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-[#f5d692] sm:text-sm">
            <span className="h-px w-12 bg-[#c79a4b]" />
            PHRAE, NORTHERN THAILAND
          </p>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.12] font-semibold text-balance sm:text-6xl lg:text-8xl">
            ยินดีต้อนรับสู่<br />จังหวัดแพร่
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
            เมืองเก่าแห่งล้านนา เสน่ห์แห่งไม้สักและธรรมชาติ
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#history" className="group inline-flex items-center gap-3 bg-[#c79a4b] px-6 py-4 text-sm font-semibold text-[#2b2014] shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-1 active:scale-[0.97]">
              สำรวจจังหวัดแพร่
              <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-1" />
            </a>
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.08em] text-white/80">
              <VolumeX className="h-4 w-4" />
              วิดีโอเล่นโดยไม่มีเสียง
            </span>
          </div>
        </div>

        <div className="mt-14 flex items-end justify-between gap-6 sm:mt-20">
          <a href="#history" className="group inline-flex items-center gap-3 text-sm text-white/80 hover:text-white" aria-label="เลื่อนไปยังประวัติความเป็นมาของจังหวัดแพร่">
            <span className="relative grid h-10 w-6 place-items-center border border-white/45">
              <span className="scroll-dot h-1.5 w-1.5 rounded-full bg-[#f5d692]" />
            </span>
            <span>เลื่อนเพื่อค้นพบเรื่องราวของแพร่</span>
          </a>
          <span className="hidden items-center gap-2 text-xs tracking-[0.13em] text-white/60 sm:inline-flex">
            <Play className="h-3 w-3 fill-current" />
            {videoFailed ? "ภาพสำรอง" : videoReady ? "ภาพเคลื่อนไหว" : "กำลังเปิดภาพเคลื่อนไหว"}
          </span>
        </div>
      </div>
    </section>
  );
}
