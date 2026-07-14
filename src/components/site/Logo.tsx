import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <img
        src={logo}
        alt="Nexa Skills Hub logo"
        width={100}
        height={100}
        className="h-24 pt-2 w-auto transition-transform duration-300 group-hover:scale-105"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`text-lg font-extrabold tracking-tight ${light ? "text-navy-foreground" : "text-navy"}`}
        >
          Nexa <span className="text-primary">Skills</span> Hub
        </span>
        <span
          className={`text-[9px] font-medium uppercase tracking-[0.22em] ${light ? "text-navy-foreground/60" : "text-muted-foreground"}`}
        >
          Launch your future
        </span>
      </span>
    </Link>
  );
}
