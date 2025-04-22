
import { FileText, BadgeCheck, Users, Truck, LifeBuoy } from "lucide-react";

const ICONS = [
  { icon: <FileText className="w-10 h-10 mx-auto text-[#24bb67]" />, title: "Site Selection", desc: "The best locations for your needs" },
  { icon: <BadgeCheck className="w-10 h-10 mx-auto text-[#24bb67]" />, title: "Legal & Permits", desc: "Fast and hassle-free setup" },
  { icon: <Users className="w-10 h-10 mx-auto text-[#24bb67]" />, title: "Recruiting & HR", desc: "Skilled workforce, ready to go" },
  { icon: <Truck className="w-10 h-10 mx-auto text-[#24bb67]" />, title: "Logistics & Operations", desc: "Shipping, supply chain, and setup" },
  { icon: <LifeBuoy className="w-10 h-10 mx-auto text-[#24bb67]" />, title: "Ongoing Support", desc: "We’re with you every step of the way" },
];

// Banner background
const bannerBg = "/lovable-uploads/7d3e349c-ce15-4722-9799-11904aef6a5f.png";

export default function ServicesSection() {
  return (
    <>
      {/* Custom Banner for "We Handle Everything" */}
      <section
        className="w-full h-[190px] md:h-[200px] flex items-center bg-cover bg-center relative"
        style={{
          backgroundImage: `url('${bannerBg}')`
        }}
        id="help"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-7xl pl-6 md:pl-16 gap-8">
          <div className="flex-1 min-w-0">
            <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-none mb-3 tracking-tight uppercase animate-fade-in">
              WE HANDLE EVERYTHING
            </h2>
            <div className="text-white text-lg md:text-2xl font-medium animate-fade-in">
              from site selection to legal setup, workforce recruitment, and logistics, so you<br className="hidden md:block"/> can focus on growing your business.
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto flex md:justify-end justify-center mt-6 md:mt-0">
            <a
              href="#consult"
              className="bg-[#24bb67] px-10 py-5 rounded-lg text-white text-lg md:text-2xl font-extrabold shadow hover:scale-105 transition-all hover:bg-[#1aa857] animate-fade-in"
              style={{ letterSpacing: "0.01em" }}
            >
              CONTACT US
            </a>
          </div>
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
