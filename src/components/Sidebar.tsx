"use client"

import React, { useEffect } from "react"
import { useSidebar } from "./SidebarProvider"
import { X, Home, Book, Pen, Contact, CircleCheckIcon, CircleHelpIcon, CircleIcon} from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport
} from "@/components/ui/navigation-menu"


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]



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
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${isOpen ? "opacity-100 pointer-events-auto z-40" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!isOpen}
      />

      {/* Panel */}
      <aside
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 z-50 h-full w-60 max-w-full shadow-lg transform transition-transform will-change-transform overflow-visible ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ backdropFilter: isOpen ? "blur(6px)" : undefined }}
      >
        <div className="flex items-baseline justify-between p-4">
          <h3 className="text-xl font-semibold">Menu</h3>
          <Button variant="outline" className="bg-transparent" size="icon" onClick={close} aria-label="Close sidebar">
            <X />
          </Button>
        </div>

        <NavigationMenu orientation="vertical">
          <NavigationMenuList className="flex-col">
        <NavigationMenuItem>
          <Link href="#" className="flex items-center px-2 py-2 rounded hover:bg-accent"><Home size={18}/> <p className="px-2 text-sm">Acceuil</p></Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger><Link href="#" className="flex items-center rounded" ><Book size={18}/> <p className="px-2 text-sm">Cours</p></Link></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-100 md:w-125 md:grid-cols-2 lg:w-150">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger><Link href="#" className="flex items-center rounded hover:bg-accent" ><Pen size={18}/> <p className="px-2 text-sm">Exercices</p></Link></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-50 gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Components</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Documentation</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Blocks</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block" >
          <NavigationMenuTrigger><Link href="#" className="flex items-center rounded hover:bg-accent" ><Contact size={18}/> <p className="px-2 text-sm">Besoin d'aide</p></Link></NavigationMenuTrigger>
          <NavigationMenuContent >
            <ul className="grid w-50 gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleHelpIcon />
                    Backlog
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleIcon />
                    To Do
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleCheckIcon />
                    Done
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport/>
    </NavigationMenu>
      </aside>
    </>
  )
}


function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default Sidebar