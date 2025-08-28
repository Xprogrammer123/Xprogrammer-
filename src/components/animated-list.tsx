"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import Image from "next/image";

interface Item {
  name: string;
  description: string;
  image: string;
  time: string;
}

let notifications: Item[] = [
  { name: "Html5", description: "Fawas", time: "2yr ago", image: "/html.png" },
  { name: "Css3", description: "Fawas", time: "2yr ago", image: "/css.png" },
  { name: "Javascript (ES6)", description: "Fawas", time: "2yr ago", image: "/javascript.png" },
  { name: "Typescript", description: "Fawas", time: "1yr ago", image: "/typescript.png" },
  { name: "React Js", description: "Fawas", time: "2yr ago", image: "/reactjs.png" },
  { name: "Next Js", description: "Fawas", time: "8months ago", image: "/nextjs.png" },
  { name: "Tailwindcss", description: "Fawas", time: "2yr ago", image: "/tailwind.png" },
  { name: "Bootstrap", description: "Fawas", time: "2yr ago", image: "/bootstrap.png" },
  { name: "Supabase", description: "Fawas", time: "1yr ago", image: "/supabase.jpg" },
  { name: "Firebase", description: "Fawas", time: "10months ago", image: "/firebase.png" },
  { name: "Clerk", description: "Fawas", time: "7months ago", image: "/clerk.png" },
  { name: "Git/Github", description: "Fawas", time: "2yr ago", image: "/git.png" },
  { name: "Vscode", description: "Fawas", time: "2yr ago", image: "/vscode.png" },
  { name: "Linux (Parrot OS)", description: "Fawas", time: "10months ago", image: "/parrot.png" },
  { name: "Vercel/Pxxl space", description: "Fawas", time: "hosting ago", image: "/vercel.png" },
  { name: "Vite/Yarn", description: "Fawas", time: "install ago", image: "/vite.png" },
];

// ✅ replicate list for demo scroll effect
notifications = Array.from({ length: 5 }, () => notifications).flat();

const Notification = ({ name, description, image, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-full">
          <Image
            src={image}
            alt={name}
            width={40}
            height={40}
            className="size-10 object-cover rounded-full shadow-sm"
          />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-xs font-normal dark:text-white/60 text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
  items,
}: {
  className?: string;
  items: Item[];
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className,
      )}
    >
      <AnimatedList>
        {items.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}

