
export default function FeaturesSection() {
  return (
    <section id="why" className="bg-gradient-to-r from-[#31eab3bd] to-[#2ebfb19e] pt-12 pb-9">
      <div className="max-w-6xl mx-auto px-4 text-left">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#09335c] uppercase">EASY, SEAMLESS & HASSLE-FREE</h2>
            <div className="text-[#08304d] text-base md:text-lg mb-5 font-semibold">
              Expanding your business to a new country—whether for manufacturing or services—can seem complex.
              But with our one-stop solution, we can make it happen.
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:ml-8 shrink-0">
            <a
              href="#consult"
              className="bg-[#174b7f] text-white font-bold px-8 py-3 rounded shadow hover:bg-[#0b4265] transition"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 bg-[#0b4265] py-12 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase">YOUR BEST NEARSHORING PARTNER</h2>
          <div className="text-white text-base md:text-lg mb-8 max-w-2xl">
            A partner that understands your needs, with local insight, global standards, and proven results.
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 mb-6">
            <FeatureItem title="Faster Setup" desc="We streamline legal and operational processes" />
            <FeatureItem title="Cost Savings" desc="Reduce labor and operational expenses" />
            <FeatureItem title="Expert Support" desc="We guide you at every step" />
            <FeatureItem title="Strategic Locations" desc="Reduce labor and operational expenses" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-[#194c69]/90 text-white py-6 px-4 rounded-lg text-center shadow animate-fade-in">
      <div className="font-bold text-lg mb-2">{title}</div>
      <div className="text-sm font-medium opacity-90">{desc}</div>
    </div>
  );
}
