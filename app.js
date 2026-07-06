const CONTACT_URL = "#contato";

const heroChips = [
  "Site profissional",
  "Landing pages",
  "WhatsApp organizado",
  "CRM & Funil",
  "Automações",
  "Agentes de IA",
  "Campanhas",
  "Conteúdo",
];

const painPoints = [
  "O cliente chama, mas ninguém acompanha direito",
  "O WhatsApp vira bagunça",
  "A empresa depende só de post",
  "O site não apresenta bem a oferta",
  "Os anúncios levam para uma estrutura fraca",
  "Não existe funil, CRM ou histórico",
  "A equipe responde no improviso",
  "Nenhum dado vira decisão",
];

const structureServices = [
  {
    title: "Presença digital",
    text: "Site, domínio, e-mail profissional, landing pages, identidade de apresentação e páginas que explicam melhor o que a empresa vende.",
  },
  {
    title: "Captação",
    text: "Campanhas, criativos, SEO, conteúdo, páginas de conversão e formulários para transformar atenção em oportunidade real.",
  },
  {
    title: "Atendimento",
    text: "WhatsApp organizado, mensagens, fluxos, respostas, triagem e estrutura para não perder conversas importantes.",
  },
  {
    title: "CRM & Funil",
    text: "Organização de leads, etapas comerciais, acompanhamento, histórico e clareza sobre onde cada oportunidade está.",
  },
  {
    title: "Automação",
    text: "Fluxos simples para reduzir tarefas repetitivas, conectar ferramentas e manter o processo funcionando com menos dependência manual.",
  },
  {
    title: "Agentes de IA",
    text: "IA aplicada para atendimento, qualificação, respostas, organização, produção de conteúdo, análise e suporte operacional.",
  },
  {
    title: "Conteúdo & Criativos",
    text: "Comunicação, peças, anúncios, posts, copy e narrativa visual para a marca parecer mais séria e mais clara.",
  },
  {
    title: "Indicadores",
    text: "Leitura de dados, gargalos, campanhas, conversões e sinais importantes para melhorar a operação com base em evidências.",
  },
];

const pubIAModules = [
  {
    title: "Atendimento inteligente",
    text: "Respostas, triagem, direcionamento, qualificação e suporte para reduzir perda de oportunidades.",
  },
  {
    title: "Funis inteligentes",
    text: "Fluxos de captação e acompanhamento para leads não sumirem depois do primeiro contato.",
  },
  {
    title: "Automação comercial",
    text: "Conexões entre formulário, WhatsApp, CRM, planilhas, notificações e tarefas.",
  },
  {
    title: "Conteúdo e copy",
    text: "Apoio para posts, criativos, anúncios, roteiros, páginas e comunicação com mais consistência.",
  },
  {
    title: "Pesquisa e análise",
    text: "Leitura de mercado, concorrentes, campanhas, mensagens e oportunidades de melhoria.",
  },
  {
    title: "Sistemas simples",
    text: "Ferramentas internas, painéis, formulários, relatórios e interfaces para organizar a operação.",
  },
];

const systemSteps = [
  {
    title: "Apresentar",
    text: "Marca, site, landing page, conteúdo e oferta mais claros.",
  },
  {
    title: "Captar",
    text: "Campanhas, criativos, SEO, tráfego e formulários gerando oportunidades.",
  },
  {
    title: "Atender",
    text: "WhatsApp, respostas, triagem e organização do primeiro contato.",
  },
  {
    title: "Acompanhar",
    text: "CRM, funil, histórico, lembretes e automações para não perder leads.",
  },
  {
    title: "Melhorar",
    text: "Indicadores, análise, ajustes e IA aplicada para evoluir o sistema.",
  },
];

const workedNames = [
  "L'Oréal Paris",
  "Gabriela Rocha",
  "Gabriel O Pensador",
  "Paralamas do Sucesso",
  "Circo Voador",
  "Teatro Odisseia",
  "Diogo Defante",
  "Igor Guimarães",
  "Paulinho Serra",
];

const territories = ["Brasil", "Dubai", "Argentina", "Espanha", "Itália", "Portugal", "EUA"];

// Preencha apenas com depoimentos reais extraídos manualmente do destaque do Instagram.
const testimonialHighlights = [
  // {
  //   nome: "",
  //   empresaProjeto: "",
  //   texto: "",
  //   imagem: "",
  //   fonte: "Instagram highlight",
  // },
];

const videoTestimonials = [
  {
    title: "Domingo Stark",
    video: "./assets/testimonials/domingo-stark.mp4",
    poster: "./assets/testimonials/domingo-stark.jpg",
  },
  {
    title: "Cego Jeffinho",
    video: "./assets/testimonials/cego-jeffinho.mp4",
    poster: "./assets/testimonials/cego-jeffinho.jpg",
  },
  {
    title: "Paulinho Serra",
    video: "./assets/testimonials/paulinho-serra.mp4",
    poster: "./assets/testimonials/paulinho-serra.jpg",
  },
  {
    title: "Vamos Dubai",
    video: "./assets/testimonials/vamos-dubai.mp4",
    poster: "./assets/testimonials/vamos-dubai.jpg",
  },
];

const diagnosticItems = [
  {
    title: "Presença",
    text: "Como a empresa aparece, se apresenta e explica sua oferta.",
  },
  {
    title: "Captação",
    text: "Como chegam os leads, de onde vêm e que promessa recebem.",
  },
  {
    title: "Atendimento",
    text: "Como o contato é respondido, qualificado e direcionado.",
  },
  {
    title: "Funil",
    text: "Como oportunidades são acompanhadas até a decisão.",
  },
  {
    title: "Automação & IA",
    text: "O que pode ser automatizado, assistido ou melhorado com IA aplicada.",
  },
  {
    title: "Métricas",
    text: "O que está sendo medido e o que ainda está invisível.",
  },
];

const processSteps = [
  {
    title: "Mapeamento",
    text: "Entendemos a empresa, canais, oferta, atendimento e gargalos.",
  },
  {
    title: "Estrutura",
    text: "Definimos quais peças precisam existir: site, página, funil, CRM, automações, campanha ou IA.",
  },
  {
    title: "Construção",
    text: "Criamos os ativos visuais, digitais, comerciais e operacionais.",
  },
  {
    title: "Implantação",
    text: "Conectamos páginas, formulários, WhatsApp, CRM, automações e fluxos.",
  },
  {
    title: "Otimização",
    text: "Acompanhamos sinais, ajustamos mensagens e melhoramos o sistema.",
  },
];

const audienceCards = [
  "Empresas locais que querem vender melhor",
  "Negócios digitais sem funil claro",
  "Prestadores de serviço com atendimento desorganizado",
  "Marcas que dependem só do Instagram",
  "Empresas que anunciam, mas perdem lead no atendimento",
  "Projetos que precisam de site, landing page, CRM e automação",
  "Operações que querem usar IA de forma prática",
  "Marcas que precisam parecer mais sérias",
];

const orbitLabels = ["Marca", "Site", "Campanha", "WhatsApp", "CRM", "Automação", "IA", "Indicadores"];

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const compactScene = window.matchMedia("(max-width: 640px)");
const root = document.documentElement;
const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const processTimeline = document.querySelector("#processTimeline");
const brandWall = document.querySelector("#brandWall");
const systemFlow = document.querySelector("#systemFlow");

document.querySelectorAll("[data-contact-link]").forEach((link) => {
  link.href = CONTACT_URL;
});

function renderContent() {
  const heroChipArea = document.querySelector("#heroChips");
  if (heroChipArea) {
    heroChipArea.innerHTML = heroChips.map((chip) => `<span>${chip}</span>`).join("");
  }

  const painGrid = document.querySelector("#painGrid");
  if (painGrid) {
    painGrid.innerHTML = painPoints
      .map(
        (point, index) => `
          <article class="pain-item" data-reveal>
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${point}</strong>
          </article>
        `,
      )
      .join("");
  }

  const structureGrid = document.querySelector("#structureGrid");
  if (structureGrid) {
    structureGrid.innerHTML = structureServices
      .map(
        (service, index) => `
          <article class="service-card" data-reveal data-index="${String(index + 1).padStart(2, "0")}">
            <h3>${service.title}</h3>
            <p>${service.text}</p>
          </article>
        `,
      )
      .join("");
  }

  const pubIAGrid = document.querySelector("#pubIAGrid");
  if (pubIAGrid) {
    pubIAGrid.innerHTML = pubIAModules
      .map(
        (module, index) => `
          <article class="ia-card" data-reveal data-index="${String(index + 1).padStart(2, "0")}">
            <h3>${module.title}</h3>
            <p>${module.text}</p>
          </article>
        `,
      )
      .join("");
  }

  if (systemFlow) {
    systemFlow.innerHTML = systemSteps
      .map(
        (step, index) => `
          <article class="acquisition-item system-step" data-reveal>
            <span>${String(index + 1).padStart(2, "0")}</span>
            <h3>${step.title}</h3>
            <p>${step.text}</p>
          </article>
        `,
      )
      .join("");
  }

  if (brandWall) {
    brandWall.innerHTML = workedNames
      .map(
        (name, index) => `
          <span class="brand-chip" data-depth="${((index % 4) + 1) * 0.18}" data-reveal>${name}</span>
        `,
      )
      .join("");
  }

  const territoryLine = document.querySelector("#territoryLine");
  if (territoryLine) {
    territoryLine.innerHTML = territories.map((territory) => `<span>${territory}</span>`).join("");
  }

  const testimonialsArea = document.querySelector("#testimonialsArea");
  const testimonialsSection = document.querySelector("#depoimentos");
  if (testimonialsArea) {
    if (testimonialHighlights.length === 0 && videoTestimonials.length === 0) {
      if (testimonialsSection) {
        testimonialsSection.hidden = true;
      }
      testimonialsArea.innerHTML = "";
    } else {
      if (testimonialsSection) {
        testimonialsSection.hidden = false;
      }
      testimonialsArea.innerHTML = `
        ${
          videoTestimonials.length > 0
            ? `
              <div class="video-testimonial-grid">
                ${videoTestimonials
                  .map(
                    (item) => `
                      <article class="video-testimonial-card" data-reveal>
                        <div class="video-frame" data-testimonial-title="${item.title}">
                          <video controls playsinline webkit-playsinline preload="metadata" poster="${item.poster}" aria-label="Depoimento de ${item.title}">
                            <source src="${item.video}" type="video/mp4" />
                          </video>
                          <button class="video-play-button" type="button" aria-label="Reproduzir depoimento de ${item.title}">
                            <span aria-hidden="true"></span>
                          </button>
                        </div>
                        <div class="video-testimonial-meta">
                          <strong>${item.title}</strong>
                        </div>
                      </article>
                    `,
                  )
                  .join("")}
              </div>
            `
            : ""
        }
        ${
          testimonialHighlights.length > 0
            ? `
              <div class="testimonial-grid">
                ${testimonialHighlights
                  .map(
                    (item) => `
                      <article class="testimonial-card" data-reveal>
                        ${item.imagem ? `<img src="${item.imagem}" alt="" loading="lazy" />` : ""}
                        <blockquote>“${item.texto}”</blockquote>
                        <cite>
                          <strong>${item.nome}</strong>
                          <span>${item.empresaProjeto}</span>
                          <span>${item.fonte}</span>
                        </cite>
                      </article>
                    `,
                  )
                  .join("")}
              </div>
            `
            : ""
        }
      `;
    }
  }

  const diagnosticPoints = document.querySelector("#diagnosticPoints");
  if (diagnosticPoints) {
    diagnosticPoints.innerHTML = diagnosticItems
      .map(
        (item, index) => `
          <article data-reveal>
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${item.title}</strong>
            <p>${item.text}</p>
          </article>
        `,
      )
      .join("");
  }

  if (processTimeline) {
    processTimeline.innerHTML = processSteps
      .map(
        (step, index) => `
          <article class="process-step" data-number="${index + 1}" data-reveal>
            <h3>${step.title}</h3>
            <p>${step.text}</p>
          </article>
        `,
      )
      .join("");
  }

  const audienceGrid = document.querySelector("#audienceGrid");
  if (audienceGrid) {
    audienceGrid.innerHTML = audienceCards
      .map(
        (audience, index) => `
          <article class="audience-item" data-reveal>
            <span>${index + 1}</span>
            <strong>${audience}</strong>
          </article>
        `,
      )
      .join("");
  }
}

function setupMenu() {
  if (!menuToggle || !nav) {
    return;
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      document.body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

function setupActiveNav() {
  const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  const sections = navLinks
    .map((link) => ({
      link,
      section: document.querySelector(link.getAttribute("href")),
    }))
    .filter((item) => item.section);

  if (sections.length === 0) {
    return;
  }

  function updateActiveLink() {
    const threshold = window.scrollY + (header?.offsetHeight || 0) + window.innerHeight * 0.24;
    const activeItem = [...sections].reverse().find(({ section }) => section.offsetTop <= threshold) || sections[0];

    navLinks.forEach((link) => {
      if (link === activeItem.link) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  updateActiveLink();
  window.addEventListener("scroll", updateActiveLink, { passive: true });
  window.addEventListener("resize", updateActiveLink);
}

function setupMobileStickyCta() {
  const stickyCta = document.querySelector(".mobile-sticky-cta");
  const heroActions = document.querySelector(".hero-actions");
  const coverSensitiveSections = document.querySelectorAll("#depoimentos, #contato");

  if (!stickyCta || !heroActions || !("IntersectionObserver" in window)) {
    return;
  }

  let heroActionsVisible = true;
  let sensitiveSectionVisible = false;
  const visibleSensitiveSections = new Set();

  function syncStickyCta() {
    stickyCta.classList.toggle("is-visible", !heroActionsVisible && !sensitiveSectionVisible);
  }

  const heroObserver = new IntersectionObserver(
    ([entry]) => {
      heroActionsVisible = entry.isIntersecting;
      syncStickyCta();
    },
    { threshold: 0.05 },
  );

  heroObserver.observe(heroActions);

  if (coverSensitiveSections.length > 0) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSensitiveSections.add(entry.target);
          } else {
            visibleSensitiveSections.delete(entry.target);
          }
        });
        sensitiveSectionVisible = visibleSensitiveSections.size > 0;
        syncStickyCta();
      },
      { rootMargin: "-12% 0px -18% 0px", threshold: 0 },
    );

    coverSensitiveSections.forEach((section) => sectionObserver.observe(section));
  }
}

function setupVideoPlayers() {
  const players = [...document.querySelectorAll(".video-frame")];

  function pauseOtherVideos(activeVideo) {
    players.forEach((otherFrame) => {
      const otherVideo = otherFrame.querySelector("video");

      if (otherVideo && otherVideo !== activeVideo && !otherVideo.paused) {
        otherVideo.pause();
      }
    });
  }

  players.forEach((frame) => {
    const video = frame.querySelector("video");
    const playButton = frame.querySelector(".video-play-button");
    const testimonialTitle = frame.dataset.testimonialTitle || "depoimento";

    if (!video || !playButton) {
      return;
    }

    function syncPlayButton() {
      const isPlaying = !video.paused && !video.ended;
      frame.classList.toggle("is-playing", isPlaying);
      playButton.setAttribute(
        "aria-label",
        `${isPlaying ? "Pausar" : "Reproduzir"} depoimento de ${testimonialTitle}`,
      );
    }

    function playVideo() {
      pauseOtherVideos(video);

      video.play().catch(() => {
        syncPlayButton();
      });
    }

    playButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (video.paused || video.ended) {
        playVideo();
      } else {
        video.pause();
      }
    });

    video.addEventListener("click", () => {
      if (video.paused || video.ended) {
        playVideo();
      }
    });

    video.addEventListener("play", syncPlayButton);
    video.addEventListener("pause", syncPlayButton);
    video.addEventListener("ended", syncPlayButton);
    video.addEventListener("loadedmetadata", syncPlayButton);
    video.addEventListener("error", syncPlayButton);
    syncPlayButton();
  });
}

function setupReveal() {
  if (reducedMotion) {
    document.querySelectorAll("[data-reveal]").forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
  );

  document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function setupScrollEffects() {
  const processStepsEls = [...document.querySelectorAll(".process-step")];
  const brandChips = [...document.querySelectorAll(".brand-chip")];
  const systemStepsEls = [...document.querySelectorAll(".system-step")];

  function update() {
    const scrollTop = window.scrollY;
    const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    root.style.setProperty("--scroll-ratio", (scrollTop / maxScroll).toFixed(4));
    header?.classList.toggle("is-scrolled", scrollTop > 18);

    if (processTimeline) {
      const processRect = processTimeline.getBoundingClientRect();
      const processProgress = clamp(
        (window.innerHeight * 0.72 - processRect.top) / Math.max(processRect.height, 1),
        0,
        1,
      );
      processTimeline.style.setProperty("--process-ratio", processProgress.toFixed(3));
      processStepsEls.forEach((step, index) => {
        step.classList.toggle("is-active", processProgress >= (index + 0.18) / processStepsEls.length);
      });
    }

    if (systemFlow) {
      const systemRect = systemFlow.getBoundingClientRect();
      const systemProgress = clamp(
        (window.innerHeight * 0.76 - systemRect.top) / Math.max(systemRect.height, 1),
        0,
        1,
      );
      systemFlow.style.setProperty("--system-ratio", systemProgress.toFixed(3));
      systemStepsEls.forEach((step, index) => {
        step.classList.toggle("is-active", systemProgress >= (index + 0.2) / systemStepsEls.length);
      });
    }

    if (!reducedMotion && brandWall) {
      const historyRect = brandWall.getBoundingClientRect();
      const historyProgress = clamp(
        (window.innerHeight - historyRect.top) / (window.innerHeight + historyRect.height),
        0,
        1,
      );
      brandChips.forEach((chip, index) => {
        const depth = Number(chip.dataset.depth || 0.2);
        const shift = (historyProgress - 0.5) * depth * 120;
        const rotate = (historyProgress - 0.5) * depth * 10;
        chip.style.transform = `translate3d(0, ${shift}px, ${depth * 80}px) rotateX(${rotate}deg)`;
        chip.style.transitionDelay = `${Math.min(index * 28, 160)}ms`;
      });
    }
  }

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function setupOrbitScene() {
  const canvas = document.querySelector("#orbitScene");

  if (!canvas) {
    return undefined;
  }

  const ctx = canvas.getContext("2d");
  const pointer = { x: 0, y: 0 };
  let width = 0;
  let height = 0;
  let rafId = 0;
  const shouldLoop = !reducedMotion && !compactScene.matches;

  const nodes = orbitLabels.map((label, index) => ({
    label,
    angle: (Math.PI * 2 * index) / orbitLabels.length,
    speed: 0.14 + index * 0.016,
    radius: 0.72 + (index % 3) * 0.12,
    plane: index % 2 === 0 ? 1 : -1,
  }));

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawRing(cx, cy, rx, ry, rotation, color) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotation);
    ctx.beginPath();
    ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  }

  function drawConnector(x1, y1, x2, y2, color) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  function draw(time = 0) {
    ctx.clearRect(0, 0, width, height);

    const cx = width * (0.5 + pointer.x * 0.035);
    const cy = height * (0.5 + pointer.y * 0.04);
    const base = Math.min(width, height) * 0.34;
    const scrollRatio = Number(getComputedStyle(root).getPropertyValue("--scroll-ratio")) || 0;
    const t = reducedMotion ? 0.2 : time * 0.0005;
    const tilt = scrollRatio * 0.45;

    ctx.globalCompositeOperation = "source-over";
    drawRing(cx, cy, base * 1.24, base * 0.36, -0.35 + tilt, "rgba(17,17,17,0.18)");
    drawRing(cx, cy, base * 1.02, base * 0.45, 0.42 - tilt, "rgba(215,25,32,0.35)");
    drawRing(cx, cy, base * 0.72, base * 0.29, 1.1 + tilt * 0.7, "rgba(17,17,17,0.13)");

    const projected = nodes
      .map((node, index) => {
        const angle = node.angle + t * node.speed * node.plane * 8 + scrollRatio * node.plane * 1.8;
        const orbit = base * node.radius;
        const x = Math.cos(angle) * orbit * 1.25;
        const y = Math.sin(angle) * orbit * 0.42;
        const z = Math.sin(angle + index * 0.5) * 90;
        const scale = clamp(0.72 + z / 360, 0.52, 1.05);
        return {
          ...node,
          x: cx + x + pointer.x * (26 + index * 2),
          y: cy + y + pointer.y * (22 - index),
          z,
          scale,
        };
      })
      .sort((a, b) => a.z - b.z);

    projected.forEach((node) => {
      drawConnector(cx, cy, node.x, node.y, node.label === "IA" ? "rgba(215,25,32,0.22)" : "rgba(17,17,17,0.08)");
    });

    projected.forEach((node) => {
      const isRed = ["IA", "Automação", "CRM"].includes(node.label);
      const radius = 6.8 * node.scale;
      const showLabels = width > 520;
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = isRed ? "rgba(215,25,32,0.92)" : "rgba(17,17,17,0.86)";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(node.x, node.y, radius + 8 * node.scale, 0, Math.PI * 2);
      ctx.strokeStyle = isRed ? "rgba(215,25,32,0.24)" : "rgba(17,17,17,0.16)";
      ctx.stroke();

      if (showLabels) {
        ctx.font = `${Math.max(10, 12 * node.scale)}px Helvetica, Arial, sans-serif`;
        ctx.fillStyle = isRed ? "rgba(151,15,20,0.86)" : "rgba(17,17,17,0.72)";
        ctx.textAlign = "center";
        ctx.fillText(node.label, node.x, node.y - 18 * node.scale);
      }
    });

    ctx.beginPath();
    ctx.arc(cx, cy, base * 0.12, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(215,25,32,0.18)";
    ctx.fill();

    if (shouldLoop && document.visibilityState === "visible") {
      rafId = window.requestAnimationFrame(draw);
    }
  }

  canvas.addEventListener("pointermove", (event) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = (event.clientX - rect.left) / rect.width - 0.5;
    pointer.y = (event.clientY - rect.top) / rect.height - 0.5;
  });

  canvas.addEventListener("pointerleave", () => {
    pointer.x = 0;
    pointer.y = 0;
  });

  resize();
  draw();
  window.addEventListener("resize", () => {
    resize();
    if (reducedMotion || !shouldLoop) {
      draw();
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden" && rafId) {
      window.cancelAnimationFrame(rafId);
      rafId = 0;
      return;
    }

    if (document.visibilityState === "visible" && shouldLoop && !rafId) {
      resize();
      rafId = window.requestAnimationFrame(draw);
    }
  });

  return () => window.cancelAnimationFrame(rafId);
}

renderContent();
setupVideoPlayers();
setupMenu();
setupActiveNav();
setupMobileStickyCta();
setupReveal();
setupScrollEffects();
setupOrbitScene();
