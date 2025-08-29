"use client";

import { CardContainer, CardBody, CardItem } from "@/components/magicui/3d-card";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  dates: string;
  technologies: readonly string[];
  links?: readonly {
    icon: string;
    type: string;
    href: string;
  }[];
  image: string;
}

export function ProjectCard({
  id,
  title,
  description,
  dates,
  technologies,
  links,
  image,
}: ProjectCardProps) {
  const githubLink = links?.find((link) => link.type.toLowerCase() === "github");

  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-indigo-500/[0.15] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] w-full h-[29rem] rounded-3xl p-6 flex flex-col justify-between transition-all">
        
        {/* Top Content */}
        <div className="flex flex-col flex-grow">
          {/* Project Image */}
          <CardItem translateZ="80" className="w-full h-48 relative">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-t-2xl group-hover/card:shadow-xl"
            />
          </CardItem>

          {/* Title */}
          <CardItem
            translateZ="60"
            className="mt-4 text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
          >
            {title}
          </CardItem>

          {/* Dates */}
          <CardItem
            translateZ="40"
            as="time"
            className="block text-sm text-gray-500 dark:text-gray-400 mt-1"
          >
            {dates}
          </CardItem>

          {/* Scrollable Description */}
          <CardItem
            translateZ="50"
            as="div"
            className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 flex-grow overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent"
          >
            <p>{description}</p>
          </CardItem>
        </div>

        {/* Buttons at Bottom */}
        <div className="flex gap-4 mt-6">
          <CardItem translateZ="30" className="w-1/2">
            <Link href={id ? `/projects/${id}` : "#"} className="w-full block">
              <ShimmerButton
                className={cn(
                  "px-6 py-4 w-full text-sm font-medium text-white dark:text-white bg-indigo-600 rounded-lg",
                  "hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600",
                  "transition-colors duration-300"
                )}
              >
                View Details
              </ShimmerButton>
            </Link>
          </CardItem>

          {githubLink && (
            <CardItem translateZ="30" className="w-1/2">
              <InteractiveHoverButton className="w-full px-6 py-4">
                <Link href={githubLink.href} target="_blank">
                  Visit Project
                </Link>
              </InteractiveHoverButton>
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}
