import { DATA } from "@/data/resume";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const project = DATA.projects.find(p => p.id === params.id);
  if (!project) return notFound();

  const githubLink = project.links?.find((link) => link.type.toLowerCase() === "github");

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 space-y-8">
      <div className="relative w-full h-72">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <h1 className="text-3xl font-bold">{project.title}</h1>
      <time className="text-sm text-gray-500">{project.dates}</time>
      <p className="text-lg text-gray-700 dark:text-gray-300">{project.description}</p>

      {project.technologies?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, i) => (
            <Badge key={i}>{tech}</Badge>
          ))}
        </div>
      )}

      <div className="flex gap-4 mt-6">
        {githubLink && (
          <Button >
            <Link href={githubLink.href} target="_blank">
              {githubLink.icon} GitHub
            </Link>
          </Button>
        )}
        <Button  variant="outline">
          <Link href="/#projects">← Back to Projects</Link>
        </Button>
      </div>
    </div>
  );
}
