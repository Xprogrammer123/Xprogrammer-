import BlurFade from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { AnimatedList } from "@/components/magicui/animated-list";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Meteors } from "@/components/magicui/meteors";
import { MorphingText } from "@/components/magicui/morphing-text";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";
import { AnimatedListDemo } from "@/components/animated-list";

const BLUR_FADE_DELAY = 0.04;

// Define colors for skills to cycle through
const skillColors = [
  "#00C9A7",
  "#FFB800",
  "#FF3D71",
  "#1E86FF",
  "#FF6B6B",
  "#4CAF50",
  "#9C27B0",
  "#FFC107",
];

// Transform skills into the required Item interface
const skillsData = DATA.skills.map((skill, index) => ({
  name: skill,
  description: `Experienced with ${skill}`,
  time: `${index + 1}m ago`,
  image: `/${skill.toLowerCase().replace(/\s+/g, "")}.png`,
}));

export default function Page() {
  return (
    <>
      <SmoothCursor />
      <main className="relative flex flex-col min-h-[100dvh] -mt-28 overflow-hidden scroll-smooth">
        {/* Scroll Progress */}
        <ScrollProgress className="fixed top-0 left-0 right-0 z-50 h-1 bg-black transition-all duration-500 ease-out" />

        {/* Hero */}
        <section
          id="hero"
          className="relative flex items-center justify-center min-h-[85vh] overflow-hidden mb-80"
        >
          <DotPattern className="absolute inset-0 opacity-50" />
          <Meteors className="absolute inset-0 opacity-100" />

          <div className="relative z-10 mx-auto w-full space-y-6 text-center">
            <div className="flex justify-center pt-4">
              <Avatar className="size-56 border-4 border-white/20 shadow-xl">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </div>
            <MorphingText
              texts={[
                `Hey, I'm ${DATA.name.split(" ")[0]}`,
                "SoftwareDevloper",
                "Indie Hacker",
                "Xprogammer",
              ]}
              className="text-4xl sm:text-6xl font-bold tracking-tight mb-4"
            />

            <TextAnimate
              animation="fadeIn"
              by="word"
              delay={BLUR_FADE_DELAY}
              duration={0.3}
              className="max-w-[700px] mx-auto md:text-lg text-muted-foreground mt-6"
            >
              {DATA.description}
            </TextAnimate>

            <div className="flex items-center justify-center gap-4 pt-4">
              <ShimmerButton >
                <Link href="/FawasSakaCV.pdf" download>
                  Download CV
                </Link>
              </ShimmerButton>
              <InteractiveHoverButton >
                <Link href={DATA.contact.social.GitHub.url}>Visit GitHub</Link>
              </InteractiveHoverButton>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden"
        >
          {/* background decoration */}
          <Meteors className="absolute inset-0 opacity-30 pointer-events-none" />

          <div className="relative grid gap-8 lg:grid-cols-2 items-start">
            {/* Left Column: Title + Summary */}
            <div className="space-y-6">
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <SparklesText className="sm:text-7xl text-4xl">About Me</SparklesText>

              </BlurFade>

              <TextAnimate
                animation="fadeIn"
                by="word"
                delay={BLUR_FADE_DELAY * 3}
                duration={0.3}
                className="text-base md:text-lg text-muted-foreground leading-relaxed"
              >
                {DATA.summary}
              </TextAnimate>

              <BlurFade delay={BLUR_FADE_DELAY * 3.5}>
                <p className="text-sm text-primary font-medium uppercase tracking-wide">
                  Highlights
                </p>
              </BlurFade>

             <AnimatedList>
  <div>💻 Building scalable full-stack apps</div>
  <div>⚡ Real-time monitoring systems</div>
  <div>🎨 Pixel-perfect UI/UX engineering</div>
</AnimatedList>

            </div>

            {/* Right Column: Fun fact / Avatar / Extra flair */}
            <div className="flex flex-col items-center lg:items-start space-y-6">
              <Avatar className="size-32 border-4 border-white/20 shadow-lg">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>

              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <p className="text-center lg:text-left text-sm text-muted-foreground italic">
                  “I believe great software is built at the intersection of{" "}
                  <span className="font-medium text-foreground">
                    engineering excellence
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-foreground">
                    thoughtful design
                  </span>
                  .”
                </p>
              </BlurFade>
            </div>
          </div>
        </section>



        {/* Skills */}
        <section id="skills" className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 mb-40">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <SparklesText className="sm:text-7xl text-4xl">My Skills</SparklesText>
          </BlurFade>

          <AnimatedListDemo
            className="flex flex-wrap gap-2 max-w-[400px]"
            items={skillsData}
          />
        </section>



        {/* Work */}
        <section id="work" className="space-y-4 mb-40">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <SparklesText className="sm:text-7xl text-4xl">Work Experience</SparklesText>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 5 + id * 0.05}>
              <ResumeCard
                key={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </section>


        <section id="projects" className="py-12 space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <SparklesText className="text-center justify flex-1 mb-10 sm:text-7xl text-4xl">What I've Been Cooking up</SparklesText>
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