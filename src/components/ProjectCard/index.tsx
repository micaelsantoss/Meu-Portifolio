import { useState } from "react";
import { Project } from "../../types/Project";
import { ModalWindow } from "../ModalWindow";
import { Link } from "react-router-dom";
 
interface ProjectCardProps{
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [ openInfoProject, setOpenInfoProject ] = useState(false);

  return (
    <>
      <div
        className="
          group
          w-full
          bg-[#1b2130]
          rounded-2xl
          overflow-hidden
          shadow-lg
          transition-all
          group-hover:scale-105
          duration-500
        "
      >
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
          "
        >
          {/* Preview */}
          <div className="lg:w-1/2 w-full">
            <img
              src={project.image}
              alt={project.title}
              className="
                w-full
                h-64
                lg:h-full
                object-cover
                group-hover:scale-102
                transition-transform
                duration-500
              "
            />
          </div>

          {/* Conteúdo */}
          <div className="lg:w-1/2 w-full p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-6">
              {project.description}
            </p>

            {/* Tecnologias */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="
                    bg-sky-400/10
                    text-sky-400
                    px-3
                    py-1
                    rounded-full
                    text-sm
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Botões */}
            <div className="flex gap-4">
              <button
                className="
                  bg-sky-400
                  text-[#212733]
                  px-5
                  py-2
                  rounded-lg
                  font-medium
                  hover:bg-sky-300
                  transition
                  cursor-pointer
                "
                onClick={() => setOpenInfoProject(true)}
              >
                Mais informações
              </button>

              {project.liveUrl && (
                <a
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
                  href={project.liveUrl}
                  target="blank"
                >
                  Ver Projeto
                </a>
              )}

              {!project.liveUrl && (
                <Link
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
                  to={`/projeto/${project.id}`}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Ver Projeto
                </Link>
              )}
              
            </div>
          </div>
        </div>
      </div>

      
      <ModalWindow
          isOpen={openInfoProject}
          onClose={() => setOpenInfoProject(false)}
          title="Sobre o Projeto"
      >
          <div className="flex flex-col gap-5 mt-10 max-h-100 overflow-y-auto p-5">
            <p className="text-center text-gray-500">
              {project.completeDescription?.intro}
            </p>

            {project.completeDescription?.features && (
              <div className="max-w-[90%]">
                <h3 className="text-lg text-sky-800 mb-2 ">
                  Funcionalidades:
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {project.completeDescription.features.map((item, i) => (
                    <li 
                      className="text-gray-500"
                      key={i}
                    >{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.completeDescription?.architecture && (
              <div className="max-w-[90%]">
                <h3 className="text-lg font-semibold text-sky-800 mb-2">
                  Arquitetura
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {project.completeDescription.architecture.map((item, i) => (
                    <li className="text-gray-500" key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
      </ModalWindow>
    </>
    
  );
}
