
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "How Can We Help?", href: "#help" },
  { label: "Why Choose Us?", href: "#why" },
  { label: "Free Consultation", href: "#consult" },
];

const logoColors = ["bg-green-500", "bg-yellow-400", "bg-red-500"];

export default function NavBar() {
  const [active, setActive] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, i: number) => {
    e.preventDefault();
    setActive(i);
    const targetId = NAV_LINKS[i].href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="w-full fixed z-40 top-0 left-0 bg-[#003c4d]/95 shadow">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 md:px-8 py-4">
        <div className="flex items-center space-x-2">
          {logoColors.map((c, idx) => (
            <span key={c} className={`inline-block w-5 h-5 rounded-full ${c} border-2 border-white -mr-2 last:mr-0`} />
          ))}
        </div>
        <div className="flex items-center gap-2 md:gap-5">
          {NAV_LINKS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={e => handleClick(e, i)}
              className={`text-white text-base font-medium px-0.5 transition relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-[#24bb67] after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200
             ${active === i ? "after:scale-x-100" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
