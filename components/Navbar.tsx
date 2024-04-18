"use client"
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    setIsSidebarOpen(false); // Close the sidebar when a link is clicked
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map(link => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-slate-400 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* SIDEBAR */}
      <div
        className={`lg:hidden fixed top-0 left-0 bottom-0 w-full py-16 px-10 bg-slate-50 z-40 transition-all
      ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col h-full justify-between">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map(link => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="regular-16 text-slate-400 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                  onClick={handleLinkClick} 
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
      </div>

      {/* MENU ICON */}
      <div className="relative z-50 text-slate-900">
        <Image
          src={isSidebarOpen ? "/close.svg" : "/menu.svg"}
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={toggleSidebar}
        />
      </div>
    </nav>
  );
}