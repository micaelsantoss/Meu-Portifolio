import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGithubSquare } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { BiLogoJavascript, BiLogoPostgresql, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import perfil from "/image.png"
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt, FaLinkedin } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ModalWindow } from "../../components/ModalWindow";
import { useState } from "react";
import { projects } from "../../projects";
import { ProjectCard } from "../../components/ProjectCard";
import { fadeLeft, fadeLeft2 } from "../../animations/fade";
import { motion } from "framer-motion";

export default function Home() {
  const [ openAbout, setOpenAbout ] = useState(false);

  return (
    <main className="bg-primaria min-h-screen">
      <section
        id="capa"
        className="
          relative
          bg-[url('/Imagem-fundo-1.jpg')]
          bg-
          bg-cover
          bg-center
          bg-no-repeat
        "
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative h-dvh lgx:h-[500px] flex w-full justify-center max-w-10/12 m-auto">
          <article className="
              flex flex-col justify-center gap-10 lg:flex-row lg:items-center
              [@media(min-width:1024px)_and_(max-width:1200px)]:flex-col
            "
          >
            <div>
              <img
                src={perfil}
                alt="Foto de perfil"
                className="
                  w-full max-w-9/12 m-auto rounded-2xl lg:w-10/12 md:w-7/12
                  [@media(min-width:1024px)_and_(max-width:1200px)]:w-7/12
                "
              />
            </div>

            <div className="flex flex-col w-full items-center justify-center">
              <h1 className="text-texto-principal text-3xl font-bold max-w-9/12 lg:text-4xl animate__animated animate__fadeInRight md:text-4xl"
                style={{ animationDuration: "2s" }}
              >
                Olá, eu sou o 
              </h1>
              <h1 className="text-sky-500 text-3xl animate__animated animate__fadeInRight font-bold lg:text-4xl md:text-4xl"
                style={{ animationDuration: "2.2s" }}
              >Micael Santos</h1>
              <h3 className="text-gray-500 animate__animated animate__fadeInRight lg:text-2xl md:text-xl"
                style={{ animationDuration: "2.4s" }}
              >Desenvolvedor FullStack</h3>

              <button 
                className="
                  bg-linear-to-r from-sky-400 to-sky-700 
                  text-white w-full rounded-2xl mt-4 mb-4 py-2 
                  font-medium max-w-11/12 lg:max-w-8/12 lg:mt-12 md:max-w-9/12
                  cursor-pointer 
                  transform transition-all duration-300 ease-in-out
                  hover:scale-105
                  hover:from-amber-400 hover:to-amber-600
                  animate__animated animate__fadeInUp
                "
                style={{ animationDuration: "2s" }}
                onClick={() => {
                  document
                    .getElementById("projetos")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Projetos
              </button>

              <button 
                className="
                  border border-sky-400 text-white
                  w-full rounded-2xl py-2 font-medium
                  max-w-11/12 lg:max-w-8/12 md:max-w-9/12
                  cursor-pointer
                  transform transition-all duration-300 ease-in-out
                  hover:scale-105
                  hover:bg-linear-to-r 
                  hover:from-amber-400
                  hover:to-amber-600
                  hover:border-amber-700
                  animate__animated animate__fadeInUp
                "
                style={{ animationDuration: "2s" }}
                onClick={() => {
                  document
                    .getElementById("contatos")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Entrar em contato
              </button>
            </div>
          </article>

        </div>
        
      </section>

      <hr className="max-w-10/12 m-auto border-gray-600" />

      <section
        id="about"
        className="h-[667px] md:h-[700px] lg:h-[544px] w-full max-w-10/12 m-auto flex flex-col justify-center"
      >
        <article className="flex flex-col gap-10">
          <motion.h1 
            className="text-texto-principal text-center m-auto text-4xl font-bold max-w-9/12"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true, amount: 0.6 }}
          >
            Sobre Mim
          </motion.h1>

          <motion.p 
            className="text-gray-400 text-xl lg:text-2xl mb-5 text-center"
            variants={fadeLeft2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true, amount: 0.6 }}
          >
            Sou desenvolvedor focado em desenvolvimento web, com experiência em React, TypeScript e integração com APIs. Tenho paixão por transformar ideias em soluções funcionais, com atenção a desempenho, usabilidade e código limpo. Atualmente, sigo evoluindo como full-stack, unindo prática em projetos reais e aprendizado contínuo. 
          </motion.p>

          <motion.div 
            className="flex flex-col gap-8 items-center lg:flex-row lg:justify-center"
            variants={fadeLeft2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true, amount: 0.6 }}
          >
            <button 
              className="
                bg-linear-to-r from-sky-400 to-sky-700 
                w-11/12 rounded text-white 
                font-medium py-2.5
                lg:max-w-4/12 cursor-pointer
                transform transition-all duration-300 ease-in-out
                hover:scale-105
                hover:from-amber-400 hover:to-amber-600
              "
              onClick={() => setOpenAbout(true)}
            >
              Mais Informações</button>
            <button 
              className="
                bg-linear-to-r from-sky-400 to-sky-700 
                w-11/12 rounded text-white 
                font-medium py-2.5
                lg:max-w-4/12 cursor-pointer
                transform transition-all duration-300 ease-in-out
                hover:scale-105
                hover:from-amber-400 hover:to-amber-600
              "
            >
              Curriculum</button>
          </motion.div>
        </article>

      </section>  

      <hr className="max-w-10/12 m-auto border-gray-600 md"/>

      <section 
        id="tecnologias"
        className="w-full max-w-10/12 m-auto"  
      >
        
        <article>
          <motion.h1 
            className="text-white mt-15 text-3xl mb-10 font-bold text-center lg:text-4xl lg:mb-20 md:mb-20"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true, amount: 0.6 }}
          >
            Minhas Tecnologias:
          </motion.h1>
    
          <motion.div 
            className="grid gap-6
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-6
              xl:grid-cols-7
            "
            variants={fadeLeft2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true, amount: 0.6 }}
          >
            <div 
              className="
                flex flex-col items-center m-auto gap-2 bg-gray-700 rounded-tl-4xl w-28 py-4 relative
                transform transition-all duration-300 ease-in-out
                hover:scale-115
              "
            >
              <p className="text-sky-500 font-medium ">HTML5</p>
              <FaHtml5 className="text-sky-500 text-5xl"/>
              <div className="absolute bottom-0 left-0 h-[3px] w-full bg-linear-to-r from-sky-400 to-sky-700 "></div>
            </div>

            <div 
              className="
                flex flex-col m-auto items-center gap-2 bg-gray-700 rounded-tl-4xl w-28 py-4 relative
                transform transition-all duration-300 ease-in-out
                hover:scale-105
              "
            >
              <p className="text-sky-500 font-medium ">CSS3</p>
              <FaCss3Alt className="text-sky-500 text-5xl" />
              <div className="absolute bottom-0 left-0 h-[3px] w-full bg-linear-to-r from-sky-400 to-sky-700 "></div>
            </div>

            <div 
              className="
                flex flex-col m-auto items-center gap-2 bg-gray-700 rounded-tl-4xl w-28 py-4 relative
                transform transition-all duration-300 ease-in-out
                hover:scale-105
              "
            >
              <p className="text-sky-500 font-medium ">REACT JS</p>
              <FaReact className="text-sky-500 text-5xl" />
              <div className="absolute bottom-0 left-0 h-[3px] w-full bg-linear-to-r from-sky-400 to-sky-700 "></div>
            </div>

            <div 
              className="
                flex flex-col m-auto items-center gap-2 bg-gray-700 rounded-tl-4xl w-28 py-4 relative
                transform transition-all duration-300 ease-in-out
                hover:scale-105
              "
            >
              <p className="text-sky-500 font-medium ">JAVA SCRIPT</p>
              <BiLogoJavascript className="text-sky-500 text-5xl" />
              <div className="absolute bottom-0 left-0 h-[3px] w-full bg-linear-to-r from-sky-400 to-sky-700 "></div>
            </div>

            <div 
              className="
                flex flex-col m-auto items-center gap-2 bg-gray-700 rounded-tl-4xl w-28 py-4 relative
                transform transition-all duration-300 ease-in-out
                hover:scale-105
              "
            >
              <p className="text-sky-500 font-medium ">TYPE SCRIPT</p>
              <BiLogoTypescript className="text-sky-500 text-5xl" />
              <div className="absolute bottom-0 left-0 h-[3px] w-full bg-linear-to-r from-sky-400 to-sky-700 "></div>
            </div>
            
            <div 
              className="
                flex flex-col m-auto items-center gap-2 bg-gray-700 rounded-tl-4xl w-28 py-4 relative
                transform transition-all duration-300 ease-in-out
                hover:scale-105
              "
            >
              <p className="text-sky-500 font-medium ">TAILWIND</p>
              <BiLogoTailwindCss className="text-sky-500 text-5xl" />
              <div className="absolute bottom-0 left-0 h-[3px] w-full bg-linear-to-r from-sky-400 to-sky-700 "></div>
            </div>

            <div 
              className="
                flex flex-col m-auto items-center gap-2 bg-gray-700 rounded-tl-4xl w-28 py-4 relative
                transform transition-all duration-300 ease-in-out
                hover:scale-105
              "
            >
              <p className="text-sky-500 font-medium ">NODE JS</p>
              <FaNode className="text-sky-500 text-5xl" />
              <div className="absolute bottom-0 left-0 h-[3px] w-full bg-linear-to-r from-sky-400 to-sky-700 "></div>
            </div>

            <div 
              className="
                flex flex-col m-auto items-center gap-2 bg-gray-700 rounded-tl-4xl w-28 py-4 relative
                transform transition-all duration-300 ease-in-out
                hover:scale-105
              "
            >
              <p className="text-sky-500 font-medium ">PRISMA</p>
              <SiPrisma className="text-sky-500 text-5xl" />
              <div className="absolute bottom-0 left-0 h-[3px] w-full bg-linear-to-r from-sky-400 to-sky-700 "></div>
            </div>

            <div 
              className="
                flex flex-col m-auto items-center gap-2 bg-gray-700 rounded-tl-4xl w-28 py-4 relative
                transform transition-all duration-300 ease-in-out
                hover:scale-105
              "
            >
              <p className="text-sky-500 font-medium ">POSTGRES</p>
              <BiLogoPostgresql className="text-sky-500 text-5xl" />
              <div className="absolute bottom-0 left-0 h-[3px] w-full bg-linear-to-r from-sky-400 to-sky-700 "></div>
            </div>

          </motion.div>

        </article>

      </section>

      <hr className="max-w-10/12 mt-20 m-auto border-gray-600" />

      <section
        id="projetos"
        className="w-full max-w-10/12 m-auto overflow-hidden "
      >

        <motion.h1 
          className="text-white mt-15 mb-15 text-4xl font-bold text-center"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount: 0.6 }}     
        >
          Meus Projetos
        </motion.h1>

        <article>
        
          <div className="flex flex-col gap-14">
            {projects.map((project) => (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <ProjectCard key={project.id} project={project}/>
              </motion.div>
            ))}
          </div>
          
        </article>
        
      </section>

      <hr className="max-w-10/12 mt-20 m-auto border-gray-600" />

      <section
        id="contatos"
        className="h-[667px] md:h-[700px] lg:h-[500px] w-full max-w-10/12 m-auto lg:flex lg:flex-col lg:gap-20 "
      >
        <motion.h1 
          className="text-white mt-15 text-4xl font-bold text-center"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount: 0.6 }}
        >
          Contatos
        </motion.h1>

        <motion.div 
          className="flex flex-col justify-center gap-10 mt-10 lg:flex-row "
          variants={fadeLeft2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount: 0.6 }}
        >
          <div className="flex flex-col items-center">
            <MdEmail className="text-4xl mb-2 text-sky-500"/>
            <h3 className="font-medium text-white text-xl">Email</h3>
            <p className="text-gray-500">micaelsdsilva@gmail.com</p>
          </div>

          <div className="flex flex-col items-center">
            <FaPhoneSquareAlt className="text-4xl mb-2 text-sky-500 "/>
            <h3 className="font-medium text-white text-xl">Telefone</h3>
            <a 
              className="text-gray-500 hover:text-red-600"
              href="https://wa.me/5534996782311?text=Olá! Estou vindo pelo site, e gostaria de um orçamento para um site!"
              target="blank"
            >(34) 99678-2311</a>
          </div>

          <div className="flex flex-col items-center">
            <FaLinkedin className="text-4xl mb-2 text-sky-500 "/>
            <h3 className="font-medium text-white text-xl">Linkedin</h3>
            <a 
              className="text-gray-500 cursor-pointer hover:text-red-600"
              target="_blank"
              href="https://www.linkedin.com/in/micael-santos-da-silva-aa023621a/"
            >@Micael Santos da Silva</a>
          </div>

          <div className="flex flex-col items-center">
            <FaGithubSquare className="text-4xl mb-2 text-sky-500 "/>
            <h3 className="font-medium text-white text-xl">GitHub</h3>
            <a 
              className="text-gray-500 cursor-pointer hover:text-red-600"
              target="_blank"
              href="https://github.com/micaelsantoss"
            >@micaelsantoss</a>
          </div>
        </motion.div>
      </section>

      <ModalWindow
          isOpen={openAbout}
          onClose={() => setOpenAbout(false)}
          title="Sobre Mim"
      >
        <section className="max-w-3xl mx-auto space-y-6">
          <p className="text-gray-300 leading-relaxed">
            Iniciei minha jornada na área de tecnologia no final de 2023, construindo uma base sólida em
            <span className="text-sky-400 font-medium"> lógica de programação </span>
            e
            <span className="text-sky-400 font-medium"> estrutura de dados</span>.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Com a evolução dos estudos e da prática, passei a desenvolver conhecimento em tecnologias
            amplamente utilizadas no mercado, como
            <span className="text-emerald-400 font-medium">
              {" "}JavaScript, TypeScript, React JS, Tailwind CSS, Fastify e PostgreSQL
            </span>,
            entre outras.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Além das ferramentas, busco constantemente aprofundar meus conhecimentos em conceitos
            fundamentais, como
            <span className="text-sky-400 font-medium">
              {" "}APIs REST, boas práticas de desenvolvimento e organização de código
            </span>.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Já desenvolvi diversos projetos e continuo criando novas soluções, sempre com foco em
            <span className="text-emerald-400 font-medium">
              {" "}resolver problemas reais e gerar impacto prático
            </span> para pessoas e negócios.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Hoje além de continuar estudando essas tecnologias, busco compreender sobre outras tecnologias
            como
            <span className="text-sky-400 font-medium">
              {" "}Docker, Java e Spring Boot, Linux
            </span>.
          </p>
        </section>

      </ModalWindow>

    </main> 
  );
}
