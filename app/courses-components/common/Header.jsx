"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 65) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 border-b border-b-gray-700 transition-colors duration-500 ${scrolled ? "bg-[#0B1120]/80 backdrop-blur-2xl" : "bg-[#0B1120]"}`}
    >
      <div className="container">
        <div className="relative flex h-16 items-center justify-between">
          <div className="logo text-xl font-bold tracking-wider text-white">
            {/* <Image src={"/next.svg"} alt="logo" height={50} width={50} /> */}
            Ahsan <span className="text-[#07A8ED]">DevHub</span>
          </div>
          <div className="desktop_nav">
            <ul className="flex gap-x-3 text-slate-300">
              <li>
                <Link
                  href="/"
                  className="rounded px-4 py-1 transition-all hover:bg-gray-800"
                >
                  হোম
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="rounded px-4 py-1 transition-all hover:bg-gray-800"
                >
                  কমপ্লিট ফ্রন্ট-এন্ড কোর্স
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="rounded px-4 py-1 transition-all hover:bg-gray-800"
                >
                  MERN স্ট্যাক ডেভেলপমেন্ট
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="rounded-full bg-[#07A8ED] px-5 py-1 text-white transition-all hover:bg-[#07a8edc9]"
                >
                  লগ-ইন
                </Link>
              </li>
            </ul>
          </div>
          <div className="mobile_nav lg:hidden"></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
