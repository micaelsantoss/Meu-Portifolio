import { useState } from "react";
import { Project } from "../../types/Project";
import { ModalWindow } from "../ModalWindow";
import { Link } from "react-router-dom";
import { TechBadge } from "../TechBadge";
 
interface ProjectCardProps{
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [ openInfoProject, setOpenInfoProject ] = useState(false);

  return (
    <div className="h-full"
    >
      <div
        className="
          group
          w-full
          bg-[#1b2130]
          rounded-2xl
          h-full
          shadow-lg
          transition-all
          hover:scale-105
          duration-500
          overflow-hidden
          border border-gray-700 
        "
      >
        <div
          className="
            flex
            flex-col
            lg:flex-row
            mt-6 gap-5 
            w-full max-w-11/12 justify-center m-auto 
          "
        >
          {/* Preview */}
          <div className="w-full">
            <img
              src={project.image}
              alt={project.title}
              className="
                w-[300px]
                xl:w-[350px]
                h-42
                lg:ml-15
                xl:ml-0
                rounded-xl 
                lg:h-full
                transition-transform
                duration-500
              "
            />
          </div>

          {/* Conteúdo */}
          <div className="flex flex-col w-10/12 max-w-2xs text-white lg:mr-10 xl:mr-0 text-left max-h-45 overflow-y-auto hide-scrollbar">
            <h3 className="text-2xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-6">
              {project.description}
            </p>

          </div>

        </div>
        <div className="flex flex-col items-center mt-5 mb-10 lg:mb-5 overflow-hidden">
          {/* Tecnologias */}
          <div className="flex gap-4 whitespace-nowrap scroll-left p-4">
            {Array(10) // multiplicador para repetir várias vezes
            .fill(project.techs) // preenche com todas as techs
            .flat() // transforma em uma única lista
            .map((tech, i) => (
              <TechBadge key={i} label={tech} color="sky" />
            ))}
          </div>

          {/* Botões */}
          <div className="flex flex-col lg:flex-row lg:w-10/12 w-full gap-4 py-5">
            <button
              className="
                bg-sky-400
                text-[#212733]
                px-5 py-2 
                rounded-lg
                font-medium
                hover:bg-sky-500
                transition
                cursor-pointer
                w-10/12 m-auto
                hover:text-white
                shadow-[0_0_20px_rgba(59,130,246,0.85)]
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
                  text-center
                  w-10/12
                  m-auto
                  hover:text-white
                  shadow-[0_0_10px_rgba(59,130,246,0.85)]
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
                  text-center
                  w-10/12
                  m-auto
                  hover:text-white
                  shadow-[0_0_10px_rgba(59,130,246,0.85)]
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

            {project.techs && (
              <div className="max-w-[90%]">
                <h3 className="text-lg font-semibold text-sky-800 mb-2">
                  Arquitetura
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {project.techs.map((item, i) => (
                    <li className="text-gray-500" key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
      </ModalWindow>
    </div>
    
  );
}
