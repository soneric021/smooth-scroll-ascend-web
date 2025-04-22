
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleButton = () => {
      setVisible(window.scrollY > 180);
    };
    window.addEventListener("scroll", toggleButton);
    toggleButton();
    return () => window.removeEventListener("scroll", toggleButton);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className={`
        fixed z-50 right-6 bottom-6 rounded-full
        bg-[#24bb67] shadow-lg text-white flex items-center justify-center
        w-12 h-12 transition-opacity duration-300
        hover:bg-[#169855] hover:scale-110
        ${visible ? "opacity-95 pointer-events-auto" : "opacity-0 pointer-events-none"}
        animate-fade-in
      `}
      aria-label="Back to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}
