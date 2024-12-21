"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface props {
  goTo: string;
  children: ReactNode;
  secondary?: boolean;
}
export default function FooterButton({ goTo, children, secondary }: props) {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(goTo);
  }

  return (
    <button onClick={handleRedirect} className={`w-16 h-12 flex justify-center items-center hover:bg-gray-600 ${secondary && 'bg-gray-700'} cursor-pointer rounded-xl`}>
        {children}
    </button>
  );
}
