/**
 * Phrae Field Notes: แถบนำทางโปร่งเหนือภาพยนตร์ เปลี่ยนเป็นครีมมีความชัดเจนเมื่อเลื่อนผ่านเนื้อหา
 */
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";

const navItems = [
  { label: "เรื่องราว", href: "#history" },
  { label: "ภูมิประเทศ", href: "#geography" },
  { label: "จุดหมาย", href: "#destinations" },
  { label: "ภาพของแพร่", href: "#gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,color,backdrop-filter,border-color] duration-300 ${
        scrolled || open
          ? "border-[#5a4229]/10 bg-[#f8f2e8]/95 text-[#2d2118] shadow-[0_10px_32px_rgba(53,39,25,0.08)] backdrop-blur-xl"
          : "border-transparent bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" aria-label="กลับสู่หน้าแรก" className="group flex items-center gap-3" onClick={closeMenu}>
          <span className="rounded-full bg-[#f8f2e8]/95 p-1.5 shadow-sm transition-transform duration-200 group-hover:scale-105">
            <BrandMark className="h-8 w-8" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-semibold tracking-[0.17em]">PHRAE</span>
            <span className={`mt-1 block text-[10px] font-medium tracking-[0.14em] ${scrolled || open ? "text-[#735d43]" : "text-white/75"}`}>
              เมืองเก่าเล่าเรื่อง
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="เมนูหลัก">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link text-sm font-medium ${scrolled ? "text-[#4f3c2b] hover:text-[#1f5037]" : "text-white/90 hover:text-white"}`}
            >
              {item.label}
            </a>
          ))}
          <a href="#explore" className="border border-current px-4 py-2 text-xs font-semibold tracking-[0.08em] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]">
            เปิดบันทึกการเดินทาง
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={`grid h-11 w-11 place-items-center border lg:hidden ${scrolled || open ? "border-[#5a4229]/20" : "border-white/35"}`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <nav className="space-y-1 border-t border-[#5a4229]/10 px-5 py-5 sm:px-8" aria-label="เมนูบนมือถือ">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu} className="block border-b border-[#5a4229]/10 py-3 text-base font-medium text-[#3a2b1e]">
              {item.label}
            </a>
          ))}
          <a href="#explore" onClick={closeMenu} className="mt-4 inline-flex bg-[#1f5037] px-4 py-3 text-sm font-semibold text-white">
            เปิดบันทึกการเดินทาง
          </a>
        </nav>
      </div>
    </header>
  );
}
