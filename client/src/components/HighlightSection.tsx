/**
 * Phrae Field Notes: ไฮไลต์สามเสาหลักวางเหมือนป้ายบอกทางในเส้นทางเดียวกัน ไม่ใช่สรุปแบบรายงาน
 */
import { Leaf, Trees, Warehouse } from "lucide-react";

const highlights = [
  { icon: Trees, number: "A", title: "ธรรมชาติ", detail: "ป่าไม้ ภูเขา และแหล่งท่องเที่ยวทางธรรมชาติ" },
  { icon: Warehouse, number: "B", title: "วัฒนธรรมล้านนา", detail: "วัด โบราณสถาน และวิถีชีวิตที่สะท้อนเอกลักษณ์ล้านนา" },
  { icon: Leaf, number: "C", title: "เมืองแห่งไม้สัก", detail: "มรดกจากอุตสาหกรรมไม้สักที่มีอิทธิพลต่อประวัติศาสตร์และสถาปัตยกรรมของเมือง" },
];

export default function HighlightSection() {
  return (
    <section className="bg-[#f8f2e8] py-24 text-[#2d2118] sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="reveal grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="eyebrow">04 — เอกลักษณ์ของเมือง</p>
            <h2 className="mt-5 font-display text-4xl leading-tight font-semibold sm:text-5xl">เสน่ห์ที่ทำให้<br />แพร่เป็นแพร่</h2>
          </div>
          <p className="max-w-2xl self-end text-lg leading-8 text-[#604e3c]">แพร่ไม่ได้มีเรื่องราวเพียงด้านเดียว ทุกองค์ประกอบตั้งแต่ผืนป่าจนถึงเรือนไม้สัก ล้วนเชื่อมโยงผู้คนเข้ากับภูมิประเทศและกาลเวลา</p>
        </div>
        <div className="mt-14 grid border-y border-[#d9cbb8] md:grid-cols-3">
          {highlights.map(({ icon: Icon, number, title, detail }, index) => (
            <article key={title} className={`reveal group relative px-0 py-9 md:px-9 md:py-5 ${index !== 0 ? "md:border-l md:border-[#d9cbb8]" : ""}`} style={{ transitionDelay: `${index * 80}ms` }}>
              <span className="font-display text-6xl text-[#c79a4b]/20">{number}</span>
              <Icon className="absolute right-1 top-12 h-7 w-7 text-[#1f5037] transition-transform duration-300 group-hover:-translate-y-1" />
              <h3 className="mt-7 font-display text-2xl font-semibold">{title}</h3>
              <p className="mt-3 max-w-xs leading-7 text-[#675543]">{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
