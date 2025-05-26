"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full min-h-[70px] relative flex items-center justify-center p-4 pt-10">
      {/* <Image src="https://i.imgur.com/sbFR5ia.png" width={230} height={28} className="w-[35px] h-[30px]" alt="logo" /> */}
      <Image src="https://i.imgur.com/4MIjiUp.png" width={230} height={28} className="w-[200px]" alt="logo" />
    </div>
  );
}
