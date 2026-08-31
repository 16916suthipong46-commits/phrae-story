/**
 * Phrae Field Notes: ภูมิศาสตร์เป็นสนามข้อมูลเข็มทิศ ใช้พื้นที่ว่างและวงแหวนแทนกล่องข้อมูลทั่วไป
 */
import { CloudRain, Compass, Mountain, Snowflake, Sun } from "lucide-react";
import { useState } from "react";

const directions = [
  { key: "north", label: "เหนือ", value: "ลำปาง และ น่าน", className: "top-0 left-1/2 -translate-x-1/2" },
  { key: "east", label: "ตะวันออก", value: "น่าน และ อุตรดิตถ์", className: "right-0 top-1/2 -translate-y-1/2" },
  { key: "south", label: "ใต้", value: "อุตรดิตถ์ และ สุโขทัย", className: "bottom-0 left-1/2 -translate-x-1/2" },
  { key: "west", label: "ตะวันตก", value: "ลำปาง และ สุโขทัย", className: "left-0 top-1/2 -translate-y-1/2" },
];

const seasons = [
  { icon: Sun, name: "ฤดูร้อน", date: "มีนาคม – พฤษภาคม", accent: "text-[#c4792f]" },
  { icon: CloudRain, name: "ฤดูฝน", date: "มิถุนายน – ตุลาคม", accent: "text-[#34708a]" },
  { icon: Snowflake, name: "ฤดูหนาว", date: "พฤศจิกายน – กุมภาพันธ์", accent: "text-[#1f5037]" },
];

export default function GeographySection() {
  const [activeDirection, setActiveDirection] = useState(directions[0]);

  return (
    <section id="geography" className="bg-[#f0eadf] py-24 text-[#2d2118] sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24">
          <div className="reveal">
            <p className="eyebrow">02 — อ่านภูมิประเทศ</p>
            <h2 className="mt-5 font-display text-4xl leading-tight font-semibold sm:text-5xl">ภูมิศาสตร์<br />ที่โอบล้อมเมือง</h2>
            <div className="mt-8 border-l-2 border-[#c79a4b] pl-5">
              <div className="flex items-center gap-3 text-[#1f5037]"><Mountain className="h-5 w-5" /><span className="text-xs font-bold tracking-[0.13em]">ภูมิประเทศ</span></div>
              <p className="mt-3 max-w-md leading-8 text-[#5d4c3c]">จังหวัดแพร่ตั้งอยู่ในบริเวณ “แอ่งแพร่” มีภูเขาและเทือกเขาล้อมรอบ พื้นที่ส่วนใหญ่เป็นภูเขาและป่าไม้ โดยมีพื้นที่ราบอยู่บริเวณลุ่มแม่น้ำยม</p>
            </div>
            <div className="mt-11 grid gap-px bg-[#d9cbb8] sm:grid-cols-3">
              {seasons.map(({ icon: Icon, name, date, accent }) => (
                <article key={name} className="bg-[#f0eadf] p-5 transition-colors duration-200 hover:bg-[#fffaf2]">
                  <Icon className={`h-6 w-6 ${accent}`} />
                  <h3 className="mt-5 font-display text-lg font-semibold">{name}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#6a5948]">{date}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="reveal relative mx-auto grid aspect-square w-full max-w-[510px] place-items-center bg-[#1f5037] p-8 text-white shadow-[0_20px_45px_rgba(31,80,55,0.16)] sm:p-12">
            <div className="absolute inset-5 border border-white/10 sm:inset-7" />
            <div className="compass-ring absolute h-[62%] w-[62%] rounded-full border border-[#c79a4b]/65" />
            <div className="absolute h-[75%] w-px bg-white/12" />
            <div className="absolute h-px w-[75%] bg-white/12" />
            <div className="relative z-10 grid h-28 w-28 place-items-center rounded-full border border-[#c79a4b] bg-[#1a442f] shadow-[0_0_0_8px_rgba(199,154,75,0.08)] sm:h-36 sm:w-36">
              <Compass className="h-8 w-8 text-[#f5d692] sm:h-10 sm:w-10" />
              <span className="text-[10px] font-bold tracking-[0.15em] text-[#f5d692]">PHRAE</span>
            </div>
            {directions.map((direction) => (
              <button
                type="button"
                key={direction.key}
                onFocus={() => setActiveDirection(direction)}
                onMouseEnter={() => setActiveDirection(direction)}
                onClick={() => setActiveDirection(direction)}
                className={`absolute z-20 text-center transition-all duration-200 ${direction.className} ${activeDirection.key === direction.key ? "text-[#f5d692]" : "text-white/65 hover:text-white"}`}
              >
                <span className="block text-[10px] font-bold tracking-[0.17em] sm:text-xs">{direction.label}</span>
              </button>
            ))}
            <div className="absolute bottom-8 left-1/2 z-10 w-[78%] -translate-x-1/2 border-t border-white/15 pt-4 text-center sm:bottom-11">
              <p className="text-xs font-bold tracking-[0.15em] text-[#f5d692]">{activeDirection.label}</p>
              <p className="mt-1 text-sm text-white/88">{activeDirection.value}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
