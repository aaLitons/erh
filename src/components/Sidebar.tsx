"use client"

import React, { useEffect } from "react"
import { useSidebar } from "./SidebarProvider"
import { X, Home, Book, Pen, Contact} from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

const Sidebar = () => {
  const { isOpen, close } = useSidebar()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [close])

  return (
    <>
      {/* Overlay */}
      <div
        onClick={close}
        className={`fixed inset-0 bg-black/40 transition-opacity ${isOpen ? "opacity-100 pointer-events-auto z-40" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!isOpen}
      />

      {/* Panel */}
      <aside
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 z-50 h-full w-60 max-w-full bg-background shadow-lg transform transition-transform will-change-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-baseline justify-between p-4">
          <h3 className="text-xl font-semibold">Menu</h3>
          <Button variant="outline" size="icon" onClick={close} aria-label="Close sidebar">
            <X />
          </Button>
        </div>

        <nav className="p-4 space-y-2">
          <Link href="#" className="flex items-center px-2 py-2 rounded hover:bg-accent" onClick={close}><Home size={20}/> <p className="px-2">Acceuil</p></Link>
        <Link href="#" className="flex items-center px-2 py-2 rounded hover:bg-accent" onClick={close}><Book size={20}/> <p className="px-2">Cours</p></Link>
        <Link href="#" className="flex items-center px-2 py-2 rounded hover:bg-accent" onClick={close}><Pen size={20}/> <p className="px-2">Exercices</p></Link>
        <Link href="#" className="flex items-center px-2 py-2 rounded hover:bg-accent" onClick={close}><Contact size={20}/> <p className="px-2">Besoin d'aide</p></Link>    
        </nav>
      </aside>
    </>
  )
}

export default Sidebar