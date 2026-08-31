/**
 * Phrae Field Notes: ส่วนประวัติศาสตร์ใช้เส้นเวลาเยื้องศูนย์และเอกสารครีม เพื่อเล่าเรื่องแทนรายงานเชิงเส้น
 */
import { ArrowUpRight, Landmark, ScrollText, UserRound } from "lucide-react";

const timeline = [
  { year: "กว่า 1,000 ปี", title: "เมืองพลนคร", body: "ร่องรอยชุมชนโบราณในแอ่งแพร่เป็นจุดเริ่มของตำนานเมือง ก่อนชื่อ “แพร่” จะถูกเรียกขานอย่างแพร่หลาย" },
  { year: "ยุคล้านนา", title: "เมืองหน้าด่านและการค้า", body: "เมืองแพร่มีความสำคัญต่อเครือข่ายล้านนา ทั้งในฐานะเมืองหน้าด่านและศูนย์กลางแลกเปลี่ยนสินค้าของภาคเหนือตอนบน" },
  { year: "พ.ศ. 2445", title: "เหตุการณ์กบฏเงี้ยว", body: "เหตุการณ์สำคัญในประวัติศาสตร์สยามที่เชื่อมโยงกับเมืองแพร่และบทบาทของพระยาไชยบูรณ์ (ทองดี สุวรรณบาตร์)" },
  { year: "ปัจจุบัน", title: "เมืองเก่าที่มีชีวิต", body: "มรดกคุ้ม วัด และบ้านไม้สัก ยังคงเล่าเรื่องราวของผู้คนและภูมิปัญญาท้องถิ่นให้เรียนรู้ต่อไป" },
];

export default function HistorySection() {
  return (
    <section id="history" className="relative overflow-hidden bg-[#f8f2e8] py-24 text-[#2d2118] sm:py-32">
      <div className="topo-lines absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.94fr_1.06fr] lg:gap-20">
          <div className="reveal">
            <p className="eyebrow">01 — รากของเมือง</p>
            <h2 className="mt-5 font-display text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">จากเมืองพลนคร<br />สู่เมืองแพร่</h2>
            <div className="mt-8 max-w-xl space-y-5 text-base leading-8 text-[#5d4c3c] sm:text-lg">
              <p>จังหวัดแพร่เป็นจังหวัดเก่าแก่แห่งหนึ่งของภาคเหนือ มีประวัติความเป็นมายาวนานกว่า 1,000 ปี เดิมบริเวณจังหวัดแพร่มีชื่อว่า “เมืองพลนคร” และต่อมาเรียกว่า “เมืองแพร่” โดยมีตำนานเกี่ยวข้องกับการก่อตั้งเมืองของกลุ่มชนในแถบล้านนา</p>
              <p>ในอดีตเมืองแพร่เป็นส่วนหนึ่งของอาณาจักรล้านนา และมีความสำคัญในฐานะเมืองหน้าด่านและศูนย์กลางการค้าของพื้นที่ภาคเหนือตอนบน ก่อนจัดตั้งเป็นจังหวัดหลังการปฏิรูปการปกครองในสมัยรัชกาลที่ 5</p>
            </div>
            <div className="mt-10 flex items-center gap-4 border-l-2 border-[#c79a4b] py-1 pl-5 text-sm font-medium text-[#1f5037]">
              <ScrollText className="h-5 w-5" />
              อ่านเรื่องเล่าเป็นลำดับเวลา
            </div>
          </div>

          <ol className="reveal relative border-l border-[#cbbca7] pl-7 sm:pl-10" aria-label="ลำดับเหตุการณ์สำคัญของจังหวัดแพร่">
            {timeline.map((item, index) => (
              <li key={item.title} className="group relative pb-10 last:pb-0">
                <span className="absolute -left-[35px] top-1 h-4 w-4 rotate-45 border border-[#c79a4b] bg-[#f8f2e8] transition-colors duration-200 group-hover:bg-[#c79a4b] sm:-left-[43px]" />
                <div className="flex flex-col gap-2 border-b border-[#d9cbb8] pb-8 sm:flex-row sm:items-baseline sm:gap-7">
                  <span className="text-xs font-bold tracking-[0.12em] text-[#ad7d33]">{item.year}</span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-[#302216]">{item.title}</h3>
                    <p className="mt-2 leading-7 text-[#675543]">{item.body}</p>
                  </div>
                </div>
                <span className="absolute right-0 top-1 font-display text-4xl text-[#5a4229]/10">0{index + 1}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="reveal mt-20 grid gap-5 md:grid-cols-2">
          <article className="border border-[#d9cbb8] bg-[#fffaf2]/70 p-7 shadow-[0_12px_32px_rgba(71,53,32,0.05)] sm:p-8">
            <UserRound className="h-7 w-7 text-[#c79a4b]" />
            <p className="mt-5 text-xs font-bold tracking-[0.14em] text-[#1f5037]">บุคคลสำคัญ</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">พระยาไชยบูรณ์<br />(ทองดี สุวรรณบาตร์)</h3>
            <p className="mt-3 leading-7 text-[#675543]">ข้าหลวงเมืองแพร่ในช่วงเหตุการณ์กบฏเงี้ยว พ.ศ. 2445 ซึ่งเป็นเหตุการณ์สำคัญในประวัติศาสตร์จังหวัดแพร่</p>
          </article>
          <article className="border border-[#d9cbb8] bg-[#1f5037] p-7 text-white shadow-[0_12px_32px_rgba(31,80,55,0.16)] sm:p-8">
            <Landmark className="h-7 w-7 text-[#f5d692]" />
            <p className="mt-5 text-xs font-bold tracking-[0.14em] text-[#f5d692]">สถานที่สำคัญทางประวัติศาสตร์</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">คุ้มเจ้าหลวงเมืองแพร่</h3>
            <p className="mt-3 leading-7 text-white/78">อดีตที่ประทับของเจ้าผู้ครองนครแพร่ สะท้อนสถาปัตยกรรมและวิถีชีวิตของเมืองแพร่ในอดีต</p>
            <a href="#destinations" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#f5d692] hover:text-white">ค้นหาสถานที่ <ArrowUpRight className="h-4 w-4" /></a>
          </article>
        </div>
      </div>
    </section>
  );
}
