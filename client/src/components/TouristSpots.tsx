/**
 * Phrae Field Notes: จุดหมายถูกเล่าเป็นลำดับบันทึกภาคสนามที่มี waypoint, seal และเส้นทางเดียวกันตลอดส่วน
 */
import { ArrowRight, MapPin, Navigation, Trees } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type Spot = {
  number: string;
  title: string;
  short: string;
  detail: string;
  image: string;
  alt: string;
  observation: string;
  cue: string;
};

const spots: Spot[] = [
  { number: "01", title: "วนอุทยานแพะเมืองผี", short: "ประติมากรรมดินที่ธรรมชาติค่อย ๆ สลักไว้", detail: "แหล่งท่องเที่ยวทางธรรมชาติที่มีเสาดินและหน้าผาดินรูปร่างแปลกตา เกิดจากการกัดเซาะของธรรมชาติ และเป็นหนึ่งในเอกลักษณ์สำคัญของจังหวัดแพร่", image: "/manus-storage/phrae-phae-mueang-phi_1372261e.jpg", alt: "เสาดินและหน้าผาดินในวนอุทยานแพะเมืองผี", observation: "ภูมิประเทศ", cue: "ชั้นดิน • เงาไม้ • เวลา" },
  { number: "02", title: "วัดพระธาตุช่อแฮ", short: "พระธาตุคู่บ้านคู่เมืองที่ส่องแสงเหนือเมืองแพร่", detail: "วัดสำคัญคู่บ้านคู่เมืองของจังหวัดแพร่ เป็นพระอารามหลวงและเป็นที่ประดิษฐานพระธาตุช่อแฮ ซึ่งเป็นศูนย์รวมจิตใจของชาวแพร่", image: "/manus-storage/phrae-cho-hae_e1fa6ec2.jpg", alt: "พระธาตุสีทองในวัดพระธาตุช่อแฮ", observation: "ศรัทธา", cue: "ช่อแฮ • ล้านนา • ศูนย์รวมใจ" },
  { number: "03", title: "คุ้มเจ้าหลวง", short: "ร่องรอยของนครแพร่ผ่านเรือนประวัติศาสตร์", detail: "โบราณสถานสำคัญที่เคยเป็นที่ประทับของเจ้าหลวงเมืองแพร่ มีสถาปัตยกรรมแบบไทยผสมตะวันตก และสะท้อนประวัติศาสตร์ของเมืองแพร่", image: "/manus-storage/phrae-khum-chao-luang_3873e423.jpg", alt: "อาคารคุ้มเจ้าหลวงเมืองแพร่", observation: "ความทรงจำ", cue: "นครแพร่ • คุ้ม • เรื่องเล่า" },
  { number: "04", title: "บ้านวงศ์บุรี", short: "เรือนไม้สักที่บอกเล่ายุครุ่งเรืองของการค้าไม้", detail: "เรือนไม้สักสีชมพูที่โดดเด่นด้วยสถาปัตยกรรมแบบยุคโคโลเนียล สร้างขึ้นในช่วงที่เมืองแพร่รุ่งเรืองจากการค้าไม้สัก", image: "/manus-storage/phrae-teak-house_2c435f07.jpg", alt: "เรือนไม้สักสถาปัตยกรรมโคโลเนียลของบ้านวงศ์บุรี", observation: "ไม้สัก", cue: "เรือน • ช่างไม้ • การค้า" },
  { number: "05", title: "อุทยานแห่งชาติเวียงโกศัย", short: "ป่า น้ำตก และเส้นทางที่ชวนให้เดินช้าลง", detail: "แหล่งธรรมชาติที่อุดมสมบูรณ์ไปด้วยป่าไม้และภูเขา มีน้ำตกและเส้นทางศึกษาธรรมชาติ เหมาะสำหรับการท่องเที่ยวเชิงธรรมชาติ", image: "/manus-storage/phrae-gallery-hills_32b8e0cf.webp", alt: "แนวป่าเขียวชอุ่มและภูเขาในภาคเหนือ", observation: "ผืนป่า", cue: "น้ำตก • ภูเขา • ทางเดิน" },
];

export default function TouristSpots() {
  const [selected, setSelected] = useState<Spot | null>(null);

  return (
    <section id="destinations" className="relative overflow-hidden bg-[#2c2118] py-24 text-[#fffaf2] sm:py-32">
      <div className="absolute inset-x-0 top-[285px] mx-auto hidden h-px max-w-[1440px] bg-[#c79a4b]/25 lg:block" />
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="reveal relative flex flex-col justify-between gap-7 border-b border-white/15 pb-10 md:flex-row md:items-end">
          <span className="absolute -bottom-[7px] left-0 h-3 w-3 rotate-45 bg-[#c79a4b]" />
          <div>
            <p className="eyebrow text-[#f5d692]">03 — เส้นทางภาคสนาม</p>
            <h2 className="mt-5 font-display text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">ห้าหน้าของ<br />เรื่องเล่าแพร่</h2>
          </div>
          <div className="max-w-sm border-l border-[#c79a4b]/50 pl-5">
            <p className="text-sm font-semibold text-[#f5d692]">ROUTE / 05 OBSERVATIONS</p>
            <p className="mt-2 leading-7 text-white/65">ติดตามหมุดหมายของธรรมชาติ ศรัทธา และมรดกไม้สัก ราวกับกำลังเปิดบันทึกระหว่างเดินทาง</p>
          </div>
        </div>

        <div className="relative mt-14 space-y-0 lg:mt-16">
          <div className="absolute bottom-12 left-6 top-12 hidden w-px bg-[#c79a4b]/35 lg:block" />
          {spots.map((spot, index) => (
            <article key={spot.number} className={`reveal group relative grid gap-7 border-b border-white/15 py-12 last:border-b-0 lg:grid-cols-[110px_1fr_1.15fr] lg:items-center lg:gap-10 ${index % 2 === 1 ? "lg:grid-cols-[110px_1.15fr_1fr]" : ""}`} style={{ transitionDelay: `${(index % 2) * 70}ms` }}>
              <div className="relative z-10 flex items-center gap-4 lg:block">
                <span className="grid h-12 w-12 rotate-45 place-items-center border border-[#c79a4b] bg-[#2c2118] text-base font-bold text-[#f5d692] shadow-[0_0_0_8px_#2c2118]"><span className="-rotate-45">{spot.number}</span></span>
                <div className="lg:mt-8"><span className="text-[10px] font-bold tracking-[0.16em] text-white/40">WAYPOINT</span><p className="mt-1 text-xs font-medium text-[#f5d692]">{spot.observation}</p></div>
              </div>
              <div className={`${index % 2 === 1 ? "lg:order-3" : ""} relative aspect-[16/10] overflow-hidden border border-white/10 bg-[#1f1711]`}>
                <img src={spot.image} alt={spot.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.045]" />
                <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(28,20,13,0.25),transparent_65%)]" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 bg-[#2c2118]/80 px-3 py-2 text-[10px] font-semibold tracking-[0.1em] text-[#f5d692] backdrop-blur-sm"><Navigation className="h-3.5 w-3.5" /> FIELD NOTE {spot.number}</span>
              </div>
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""} lg:py-5`}>
                <p className="text-xs font-bold tracking-[0.15em] text-[#c79a4b]">{spot.cue}</p>
                <h3 className="mt-3 font-display text-3xl leading-tight font-semibold sm:text-4xl">{spot.title}</h3>
                <p className="mt-3 max-w-md text-base leading-7 text-white/70">{spot.short}</p>
                <button type="button" onClick={() => setSelected(spot)} className="mt-6 inline-flex items-center gap-2 border-b border-[#c79a4b] pb-1.5 text-sm font-semibold text-[#f5d692] transition-colors hover:text-white">
                  เปิดบันทึกหน้านี้ <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className="reveal mt-10 flex items-center gap-3 text-xs font-medium tracking-[0.08em] text-white/55"><Trees className="h-4 w-4 text-[#c79a4b]" /> END OF ROUTE — แต่เรื่องราวของเมืองยังเดินต่อ</div>
      </div>

      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto rounded-none border-[#c79a4b]/40 bg-[#f8f2e8] p-0 text-[#2d2118]">
          {selected && <>
            <img src={selected.image} alt={selected.alt} className="h-60 w-full object-cover sm:h-72" />
            <DialogHeader className="p-7 pt-2 sm:p-9 sm:pt-3">
              <p className="text-xs font-bold tracking-[0.14em] text-[#a8742d]">WAYPOINT {selected.number} — {selected.observation}</p>
              <DialogTitle className="font-display text-3xl font-semibold sm:text-4xl">{selected.title}</DialogTitle>
              <DialogDescription className="mt-2 text-base leading-8 text-[#624f3c]">{selected.detail}</DialogDescription>
            </DialogHeader>
          </>}
        </DialogContent>
      </Dialog>
    </section>
  );
}
