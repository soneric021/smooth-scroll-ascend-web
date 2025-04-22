import { FileText, BadgeCheck, Users, Truck, LifeBuoy } from "lucide-react";

const ICONS = [
  { icon: <FileText className="w-10 h-10 mx-auto text-[#24bb67]" />, title: "Site Selection", desc: "The best locations for your needs" },
  { icon: <BadgeCheck className="w-10 h-10 mx-auto text-[#24bb67]" />, title: "Legal & Permits", desc: "Fast and hassle-free setup" },
  { icon: <Users className="w-10 h-10 mx-auto text-[#24bb67]" />, title: "Recruiting & HR", desc: "Skilled workforce, ready to go" },
  { icon: <Truck className="w-10 h-10 mx-auto text-[#24bb67]" />, title: "Logistics & Operations", desc: "Shipping, supply chain, and setup" },
  { icon: <LifeBuoy className="w-10 h-10 mx-auto text-[#24bb67]" />, title: "Ongoing Support", desc: "We’re with you every step of the way" },
];

// Use the image provided by the user as the new banner
const bannerBg = "/lovable-uploads/976a8b5a-4758-4146-b8c5-9e7609be7c50.png";

export default function ServicesSection() {
  return (
    <>
      {/* Custom Banner - Left-aligned, using user-supplied image */}
      <section
        className="w-full h-[180px] md:h-[210px] flex items-center bg-cover bg-left relative"
        style={{
          backgroundImage: `url('${bannerBg}')`,
        }}
        id="help"
      >
        <div className="pl-6 md:pl-16 pr-4 max-w-[630px] flex flex-col justify-center h-full">
          <h2 className="text-white text-2xl md:text-4xl font-extrabold leading-tight mb-2 tracking-tight uppercase animate-fade-in text-left">
            WE HANDLE EVERYTHING
          </h2>
          <div className="text-white text-base md:text-xl font-medium mb-5 animate-fade-in text-left leading-snug">
            from site selection to legal setup, workforce recruitment, and logistics,
            so you <br className="hidden md:block"/> can focus on growing your business.
          </div>
          <a
            href="#consult"
            className="bg-[#24bb67] px-8 py-3 w-fit rounded-md text-white text-base md:text-lg font-extrabold shadow hover:scale-105 transition-all hover:bg-[#1aa857] animate-fade-in"
            style={{ letterSpacing: "0.01em" }}
          >
            CONTACT US
          </a>
        </div>
      </section>
      {/* "How can we help?" section */}
      <section className="bg-white py-14 relative overflow-hidden -mt-5 z-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-9 tracking-tight uppercase">HOW CAN WE HELP?</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-7 md:gap-8 max-w-5xl mx-auto mb-8">
            {ICONS.map((item, idx) => (
              <div key={item.title} className="flex flex-col items-center bg-[#f5f7fb] rounded-lg py-7 px-2 shadow-sm hover:scale-105 transition animate-fade-in delay-[0s,0.1s,0.2s,0.3s,0.4s]">
                <div>{item.icon}</div>
                <div className="font-semibold mt-3 text-lg">{item.title}</div>
                <div className="text-gray-500 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <a
              href="#why"
              className="bg-[#174b7f] text-white font-bold px-8 py-3 rounded shadow hover:bg-[#0b4265] transition"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
