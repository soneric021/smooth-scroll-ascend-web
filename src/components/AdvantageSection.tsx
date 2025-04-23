const IMAGES = [
  "/footer-images/techos.jpeg",
  "/footer-images/trabajadores.jpg",
  "/footer-images/crucero.png",
  "/footer-images/techos-campo.jpeg",
  "/footer-images/playa.jpeg",
  "/footer-images/marina.jpg",
];

export default function AdvantageSection() {
  return (
    <section id="consult" className="bg-white pt-16 pb-12 px-2 md:px-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Columna izquierda */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 uppercase text-[#183046]">
            DOMINICAN FREE ZONE ADVANTAGE
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-base mb-7">
            <li><b>Tax-Free Benefits:</b> Enjoy exemptions on corporate income tax, import duties, and more.</li>
            <li><b>Strategic Location:</b> Close proximity to the U.S. and Latin America with world-class ports and airports.</li>
            <li><b>Skilled Workforce:</b> A talented labor pool with strong industrial and service experience.</li>
            <li><b>Efficient Trade Agreements:</b> Access to major markets through CAFTA-DR, EU Economic Partnership, and more.</li>
            <li><b>Established Industrial Hubs:</b> Over 75 free zones with robust infrastructure and business support.</li>
          </ul>
        </div>

        {/* Columna derecha - fondo azul completo */}
        <div className="bg-[#143d66] text-white p-6 flex flex-col justify-between rounded-md">
          {/* Título */}
          <div className="font-semibold text-lg tracking-tight mb-4">
            BROWSE THE MAP AND LEARN THE LOCATION OF THE FREE TRADE ZONE PARKS.
          </div>

          {/* Galería de imágenes */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {IMAGES.map((src, i) => (
              <div
                key={src}
                className="bg-white p-1 rounded shadow-md"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <img
                  src={src}
                  alt="Industrial zone"
                  className="rounded-md object-cover w-full aspect-video hover:scale-105 transition animate-fade-in"
                />
              </div>
            ))}
          </div>

          {/* Mapa con botones al lado */}
          <div className="bg-white rounded shadow flex gap-4 p-4 items-start">
            <div className="flex flex-col gap-2 pt-1 min-w-[110px]">
              <span className="bg-[#24bb67] text-white rounded px-3 py-1 text-sm font-semibold tracking-tight">
                DASHBOARD
              </span>
              <span className="bg-[#194c69] text-white rounded px-3 py-1 text-sm font-semibold tracking-tight">
                RD FREE ZONE
              </span>
            </div>
            <iframe src="https://www.google.com/maps/d/embed?mid=1I6LVVLsm2vvNpDQDwkKQ7I5M4PdilTI&ehbc=2E312F" width="640" height="360"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
