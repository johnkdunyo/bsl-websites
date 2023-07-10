import * as React from "react";
import Image from "next/image";
import Link from "next/link";

interface INavbarNavButtons {
  title: string;
  href: string;
  imgSRC: string;
  active?: boolean;
}

export const NavButton = ({
  active,
  title,
  href,
  imgSRC,
}: INavbarNavButtons) => {
  return (
    <button
      className={` ${
        active ? "bg-transparent" : "bg-transparent"
      }  px-6 w-full   h-10 relative `}
    >
      <Link href={href}>
        <Image src={imgSRC} alt={title} className="  " fill />
      </Link>
    </button>
  );
};
