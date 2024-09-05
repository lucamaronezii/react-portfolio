import { FaGitAlt } from "react-icons/fa";
import { RiCss3Line, RiHtml5Line, RiNodejsLine, RiReactjsLine } from 'react-icons/ri';
import { SiDotnet, SiJavascript, SiTypescript } from 'react-icons/si';
import portfolio from "../assets/portfolio.png";
import extension from "../assets/projects/extension.png";
import fidelity from "../assets/projects/fidelity.png";
import softports from "../assets/projects/softports.png";

export const HERO_CONTENT = `Sou um desenvolvedor full-stack com um ano de experiência, especializado em React e Typescript no front-end e atualmente expandindo minhas habilidades para o back-end com Node.js e C#/.NET Framework. Prestes a me formar em Engenharia de Software pela PUCPR, adquiri uma sólida base teórica e prática ao longo de quatro anos de estudos. Meu principal objetivo é criar soluções de alta qualidade que proporcionem uma excelente experiência ao usuário, unindo desempenho e usabilidade em cada projeto.`;

export const ABOUT_TEXT = () => (
  <>
    Nascido e criado em Curitiba, Paraná, sou um desenvolvedor full-stack de 21 anos apaixonado por tecnologia desde cedo. Desde criança, sempre tive interesse em entender como as coisas funcionam e em buscar soluções criativas para problemas.
    <br />
    <br />
    Atualmente, estou no meu último ano de Engenharia de Software pela PUCPR, onde adquiri uma sólida formação teórica e prática ao longo de quatro anos de estudo.
    <br />
    <br />
    Tenho experiência de um ano trabalhando na área como desenvolvedor full-stack, com foco em front-end utilizando React e Typescript. Estou também me aventurando e me aprimorando no desenvolvimento back-end com Node.js e C#/.NET Framework.
  </>
);

export const iconsList = [
  {
    icon: <RiHtml5Line className="text-7xl text-orange-700" />
  },
  {
    icon: <RiCss3Line className="text-7xl text-blue-400" />
  },
  {
    icon: <RiReactjsLine className="text-7xl text-cyan-400" />
  },
  {
    icon: <SiJavascript className="text-7xl text-yellow-400" />
  },
  {
    icon: <SiTypescript className="text-7xl text-blue-800" />
  },
  {
    icon: <RiNodejsLine className="text-7xl text-green-500" />
  },
  {
    icon: <SiDotnet className="text-7xl text-purple-600" />
  },
  {
    icon: <FaGitAlt className="text-7xl text-orange-600" />
  },
]

export const EXPERIENCES = [
  {
    year: "2023 - Presente",
    role: "Desenvolvedor front-end",
    company: "CAPZ",
    description: `Desenvolvimento de plataforma de fidelização de
      clientes e extensão de WhatsApp para CRM utilizando as
      tecnologias React, JavaScript, TypeScript no front-end. Utilização de
      Git para versionamento de código e Github para hospedagem.
      Realização de testes através da ferramenta Postman para testar
      APIs REST implementadas pelo back-end.`,
    technologies: ["React", "Typescript", "MaterialUI"],
  },
  {
    year: "2022 - 2023",
    role: "Analista de TI",
    company: "Delas Market",
    description: `Realizações de manutenções programadas e
      corretivas em JavaScript (plataforma desenvolvida por empresa
      terceirizada). Fornecimento de suporte ao lojista, assegurando a
      resolução de problemas e a melhoria contínua da experiência do
      usuário na plataforma.`,
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    year: "2018",
    role: "SDR",
    company: "Húmus Educação Corporativa",
    description: `Contatos de pré-venda com empresas no ramo financeiro.`,
  },
];

export const PROJECTS = [
  {
    title: "Softports",
    image: softports,
    description: `Uma aplicação de gerenciamento de ocorrências fundamentado na norma ISO/IEC 20000. Apresenta dashboard administrativo, 
      gerenciamento de ocorrências abertas e fechadas de forma detalhada, visualização por Kanban interativo e lista, matriz de rastreabilidade 
      de conflitos etc.`,
    technologies: ["React", "Typescript", "Docker", "Ant Design", "dnd-kit"],
  },
  {
    title: "CAPZ Fidelity",
    image: fidelity,
    description: `Uma ferramenta para gerenciar base de clientes e segmentá-los pela métrica RFV. Conta com dashboard administrativo, 
      gerenciamento de clientes, leads, campanhas de WhatsApp e cartões fidelidade.`,
    technologies: ["React", "Typescript", "MaterialUI"],
  },
  {
    title: "Extensão do WhatsApp para o CAPZ CRM",
    image: extension,
    description: `Uma extensão do WhatsApp que consumia APIs Restful para gerenciar leads, tarefas, propostas, pedidos etc. Ao clicar no contato de 
      uma pessoa, os respectivos dados do indivíduo eram exibidos.`,
    technologies: ["React", "Typescript", "MaterialUI"],
  },
  {
    title: "Portfólio pessoal",
    image: portfolio,
    description:
      "Um portfólio pessoal demonstrando projetos, habilidades e informações de contato.",
    technologies: ["React", "Vite", "Tailwind.css", "Framer Motion"],
  },
];

export const CONTACT = {
  address: "Curitiba, Paraná, Brasil",
  phoneNo: "+55 41 99961-3738",
  email: "steyerluca@gmail.com",
};
