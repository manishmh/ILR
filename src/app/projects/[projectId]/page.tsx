"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage = ({ params }: { params: any }) => {
  const projectId = params.projectId;
  console.log(params);
  const project = PROJECTS.find((project) => project.id === projectId);

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="px-4 py-8">
          <p>Project not found</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex px-4 py-8 gap-8 justify-center font-sans mt-8">
        <div className="h-96 overflow-hidden rounded-xl">
          <Image
            src={project.url}
            alt={project.id}
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
        <div className="w-1/3 flex flex-col justify-center">
          <h1 className="text-xl font-semibold">{project.title}</h1>
          <p className="mt-4 text-sm">{project.desc}</p>
          <div className="mt-4 flex gap-4">
            <Link href="/">
              <Button>button 1</Button>
            </Link>
            <Link href="/">
              <Button>button 2</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
