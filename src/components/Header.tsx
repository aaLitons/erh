"use client"

import Section from "./Section"
import { Copyright, PanelRight } from "lucide-react"
import { Button } from "./ui/button"
import { useSidebar } from "./SidebarProvider"

const Header = () => {
  const { toggle, isOpen } = useSidebar()

  return (
    <header className="sticky top-0 bg-background h-16">
      <Section className="flex items-baseline">
        <h1 className="text-2xl font-bold text-primary">EduRessource-Hub </h1>
        <Copyright size={10}/>
        <div className="flex-1" />
        <Button
          className="p-0 text-foreground bg-transparent hover:bg-accent"
          aria-expanded={isOpen}
          onClick={toggle}
        >
          <PanelRight size={20}/>
        </Button>
      </Section>
    </header>
  )
}

export default Header