const CONTACT_URL = "#contato";

const services = [
  {
    title: "Estratégia & Posicionamento",
    text: "Clareza de oferta, narrativa de marca, organização da presença e direção criativa.",
  },
  {
    title: "Identidade & Design",
    text: "Visual, linguagem, peças, criativos e sistemas gráficos com consistência.",
  },
  {
    title: "Conteúdo & Social",
    text: "Planejamento, formatos, calendário, presença e comunicação para marcas e projetos.",
  },
  {
    title: "Sites & Landing Pages",
    text: "Páginas pensadas para apresentar, vender, captar e organizar a percepção da marca.",
  },
  {
    title: "Campanhas & Tráfego",
    text: "Criativos, funis, anúncios e estrutura de captação para campanhas mais sérias.",
  },
  {
    title: "Lançamentos & Produtos Digitais",
    text: "Estruturação de ideias, ofertas, páginas, narrativa e execução de lançamento.",
  },
  {
    title: "Audiovisual & Presença",
    text: "Conteúdo visual, vídeo, direção estética e materiais de apresentação.",
  },
  {
    title: "Automação & Operação",
    text: "Sistemas simples, fluxos, organização e inteligência operacional para empresas.",
  },
];

const workedBrands = [
  "L’Oréal Paris",
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

const processSteps = [
  {
    title: "Diagnóstico",
    text: "Entendemos marca, oferta, cenário e estrutura atual.",
  },
  {
    title: "Direção",
    text: "Definimos narrativa, prioridades e caminho visual/comercial.",
  },
  {
    title: "Construção",
    text: "Criamos identidade, páginas, criativos, conteúdo e materiais.",
  },
  {
    title: "Campanha",
    text: "Organizamos presença, anúncio, lançamento ou estratégia de exposição.",
  },
  {
    title: "Evolução",
    text: "Ajustamos, refinamos e transformamos execução em sistema.",
  },
];

const audiences = [
  "Empresas em estruturação",
  "Negócios locais e digitais",
  "Artistas e projetos culturais",
  "Marcas em lançamento",
  "Produtos digitais",
  "Operações que precisam organizar presença, comunicação e venda",
];

const orbitLabels = ["marca", "campanha", "conteúdo", "site", "lançamento", "tráfego", "operação"];

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const root = document.documentElement;
const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const processTimeline = document.querySelector("#processTimeline");
const brandWall = document.querySelector("#brandWall");

document.querySelectorAll("[data-contact-link]").forEach((link) => {
  link.href = CONTACT_URL;
});

function renderContent() {
  const serviceGrid = document.querySelector("#servicesGrid");
  serviceGrid.innerHTML = services
    .map(
      (service, index) => `
        <article class="service-card" data-reveal data-index="${String(index + 1).padStart(2, "0")}">
          <h3>${service.title}</h3>
          <p>${service.text}</p>
        </article>
      `,
    )
    .join("");

  brandWall.innerHTML = workedBrands
    .map(
      (brand, index) => `
        <span class="brand-chip" data-depth="${((index % 4) + 1) * 0.18}" data-reveal>${brand}</span>
      `,
    )
    .join("");

  document.querySelector("#territoryLine").innerHTML = territories
    .map((territory) => `<span>${territory}</span>`)
    .join("");

  const testimonialsArea = document.querySelector("#testimonialsArea");
  if (testimonialHighlights.length === 0) {
    testimonialsArea.innerHTML = `
      <div class="testimonial-empty" data-reveal>
        <div>
          <h3>Depoimentos em atualização.</h3>
          <p>
            O destaque do Instagram foi previsto como fonte complementar, mas não será preenchido
            com frases não verificadas. Quando os textos reais forem inseridos em
            <strong>testimonialHighlights</strong>, esta seção vira uma grade de depoimentos automaticamente.
          </p>
        </div>
        <div class="editable-note">
          Campos preparados: nome, empresa/projeto, texto, imagem opcional e fonte.
        </div>
      </div>
    `;
  } else {
    testimonialsArea.innerHTML = `
      <div class="testimonial-grid">
        ${testimonialHighlights
          .map(
            (item) => `
              <article class="testimonial-card" data-reveal>
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
    `;
  }

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

  document.querySelector("#audienceGrid").innerHTML = audiences
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

function setupMenu() {
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

  function update() {
    const scrollTop = window.scrollY;
    const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    root.style.setProperty("--scroll-ratio", (scrollTop / maxScroll).toFixed(4));
    header.classList.toggle("is-scrolled", scrollTop > 18);

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

    if (!reducedMotion) {
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
  const ctx = canvas.getContext("2d");
  const pointer = { x: 0, y: 0 };
  let width = 0;
  let height = 0;
  let rafId = 0;

  const nodes = orbitLabels.map((label, index) => ({
    label,
    angle: (Math.PI * 2 * index) / orbitLabels.length,
    speed: 0.16 + index * 0.018,
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

  function draw(time = 0) {
    ctx.clearRect(0, 0, width, height);

    const cx = width * (0.5 + pointer.x * 0.035);
    const cy = height * (0.5 + pointer.y * 0.04);
    const base = Math.min(width, height) * 0.34;
    const scrollRatio = Number(getComputedStyle(root).getPropertyValue("--scroll-ratio")) || 0;
    const t = reducedMotion ? 0.2 : time * 0.00055;
    const tilt = scrollRatio * 0.45;

    ctx.globalCompositeOperation = "source-over";
    drawRing(cx, cy, base * 1.22, base * 0.34, -0.35 + tilt, "rgba(17,17,17,0.18)");
    drawRing(cx, cy, base * 1.0, base * 0.44, 0.42 - tilt, "rgba(215,25,32,0.35)");
    drawRing(cx, cy, base * 0.74, base * 0.28, 1.1 + tilt * 0.7, "rgba(17,17,17,0.13)");

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
      const isRed = node.label === "campanha" || node.label === "lançamento" || node.label === "tráfego";
      const radius = 6.5 * node.scale;
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

    if (!reducedMotion) {
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
    if (reducedMotion) {
      draw();
    }
  });

  return () => window.cancelAnimationFrame(rafId);
}

renderContent();
setupMenu();
setupReveal();
setupScrollEffects();
setupOrbitScene();
