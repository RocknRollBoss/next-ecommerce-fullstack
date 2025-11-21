import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
interface Props {
  name: string;
  href: string;
}

export const TopNavigation: React.FC<Props> = ({ name, href }) => {
  return (
    <div className="mt-6 flex gap-2 items-center text-sm">
      <Link className="text-[#414141] hover:opacity-70" href="/">
        Home
      </Link>
      <ChevronRight className="w-4 h-4 text-gray-400" />
      <Link className="text-[#8F8F8F]" href={href}>
        {name}
      </Link>
    </div>
  );
};
