"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { AnimatedListDemo } from "@/components/animated-list";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Meteors } from "@/components/magicui/meteors";
import { MorphingText } from "@/components/magicui/morphing-text";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const doubledProjects = [...DATA.projects, ...DATA.projects];

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
                "SoftwareDeveloper",
                "Indie Hacker",
                "XProgrammer",
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
              <ShimmerButton>
                <Link href="/FawasSakaCV.pdf" download>
                  Download CV
                </Link>
              </ShimmerButton>
              <InteractiveHoverButton>
                <Link href={DATA.contact.social.GitHub.url}>Visit GitHub</Link>
              </InteractiveHoverButton>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden mb-28"
        >
          <Meteors className="absolute inset-0 opacity-30 pointer-events-none" />

          <div className="relative grid gap-8 lg:grid-cols-2 items-start">
            {/* Left */}
            <div className="space-y-6">
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <SparklesText className="sm:text-7xl text-4xl">
                  About Me
                </SparklesText>
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

            </div>

            {/* Right */}
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
        <section
          id="skills"
          className="grid grid-cols-1 md:grid-cols-2 mb-28"
        >
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <SparklesText className="sm:text-7xl text-4xl text-center justify-center">
              My Skills
            </SparklesText>
          </BlurFade>

          <AnimatedListDemo className="mx-auto" />
        </section>

        {/* Work */}
        <section id="work" className="space-y-4 mb-40">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <SparklesText className="sm:text-7xl text-4xl">
              Work Experience
            </SparklesText>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 5 + id * 0.05}
            >
              <ResumeCard
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

        {/* Projects */}
        <section id="projects" className="py-12 space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <SparklesText className="text-center justify flex-1 mb-10 sm:text-7xl text-4xl">
              What I've Been Cooking up
            </SparklesText>
          </BlurFade>

          <div className="slider relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl">
            <div className="slide-track flex animate-slide">
              {doubledProjects.map((project, i) => (
                <div
                  key={i}
                  className="slide min-w-full flex justify-center items-center"
                >
                  <img
                    src={project.image}
                    alt={project.title || "project"}
                    className="w-full h-[400px] object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/projects">
              <ShimmerButton>View All Projects →</ShimmerButton>
            </Link>
          </div>
        </section>

        {/* Quote */}
        <section className="py-12 px-4 text-center">
          <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md">
            <p className="text-lg italic text-gray-700 dark:text-gray-300">
              “The only way to do great work is to love what you do”
            </p>
            <p className="mt-4 text-sm font-medium text-gray-900 dark:text-gray-400">
              — Steve Jobs
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative py-12 space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <SparklesText className="text-center justify flex-1 mb-10 sm:text-7xl text-4xl">
              Get in Touch
            </SparklesText>
          </BlurFade>

          <TextAnimate
            animation="fadeIn"
            by="word"
            delay={BLUR_FADE_DELAY * 15}
            duration={0.3}
            className="mx-auto max-w-[600px] text-center text-muted-foreground my-4"
          >
            Want to build something? Send me a quick WhatsApp message 👇
          </TextAnimate>

          {/* WhatsApp Contact Form */}
          <div className="relative max-w-md mx-auto bg-white dark:bg-black p-6 rounded-2xl shadow-md space-y-4 border border-gray-200 dark:border-gray-800">
            <input
              type="text"
              id="name"
              placeholder="Hi, I'm ..."
              className="w-full border border-black dark:border-white rounded-xl p-3 bg-transparent text-black dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
            <input
              type="text"
              id="project"
              placeholder="I want to build ..."
              className="w-full border border-black dark:border-white rounded-xl p-3 bg-transparent text-black dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />

            <div className="relative">
              <span className="absolute inset-0 flex items-center justify-center text-5xl font-extrabold text-black/5 dark:text-white/5 select-none pointer-events-none">
                xprogrammer
              </span>
              <button
                onClick={() => {
                  const name = (document.getElementById("name") as HTMLInputElement)?.value;
                  const project = (document.getElementById("project") as HTMLInputElement)?.value;
                  const phoneNumber = "2349138983178";
                  const message = `Hi, I'm ${name}. I want to build ${project}.`;
                  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(url, "_blank");
                }}
                className="relative w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Send to WhatsApp
              </button>
            </div>
          </div>

          {/* Other Contact Options */}
          <div className="flex justify-center gap-4 pt-6">
            <ShimmerButton>
              <Link href={`mailto:${DATA.contact.email}`}>Send Email</Link>
            </ShimmerButton>
            <InteractiveHoverButton>
              <Link href={DATA.contact.social.X?.url || "#"}>
                Connect on X
              </Link>
            </InteractiveHoverButton>
          </div>
        </section>
      </main>
    </>
  );
}
