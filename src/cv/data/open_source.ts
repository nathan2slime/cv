import { openSourceProject } from "../models.ts";

export const OPEN_SOURCE_PROJECTS = [
  openSourceProject({
    name: "Stock Sync",
    repo: "nathan2slime/stock-sync",
    tagline: { pt: "Sincronização offline de inventário", en: "Offline-capable inventory synchronization" },
    description: {
      pt: `
        Construiu um aplicativo de inventário compatível com uso offline, com interface **React 19**, API **NestJS** e persistência em **PostgreSQL**. Enfileira mutações em **IndexedDB** quando operações falham, permite retentar ou descartar mudanças locais e entrega ambiente com **Docker**, **CI** e manifests de deploy em **k3s**.
      `,
      en: `
        Built an offline-capable inventory app with a **React 19** interface, **NestJS** API, and **PostgreSQL** persistence. Queues failed product mutations in **IndexedDB**, lets users retry or discard local operations, and ships **Docker**, **CI**, and **k3s** deployment manifests.
      `,
    },
    keywords: ["React 19", "NestJS", "PostgreSQL", "IndexedDB", "Docker", "CI", "k3s"],
    order: 1,
  }),
  openSourceProject({
    name: "@nathan3boss/ui",
    repo: "nathan2slime/ui",
    tagline: { pt: "Biblioteca React publicada no npm", en: "React UI library published to npm" },
    description: {
      pt: `
        Construiu uma biblioteca de UI para **React** com **TypeScript**, **Rslib** e **Panda CSS**, publicada como pacote npm. Mantém componentes tipados, pipeline de build para biblioteca e site de documentação próprio para instalação, uso e referência.
      `,
      en: `
        Built a **React** UI library with **TypeScript**, **Rslib**, and **Panda CSS**, published as an npm package. Maintains typed components, a library build pipeline, and a dedicated documentation site for installation, usage, and reference.
      `,
    },
    keywords: ["React", "TypeScript", "Rslib", "Panda CSS", "npm"],
    order: 3,
  }),
  openSourceProject({
    name: "aurelia",
    repo: "nathan2slime/aurelia",
    tagline: { pt: "Experiência visual React e Three.js", en: "React and Three.js visual experience" },
    description: {
      pt: `
        Construiu uma experiência visual com **React** e **Three.js** onde uma água-viva **VRM** flutua em um campo de estrelas **GLSL**. Implementa movimento orgânico seguindo o ponteiro, acompanhamento com os olhos e suporte a preferências de movimento reduzido.
      `,
      en: `
        Built a **React** and **Three.js** visual experience where a **VRM** jellyfish floats through a **GLSL** star field. Implements organic pointer-following motion, eye tracking, and support for reduced-motion preferences.
      `,
    },
    keywords: ["React", "Three.js", "VRM", "GLSL", "Reduced Motion"],
    order: 9,
  }),
  openSourceProject({
    name: "apl-dashi",
    repo: "nathan2slime/apl-dashi",
    tagline: { pt: "API NestJS com infraestrutura completa", en: "NestJS API with complete infrastructure" },
    description: {
      pt: `
        Construiu uma API backend com **NestJS**, **Prisma** e **PostgreSQL**, cobrindo autenticação por sessão, uploads de arquivos, paginação, health checks e documentação **Swagger**. Integra **Redis**, **MinIO**, observabilidade e ambiente local com **Docker**.
      `,
      en: `
        Built a backend API with **NestJS**, **Prisma**, and **PostgreSQL**, covering session authentication, file uploads, pagination, health checks, and **Swagger** documentation. Integrates **Redis**, **MinIO**, observability, and a local **Docker** environment.
      `,
    },
    keywords: ["NestJS", "Prisma", "PostgreSQL", "Redis", "MinIO", "Swagger", "Observability"],
    order: 4,
  }),
  openSourceProject({
    name: "tetris",
    repo: "nathan2slime/tetris",
    tagline: { pt: "Tetris terminal em Rust", en: "Terminal Tetris in Rust" },
    description: {
      pt: `
        Construiu um Tetris de terminal em **Rust** com **Ratatui** e **Crossterm**, incluindo efeitos animados, temas selecionáveis, pontuação, níveis e preview de peça fantasma. Publica binários de release para **Linux**.
      `,
      en: `
        Built a terminal Tetris game in **Rust** with **Ratatui** and **Crossterm**, including animated effects, selectable themes, scoring, levels, and ghost piece preview. Publishes release binaries for **Linux**.
      `,
    },
    keywords: ["Rust", "Ratatui", "Crossterm", "Terminal UI", "Linux Releases"],
    order: 8,
  }),
  openSourceProject({
    name: "Seris",
    repo: "nathan2slime/seris",
    tagline: { pt: "Bot Discord em Rust", en: "Rust Discord bot" },
    description: {
      pt: `
        Construiu um bot de **Discord** em **Rust** com **Serenity**, comandos slash e persistência em **SQLite**. Inclui integrações com APIs externas, helpers de benchmark, assets de release, instaladores e imagem **Docker** mínima.
      `,
      en: `
        Built a **Discord** bot in **Rust** with **Serenity**, slash commands, and **SQLite** persistence. Includes external API integrations, benchmark helpers, release assets, installers, and a minimal **Docker** image.
      `,
    },
    keywords: ["Rust", "Serenity", "Discord", "SQLite", "Docker"],
    order: 5,
  }),
  openSourceProject({
    name: "reona",
    repo: "nathan2slime/reona",
    tagline: { pt: "HUD terminal para contatos orbitais", en: "Terminal HUD for orbital contacts" },
    description: {
      pt: `
        Construiu uma aplicação terminal em **Rust** com **Ratatui** e **Crossterm** para escanear contatos orbitais próximos via **N2YO**. Permite selecionar satélites e acompanhar sua posição em um globo rotativo.
      `,
      en: `
        Built a **Rust** terminal app with **Ratatui** and **Crossterm** for scanning nearby orbital contacts through **N2YO**. Lets users select satellites and track their position on a rotating globe.
      `,
    },
    keywords: ["Rust", "Ratatui", "Crossterm", "N2YO", "Satellites"],
    order: 7,
  }),
  openSourceProject({
    name: "@nathan3boss/exval",
    repo: "nathan2slime/exval",
    tagline: { pt: "Builders de validação para Express", en: "Validation builders for Express" },
    description: {
      pt: `
        Construiu uma biblioteca **TypeScript** para validação HTTP em aplicações **Express**. Gera middlewares composáveis para **body**, **params** e **query** com adapters para **Zod**, **Yup** e **class-transformer**.
      `,
      en: `
        Built a **TypeScript** library for HTTP validation in **Express** applications. Generates composable middleware for **body**, **params**, and **query** with adapters for **Zod**, **Yup**, and **class-transformer**.
      `,
    },
    keywords: ["Express", "TypeScript", "Validation", "Zod", "Yup", "class-transformer", "npm"],
    order: 6,
  }),
  openSourceProject({
    name: "melisearch-cdc",
    repo: "nathan2slime/melisearch-cdc",
    tagline: { pt: "CDC de PostgreSQL para Meilisearch", en: "PostgreSQL to Meilisearch CDC" },
    description: {
      pt: `
        Construiu um monorepo **Rust** e **React** que mantém um índice **Meilisearch** sincronizado com **PostgreSQL** usando Change Data Capture. Usa **Debezium** para capturar mudanças via replicação lógica, publica eventos no **Kafka** e consome esses eventos com um indexador Rust.
      `,
      en: `
        Built a **Rust** and **React** monorepo that keeps a **Meilisearch** index synchronized with **PostgreSQL** using Change Data Capture. Uses **Debezium** to capture changes through logical replication, publishes events to **Kafka**, and consumes them with a Rust indexer.
      `,
    },
    keywords: ["Rust", "React", "PostgreSQL", "Meilisearch", "Debezium", "Kafka", "CDC"],
    order: 2,
  }),
] as const;
