import { openSourceProject } from "../models.ts";

export const OPEN_SOURCE_PROJECTS = [
  openSourceProject({
    name: "@nathan3boss/ui",
    repo: "nathan2slime/ui",
    tagline: { pt: "Biblioteca de componentes React", en: "React component library" },
    description: {
      pt: `
        Sistema de componentes para **React** distribuído como pacote npm. Centraliza componentes tipados, estilos com **Panda CSS** e build de biblioteca com **Rslib**, com documentação pública para uso e referência de API.
      `,
      en: `
        Component system for **React** distributed as an npm package. Centralizes typed components, **Panda CSS** styling, and library builds with **Rslib**, with public documentation for usage and API reference.
      `,
    },
    keywords: ["React", "TypeScript", "Rslib", "Panda CSS", "npm"],
    order: 1,
  }),
  openSourceProject({
    name: "@nathan3boss/exval",
    repo: "nathan2slime/exval",
    tagline: { pt: "Builders de validação para Express", en: "Validation builders for Express" },
    description: {
      pt: `
        Biblioteca **TypeScript** para validação HTTP em aplicações **Express**. Gera middlewares composáveis para **body**, **params** e **query** a partir de adapters, mantendo o núcleo independente de schemas como **Zod**, **Yup** e **class-transformer**.
      `,
      en: `
        **TypeScript** library for HTTP validation in **Express** applications. Generates composable middleware for **body**, **params**, and **query** through adapters while keeping the core independent from schema tools such as **Zod**, **Yup**, and **class-transformer**.
      `,
    },
    keywords: ["Express", "TypeScript", "Validation", "Zod", "Yup", "class-transformer", "npm"],
    order: 2,
  }),
  openSourceProject({
    name: "apl-dashi",
    repo: "nathan2slime/apl-dashi",
    tagline: { pt: "API NestJS com infraestrutura local completa", en: "NestJS API with a complete local infrastructure" },
    description: {
      pt: `
        API backend **NestJS** para autenticação, posts e upload de anexos. Modela usuários, preferências, posts encadeados e assets com **Prisma/PostgreSQL**, usa sessões em **Redis**, storage S3-compatible com **MinIO** e stack local com **Docker Compose**, **Loki**, **Fluent Bit** e **Grafana**.
      `,
      en: `
        **NestJS** backend API for authentication, posts, and attachment uploads. Models users, preferences, threaded posts, and assets with **Prisma/PostgreSQL**, uses **Redis** sessions, S3-compatible storage with **MinIO**, and a local **Docker Compose**, **Loki**, **Fluent Bit**, and **Grafana** stack.
      `,
    },
    keywords: ["NestJS", "Prisma", "PostgreSQL", "Redis", "MinIO", "Docker Compose", "Swagger"],
    order: 3,
  }),
  openSourceProject({
    name: "apl-atani",
    repo: "nathan2slime/apl-atani",
    tagline: { pt: "API NestJS para upload e entrega de assets", en: "NestJS API for asset upload and delivery" },
    description: {
      pt: `
        Serviço **NestJS** para ingestão, persistência e entrega de assets. Encapsula upload para storage S3-compatible via **MinIO**, organiza a camada de dados com **Prisma** e mantém ambiente local reprodutível com **Docker**.
      `,
      en: `
        **NestJS** service for asset ingestion, persistence, and delivery. Encapsulates uploads to S3-compatible storage through **MinIO**, organizes the data layer with **Prisma**, and keeps a reproducible local environment with **Docker**.
      `,
    },
    keywords: ["NestJS", "TypeScript", "MinIO", "S3", "Prisma", "Docker"],
    order: 4,
  }),
  openSourceProject({
    name: "apl-katawa-rbac",
    repo: "nathan2slime/apl-katawa-rbac",
    tagline: { pt: "CRM com controle de acesso baseado em RBAC", en: "CRM with RBAC-based access control" },
    description: {
      pt: `
        CRM **TypeScript** orientado a permissões e controle de acesso baseado em papéis. Estrutura o produto como monorepo com apps e packages, separando domínio, autorização e automação de desenvolvimento em um ambiente local com **Docker**.
      `,
      en: `
        Permission-oriented **TypeScript** CRM with role-based access control. Structures the product as a monorepo with apps and packages, separating domain, authorization, and development automation in a local **Docker** environment.
      `,
    },
    keywords: ["TypeScript", "CRM", "RBAC", "Turborepo", "Docker"],
    order: 5,
  }),
  openSourceProject({
    name: "earth",
    repo: "nathan2slime/earth",
    tagline: { pt: "Interface para imagens da Terra pelo DSCOVR", en: "Interface for DSCOVR Earth imagery" },
    description: {
      pt: `
        Aplicação web **TypeScript** para explorar imagens naturais da Terra capturadas pela câmera **EPIC** no satélite **DSCOVR**. Consome dados públicos de captura diária e apresenta uma interface de visualização focada em imagens orbitais.
      `,
      en: `
        **TypeScript** web application for exploring natural-color Earth imagery captured by the **EPIC** camera onboard **DSCOVR**. Consumes public daily capture data and presents a viewer focused on orbital imagery.
      `,
    },
    keywords: ["TypeScript", "Next.js", "Node", "React"],
    order: 6,
  }),
  openSourceProject({
    name: "otemae",
    repo: "nathan2slime/otemae",
    tagline: { pt: "Busca de animes com integração à API Jikan", en: "Anime search with Jikan API integration" },
    description: {
      pt: `
        Cliente web **React** para consulta de animes usando a **Jikan API**, camada pública não oficial do MyAnimeList. Implementa busca, exibição de sinopses e detalhes de títulos, com deploy de produção na **Vercel**.
      `,
      en: `
        **React** web client for querying anime data through the **Jikan API**, the public unofficial MyAnimeList API layer. Implements search, synopsis display, and title details, with production deployment on **Vercel**.
      `,
    },
    keywords: ["TypeScript", "Jikan API", "React", "Sass", "Vercel"],
    order: 7,
  }),
] as const;
