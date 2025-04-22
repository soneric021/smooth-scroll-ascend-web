
import { Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-[#25b48b] pt-9 pb-7 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        {/* Left logo/contact */}
        <div className="flex items-start md:items-center gap-7">
          <div className="flex flex-col md:flex-row gap-3 md:gap-7 items-center">
            <span className="flex space-x-2">
              <span className="inline-block w-8 h-8 rounded-full bg-green-500 border-2 border-white" />
              <span className="inline-block w-8 h-8 rounded-full bg-yellow-400 border-2 border-white -ml-3" />
              <span className="inline-block w-8 h-8 rounded-full bg-red-500 border-2 border-white -ml-3" />
            </span>
            <span className="font-semibold text-white text-base whitespace-nowrap mt-4 md:mt-0">
              CONTACT US
            </span>
          </div>
          <div className="flex flex-col gap-1 text-white text-sm font-medium ml-2">
            <span className="flex items-center gap-1"><Mail className="inline h-4 w-4" /> LOREM.IPSUM@MAILTO.COM</span>
            <span>LOREM IPSUM</span>
            <span>LOREM.IPSUM@MAILTO.COM</span>
            <span>LOREM IPSUM</span>
          </div>
        </div>
        {/* Address + Terms */}
        <div className="text-white text-xs text-left font-light max-w-sm py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed ac luctus dui. Nunc consectetur dignissim dui, nec maximus eros facilisis nec. 
          Proin scelerisque vitae eros et tincidunt. Mauris nec dictum risus, vitae volutpat lacus. 
          Pellentesque nec sem non massa laoreet congue.
        </div>
        {/* Socials */}
        <div className="flex flex-col items-end gap-2">
          <span className="font-bold text-white uppercase text-xs tracking-widest">
            FOLLOW US
          </span>
          <div className="flex items-center gap-2">
            <a href="#" className="bg-white/80 hover:bg-white transition w-8 h-8 flex items-center justify-center rounded-full shadow">
              <Facebook className="w-5 h-5 text-[#1d477a]" />
            </a>
            <a href="#" className="bg-white/80 hover:bg-white transition w-8 h-8 flex items-center justify-center rounded-full shadow">
              <Instagram className="w-5 h-5 text-[#d9488a]" />
            </a>
            <a href="#" className="bg-white/80 hover:bg-white transition w-8 h-8 flex items-center justify-center rounded-full shadow">
              <Linkedin className="w-5 h-5 text-[#1277b0]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
