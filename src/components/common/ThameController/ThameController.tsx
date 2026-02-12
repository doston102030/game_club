"use client"

import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeControll() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-accent transition-colors duration-200">
          <Sun className="h-[1.15rem] w-[1.15rem] scale-100 rotate-0 transition-all duration-500 dark:scale-0 dark:-rotate-90 text-amber-500" />
          <Moon className="absolute h-[1.15rem] w-[1.15rem] scale-0 rotate-90 transition-all duration-500 dark:scale-100 dark:rotate-0 text-violet-400" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px] p-1.5">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`gap-2.5 cursor-pointer rounded-lg px-3 py-2 ${theme === 'light' ? 'bg-accent font-medium' : ''}`}
        >
          <Sun size={15} className="text-amber-500" />
          Yorug&apos;
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`gap-2.5 cursor-pointer rounded-lg px-3 py-2 ${theme === 'dark' ? 'bg-accent font-medium' : ''}`}
        >
          <Moon size={15} className="text-violet-400" />
          Qorong&apos;u
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`gap-2.5 cursor-pointer rounded-lg px-3 py-2 ${theme === 'system' ? 'bg-accent font-medium' : ''}`}
        >
          <Monitor size={15} className="text-blue-400" />
          Tizim
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
