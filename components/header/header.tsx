import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="flex justify-center md:justify-between items-center w-full h-16 px-6 fixed bg-zinc-800">
      <h1 className="text-zinc-50">Trends</h1>
      <h3 className="text-base font-medium leading-none hidden md:flex text-zinc-50">
        Home
      </h3>
      <Button className="hidden md:flex">Log in</Button>
    </header>
  );
}
