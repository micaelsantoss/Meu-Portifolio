import { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Prime-Flix",
    description:
      "Projeto de lista de filmes, consumindo API do TMDB se atualizando em tempo real com os filmes do momento.",
    completeDescription: {
      intro:"Criei esse projeto para colocar em prática os conhecimentos adquiridos em javascript e react, fiz o consumo da api do The Movie DataBase para alimentar o site. Implementei o sistema de register, login e favoritos utilizando o Firebase e o FireStore. Implementei a funcionalidade de pesquisa de filmes.",
      features: [
        "Login e Register de usuários",
        "Salvar filmes em aba de favoritos",
        "Pesquisar Filmes"
      ],
      architecture:[
        "JavaScript",
        "React Js",
        "Firebase",
        "Axios",
        "HTML",
        "CSS"
      ]
    },
    techs: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Firebase"],
    image: "/MidiasPrimeFlix/ImagemPrime1.png",
    githubUrl: "https://github.com/micaelsantoss/Projeto-Prime-Flix",
    images: {
      desktop: [
        "/MidiasPrimeFlix/ImagemPrime1.png",
        "/MidiasPrimeFlix/ImagemPrime2.png",
        "/MidiasPrimeFlix/ImagemPrime3.png",
        "/MidiasPrimeFlix/ImagemPrime4.png",
      ]
    },
    videos: {
      desktop: [
        "https://player.vimeo.com/video/1150865630" +
        "?title=0" +
        "&byline=0" +
        "&portrait=0" +
        "&badge=0" +
        "&controls=1" +
        "&autopause=1" 
      ],
      mobile: [
        "https://player.vimeo.com/video/1150865667" +
        "?title=0" +
        "&byline=0" +
        "&portrait=0" +
        "&badge=0" +
        "&controls=1" +
        "&autopause=1"
      ]
    }
  },
  {
    id: 2,
    title: "Terry-Link",
    description:
      "Projeto para criação e controle de territórios em tempo real, utilizando MapBox.",
    completeDescription:{ 
      intro:`Criei esse projeto com o intuito de ajudar a organizar e controlar territórios. Direcionado para ajudar as Testemunhas de Jeová no trabalho de pregação de casa em casa, onde é nessesário controlar de perto as quadras e territórios trabalhados. Criei o sistema com diversas funcionalidades, usando como base o REST. Também fiz o uso do PWA para transformar o site em um aplicativo android e desktop, com notificações e outras funcionalidades`,
      features: [
        "Cadastro e login de usuários",
        "Cadastro de congregação onde para criar a congregação é necessário que o usuário solicite um código enviado ao meu email",
        "Permissões para usuários, permitindo funcionalidades específicas",
        "Controle de quadras no mapa",
        "Status em tempo real",
        "Integração com MapBox",
        "Criação de territórios",
        "Designação de território para usuário"
      ],
      architecture: [
        "TypeScript",
        "Tailwind CSS",
        "React JS",
        "Prisma ORM",
        "Postgres",
        "Node JS",
        "Fastify",
        "Axios"
      ]
    },
    techs: ["HTML", "TypeScript", "React", "Node.js", "tailwind Css", "Postgres", "Prisma ORM"],
    image: "/MidiasTerryLink/ImagemTerry1.png",
    images: {
      desktop: [
        "/MidiasTerryLink/ImagemTerry1.png",
        "/MidiasTerryLink/ImagemTerry2.png",
        "/MidiasTerryLink/ImagemTerry3.png",
        "/MidiasTerryLink/ImagemTerry4.png",
      ]
    },
    videos: {
      desktop: [
        "https://player.vimeo.com/video/1150865647" +
        "?title=0" +
        "&byline=0" +
        "&portrait=0" +
        "&badge=0" +
        "&controls=1" +
        "&autopause=1"
      ],
      mobile: [
        "https://player.vimeo.com/video/1150865681" +
        "?title=0" +
        "&byline=0" +
        "&portrait=0" +
        "&badge=0" +
        "&controls=1" +
        "&autopause=1"
      ]
    }
     
  },
  {
    id: 3,
    title: "Página de Casamento",
    description:
      "Landing page estática de casamento, utilizando funcionalidades em JavaScript.",
    completeDescription: {
      intro:"Projeto criado para o meu casamento, uma landing page simples mas que continha as informações necessárias, como localização, horário, mas de uma forma intuitiva, onde cada convidado preenchia um formulário com seus dados, e automáticamente subia para minha planilha no google por meio de uma API externa.",
      architecture:[
        "JavaScript",
        "HTML",
        "CSS"
      ]
    },
    techs: ["HTML", "CSS", "JavaScript"],
    image: "/MidiasCasamento/ImagemCapa.png",
    liveUrl: "https://micaelsantoss.github.io/Projeto-Casamento/#noivos"
  },
];

  
