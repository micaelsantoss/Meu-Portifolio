import { useParams } from "react-router-dom";
import { projects } from "../../projects";
import { ProjectGallery } from "../projectGallery";

export function ProjectDetails() {
  const { id } = useParams();
  const idNumber = Number(id);
  const project = projects.find(p => p.id === idNumber);

  if (!project) return <p>Projeto não encontrado</p>;

  return (
    <div className="min-h-screen bg-primaria text-white px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-400 max-w-2xl mb-8 m-auto">
        {project.description}
      </p>

      <ProjectGallery images={project.images} videos={project.videos} />

      <div className="flex gap-4 mt-10 justify-center">
        {project.url && (
          <a 
            href={project.url} 
            target="_blank" 
            className="
                border
                border-sky-400
                text-sky-400
                px-5
                py-2
                rounded-lg
                hover:bg-sky-400
                hover:text-[#212733]
                transition
                cursor-pointer
            "  
          >
            Acessar site
          </a>
        )}

        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            className="
                border
                border-sky-400
                text-sky-400
                px-5
                py-2
                rounded-lg
                hover:bg-sky-400
                hover:text-[#212733]
                transition
                cursor-pointer
            "  
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
