import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav className="w-[90%] flex justify-between items-center mt-[35px] m-auto">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <h1 className="text-[22px] font-bold font-sans">
            <span className="text-[#8540F5]">Talk</span> Business
          </h1>
        </div>
        <ul className="flex items-center gap-[55px] text-[16px] font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/systems">Systems</Link>
          </li>
          <li>
            <Link href="/Contact">
              <button className="w-[130px] h-[50px] rounded-[150px] border-[2px] border-[#8540F5] text-[#8540F5] ">
                Contact us
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
