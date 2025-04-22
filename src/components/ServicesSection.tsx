import { FileText, BadgeCheck, Users, Truck, LifeBuoy } from "lucide-react";

const ICONS = [
  { icon: <FileText className="w-10 h-10 mx-auto text-[#24bb67]" />, title: "Site Selection", desc: "The best locations for your needs" },
  { icon: <BadgeCheck className="w-10 h-10 mx-auto text-[#24bb67]" />, title: "Legal & Permits", desc: "Fast and hassle-free setup" },
  { icon: <Users className="w-10 h-10 mx-auto text-[#24bb67]" />, title: "Recruiting & HR", desc: "Skilled workforce, ready to go" },
  { icon: <Truck className="w-10 h-10 mx-auto text-[#24bb67]" />, title: "Logistics & Operations", desc: "Shipping, supply chain, and setup" },
  { icon: <LifeBuoy className="w-10 h-10 mx-auto text-[#24bb67]" />, title: "Ongoing Support", desc: "We’re with you every step of the way" },
];

export default function ServicesSection() {
  return (
    <>
      {/* "We handle everything" */}
      <section className="relative bg-[#0b4265] pt-16 pb-8" id="help">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            background: "url('/lovable-uploads/e45c85fc-2815-4d3f-996f-544b303901af.png') center/cover no-repeat",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10 px-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="text-left w-full md:w-3/5 mb-6 md:mb-0">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-3 tracking-tight uppercase">
              WE HANDLE EVERYTHING
            </h2>
            <p className="text-white text-base md:text-lg font-medium mb-6 max-w-[640px]">
              From site selection to legal setup, workforce recruitment, and logistics, so you can focus on growing your business.
            </p>
          </div>
          <div className="flex justify-start md:justify-end w-full md:w-2/5">
            <a
              href="#consult"
              className="inline-block bg-[#24bb67] px-7 py-2 rounded-md text-white font-bold shadow hover:bg-[#1aa857] transition"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>
      {/* "How can we help?" section */}
      <section
        className="py-14 relative overflow-hidden -mt-5 z-20"
        style={{
          background: "url('/lovable-uploads/67b26da0-8c9c-4a71-9b5f-e6698f97780a.png') center/cover no-repeat",
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-9 tracking-tight uppercase">
            HOW CAN WE HELP?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-7 md:gap-8 max-w-5xl mx-auto mb-8">
            {ICONS.map((item, idx) => (
              <div
                key={item.title}
                className="flex flex-col items-center bg-[#f5f7fb] rounded-lg py-7 px-2 shadow-sm hover:scale-105 transition animate-fade-in delay-[0s,0.1s,0.2s,0.3s,0.4s]"
              >
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
