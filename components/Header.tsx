"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <div className="flex">
          <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
        </div>
      </Link>
      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/home"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/home" ? "text-light-200" : "text-light-100",
            )}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/search"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/search" ? "text-light-200" : "text-light-100",
            )}
          >
            Search
          </Link>
        </li>
        <li>
          <Link
            href="/sign-in"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/search" ? "text-light-200" : "text-light-100",
            )}
          >
            Sign in
          </Link>
        </li>
        <li>
          <Link
            href="/sign-up"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/search" ? "text-light-200" : "text-light-100",
            )}
          >
            Sign up
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
