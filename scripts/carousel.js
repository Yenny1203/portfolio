/* ============================================================
   YENNY KOH — Portfolio
   carousel.js: 3D cylindrical carousel, scroll, transitions
   ============================================================ */

/* ---- Project Data ----------------------------------------- */
const PROJECTS = [
  {
    id: 'encrypted-entries',
    title: 'Encrypted Entries',
    category: 'Interactive / Generative',
    year: '2026',
    designer: 'Yenny Koh',
    color: '#1a1a2e',
    intro: 'An interactive generative typography system that transforms private text into encrypted visual language — exploring how personal expression can persist without remaining readable.',
overview: 'Encrypted Entries explores the idea that language can remain personal even after becoming unreadable. Centered around the concept of “private language,” the project invites visitors to type thoughts they would not normally share and transforms them into abstract visual compositions. Rather than revealing meaning, the system preserves only traces of expression — rhythm, structure, and presence — questioning how identity, memory, and emotion persist once language is removed. Through encryption and abstraction, the work reflects on the tension between disclosure and concealment in contemporary digital communication.',

process: 'The project was developed through iterative prototyping in p5.js, focusing on building a responsive system that could translate text input into real-time visual output. A custom mapping logic was designed to convert individual characters into unique forms within a 7×7 grid structure while maintaining consistency across interactions. The two-screen architecture was implemented to separate user input from visual generation, allowing submissions to update continuously across displays. Motion behavior, accumulation rules, and fading transitions were refined to create a dynamic archive that feels computational yet organic.',
outcome: 'Presented as a live interactive installation and web experience, the work transforms individual confessions into a shared visual ecosystem. As submissions accumulate, connect, and disappear over time, the system reveals patterns of collective presence while obscuring individual identity — reflecting on memory, anonymity, and the hidden structures of digital communication.',
tools: 'HTML, P5.js, JavaScript, Adobe Photoshop, Adobe Illustrator',
    images: {
      cover: 'cover.webp',
      detail: ['detail-01.webp', 'detail-02.webp', 'detail-03.webp', 'detail-04.webp', 'detail-05.webp', 'detail-06.webp', 'detail-07.gif', 'detail-08.webp', 'detail-09.webp', 'detail-10.webp', 'detail-11.webp'],
    },
  },
  {
    id: 'quiksilver',
    title: 'Quiksilver Repositioning',
    mobileTitle: 'Quiksilver',
    category: 'Brand Strategy',
    year: '2025',
    designer: 'Team Project',
    color: '#0d1b2a',
    intro: 'A strategic brand repositioning for Quiksilver that reimagines the heritage surf label as a value-driven cultural brand — shifting the focus from lifestyle consumption toward sustainability, participation, and long-term relevance.',
    overview: 'Although Quiksilver remains recognizable through its surf legacy, its identity has become increasingly generic within the contemporary sportswear market. This project reframed the brand beyond performance and nostalgia, proposing a new positioning centered on responsible outdoor culture. By redefining Quiksilver through a Rebel + Caregiver archetype, the project explores how a legacy brand can reconnect with younger audiences through visible action, environmental responsibility, and community engagement.',
    process: 'The project combined brand analysis, consumer perception research, and competitive positioning to identify gaps between awareness and cultural relevance. Based on these insights, a new strategic framework was developed across three pillars: challenging fast fashion, making sustainability visible, and building inclusive community. The repositioning was translated into a multi-layered system including product concepts, campaign activation, and an interactive digital experience through iterative prototyping and visual development.',
    outcome: 'The final outcome includes a repositioned brand strategy, archetype framework, visual identity direction, sustainability-led product system, campaign activation concept, and an interactive web experience designed to communicate long-term engagement over short-term consumption.',
    tools: 'Figma, HTML, Javascript, Adobe Illustrator, InDesign',
    images: {
      cover: 'cover.webp',
      detail: ['detail-01.webp', 'detail-02.webp', 'detail-03.webp', 'detail-04.webp', 'detail-05.webp', 'detail-06.webp' , 'detail-07.webp', 'detail-08.webp' , 'detail-09.webp', 'detail-10.mp4', 'detail-11.webp' , 'detail-12.webp'],
    },
    detailImageStyles: [
      { objectPosition: 'center center' },
      { objectPosition: 'center center' },
      { objectPosition: 'center center' },
    ],
  },
  {
    id: 'resonate',
    title: 'Resonate',
    category: 'Sound Visualization',
    year: '2025',
    designer: 'Yenny Koh',
    color: '#0d1a0d',
    intro: 'An interactive platform that transforms sound into generative visuals, exploring how computational design can turn audio into a new form of emotional expression and social communication.',
    overview: 'Resonate explores the relationship between sound, computation, and human connection by translating real-time audio into generative visual compositions. Rather than functioning as a conventional sound visualiser, the project reimagines sound as a personal creative medium that users can generate, share, and collaboratively develop. Combining creative coding with UI/UX design, the platform investigates how generative visuals can encourage emotional storytelling and community-driven interaction.',
    process: 'The project began with a series of computational experiments in p5.js, testing particle systems, geometric forms, radial structures, glow effects, fractal patterns, and fluid simulations driven by real-time microphone input. Using FFT analysis and amplitude mapping, I developed multiple visual systems that responded dynamically to bass, mid, and treble frequencies. Following user feedback, the concept evolved from a standalone visualisation tool into a social platform featuring personalised profiles, artwork feeds, collaborative creation boards, and emotion-based interactions. Wireframes, interface prototypes, and mobile mockups were developed to refine the overall user experience while integrating generative visuals into a cohesive digital product.',
    outcome: 'The final outcome is an interactive web platform where users transform sound into unique visual artworks, archive personal creations, and collaborate with others through shared compositions. By combining creative coding, computational graphics, and interface design, the project demonstrates how generative systems can support meaningful emotional expression beyond traditional data-driven visualisation.',    tools: 'p5.js, Web Audio API, JavaScript',
    images: {
      cover: 'cover.webp',
      detail: ['detail-01.webp', 'detail-02.webp', 'detail-03.webp', 'detail-04.webp', 'detail-05.webp', 'detail-06.webp', 'detail-07.webp', 'detail-08.webp', 'detail-09.webp'],
    },
  },
  {
    id: 'chicago-sky',
    title: 'Infographics',
    category: 'Digital Illustration / Data Visualization',
    year: '2024',
    designer: 'Yenny Koh',
    color: '#1a0d0d',
    intro: 'A social media campaign and performance art piece examining the commodification of public sky space through urban development.',
    overview: 'As Chicago\'s skyline transformed, this project used the language of real estate advertising to highlight what was being lost — not buildings, but views, light, and sky. The campaign ran across Instagram and culminated in a live performance.',
    process: 'Research into urban planning documents, real estate listings, and light rights law informed the visual language. The aesthetic deliberately mimicked premium real estate marketing to create productive cognitive dissonance.',
    outcome: 'A 12-post Instagram campaign that gained organic engagement from urban planning and architecture communities. A live performance was held at a rooftop venue in Chicago.',
    tools: 'Adobe Illustrator, Photoshop, InDesign',
    images: {
      cover: 'cover.webp',
      detail: ['detail-01.webp', 'detail-02.webp', 'detail-03.webp', 'detail-04.webp', 'detail-05.webp', 'detail-06.webp','detail-07.webp', 'detail-08.webp', 'detail-09.webp', 'detail-10.webp'],
    },
    subprojects: [
      {
        title: 'James Webb Telescope Infographic',
        intro: 'A scientific infographic that translates the complex engineering of the \n James Webb Space Telescope into an accessible visual narrative.',
    overview: 'The project explores how information design can make advanced space technology easier to understand. By focusing on the telescope’s structure, mission, and infrared capabilities, the infographic turns complex scientific content into a clear visual experience.',
    process: 'Scientific research was conducted through NASA references, engineering diagrams, telescope component studies, and visual research on aerospace illustration. The layout was developed through iterative hierarchy, callout systems, and custom illustrations to organize technical information clearly.',
    outcome: 'The final infographic presents JWST’s instruments, mirror system, sunshield, mission objectives, and deployment sequence through layered illustration, structured annotation, and editorial information design.'
      },
      {
        title: 'History of the Kyungbokgung Palace',
        intro: 'An editorial infographic that visualizes the architectural evolution of \n Gyeongbokgung Palace through blueprint-inspired graphics.',
        overview: 'Inspired by Jorge Borges’ “On Exactitude in Science,” the project explores how history can be reconstructed through maps, diagrams, and spatial fragments. The palace’s transformation is framed as a visual narrative about memory, scale, and representation.',
        process: 'The project began with historical research on Gyeongbokgung Palace, supported by archival maps, architectural drawings, and visual references from technical blueprints. Using a passage from Borges’ text as a conceptual structure, the timeline was divided into five stages to show how the palace changed across different historical periods.',
        outcome: 'The final infographic combines chronological storytelling, architectural illustration, and blueprint-style composition to present the palace’s history as a precise yet poetic visual system.'
      },
    ],
  },
  {
    id: 'book-design',
    title: 'Who Are We?',
    category: 'Video Editing / Storytelling',
    year: '2024',
    designer: 'Team Project',
    color: '#1a1508',
    intro: 'A collaborative motion portrait that explores identity through three personal objects — revealing personality through observation rather than direct representation.',
    overview: 'Inspired by the question, “How can you describe your personality in three objects?”, the project examines how ordinary belongings can become visual markers of identity. Instead of relying on interviews or self-description, the film invites viewers to interpret each individual through symbolic objects, subtle gestures, and fragments of everyday behavior. By assembling these personal traces into a shared visual narrative, the work reflects on the balance between individuality and collective identity.',
    process: 'The project evolved through multiple rounds of shooting and editing across different locations, including Tate Modern and Regent’s Park, to refine both atmosphere and visual storytelling. Close-up cinematography focused on gestures, objects, and expressions rather than conventional portraits, while iterative editing introduced split screens, layered compositions, collage techniques, and screen-record sequences. Visual pacing, transitions, and audio were continuously refined through feedback, resulting in a cohesive motion language that connected three distinct personalities within a single narrative.',
    outcome: 'The final film presents a layered motion portrait where personal objects, fragmented imagery, and dynamic editing merge into a shared visual identity. Rather than defining each participant explicitly, the project encourages viewers to construct their own interpretations of who we are through observation and association.',
    tools: 'Adobe Premier Pro, Photoshop, Indesign',
    images: {
      cover: 'cover.webp',
      detail: ['detail-01.webp', 'detail-02.webp', 'detail-03.webp', 'detail-04.webp', 'detail-05.mp4', 'detail-06.webp'],
    },
  },
  {
    id: 'visual-system',
    title: 'Harren II, 2024',
    category: 'Typography / Experimental',
    year: '2024',
    designer: 'Yenny Koh',
    color: '#12081a',
    intro: 'A data visualisation project that reinterprets Frank Stella’s Harran II through computational graphics, transforming principles of abstract painting into a visual language for information design.',
    overview: 'Inspired by Frank Stella’s Harran II (1967), this project explores how colour, geometry, and rhythm can enhance the communication of data. Rather than treating visualisation as a purely analytical tool, I investigated how artistic principles could improve both clarity and engagement. By translating Stella’s distinctive semicircular forms, layered compositions, and vibrant colour relationships into computational diagrams, the project demonstrates how abstract art can become a framework for contemporary information design.',
    process: 'The project began with a close visual analysis of Harran II, examining its colour distribution, geometric structures, and compositional rhythm. Using Python and Matplotlib, I developed a series of custom visualisation systems that translated these observations into data-driven graphics. Through continuous experimentation with colour palettes, geometric variables, and layout structures, I refined diagrams that balanced visual expression with legibility. The final outcomes were expanded into editorial publications and an interactive website, allowing the visual system to function consistently across both print and digital media.',
    outcome: 'The final project presents a cohesive visual language that bridges abstract art and information design. By combining computational methods with artistic analysis, it demonstrates how data visualisation can move beyond functional communication to create meaningful and engaging visual experiences.',
    tools: 'Python (Matplotlib), Adobe Illustrator, InDesign, HTML/CSS',
    images: {
      cover: 'cover.webp',
      detail: ['detail-01.webp', 'detail-02.webp', 'detail-03.webp', 'detail-04.webp', 'detail-05.webp', 'detail-06.webp', 'detail-07.webp'],
    },
  },
];

const IMAGE_BASE_PATH = 'assets/images';

function createDetailImageStyleAttr(config = {}) {
  const styles = [];

  if (config.aspectRatio) styles.push(`--detail-aspect-ratio:${config.aspectRatio}`);
  if (config.objectPosition) styles.push(`--detail-object-position:${config.objectPosition}`);

  return styles.length ? ` style="${styles.join(';')}"` : '';
}

/* ---- Gradient placeholder images as colored canvases -------- */
function createPlaceholderSrc(project, index) {
  const canvas = document.createElement('canvas');
  canvas.width = 840;
  canvas.height = 1120;
  const ctx = canvas.getContext('2d');
  
  // Base color from project
  const baseColor = project.color;
  
  // Gradient background
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, baseColor);
  gradient.addColorStop(1, '#080808');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Subtle grain texture
  for (let i = 0; i < 8000; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const alpha = Math.random() * 0.06;
    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    ctx.fillRect(x, y, 1, 1);
  }
  
  return canvas.toDataURL('image/jpeg', 0.8);
}

function getProjectImagePath(project, filename) {
  return `${IMAGE_BASE_PATH}/${project.id}/${filename}`;
}

function getProjectImageSet(project, index) {
  const fallback = createPlaceholderSrc(project, index);
  const imageConfig = project.images || {};
  const detailFiles = Array.isArray(imageConfig.detail) ? imageConfig.detail : [];

  return {
    fallback,
    cover: imageConfig.cover ? getProjectImagePath(project, imageConfig.cover) : fallback,
    detail: detailFiles.length
      ? detailFiles.map((filename) => getProjectImagePath(project, filename))
      : [fallback, fallback, fallback],
  };
}

function createImageFallbackAttr(fallbackSrc) {
  return `this.onerror=null;this.src=${JSON.stringify(fallbackSrc)};`;
}

function getMediaType(filePath) {
  const normalizedPath = filePath.toLowerCase();

  if (normalizedPath.endsWith('.mp4')) return 'video/mp4';
  if (normalizedPath.endsWith('.mov')) return 'video/quicktime';
  return 'image';
}

function renderDetailMedia(filePath, altText, fallbackSrc) {
  const mediaType = getMediaType(filePath);

  if (mediaType === 'image') {
    const detailFallback = createImageFallbackAttr(fallbackSrc);
    return `<img class="zoomable-media" src="${filePath}" alt="${altText}" onerror='${detailFallback}'>`;
  }

  return `
          <video autoplay muted loop playsinline controls preload="metadata">
            <source src="${filePath}" type="${mediaType}">
            Your browser does not support the video tag.
          </video>`;
}

function renderInteractiveEmbed(src, title, options = {}) {
  const {
    extraClass = '',
    scale = 0.68,
    aspectRatio = '16 / 9',
    label = 'LIVE DEMO',
  } = options;
  const className = `process-embed process-embed-scaled${extraClass ? ` ${extraClass}` : ''}`;

  return `
        <div class="process-embed-block">
          <div class="interactive-shell">
            <div class="interactive-shell-head">
              <div class="interactive-shell-meta">
                <span class="interactive-shell-controls" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span class="interactive-pill">${label}</span>
              </div>
              <a class="interactive-open" href="${src}" target="_blank" rel="noopener">Open full experience ↗</a>
            </div>
            <div class="${className}" style="--embed-scale:${scale};--embed-aspect-ratio:${aspectRatio};">
              <iframe
                class="process-embed-frame"
                src="${src}"
                title="${title} interactive preview"
                allow="microphone; autoplay"
              ></iframe>
            </div>
          </div>
          <div class="interactive-note">Interactive</div>
        </div>`;
}

function renderProcessCaptionBlock(content, caption, extraClass = '') {
  return `
        <div class="process-caption-block${extraClass ? ` ${extraClass}` : ''}">
          ${content}
          <div class="process-group-note">${caption}</div>
        </div>`;
}

function renderSubprojectLeadSection(section, project, sectionIndex) {
  return `
      <div class="detail-subproject">
        <div class="detail-subproject-header">
          <div>
            <div class="section-label">Project ${sectionIndex}</div>
            <h2 class="detail-subproject-title">${section.title}</h2>
            <p class="detail-subproject-intro">${section.overview}</p>
          </div>
          <div class="detail-subproject-meta">
            <div class="meta-item">
              <span class="meta-label">Year</span>
              <span class="meta-value">${project.year}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Category</span>
              <span class="meta-value">${project.category}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Tools</span>
              <span class="meta-value">${project.tools}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Designer</span>
              <span class="meta-value">${project.designer || 'Yenny Koh'}</span>
            </div>
          </div>
        </div>
      </div>`;
}

function renderSubprojectPostSection(section) {
  return `
      <div class="detail-section">
        <div class="section-label">Process</div>
        <p class="section-body">${section.process}</p>
      </div>

      <div class="detail-section">
        <div class="section-label">Outcome</div>
        <p class="section-body">${section.outcome}</p>
      </div>`;
}

function teardownEncryptedEntriesBridge() {
  if (typeof encryptedEntriesBridgeCleanup === 'function') {
    encryptedEntriesBridgeCleanup();
    encryptedEntriesBridgeCleanup = null;
  }
}

function setupEncryptedEntriesBridge() {
  teardownEncryptedEntriesBridge();

  if (!detailOverlay) return;

  const frames = Array.from(detailOverlay.querySelectorAll('.process-embed-frame'));
  if (frames.length < 2) return;

  const frameWindows = frames.map((frame) => frame.contentWindow).filter(Boolean);
  if (frameWindows.length < 2) return;

  const onMessage = (event) => {
    const data = event.data;
    if (!data || data.source !== 'portfolio-bridge' || data.type !== 'entry') return;
    if (!frameWindows.includes(event.source)) return;

    const payload = {
      source: 'portfolio-bridge',
      type: 'entry',
      text: data.text || '',
    };

    frameWindows.forEach((frameWindow) => {
      if (frameWindow && frameWindow !== event.source) {
        frameWindow.postMessage(payload, '*');
      }
    });
  };

  window.addEventListener('message', onMessage);
  encryptedEntriesBridgeCleanup = () => window.removeEventListener('message', onMessage);
}

/* ---- Carousel State --------------------------------------- */
const state = {
  currentIndex: 0,
  targetRotation: 0,
  currentRotation: 0,
  velocity: 0,
  isDragging: false,
  dragStart: 0,
  dragDelta: 0,
  isTransitioning: false,
  isDetailOpen: false,
  isInfoOpen: false,
  parallaxX: 0,
  parallaxY: 0,
};

const CARD_COUNT = PROJECTS.length;
const ROTATION_PER_CARD = 360 / CARD_COUNT;  // 60 degrees

/* ---- DOM refs --------------------------------------------- */
let cardsContainer, cards, detailOverlay, activeTitleEl, scrollHint, counterEl, infoOverlay;
let cursorEl;
let encryptedEntriesBridgeCleanup = null;
let activeLightbox = null;

function getCarouselRadius() {
  const radius = getComputedStyle(document.documentElement).getPropertyValue('--carousel-radius').trim();
  return Number.parseFloat(radius) || 800;
}

/* ---- Init ------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  buildCarousel();
  bindEvents();
  initCursor();
  initClock();
  animateLoad();
});

/* ---- Build carousel DOM ----------------------------------- */
function buildCarousel() {
  cardsContainer = document.getElementById('cards-container');
  detailOverlay = document.getElementById('detail-overlay');
  infoOverlay = document.getElementById('info-overlay');
  activeTitleEl = document.getElementById('active-title');
  scrollHint = document.querySelector('.scroll-hint');
  counterEl = document.querySelector('.project-counter');

  PROJECTS.forEach((project, i) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.index = i;
    card.dataset.id = project.id;

    // Position each card around the cylinder (X-axis rotation for vertical cylinder)
    const angle = i * ROTATION_PER_CARD;
    card.style.transform = `rotateY(${angle}deg) translateZ(${getCarouselRadius()}px)`;
    const imageSet = getProjectImageSet(project, i);
    const coverFallback = createImageFallbackAttr(imageSet.fallback);

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-image">
          <img src="${imageSet.cover}" alt="${project.title}" loading="lazy" onerror='${coverFallback}'>
        </div>
        <div class="card-overlay"></div>
      </div>
    `;

    card.addEventListener('click', () => handleCardClick(i));
    cardsContainer.appendChild(card);
  });

  cards = document.querySelectorAll('.project-card');
  syncCarouselGeometry();
  updateCarousel(true);
}

function syncCarouselGeometry() {
  const radius = getCarouselRadius();

  cards?.forEach((card, i) => {
    const angle = i * ROTATION_PER_CARD;
    card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
  });
}

/* ---- Carousel rotation ------------------------------------ */
function rotateTo(index, instant = false) {
  setCarouselIndex(index, instant);
  updateCarousel(instant);
}

function setCarouselIndex(index, instant = false) {
  const normalizedIndex = ((index % CARD_COUNT) + CARD_COUNT) % CARD_COUNT;

  if (instant && state.currentIndex === 0 && state.currentRotation === 0) {
    state.currentIndex = normalizedIndex;
    state.targetRotation = -normalizedIndex * ROTATION_PER_CARD;
    state.currentRotation = state.targetRotation;
    return;
  }

  const forwardSteps = (normalizedIndex - state.currentIndex + CARD_COUNT) % CARD_COUNT;
  const backwardSteps = forwardSteps - CARD_COUNT;
  const stepDelta = Math.abs(forwardSteps) <= Math.abs(backwardSteps) ? forwardSteps : backwardSteps;

  state.currentIndex = normalizedIndex;
  state.targetRotation = state.currentRotation - stepDelta * ROTATION_PER_CARD;
  state.currentRotation = state.targetRotation;
}

function updateCarousel(instant = false) {
  const activeProject = PROJECTS[state.currentIndex];
  const isMobileViewport = window.matchMedia('(max-width: 600px)').matches;
  const displayTitle = isMobileViewport && activeProject?.mobileTitle ? activeProject.mobileTitle : activeProject?.title;

  // Rotate the container
  cardsContainer.style.transition = instant ? 'none' : 'transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  cardsContainer.style.transform = `rotateY(${state.currentRotation}deg)`;

  // Update card classes based on distance from active
  cards.forEach((card, i) => {
    const diff = ((i - state.currentIndex) % CARD_COUNT + CARD_COUNT) % CARD_COUNT;
    const normalized = diff > CARD_COUNT / 2 ? diff - CARD_COUNT : diff;
    const absDiff = Math.abs(normalized);

    card.classList.remove('is-active', 'is-adjacent', 'is-far');
    card.dataset.navLabel = '';
    if (absDiff === 0) {
      card.classList.add('is-active');
      card.style.filter = 'brightness(1) blur(0px)';
    } else if (absDiff === 1) {
      card.classList.add('is-adjacent');
      card.dataset.navLabel = normalized < 0 ? 'PREV' : 'NEXT';
      card.style.filter = 'brightness(0.68) blur(1px)';
    } else {
      card.classList.add('is-far');
      card.style.filter = 'brightness(0.25) blur(2px)';
    }
  });

  if (activeTitleEl && activeProject) {
    activeTitleEl.innerHTML = `
      <span class="title-main">${displayTitle}</span>
      <span class="title-sub">${activeProject.category}</span>
    `;
  }

  // Update counter
  if (counterEl) {
    counterEl.innerHTML = `<span class="current">0${state.currentIndex + 1}</span> / 0${CARD_COUNT}`;
  }
}

/* ---- Smooth scroll inertia ------------------------------- */
let scrollAccum = 0;
let scrollTimer = null;

function onWheel(e) {
  if (state.isDetailOpen || state.isInfoOpen) return;
  e.preventDefault();

  scrollAccum += e.deltaX !== 0 ? e.deltaX : e.deltaY;

  // Clear timer & debounce
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    if (Math.abs(scrollAccum) > 40) {
      const dir = scrollAccum > 0 ? 1 : -1;
      setCarouselIndex(state.currentIndex + dir);
      updateCarousel(false);
      if (scrollHint) scrollHint.classList.add('hidden');
    }
    scrollAccum = 0;
  }, 50);
}

/* ---- Touch / Drag ---------------------------------------- */
let touchStartY = 0;

function onTouchStart(e) {
  touchStartY = e.touches[0].clientY;
}

function onTouchMove(e) {
  if (state.isDetailOpen || state.isInfoOpen) return;
  const delta = touchStartY - e.touches[0].clientY;
  if (Math.abs(delta) > 50) {
    const dir = delta > 0 ? 1 : -1;
    setCarouselIndex(state.currentIndex + dir);
    updateCarousel(false);
    touchStartY = e.touches[0].clientY;
    if (scrollHint) scrollHint.classList.add('hidden');
  }
}

/* ---- Keyboard -------------------------------------------- */
function onKeyDown(e) {
  if (state.isInfoOpen) {
    if (e.key === 'Escape') closeInfo();
    return;
  }

  if (state.isDetailOpen) {
    if (e.key === 'Escape') {
      if (activeLightbox?.root?.classList.contains('open')) {
        closeImageLightbox();
      } else {
        closeDetail();
      }
    }
    if (e.key === 'ArrowRight') navigateDetail(1);
    if (e.key === 'ArrowLeft') navigateDetail(-1);
    return;
  }
  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
    setCarouselIndex(state.currentIndex + 1);
    updateCarousel(false);
  }
  if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
    setCarouselIndex(state.currentIndex - 1);
    updateCarousel(false);
  }
  if (e.key === 'Enter') handleCardClick(state.currentIndex);
}

/* ---- Card click → detail --------------------------------- */
function handleCardClick(index) {
  if (index !== state.currentIndex) {
    // First navigate to that card
    setCarouselIndex(index);
    updateCarousel(false);
    setTimeout(() => openDetail(index), 500);
  } else {
    openDetail(index);
  }
}

/* ---- Detail view ----------------------------------------- */
function openDetail(index) {
  const project = PROJECTS[index];
  state.isDetailOpen = true;
  document.body.style.cursor = 'none';
  if (cursorEl) cursorEl.style.display = 'block';
  teardownEncryptedEntriesBridge();

  // Build detail content
  const prevIndex = ((index - 1) % CARD_COUNT + CARD_COUNT) % CARD_COUNT;
  const nextIndex = (index + 1) % CARD_COUNT;

  const imageSet = getProjectImageSet(project, index);
  const detailImgs = imageSet.detail.length ? imageSet.detail : [imageSet.fallback];
  const detailImageStyles = detailImgs.map((_, detailIndex) => project.detailImageStyles?.[detailIndex] || {});
  const coverFallback = createImageFallbackAttr(imageSet.fallback);
  let chicagoFirstGridMarkup = '';
  let chicagoSecondGridMarkup = '';
  const buildProcessItem = (detailImg, detailIndex, extraClass = '') => {
    const isChicagoSky = project.id === 'chicago-sky';
    const chicagoSkySubtitle = isChicagoSky && detailIndex === 0
      ? 'JAMES WEBB TELESCOPE Infographic'
      : isChicagoSky && detailIndex === 6
        ? 'History of the Kyungbokgung Palace'
        : '';
    const isResonateDetail1FullWidth = project.id === 'resonate' && detailIndex === 0 && !extraClass;
    const isResonateDetail1 = project.id === 'resonate' && detailIndex === 0 && !extraClass;
    const isResonatePrimaryFullWidth = project.id === 'resonate' && detailIndex === 2 && !extraClass;
    const isResonateMidFullWidth = project.id === 'resonate' && detailIndex >= 3 && detailIndex <= 5 && !extraClass;
    const isBookDesignFullWidth = project.id === 'book-design' && (detailIndex === 2 || detailIndex === 3) && !extraClass;
    const isBookDesignVideoFullWidth = project.id === 'book-design' && detailIndex === 4 && !extraClass;
    const isBookDesignDetail6FullWidth = project.id === 'book-design' && detailIndex === 5 && !extraClass;
    const isChicagoSkyFullWidth = project.id === 'chicago-sky' && (detailIndex >= 4 || detailIndex >= 8) && !extraClass;
    const isVisualSystemTailFullWidth = project.id === 'visual-system' && detailIndex >= 4 && !extraClass;
    const isChicagoSkyShrink = project.id === 'chicago-sky' && detailIndex === 1 && !extraClass;
    const isLastOddImage = detailImgs.length % 2 === 1 && detailIndex === detailImgs.length - 1;
    const styleAttr = createDetailImageStyleAttr(detailImageStyles[detailIndex]);
    const fullWidthClass = (isResonateDetail1FullWidth || isResonatePrimaryFullWidth || isResonateMidFullWidth || isBookDesignFullWidth || isBookDesignVideoFullWidth || isBookDesignDetail6FullWidth || isChicagoSkyFullWidth || isVisualSystemTailFullWidth || (isLastOddImage && !extraClass)) ? ' full-width' : '';
    const className = `process-img${fullWidthClass}${isChicagoSky ? ' process-img-chicago' : ''}${isResonateDetail1 ? ' process-img-resonate-transparent' : ''}${isChicagoSkyShrink ? ' process-img-chicago-shrink' : ''}${extraClass ? ` ${extraClass}` : ''}`;

    return `
        <div class="${className}"${styleAttr}>
          ${chicagoSkySubtitle ? `<div class="process-caption">${chicagoSkySubtitle}</div>` : ''}
          ${renderDetailMedia(detailImg, `Process ${detailIndex + 1}`, imageSet.fallback)}
        </div>`;
  };

  const primaryDetailImgs = project.id === 'resonate' ? detailImgs.slice(0, 3) : detailImgs;
  const processItems = project.id === 'resonate'
    ? [
        detailImgs[0] ? buildProcessItem(detailImgs[0], 0) : '',
        detailImgs[2] ? buildProcessItem(detailImgs[2], 2) : '',
      ].filter(Boolean)
    : primaryDetailImgs.map((detailImg, detailIndex) => buildProcessItem(detailImg, detailIndex));

  if (project.id === 'encrypted-entries') {
    processItems.length = 0;
    processItems.unshift(renderInteractiveEmbed('encrypted-entries/a.html', project.title, { scale: 0.68 }));
    processItems.splice(1, 0, renderInteractiveEmbed('encrypted-entries/b.html', project.title, { scale: 0.68 }));
    processItems.push(
      renderProcessCaptionBlock(`
        <div class="process-grid-three">
          ${detailImgs.slice(0, 3).map((detailImg, detailIndex) => buildProcessItem(detailImg, detailIndex)).join('')}
        </div>
        <div class="process-grid-three">
          ${detailImgs.slice(3, 6).map((detailImg, detailIndex) => buildProcessItem(detailImg, detailIndex + 3)).join('')}
        </div>`, 'Concept Posters _ Private Language'),
      renderProcessCaptionBlock(`
        <div class="process-grid-three process-grid-encrypted-78">
          ${detailImgs[6] ? buildProcessItem(detailImgs[6], 6, 'process-img-encrypted-span-1') : ''}
          ${detailImgs[7] ? buildProcessItem(detailImgs[7], 7, 'process-img-encrypted-span-2') : ''}
        </div>`, 'Example Encrypted Letters  (A-Z, 1, 2)'),
      detailImgs[8]
        ? renderProcessCaptionBlock(buildProcessItem(detailImgs[8], 8, 'full-width'), 'Installation View')
        : '',
      renderProcessCaptionBlock(`
        <div class="process-grid-two">
          ${detailImgs.slice(9, 11).map((detailImg, detailIndex) => buildProcessItem(detailImg, detailIndex + 9, 'process-img-encrypted-pair-item')).join('')}
        </div>`, 'Exhibition Takeaway Postcard'),
    );
  }

  if (project.id === 'chicago-sky' && detailImgs.length > 1) {
    const chicagoSections = project.subprojects || [];
    const firstChicagoItems = [
      buildProcessItem(detailImgs[0], 0, 'full-width'),
      buildProcessItem(detailImgs[2], 2, 'full-width'),
      buildProcessItem(detailImgs[4], 4),
      buildProcessItem(detailImgs[5], 5),
    ];
    const secondChicagoItems = [
      buildProcessItem(detailImgs[6], 6, 'full-width'),
      buildProcessItem(detailImgs[8], 8),
      detailImgs[9] ? buildProcessItem(detailImgs[9], 9) : '',
    ];

    chicagoFirstGridMarkup = firstChicagoItems.join('');
    chicagoSecondGridMarkup = secondChicagoItems.join('');
    processItems.length = 0;
  }

  if (project.id === 'resonate' && detailImgs.length > 3) {
    processItems.push(
      buildProcessItem(detailImgs[3], 3),
      buildProcessItem(detailImgs[4], 4),
      buildProcessItem(detailImgs[5], 5),
    );

    if (detailImgs.length > 7) {
      const resonateTailMarkup = detailImgs
        .slice(6, 8)
        .map((detailImg, extraIndex) => buildProcessItem(detailImg, extraIndex + 6, 'process-img-third'))
        .join('');

      processItems.push(`
          <div class="process-grid-two">
            ${resonateTailMarkup}
          </div>`);
    }

    if (detailImgs[8]) {
      processItems.push(buildProcessItem(detailImgs[8], 8));
    }
  }

  if (project.id === 'quiksilver') {
    processItems.length = 0;
    processItems.push(
      renderInteractiveEmbed('https://yenny1203.github.io/quiksilversi1/', project.title, { scale: 0.51 }),
      `
        <div class="process-grid-three">
          ${detailImgs.slice(0, 3).map((detailImg, detailIndex) => buildProcessItem(detailImg, detailIndex)).join('')}
        </div>`,
      detailImgs[3] ? buildProcessItem(detailImgs[3], 3, 'full-width') : '',
      detailImgs[4] ? buildProcessItem(detailImgs[4], 4, 'full-width') : '',
      `
        <div class="process-grid-two">
          ${detailImgs.slice(5, 7).map((detailImg, pairIndex) => buildProcessItem(detailImg, pairIndex + 5, 'process-img-quiksilver-pair')).join('')}
        </div>`,
      `
        <div class="process-grid-two">
          ${detailImgs.slice(7, 9).map((detailImg, pairIndex) => buildProcessItem(detailImg, pairIndex + 7, 'process-img-quiksilver-pair')).join('')}
        </div>`,
      detailImgs[9] ? buildProcessItem(detailImgs[9], 9, 'full-width') : '',
      detailImgs[10] ? buildProcessItem(detailImgs[10], 10, 'full-width') : '',
      detailImgs[11] ? buildProcessItem(detailImgs[11], 11, 'full-width') : '',
    );
  }

  if (project.id === 'resonate') {
    processItems.push(renderInteractiveEmbed('https://yenny1203.github.io/resonate/', project.title, { scale: 0.68 }));
  }

  if (project.id === 'visual-system' && processItems.length > 3) {
    processItems.splice(
      2,
      2,
      `
        <div class="process-grid-two">
          ${detailImgs.slice(2, 4).map((detailImg, pairIndex) => buildProcessItem(detailImg, pairIndex + 2)).join('')}
        </div>`
    );
    processItems.splice(4, 0, renderInteractiveEmbed('https://kohgumaa.neocities.org/information%20and%20system/', project.title, { scale: 0.60 }));
  }

  const processGridMarkup = processItems.join('');
  const isChicagoSkyProject = project.id === 'chicago-sky';
  const chicagoSections = project.subprojects || [];
  const detailBodyMarkup = isChicagoSkyProject
    ? `
      ${chicagoSections[0] ? renderSubprojectLeadSection(chicagoSections[0], project, 1) : ''}

      <div class="process-grid">
        ${chicagoFirstGridMarkup}
      </div>

      ${chicagoSections[0] ? renderSubprojectPostSection(chicagoSections[0]) : ''}

      <div class="project-divider detail-divider" aria-hidden="true"></div>

      ${chicagoSections[1] ? renderSubprojectLeadSection(chicagoSections[1], project, 2) : ''}

      <div class="process-grid">
        ${chicagoSecondGridMarkup}
      </div>

      ${chicagoSections[1] ? renderSubprojectPostSection(chicagoSections[1]) : ''}`
    : `
      <div class="detail-section">
        <div class="section-label">Overview</div>
        <p class="section-body">${project.overview}</p>
      </div>

      <div class="process-grid">
        ${processGridMarkup}
      </div>

      <div class="detail-section">
        <div class="section-label">Process</div>
        <p class="section-body">${project.process}</p>
      </div>

      <div class="detail-section">
        <div class="section-label">Outcome</div>
        <p class="section-body">${project.outcome}</p>
      </div>`;

  detailOverlay.innerHTML = `
    <button class="detail-back" onclick="closeDetail()">
      <svg viewBox="0 0 24 14" stroke-width="1.5">
        <path d="M23 7H1M7 1L1 7l6 6"/>
      </svg>
      All Projects
    </button>

      <div class="detail-content">
      ${project.id === 'encrypted-entries'
        ? `<div class="detail-hero"><img class="zoomable-media" src="${imageSet.cover}" alt="${project.title}" onerror='${coverFallback}'></div>`
        : project.id === 'chicago-sky'
          ? `<div class="detail-hero detail-hero-chicago-sky"><img class="zoomable-media" src="${imageSet.cover}" alt="${project.title}" onerror='${coverFallback}'></div>`
        : `<div class="detail-hero"><img class="zoomable-media" src="${imageSet.cover}" alt="${project.title}" onerror='${coverFallback}'></div>`
      }

      <div class="detail-header">
        <div>
          <div class="detail-eyebrow">${project.category}</div>
          <h1 class="detail-title">${project.title}</h1>
          <p class="detail-intro">${project.intro}</p>
        </div>
        <div class="detail-meta${isChicagoSkyProject ? ' detail-meta-hidden' : ''}">
          <div class="meta-item">
            <span class="meta-label">Year</span>
            <span class="meta-value">${project.year}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Category</span>
            <span class="meta-value">${project.category}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Tools</span>
            <span class="meta-value">${project.tools}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Designer</span>
            <span class="meta-value">${project.designer || 'Yenny Koh'}</span>
          </div>
        </div>
      </div>

      ${detailBodyMarkup}

      <div class="detail-nav">
        <button class="detail-nav-btn prev" onclick="navigateDetail(-1)">
          <svg viewBox="0 0 24 14" stroke-width="1.5">
            <path d="M23 7H1M7 1L1 7l6 6"/>
          </svg>
          <div>
            <span style="display:block; font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color: var(--text-muted); margin-bottom:4px;">Previous</span>
            <span class="detail-nav-title">${PROJECTS[prevIndex].title}</span>
          </div>
        </button>
        <button class="detail-nav-btn next" onclick="navigateDetail(1)">
          <div>
            <span style="display:block; font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color: var(--text-muted); margin-bottom:4px; text-align:right;">Next</span>
            <span class="detail-nav-title">${PROJECTS[nextIndex].title}</span>
          </div>
          <svg viewBox="0 0 24 14" stroke-width="1.5">
            <path d="M1 7h22M17 1l6 6-6 6"/>
          </svg>
        </button>
      </div>

      <div class="image-lightbox" aria-hidden="true">
        <button class="image-lightbox-close" type="button" aria-label="Close expanded image" onclick="closeImageLightbox()">×</button>
        <div class="image-lightbox-stage">
          <img class="image-lightbox-media" alt="">
        </div>
      </div>
    </div>
  `;

  bindDetailImageZoom();

  // Trigger open animation
  requestAnimationFrame(() => {
    detailOverlay.classList.add('open');
    detailOverlay.scrollTop = 0;

    if (project.id === 'encrypted-entries') {
      setupEncryptedEntriesBridge();
      if (typeof initEncryptedSketch === 'function') {
        setTimeout(() => initEncryptedSketch(), 400);
      }
    }
  });
}

function closeDetail() {
  closeImageLightbox();
  teardownEncryptedEntriesBridge();
  detailOverlay.classList.remove('open');
  state.isDetailOpen = false;
  document.body.style.cursor = 'none';
  if (cursorEl) cursorEl.style.display = 'block';

  if (typeof destroyEncryptedSketch === 'function') {
    destroyEncryptedSketch();
  }

  setTimeout(() => {
    detailOverlay.innerHTML = '';
    activeLightbox = null;
  }, 700);
}

function navigateDetail(dir) {
  closeImageLightbox();
  const newIndex = ((state.currentIndex + dir) % CARD_COUNT + CARD_COUNT) % CARD_COUNT;
  setCarouselIndex(newIndex, true);
  updateCarousel(true);
  teardownEncryptedEntriesBridge();

  detailOverlay.classList.remove('open');
  setTimeout(() => openDetail(newIndex), 400);
}

function bindDetailImageZoom() {
  if (!detailOverlay) return;

  const lightboxRoot = detailOverlay.querySelector('.image-lightbox');
  const lightboxMedia = lightboxRoot?.querySelector('.image-lightbox-media');
  if (!lightboxRoot || !lightboxMedia) return;

  activeLightbox = { root: lightboxRoot, media: lightboxMedia };

  detailOverlay.querySelectorAll('.zoomable-media').forEach((img) => {
    img.addEventListener('click', () => openImageLightbox(img.currentSrc || img.src, img.alt || 'Expanded project image'));
  });

  lightboxRoot.addEventListener('click', (event) => {
    if (event.target === lightboxRoot) {
      closeImageLightbox();
    }
  });
}

function openImageLightbox(src, alt) {
  if (!activeLightbox) return;

  activeLightbox.media.src = src;
  activeLightbox.media.alt = alt;
  activeLightbox.root.classList.add('open');
  activeLightbox.root.setAttribute('aria-hidden', 'false');
  if (cursorEl) {
    cursorEl.classList.remove('zoom');
    cursorEl.classList.remove('hovered');
  }
}

function closeImageLightbox() {
  if (!activeLightbox) return;

  activeLightbox.root.classList.remove('open');
  activeLightbox.root.setAttribute('aria-hidden', 'true');
  activeLightbox.media.src = '';
  activeLightbox.media.alt = '';
}

function openInfo() {
  if (!infoOverlay) return;
  state.isInfoOpen = true;
  infoOverlay.classList.add('open');
  document.body.style.cursor = 'none';
  if (cursorEl) cursorEl.style.display = 'block';
}

function closeInfo() {
  if (!infoOverlay) return;
  state.isInfoOpen = false;
  infoOverlay.classList.remove('open');
}

/* ---- Custom cursor --------------------------------------- */
function initCursor() {
  cursorEl = document.getElementById('cursor');
  document.addEventListener('mousemove', (e) => {
    cursorEl.style.left = e.clientX + 'px';
    cursorEl.style.top = e.clientY + 'px';

    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    state.parallaxX = x;
    state.parallaxY = y;
    document.documentElement.style.setProperty('--parallax-x', x.toFixed(4));
    document.documentElement.style.setProperty('--parallax-y', y.toFixed(4));
    updateCursorState(e.target);
  });

  document.addEventListener('mousedown', () => cursorEl.classList.add('clicking'));
  document.addEventListener('mouseup', () => cursorEl.classList.remove('clicking'));
}

function updateCursorState(target) {
  if (!cursorEl) return;

  const lightboxOpen = activeLightbox?.root?.classList.contains('open');
  const isZoomTarget = target?.closest?.('.zoomable-media');
  const isInteractive = target?.closest?.('a, button, .project-card, .detail-nav-btn, .detail-back, .info-close');

  cursorEl.classList.toggle('zoom', Boolean(isZoomTarget) && !lightboxOpen);
  cursorEl.classList.toggle('hovered', !isZoomTarget && Boolean(isInteractive) && !lightboxOpen);
}

/* ---- Clock ----------------------------------------------- */
function initClock() {
  const clockEl = document.getElementById('clock');
  if (!clockEl) return;
  function tick() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    clockEl.textContent = `${h}:${m}`;
  }
  tick();
  setInterval(tick, 10000);
}

/* ---- Loading animation ------------------------------------ */
function animateLoad() {
  const loadingEl = document.getElementById('loading');
  const bar = loadingEl?.querySelector('.loading-bar');

  if (!loadingEl) return;

  setTimeout(() => {
    if (bar) bar.style.width = '100%';
  }, 100);

  setTimeout(() => {
    loadingEl.classList.add('done');
    setTimeout(() => loadingEl.remove(), 900);
  }, 1400);
}

/* ---- Events ---------------------------------------------- */
function bindEvents() {
  window.addEventListener('wheel', onWheel, { passive: false });
  window.addEventListener('touchstart', onTouchStart, { passive: true });
  window.addEventListener('touchmove', onTouchMove, { passive: true });
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('resize', syncCarouselGeometry);
  window.addEventListener('mouseleave', () => {
    document.documentElement.style.setProperty('--parallax-x', '0');
    document.documentElement.style.setProperty('--parallax-y', '0');
  });

  document.getElementById('info-trigger')?.addEventListener('click', openInfo);
  infoOverlay?.addEventListener('click', (e) => {
    if (e.target === infoOverlay) closeInfo();
  });
}
