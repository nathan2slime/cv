import { personal } from "../models.ts";

export const PERSONAL = personal({
  name: "Francisco Cajlon Jhonathan Moura Batista",
  title: { pt: "Engenheiro de Software", en: "Software Engineer" },
  location: { pt: "Caxias, Maranhão", en: "Caxias, Maranhão, Brazil" },
  email: "nathan.cajlon@gmail.com",
  github: "https://github.com/nathan2slime",
  linkedin: "https://www.linkedin.com/in/jhonathan-moura/",
  summary: {
    pt: `
      Engenheiro de Software atuando com front-end e full-stack desde 2021, com experiência em software houses, estúdios de jogos, e-commerce e varejo. Trabalho principalmente com **TypeScript** e **React**.
    `,
    en: `
      Software Engineer working with front-end and full-stack development since 2021, with experience across software houses, game studios, e-commerce, and retail. I work mainly with **TypeScript** and **React**.
    `,
  },
});
