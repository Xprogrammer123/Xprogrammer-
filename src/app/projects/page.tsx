import BlurFade from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { SmoothCursor } from "@/components/ui/smooth-cursor";


const BLUR_FADE_DELAY = 0.04;



export default function Projects() {
  return (
    <>
      <SmoothCursor />
      <main className="relative flex flex-col min-h-[100dvh] -mt-28 overflow-hidden scroll-smooth">
        {/* Scroll Progress */}
        <ScrollProgress className="fixed top-0 left-0 right-0 z-50 h-1 bg-black transition-all duration-500 ease-out" />



        <section id="projects" className="py-5 space-y-2">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <SparklesText className="text-center justify flex-1 mb-10 sm:text-7xl text-4xl mt-20">What I've Been Cooking up</SparklesText>
            <h2 className="text-xl sm:text-2xl font-bold text-center max-w-2xl mx-auto leading-relaxed">
              "A curated selection of projects that highlight my skills, creativity, and growth as a developer."
            </h2>
            <div className="flex justify-center mt-8">
              <InteractiveHoverButton className="py-3">
                <Link href="/">
                  Back to Exploring Me
                </Link>
              </InteractiveHoverButton>
            </div>

          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {DATA.projects.map((project, index) => (
              <BlurFade
                key={project.id ?? index} // fallback to index if id missing
                delay={BLUR_FADE_DELAY * 3 + index * 0.05}
              >
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  technologies={project.technologies}
                  links={project.links}
                  image={project.image}
                />
              </BlurFade>
            ))}
          </div>
        </section>


        {/* Contact */}
        <section id="contact" className="relative py-12 space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <h2 className="text-2xl font-bold text-center">Get in Touch</h2>
          </BlurFade>
          <TextAnimate
            animation="fadeIn"
            by="word"
            delay={BLUR_FADE_DELAY * 15}
            duration={0.3}
            className="mx-auto max-w-[600px] text-center text-muted-foreground my-4"
          >
            Want to chat? Shoot me a DM on Twitter or connect via GitHub/Email.
          </TextAnimate>
          <div className="flex justify-center gap-4">
            <ShimmerButton >
              <Link href={`mailto:${DATA.contact.email}`}>Send Email</Link>
            </ShimmerButton>
            <InteractiveHoverButton >
              <Link href={DATA.contact.social.LinkedIn?.url || "#"}>
                Connect on LinkedIn
              </Link>
            </InteractiveHoverButton>
          </div>
        </section>
      </main>
    </>
  );
}








