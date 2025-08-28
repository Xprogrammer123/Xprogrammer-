"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer group"
      onClick={handleClick}
    >
      <Card
        className="border rounded-3xl px-4 py-6"
      >
        <CardHeader className="p-0 space-y-2">
          <div className="flex items-center justify-between gap-x-4">
            <h3 className="inline-flex items-center justify-center font-bold text-base sm:text-lg leading-none text-gray-900 dark:text-white transition-colors duration-300 ">
              {title}
              {badges && (
                <span className="inline-flex gap-x-2 ml-3">
                  {badges.map((badge, index) => (
                    <Badge
                      variant="secondary"
                      className={cn(
                        "align-middle text-xs font-medium",
                        "py-1 px-2.5 rounded-lg transition-transform duration-300 hover:scale-105",
                      )}
                      key={index}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
              <ChevronRightIcon
                className={cn(
                  "size-5 text-gray-400 dark:text-gray-500 transition-all duration-300 ease-out",
                  "group-hover:translate-x-1 group-hover:opacity-100",
                  isExpanded ? "rotate-90" : "rotate-0",
                )}
              />
            </h3>
            <div className="text-sm sm:text-base tabular-nums text-gray-500 dark:text-gray-400 transition-colors duration-300 dark:group-hover:text-indigo-400">
              {period}
            </div>
          </div>
          {subtitle && (
            <div className="font-sans text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">
              {subtitle}
            </div>
          )}
        </CardHeader>
        {description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            {description}
          </motion.div>
        )}
      </Card>
    </Link>
  );
};