import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Search from "./Search";
import { Drawer } from "./Drawer";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <div className="flex">
            <Drawer />

            <Link href="/" className="flex items-center space-x-2">
             <img className="h-14" src="/logoazul.png"></img>
          
            </Link>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1 gap-3">
            <Search />
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
};

export default Navbar;
