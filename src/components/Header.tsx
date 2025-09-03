import { Link } from "react-router-dom";
import PopoverHeader from "./PopoverHeader";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-5">
      <Link to="/">
        <h3 className="font-[Asimovian] text-slate-300 text-4xl">
          Cobralo<span className="text-emerald-700 text-5xl">Ya</span>
        </h3>
      </Link>
      <PopoverHeader />
    </header>
  );
}
