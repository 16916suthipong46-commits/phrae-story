/**
 * Phrae Field Notes: ภาพแต่ละใบคือ field observation พร้อมตราประทับและ metadata ที่มองเห็นเสมอ
 */
import { Expand, ScanLine, X } from "lucide-react";
import { useState } from "react";
import BrandMark from "./BrandMark";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type GalleryItem = { src: string; alt: string; caption: string; code: string; note: string; size: string };

const images: GalleryItem[] = [
  { src: "/manus-storage/phrae-phae-mueang-phi_1372261e.jpg", alt: "เสาดินรูปร่างแปลกตาในวนอุทยานแพะเมืองผี", caption: "ร่องรอยของเวลา", code: "OBS. 01", note: "แพะเมืองผี", size: "aspect-[4/5]" },
  { src: "/manus-storage/phrae-gallery-night-temple_dbf70691.jpg", alt: "พระธาตุช่อแฮยามค่ำคืน", caption: "ศรัทธาใต้ร่มไม้", code: "OBS. 02", note: "แสงและล้านนา", size: "aspect-[4/3]" },
  { src: "/manus-storage/phrae-khum-chao-luang_3873e423.jpg", alt: "อาคารประวัติศาสตร์คุ้มเจ้าหลวงเมืองแพร่", caption: "หน้าต่างของคุ้ม", code: "OBS. 03", note: "นครแพร่", size: "aspect-[4/5]" },
  { src: "/manus-storage/phrae-teak-house_2c435f07.jpg", alt: "เรือนไม้สักบ้านวงศ์บุรี", caption: "ไม้สักและจังหวะเงียบสงบ", code: "OBS. 04", note: "บ้านวงศ์บุรี", size: "aspect-[4/3]" },
  { src: "/manus-storage/phrae-gallery-turtle_9b2e4aa4.jpg", alt: "ประติมากรรมเต่าหน้าวัดในจังหวัดแพร่", caption: "สัญลักษณ์และศรัทธา", code: "OBS. 05", note: "รายละเอียดของเมือง", size: "aspect-[4/5]" },
  { src: "/manus-storage/phrae-gallery-temple_f6edee73.jpg", alt: "สถาปัตยกรรมวัดไทยในจังหวัดแพร่", caption: "ขอบฟ้าแห่งศรัทธา", code: "OBS. 06", note: "วัดและชุมชน", size: "aspect-[4/3]" },
];

export default function Gallery() {
  const [active, setActive] = useState<GalleryItem | null>(null);
  return (
    <section id="gallery" className="relative overflow-hidden bg-[#e9e0d1] py-24 text-[#2d2118] sm:py-32">
      <div className="topo-lines absolute inset-0 opacity-45" />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="reveal grid gap-8 border-b border-[#c4b49d] pb-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="eyebrow">05 — สมุดภาพภาคสนาม</p>
            <h2 className="mt-5 font-display text-4xl leading-tight font-semibold sm:text-5xl">ภาพสังเกตการณ์<br />จากเมืองแพร่</h2>
          </div>
          <div className="flex items-end gap-5 border-l-2 border-[#c79a4b] pl-5"><BrandMark className="h-12 w-12 shrink-0" /><p className="max-w-lg leading-7 text-[#665441]">หกมุมมองที่คัดเลือกเพื่อพาไปเห็นความเชื่อมโยงของชั้นดิน สถาปัตยกรรม ความศรัทธา และผืนป่า</p></div>
        </div>
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <button key={image.code} type="button" onClick={() => setActive(image)} className={`reveal group relative mb-4 block w-full break-inside-avoid overflow-hidden text-left ${image.size}`} style={{ transitionDelay: `${(index % 3) * 70}ms` }}>
              <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(35,25,16,0.08)_25%,rgba(35,25,16,0.78)_100%)]" />
              <span className="absolute left-4 top-4 border border-white/35 bg-[#2c2118]/55 px-2.5 py-1.5 text-[10px] font-bold tracking-[0.12em] text-[#f5d692] backdrop-blur-sm">{image.code}</span>
              <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center border border-white/35 bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"><Expand className="h-4 w-4" /></span>
              <span className="absolute inset-x-5 bottom-5"><span className="block text-[10px] font-bold tracking-[0.12em] text-[#f5d692]">{image.note}</span><span className="mt-1 block text-sm font-medium text-white">{image.caption}</span></span>
            </button>
          ))}
        </div>
        <p className="reveal mt-6 flex items-center gap-2 text-xs text-[#6e5943]"><ScanLine className="h-4 w-4 text-[#a8742d]" /> คลิกเพื่อเปิดภาพและอ่านร่องรอยของแต่ละมุมมอง</p>
      </div>
      <Dialog open={Boolean(active)} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent showCloseButton={false} className="h-[100dvh] w-[100dvw] !max-h-none !max-w-none overflow-hidden rounded-none border-0 bg-[#211a14] p-0 text-white">
          {active && <div className="relative flex h-full flex-col"><img src={active.src} alt={active.alt} className="min-h-0 flex-1 w-full object-contain" /><button type="button" onClick={() => setActive(null)} className="absolute right-4 top-4 grid h-10 w-10 place-items-center bg-[#f8f2e8] text-[#2d2118]" aria-label="ปิดภาพขยาย"><X className="h-5 w-5" /></button><div className="shrink-0 border-t border-white/15 px-6 py-5"><p className="text-[10px] font-bold tracking-[0.12em] text-[#f5d692]">{active.code} — {active.note}</p><p className="mt-1 text-sm text-white/80">{active.caption}</p></div></div>}
        </DialogContent>
      </Dialog>
    </section>
  );
}
