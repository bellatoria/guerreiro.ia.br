export type SiteLocale = "pt" | "en";

type NavItem = {
  href: "" | "about" | "projects" | "engagements";
  label: string;
};

type ProjectCard = {
  title: string;
  description: string;
  link: string;
};

type SiteCopy = {
  languageLabel: string;
  switchLabel: string;
  nav: NavItem[];
  ctaContact: string;
  ctaProjects: string;
  hero: {
    eyebrow: string;
    title: string;
    accent: string;
    titleSuffix: string;
    summary: string;
    metrics: Array<{ label: string; value: string }>;
    panelEyebrow: string;
    panelTitle: string;
    panelBody: string;
    panelItems: Array<{ label: string; value: string }>;
  };
  offer: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: Array<{ title: string; body: string }>;
  };
  proof: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ label: string; value: string }>;
  };
  tracks: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ title: string; body: string }>;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    blocks: Array<{ title: string; body: string }>;
    principleEyebrow: string;
    principleTitle: string;
    principleBody: string;
  };
  engagements: {
    eyebrow: string;
    title: string;
    intro: string;
    offers: Array<{ title: string; body: string }>;
    fitTitle: string;
    fitItems: string[];
    notFitTitle: string;
    notFitItems: string[];
    processTitle: string;
    processItems: Array<{ title: string; body: string }>;
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: ProjectCard[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
  };
  footer: {
    summary: string;
    note: string;
  };
};

const siteCopy: Record<SiteLocale, SiteCopy> = {
  pt: {
    languageLabel: "PT",
    switchLabel: "English",
    nav: [
      { href: "", label: "Início" },
      { href: "about", label: "Sobre" },
      { href: "engagements", label: "Engajamentos" },
      { href: "projects", label: "Cases" },
    ],
    ctaContact: "Falar comigo",
    ctaProjects: "Ver cases",
    hero: {
      eyebrow: "IA aplicada para produto, decisão e operação",
      title: "IA para",
      accent: "resolver problema real",
      titleSuffix: "com resultado.",
      summary:
        "Trabalho com times que precisam melhorar decisão de produto com recomendação, ranking e otimização.",
      metrics: [
        { label: "Foco", value: "Recomendação, otimização e inferência aplicada." },
        { label: "Formato", value: "Pesquisa aplicada, consultoria técnica e delivery orientado a valor." },
        { label: "Contexto", value: "Produtos digitais, governo e iniciativas com alto custo de decisão." },
      ],
      panelEyebrow: "Victor Guerreiro",
      panelTitle: "Consultoria técnica para decisão difícil.",
      panelBody:
        "Entro quando o problema está confuso, o risco é alto e a equipe precisa de direção clara para avançar.",
      panelItems: [
        { label: "Atuação", value: "Estratégia técnica, modelagem e priorização." },
        { label: "Especialidade", value: "Sistemas de recomendação, ranking e otimização." },
        { label: "Base", value: "Pesquisa aplicada em IA com execução orientada a produto." },
      ],
    },
    offer: {
      eyebrow: "Como eu ajudo",
      title: "Trabalho curto, objetivo e com entrega.",
      intro:
        "Sem promessa vaga. O foco é reduzir risco, acelerar decisão e colocar algo útil para rodar.",
      cards: [
        {
          title: "Diagnóstico de produto e IA",
          body: "Organizo problema, dados e métrica para sair da discussão abstrata e chegar num plano técnico viável.",
        },
        {
          title: "Arquitetura e experimentação",
          body: "Defino hipóteses, pipeline e prioridade para o time investir energia no que realmente move o resultado.",
        },
        {
          title: "Sistemas de recomendação e ranking",
          body: "Atuo em matching, personalização, fairness, otimização multiobjetivo e avaliação offline/online.",
        },
      ],
    },
    proof: {
      eyebrow: "Onde isso já gerou valor",
      title: "Experiência aplicada em contextos onde recomendação e decisão importam.",
      intro:
        "Projetos com alto custo de erro, pressão operacional e necessidade de justificar tecnicamente cada decisão.",
      items: [
        { label: "Matching", value: "Modelagem para aderência real entre oferta, demanda e restrições de negócio." },
        { label: "Serviços públicos", value: "Personalização e priorização em produtos com escala e impacto de política pública." },
        { label: "Estimativa", value: "Modelos para aproximar julgamento técnico, custo e tomada de decisão comercial." },
      ],
    },
    tracks: {
      eyebrow: "Duas frentes centrais",
      title: "Pesquisa em metaheurísticas e histórico aplicado em sistemas de recomendação.",
      intro:
        "Tenho duas frentes que se complementam: pesquisa em otimização e entrega prática de sistemas de recomendação.",
      items: [
        {
          title: "Metaheurísticas e pesquisa",
          body: "Pesquisa em formulação, busca e otimização para problemas complexos de decisão.",
        },
        {
          title: "Sistemas de recomendação",
          body: "Aplicação em ranking, matching, personalização e priorização em produtos reais.",
        },
      ],
    },
    about: {
      eyebrow: "Sobre",
      title: "Pesquisa aplicada que vira produto.",
      paragraphs: [
        "Minha base é pesquisa aplicada, mas meu trabalho do dia a dia é produto: entender problema real e transformar isso em solução que funcione.",
        "Atuei em governo, startups e produtos digitais, sempre com foco em clareza técnica, execução responsável e impacto mensurável.",
      ],
      blocks: [
        {
          title: "Pesquisa e modelagem",
          body: "Recomendação, ranking, metaheurísticas, interpretabilidade e avaliação de trade-offs.",
        },
        {
          title: "Consultoria técnica",
          body: "Diagnóstico de produto, definição de arquitetura e aceleração de decisões complexas em IA.",
        },
      ],
      principleEyebrow: "Princípio",
      principleTitle: "Técnica não como adorno, mas como vantagem real.",
      principleBody:
        "A ideia é simples: construir inteligência útil, auditável e orientada à decisão.",
    },
    engagements: {
      eyebrow: "Como eu entro",
      title: "Formatos para problemas técnicos não triviais.",
      intro:
        "Nem todo problema pede projeto longo. Muitas vezes o ganho vem de um diagnóstico rápido e uma direção técnica clara.",
      offers: [
        {
          title: "Diagnóstico estratégico",
          body: "Leitura técnica de problema, restrições, dados e riscos para decidir o que vale perseguir.",
        },
        {
          title: "Sprint de arquitetura",
          body: "Pipeline, critérios de avaliação e decisões críticas antes de escalar implementação.",
        },
        {
          title: "Acompanhamento seletivo",
          body: "Apoio técnico em momentos de decisão sensível, sem criar uma camada paralela de gestão.",
        },
      ],
      fitTitle: "Quando faz sentido me chamar",
      fitItems: [
        "Você tem um problema de recomendação, ranking, matching ou priorização difícil de estruturar.",
        "Existe pressão por decisão de arquitetura e pouco espaço para tentativa cega.",
        "A equipe precisa de profundidade técnica sem ganhar mais ruído operacional.",
      ],
      notFitTitle: "Quando provavelmente não faz sentido",
      notFitItems: [
        "Quando o objetivo ainda está muito aberto, normalmente vale uma etapa curta de diagnóstico antes de execução.",
        "Se o contexto estiver inicial demais, posso ajudar primeiro a estruturar problema, métrica e prioridade.",
        "Quando a decisão já vem fechada, meu papel tende a gerar menos valor do que em cenários com espaço para ajustar rota.",
      ],
      processTitle: "Como costumo trabalhar",
      processItems: [
        {
          title: "1. Entendimento",
          body: "Começo pelo problema, não pela ferramenta. Primeiro alinhamos contexto, objetivo e restrições.",
        },
        {
          title: "2. Estrutura",
          body: "Transformo ambiguidades em hipóteses, critérios e caminhos técnicos comparáveis.",
        },
        {
          title: "3. Direção",
          body: "Saímos com recomendações, trade-offs e próximos passos executáveis pelo time.",
        },
      ],
    },
    projects: {
      eyebrow: "Cases selecionados",
      title: "Alguns contextos onde trabalho técnico virou entrega concreta.",
      intro:
        "Uma seleção de trabalhos em que recomendação, modelagem e arquitetura ajudaram a resolver problemas reais.",
      cards: [
        {
          title: "Sistema de Recomendação Famyle",
          description:
            "Matching inteligente entre empregadores e profissionais domésticos, com extração de habilidades e ranking multiobjetivo orientado a aderência real.",
          link: "https://famyle.com",
        },
        {
          title: "Expresso Goiás",
          description:
            "Recomendações personalizadas de serviços públicos no Portal Expresso, combinando popularidade, personalização e critérios de fairness.",
          link: "https://www.go.gov.br/",
        },
        {
          title: "Lembry - Estimativa de Custos e Esforços",
          description:
            "Modelos preditivos para propostas e planejamento em engenharia elétrica, com foco em decisão comercial e redução de risco.",
          link: "https://www.linkedin.com/in/victor-g-b2014a11b",
        },
        {
          title: "Magus Corp - IA Aplicada e Otimização",
          description:
            "Projetos de otimização metaheurística, NLP e visão computacional, incluindo arquitetura em nuvem e aceleração do ciclo de entrega.",
          link: "https://www.linkedin.com/in/victor-g-b2014a11b",
        },
        {
          title: "Grupo Mateus - Recomendação para Varejo",
          description:
            "Sistemas de recomendação para e-commerce com foco em personalização, análise de dados de cliente e performance operacional.",
          link: "https://www.linkedin.com/in/victor-g-b2014a11b",
        },
        {
          title: "Rurax - Marketplace Agro com Recsys",
          description:
            "Pesquisa e desenvolvimento em personalização de ofertas para agronegócio, com abordagens de RL e contextual bandits.",
          link: "https://www.linkedin.com/in/victor-g-b2014a11b",
        },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Se você está avaliando um problema sério de IA, podemos conversar.",
      body:
        "Sou mais útil quando existe problema técnico relevante, contexto de negócio real e abertura para decisão baseada em evidência. Email direto: victor@guerreiro.ia.br",
      primary: "Abrir contato",
      secondary: "Explorar cases",
    },
    footer: {
      summary: "Pesquisa aplicada e consultoria em IA com foco em impacto real.",
      note: "Português por padrão. English available.",
    },
  },
  en: {
    languageLabel: "EN",
    switchLabel: "Português",
    nav: [
      { href: "", label: "Home" },
      { href: "about", label: "About" },
      { href: "engagements", label: "Engagements" },
      { href: "projects", label: "Work" },
    ],
    ctaContact: "Get in touch",
    ctaProjects: "View work",
    hero: {
      eyebrow: "Applied AI for products, decision-making, and operations",
      title: "Artificial intelligence with",
      accent: "technical depth",
      titleSuffix: "and practical delivery.",
      summary:
        "I design and ship recommendation, ranking, and optimization systems for real product problems.",
      metrics: [
        { label: "Focus", value: "Recommendation, optimization, and applied inference." },
        { label: "Format", value: "Applied research, technical consulting, and value-oriented delivery." },
        { label: "Context", value: "Digital products, government, and high-stakes decision environments." },
      ],
      panelEyebrow: "Victor Guerreiro",
      panelTitle: "Technical consulting backed by research depth.",
      panelBody:
        "I am most useful when the problem is critical and the team needs fast decisions without lowering technical standards.",
      panelItems: [
        { label: "Work", value: "Technical strategy, modeling, and prioritization." },
        { label: "Specialty", value: "Recommendation systems, ranking, and optimization." },
        { label: "Foundation", value: "Applied AI research with product-oriented execution." },
      ],
    },
    offer: {
      eyebrow: "How I help",
      title: "Lean engagements with strong technical intent.",
      intro:
        "No AI theater. The goal is to reduce risk, speed up decisions, and deliver what can actually run in production.",
      cards: [
        {
          title: "AI and product diagnosis",
          body: "I assess problem framing, data, metrics, and feasibility to turn a vague ambition into a defensible technical path.",
        },
        {
          title: "Architecture and experimentation",
          body: "I help structure hypotheses, design pipelines, and prioritize where research and engineering effort should go.",
        },
        {
          title: "Recommendation and ranking systems",
          body: "I work on matching, personalization, fairness, popularity, multi-objective optimization, and offline/online evaluation.",
        },
      ],
    },
    proof: {
      eyebrow: "Where this has already created value",
      title: "Applied experience in contexts where recommendation and decision quality matter.",
      intro:
        "The work usually happens where decisions are high-stakes, operations are under pressure, and technical choices must be explicit.",
      items: [
        { label: "Matching", value: "Modeling for real fit between supply, demand, and business constraints." },
        { label: "Public services", value: "Personalization and prioritization in products with scale and public impact." },
        { label: "Estimation", value: "Models that bring technical judgment, cost, and commercial decisions closer together." },
      ],
    },
    tracks: {
      eyebrow: "Two core tracks",
      title: "Research in metaheuristics and an applied background in recommendation systems.",
      intro:
        "These two lines reinforce each other: on one side, technical investigation into optimization and search; on the other, the construction of systems that must turn imperfect signal into useful decisions.",
      items: [
        {
          title: "Metaheuristics and research",
          body: "A track focused on formulation, optimization, and experimentation, connected to your academic path and your capstone work within the INF context.",
        },
        {
          title: "Recommendation systems",
          body: "A track applied to ranking, matching, personalization, and prioritization, reflecting your professional background and real-world work in this domain.",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Applied research with product intent.",
      paragraphs: [
        "I work at the intersection of applied research and product execution: recommendation systems, machine learning, and optimization for high-impact decisions.",
        "I contribute across government, startups, and digital products with legible architecture, objective experimentation, and operationally grounded delivery.",
      ],
      blocks: [
        {
          title: "Research and modeling",
          body: "Recommendation, ranking, metaheuristics, interpretability, and trade-off evaluation.",
        },
        {
          title: "Technical consulting",
          body: "Product diagnosis, architecture definition, and acceleration of complex AI decisions.",
        },
      ],
      principleEyebrow: "Principle",
      principleTitle: "Technique as leverage, not decoration.",
      principleBody:
        "The aim is to build intelligence that is useful, auditable, and decision-oriented without turning the interface into an internal manifesto.",
    },
    engagements: {
      eyebrow: "How I engage",
      title: "Working formats for technical problems that are not straightforward anymore.",
      intro:
        "Not every situation needs a long project. Often the highest value comes from fast diagnosis and clear technical direction.",
      offers: [
        {
          title: "Strategic diagnosis",
          body: "Technical reading of the problem, constraints, data, risks, and hypotheses to decide what is worth pursuing.",
        },
        {
          title: "Architecture sprint",
          body: "Pipeline framing, evaluation criteria, and design of critical decisions before implementation grows expensive.",
        },
        {
          title: "Selective advisory",
          body: "Technical support at sensitive decision points without becoming an extra layer of operational management.",
        },
      ],
      fitTitle: "When it makes sense to bring me in",
      fitItems: [
        "You face a recommendation, ranking, matching, or prioritization problem that is hard to frame.",
        "There is pressure to decide architecture with little room for blind trial and error.",
        "The team needs technical depth and strategic clarity, not extra coordination noise.",
      ],
      notFitTitle: "When I am probably not the right fit",
      notFitItems: [
        "If the goal is still too open, a short diagnosis step usually works better before execution.",
        "If the context is very early, I can first help structure the problem, metric, and priorities.",
        "When the decision is already fixed, I tend to add less value than in scenarios with room to adjust direction.",
      ],
      processTitle: "How I usually work",
      processItems: [
        {
          title: "1. Understand",
          body: "I enter through the problem, not the tool. The first step is clarifying context, objective, and constraints.",
        },
        {
          title: "2. Structure",
          body: "I turn ambiguity into hypotheses, criteria, and technical paths that can be compared honestly.",
        },
        {
          title: "3. Direct",
          body: "We leave with recommendations, trade-offs, and next steps the team can actually absorb.",
        },
      ],
    },
    projects: {
      eyebrow: "Selected work",
      title: "A few contexts where technical work turned into concrete delivery.",
      intro:
        "A small selection of projects where recommendation, modeling, and architecture helped solve real problems.",
      cards: [
        {
          title: "Famyle Recommendation System",
          description:
            "Intelligent matching between households and domestic workers, with skill extraction and multi-objective ranking tuned for real fit.",
          link: "https://famyle.com",
        },
        {
          title: "Expresso Goiás",
          description:
            "Personalized recommendations for public services, combining popularity, personalization, and fairness criteria.",
          link: "https://www.go.gov.br/",
        },
        {
          title: "Lembry - Cost and Effort Estimation",
          description:
            "Predictive models for electrical engineering proposals and planning, improving commercial decision quality and risk control.",
          link: "https://www.linkedin.com/in/victor-g-b2014a11b",
        },
        {
          title: "Magus Corp - Applied AI and Optimization",
          description:
            "Metaheuristic optimization, NLP and computer vision projects, with cloud architecture and faster delivery cycles.",
          link: "https://www.linkedin.com/in/victor-g-b2014a11b",
        },
        {
          title: "Grupo Mateus - Retail Recommendation",
          description:
            "E-commerce recommendation work focused on personalization, customer-data analysis, and operational performance.",
          link: "https://www.linkedin.com/in/victor-g-b2014a11b",
        },
        {
          title: "Rurax - Agribusiness Marketplace Recsys",
          description:
            "R&D on offer personalization for agribusiness marketplaces, including RL and contextual bandits approaches.",
          link: "https://www.linkedin.com/in/victor-g-b2014a11b",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "If you are evaluating a serious AI problem, we should talk.",
      body:
        "I am most valuable when there is a meaningful technical challenge, real business context, and room for evidence-based decisions. Direct email: victor@guerreiro.ia.br",
      primary: "Open contact",
      secondary: "Explore work",
    },
    footer: {
      summary: "Applied AI research and technical consulting focused on real impact.",
      note: "Default in Portuguese. English available.",
    },
  },
};

export function getSiteCopy(locale: SiteLocale): SiteCopy {
  return siteCopy[locale];
}
