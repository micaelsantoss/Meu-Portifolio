import { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: 1,
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
      ]
    },
    techs: ["HTML", "TypeScript", "React", "Node.js", "tailwind Css", "Postgres", "Prisma ORM"],
    image: "/MidiasTerryLink/ImagemTerry1.webp",
    images: {
      desktop: [
        "/MidiasTerryLink/ImagemTerry1.webp",
        "/MidiasTerryLink/ImagemTerry2.webp",
        "/MidiasTerryLink/ImagemTerry3.webp",
        "/MidiasTerryLink/ImagemTerry4.webp",
      ],
      mobile: [
        "/MidiasTerryLink/ImagemMobileTerry1.webp",
        "/MidiasTerryLink/ImagemMobileTerry2.webp",
        "/MidiasTerryLink/ImagemMobileTerry3.webp",
        "/MidiasTerryLink/ImagemMobileTerry4.webp",
        "/MidiasTerryLink/ImagemMobileTerry5.webp",
        "/MidiasTerryLink/ImagemMobileTerry6.webp",
        "/MidiasTerryLink/ImagemMobileTerry7.webp",
        "/MidiasTerryLink/ImagemMobileTerry8.webp",
        "/MidiasTerryLink/ImagemMobileTerry9.webp",
        "/MidiasTerryLink/ImagemMobileTerry10.webp",
      ]
    },
    videos: {
      desktop: [
        "https://player.vimeo.com/video/1151721970" +
        "?title=0" +
        "&byline=0" +
        "&portrait=0" +
        "&badge=0" +
        "&controls=1" +
        "&autopause=1"
      ],
      mobile: [
        "https://player.vimeo.com/video/1151722005" +
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
    title: "Prime-Flix",
    description:
      "Projeto de lista de filmes, consumindo API do TMDB se atualizando em tempo real com os filmes do momento.",
    completeDescription: {
      intro:"Criei esse projeto para colocar em prática os conhecimentos adquiridos em javascript e react, fiz o consumo da api do The Movie DataBase para alimentar o site. Implementei o sistema de register, login e favoritos utilizando o Firebase e o FireStore. Implementei a funcionalidade de pesquisa de filmes.",
      features: [
        "Login e Register de usuários",
        "Salvar filmes em aba de favoritos",
        "Pesquisar Filmes"
      ]
    },
    techs: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Firebase"],
    image: "/MidiasPrimeFlix/ImagemPrime1.webp",
    githubUrl: "https://github.com/micaelsantoss/Projeto-Prime-Flix",
    images: {
      desktop: [
        "/MidiasPrimeFlix/ImagemPrime1.webp",
        "/MidiasPrimeFlix/ImagemPrime2.webp",
        "/MidiasPrimeFlix/ImagemPrime3.webp",
        "/MidiasPrimeFlix/ImagemPrime4.webp",
      ],
      mobile: [
        "/MidiasPrimeFlix/ImagemMobilePrime1.webp",
        "/MidiasPrimeFlix/ImagemMobilePrime2.webp",
        "/MidiasPrimeFlix/ImagemMobilePrime3.jpg",
        "/MidiasPrimeFlix/ImagemMobilePrime4.jpg",
        "/MidiasPrimeFlix/ImagemMobilePrime1.webp",
        "/MidiasPrimeFlix/ImagemMobilePrime2.webp",
        "/MidiasPrimeFlix/ImagemMobilePrime3.jpg",
        "/MidiasPrimeFlix/ImagemMobilePrime4.jpg",
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
        "https://player.vimeo.com/video/1151721853" +
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
    },
    techs: ["HTML", "CSS", "JavaScript", "HTML", "CSS", "JavaScript"],
    image: "/MidiasCasamento/ImagemCapa.webp",
    liveUrl: "https://micaelsantoss.github.io/Projeto-Casamento/#noivos"
  },
];

  
