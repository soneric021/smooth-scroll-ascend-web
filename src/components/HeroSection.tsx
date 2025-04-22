
const bgImage = "/lovable-uploads/c1a13f11-d4b8-42e5-8096-237fd8d1ed77.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[530px] pt-28 pb-20 flex items-center justify-start bg-cover bg-center"
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      <div className="max-w-3xl ml-6 md:ml-12 z-10 text-left px-6 md:px-0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-1 leading-tight animate-fade-in">
          NEARSHORING MADE SIMPLE
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-[#73e1cf] mb-5 animate-fade-in">
          Expand Faster & Smarter
        </p>
        <div className="text-base md:text-lg text-white mb-7 font-medium animate-fade-in">
          We help businesses relocate manufacturing and operations effortlessly, <br className="hidden md:inline" />
          saving you time and money.
        </div>
        <a
          href="#consult"
          className="inline-block bg-[#24bb67] px-7 py-3 rounded-md text-white font-bold text-lg shadow hover:scale-105 transition hover:bg-[#1aa857] animate-fade-in"
        >
          FIND OUT MORE
        </a>
      </div>
    </section>
  );
}
