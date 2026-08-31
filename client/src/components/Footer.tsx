/**
 * Phrae Field Notes: บทปิดท้ายใช้พื้นเขียวป่าและตราช่อแฮ เป็นหน้าสุดท้ายของสมุดบันทึกการเดินทาง
 */
import { ArrowUp, Instagram, MapPin } from "lucide-react";
import BrandMark from "./BrandMark";

export default function Footer() {
  return (
    <footer id="explore" className="bg-[#1f5037] text-[#fffaf2]">
      <div className="relative overflow-hidden border-b border-white/15 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full border border-[#c79a4b]/30" />
        <div className="absolute -right-2 -top-2 h-52 w-52 rounded-full border border-[#c79a4b]/20" />
        <div className="relative mx-auto max-w-[1440px]">
@@
          <p className="eyebrow text-[#f5d692]">06 — เก็บหน้าสุดท้ายของบันทึก</p>
          <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-4xl font-display text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">แพร่ไม่ได้มีเพียงสถานที่ท่องเที่ยว<br className="hidden lg:block" /> แต่ยังมีเรื่องราวที่รอให้ค้นพบ</h2>
            <a href="#top" className="inline-flex w-fit items-center gap-3 border border-[#f5d692] px-5 py-4 text-sm font-semibold text-[#f5d692] transition-colors duration-200 hover:bg-[#f5d692] hover:text-[#1f5037] active:scale-[0.97]">
              กลับไปที่หน้าแรก <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.7fr] lg:px-12">
        <div>
          <div className="flex items-center gap-4"><span className="rounded-full bg-[#f8f2e8] p-2"><BrandMark className="h-10 w-10" /></span><div><p className="font-display text-2xl font-semibold tracking-[0.13em]">PHRAE</p><p className="mt-1 text-sm text-white/65">เมืองเก่าเล่าเรื่อง</p></div></div>
          <p className="mt-6 max-w-sm leading-7 text-white/70">เรียนรู้เมืองแพร่ ผ่านเรื่องราวที่มากกว่าการท่องเที่ยว</p>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.14em] text-[#f5d692]">จังหวัดแพร่</p>
          <p className="mt-4 flex items-center gap-2 text-sm text-white/75"><MapPin className="h-4 w-4 text-[#f5d692]" /> ภาคเหนือ ประเทศไทย</p>
          <a href="#history" className="mt-4 inline-block text-sm font-medium text-white/90 hover:text-[#f5d692]">กลับไปอ่านเรื่องราวของเมือง</a>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.14em] text-[#f5d692]">จัดทำโดย</p>
          <p className="mt-4 font-display text-xl font-semibold">นาย สุทธิพงศ์ รัตนพันธ์</p>
          <p className="mt-2 text-sm text-white/65">ผลงานการศึกษาระดับชั้นมัธยมศึกษา</p>
          <a href="#top" aria-label="Instagram" className="mt-5 inline-grid h-9 w-9 place-items-center border border-white/25 text-white/80 hover:border-[#f5d692] hover:text-[#f5d692]"><Instagram className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
