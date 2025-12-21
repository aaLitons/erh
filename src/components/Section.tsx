import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"


const Section = (props : PropsWithChildren<{className?: string}>) => {
  return (
    <section className={cn("max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8", props.className)}>
        {props.children}
    </section>)
}

export default Section