import PopoverHeader from "./PopoverHeader";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <h3 className="font-[Asimovian] text-slate-300 text-2xl">CobraloYa</h3>
      <PopoverHeader />
    </header>
  );
}
