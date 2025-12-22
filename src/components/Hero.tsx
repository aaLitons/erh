import { Button } from './ui/button'
import Section from './Section'
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Highlighter } from './ui/highlighter';
import { cn } from '@/lib/utils'
import { Marquee } from './ui/marquee';
import { ArrowDown } from 'lucide-react';

const reviews = [
  {
  name: "Al-Khwârizmî",
  username: "@algebre",
  body: "Algèbre et algorithmes fondamentaux.",
  img: "https://avatar.vercel.sh/jack",
},
{
  name: "Ada Lovelace",
  username: "@premiere_programmeuse",
  body: "Initiation code créatif en primaire.",
  img: "https://avatar.vercel.sh/jill",
},
{
  name: "Archimède",
  username: "@poussee_eureka",
  body: "Technologie : principes mécaniques concrets.",
  img: "https://avatar.vercel.sh/john",
},
{
  name: "Tim Berners-Lee",
  username: "@web_protocol",
  body: "SNT : fondements du web et HTML.",
  img: "https://avatar.vercel.sh/jane",
},
{
  name: "Ératosthène",
  username: "@mesure_terre",
  body: "Algorithmes mathématiques pour la science.",
  img: "https://avatar.vercel.sh/jenny",
},
{
  name: "Grace Hopper",
  username: "@bug_compilateur",
  body: "Logique algorithmique dès le primaire.",
  img: "https://avatar.vercel.sh/james",
},
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64  overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/.1 bg-gray-950/.01 hover:bg-gray-950/.5",
        // dark styles
        "dark:border-gray-50/.1 dark:bg-gray-50/.10 dark:hover:bg-gray-50/.15"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col text-left">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-left">{body}</blockquote>
    </figure>
  )
}

const Hero = () => {
  return (
    <Section className="container h-screen mx-auto px-4 py-15 text-center animate-fade-in">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            Une plateforme de ressources
          
          <PointerHighlight
        rectangleClassName=" bg-neutral-700 dark:bg-neutral-700 border-neutral-600 dark:border-neutral-600 "
        pointerClassName="text-yellow-500"
      >
        <span className='relative z-10'>pédagogiques</span>
      </PointerHighlight>
      </h1>
          <p className="text-lg text-muted-foreground">
            Centralisation, organisation et gestion des ressources d'enseignement.
            Du primaire au lycée, pour {""}<Highlighter action="underline" color="#FF9800">l'Informatique, les Mathématiques, la Technologie et la Robotique.</Highlighter>{" "}
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" >
              Commençons
            </Button>
            <Button size="lg" variant="outline">
              En savoir plus <ArrowDown className="ml-1"/>
            </Button>
          </div>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
    </div>
        </div>
      </Section>
  )
}

export default Hero