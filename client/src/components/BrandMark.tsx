/**
 * Phrae Field Notes: ตราวงกลมสีทองช่อแฮสำหรับแบรนด์ท่องเที่ยวเชิงบรรณาธิการร่วมสมัย
 */
type BrandMarkProps = {
  className?: string;
  label?: string;
};

export default function BrandMark({
  className = "h-11 w-11",
  label = "ตราสัญลักษณ์ PHRAE",
}: BrandMarkProps) {
  return (
    <img
      src="/manus-storage/phrae-mark_944f748d.png"
      alt={label}
      className={`${className} object-contain`}
    />
  );
}
