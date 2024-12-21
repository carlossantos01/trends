import { Home, Plus, UserRound } from "lucide-react";
import FooterButton from "../footer-button/footer-button";

export default function Footer() {
  return (
    <footer className="flex fixed justify-center items-center bottom-0 w-full h-16 bg-zinc-800 gap-2">
      <FooterButton goTo="/">
        <Home className="w-6 h-6 text-zinc-50" />
      </FooterButton>
      <FooterButton goTo="/" secondary>
        <Plus className="w-6 h-6 text-zinc-50" />
      </FooterButton>
      <FooterButton goTo="/login">
        <UserRound className="w-6 h-6 text-zinc-50" />
      </FooterButton>
    </footer>
  );
}
