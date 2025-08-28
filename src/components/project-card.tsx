"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
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
    <Card
      className="border rounded-3xl shadow-xl "
    >
      <CardHeader className="p-6 pb-0">
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-t-2xl"
          />
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {title}
        </h3>
        <time className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {dates}
        </time>
        <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 line-clamp-2">
          {description}
        </p>

      </CardContent>

      <div className="p-6 pt-0 flex gap-4">
         <Link href={id ? `/projects/${id}` : "#"} className="w-1/2">
          <ShimmerButton 
          className={cn(
            "px-6 py-4 w-full text-sm font-medium text-white dark:text-white bg-indigo-600 rounded-lg",
            "hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600",
            "transition-colors duration-300",
          )}
        >
         View Details
        </ShimmerButton>
        </Link>

        {githubLink && (
         
            <InteractiveHoverButton className="w-1/2 px-6 py-4 ">
              <Link href="">Visit Project</Link>
            </InteractiveHoverButton>
        )}
      </div>
    </Card>
  );
}
