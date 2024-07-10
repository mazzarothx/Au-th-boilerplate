"use client"

import { FaCaretRight } from "react-icons/fa"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HEADER_LINKS } from "./links"

const MobileNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex size-9 items-center justify-center p-0 md:hidden"
          type="button"
          aria-label="Toggle menu"
          variant="ghost"
        >
          <span className="sr-only">Toggle menu</span>
          <FaCaretRight className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        {HEADER_LINKS.map((link) => (
          <DropdownMenuItem key={link.text} asChild>
            <Link href={link.href} className="flex items-center gap-4">
              {link.icon}
              <div>{link.text}</div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MobileNav
