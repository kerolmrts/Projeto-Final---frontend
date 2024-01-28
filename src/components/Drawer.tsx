"use client"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FiBriefcase, FiMenu, FiUser } from "react-icons/fi"
import Search from "@/components/Search"
import Link from "next/link"
import { ModeToggle } from "./ModeToggle"


export function Drawer() {
 
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <FiMenu className="text-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="space-y-4 py-4 px-2">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h2 className="text-lg font-semibold tracking-tight">
                Estágios RN
              </h2>
            </Link>
            <ModeToggle />
          </div>
          
            <div className="space-y-1">
              <Link href="/vagas">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <FiBriefcase/>
                  Todas as Vagas
                </Button>
              </Link>

              <Link href="/auth">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <FiUser />
                Login
                </Button>
              </Link>
            </div>
         
        </div>
      </SheetContent>
    </Sheet>
  )
}
