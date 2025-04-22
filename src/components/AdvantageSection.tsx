
const IMAGES = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=400&q=80",
];

export default function AdvantageSection() {
  return (
    <section id="consult" className="bg-white pt-16 pb-12 px-2 md:px-0">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 uppercase text-[#183046]">DOMINICAN FREE ZONE ADVANTAGE</h2>
          <ul className="list-disc pl-6 space-y-2 text-base mb-7">
            <li><b>Tax-Free Benefits:</b> Enjoy exemptions on corporate income tax, import duties, and more.</li>
            <li><b>Strategic Location:</b> Close proximity to the U.S. and Latin America with world-class ports and airports.</li>
            <li><b>Skilled Workforce:</b> A talented labor pool with strong industrial and service experience.</li>
            <li><b>Efficient Trade Agreements:</b> Access to major markets through CAFTA-DR, EU Economic Partnership, and more.</li>
            <li><b>Established Industrial Hubs:</b> Over 75 free zones with robust infrastructure and business support.</li>
          </ul>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {IMAGES.map((src, i) => (
              <img
                key={src}
                src={src}
                alt="Industrial zone"
                className="rounded-md object-cover w-full aspect-video shadow hover:scale-105 transition animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col min-w-[210px]">
          <div className="bg-[#143d66]/95 rounded-t-lg px-5 py-4 text-white font-semibold text-lg mb-2 tracking-tight">
            BROWSE THE MAP AND LEARN THE LOCATION OF THE FREE TRADE ZONE PARKS.
          </div>
          <div className="bg-white/90 rounded-b-lg px-4 pb-4 pt-1 border border-[#194c69]">
            <img
              src="/lovable-uploads/5c11bde0-b793-449b-9679-f35753aefaba.png"
              alt="Dominican Free Zone Map"
              className="w-full rounded shadow mb-2"
            />
            <div className="flex flex-col gap-2">
              <span className="bg-[#24bb67] text-white rounded px-3 py-1 text-sm font-semibold tracking-tight w-fit">DASHBOARD</span>
              <span className="bg-[#194c69] text-white rounded px-3 py-1 text-sm font-semibold tracking-tight w-fit">RD FREE ZONE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
