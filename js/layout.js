(() => {
  const header = `
    <header class="floating-menu" data-menu-root>
      <button
        class="menu-fab"
        type="button"
        data-menu-toggle
        aria-expanded="false"
        aria-controls="site-menu-panel"
        aria-label="Open menu"
        title="Open menu"
      >
        <span class="menu-line"></span>
        <span class="menu-line"></span>
        <span class="menu-line"></span>
      </button>
      <div class="menu-panel" id="site-menu-panel" data-menu-panel>
        <div class="brand">
          <div class="title" data-i18n="site.title">Personal Research Page</div>
        </div>
        <nav>
          <a href="index.html" data-nav="home" data-i18n="nav.home">Home</a>
          <a href="about.html" data-nav="about" data-i18n="nav.about">About</a>
          <a href="cv.html" data-nav="cv" data-i18n="nav.cv">Academic CV</a>
          <a href="research.html" data-nav="research" data-i18n="nav.research">Research</a>
        </nav>
        <div class="menu-actions">
          <button
            class="theme-toggle"
            type="button"
            data-theme-toggle
            aria-label="Switch to dark mode"
            title="Switch to dark mode"
          >
            <svg
              class="theme-icon moon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"></path>
            </svg>
            <svg
              class="theme-icon sun"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="M4.93 4.93l1.41 1.41"></path>
              <path d="M17.66 17.66l1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="M4.93 19.07l1.41-1.41"></path>
              <path d="M17.66 6.34l1.41-1.41"></path>
            </svg>
          </button>
          <button class="lang-toggle" type="button" data-lang-toggle>日本語</button>
        </div>
      </div>
    </header>
  `;

  const footer = `
    <footer>
      <div class="container">
        <div class="section-title" data-i18n="footer.label">Quick Links</div>
        <div class="link-row">
          <a
            class="icon-link"
            data-brand="scholar"
            href="https://scholar.google.com/citations?user=vHSV_pAAAAAJ&hl=ja"
            target="_blank"
            rel="noopener"
            aria-label="Google Scholar"
            title="Google Scholar"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M12 3L2 8l10 5 10-5-10-5z" />
              <path d="M6 10.5V15c0 2.2 2.69 4 6 4s6-1.8 6-4v-4.5" />
              <path d="M18 18.5V11" />
            </svg>
            <span class="sr-only">Google Scholar</span>
          </a>
          <a
            class="icon-link"
            data-brand="x"
            href="https://x.com/01stamano"
            target="_blank"
            rel="noopener"
            aria-label="X"
            title="X"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M4 4l11.7 16H20L8.3 4z" />
              <path d="M4 20l6.8-6.8M13.3 10.7 20 4" />
            </svg>
            <span class="sr-only">X</span>
          </a>
          <a
            class="icon-link"
            data-brand="github"
            href="https://github.com/shutech2001"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.3 6.4-1.5 6.4-7A5.5 5.5 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5 5 0 0 0 5 4.8 5.5 5.5 0 0 0 3.5 8.5c0 5.4 3.3 6.6 6.4 7A3.4 3.4 0 0 0 9 18.1V22"
              />
            </svg>
            <span class="sr-only">GitHub</span>
          </a>
          <a
            class="button"
            href="https://arxiv.org/search/?searchtype=author&query=Shu%20Tamano"
            target="_blank"
            rel="noopener"
          >
            arXiv Papers
          </a>
        </div>
      </div>
    </footer>
  `;

  const headerMount = document.getElementById("site-header");
  if (headerMount) {
    headerMount.innerHTML = header.trim();
  }

  const footerMount = document.getElementById("site-footer");
  if (footerMount) {
    footerMount.innerHTML = footer.trim();
  }

  const page = document.body.dataset.page;
  if (page) {
    document.querySelectorAll("[data-nav]").forEach((link) => {
      if (link.dataset.nav === page) {
        link.classList.add("active");
      }
    });
  }

  const menuRoot = document.querySelector("[data-menu-root]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const setMenuOpen = (isOpen) => {
    if (!menuRoot || !menuToggle) {
      return;
    }
    menuRoot.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.documentElement.dataset.menuOpen = isOpen ? "true" : "false";
    window.dispatchEvent(new CustomEvent("site-menu-toggle", { detail: { open: isOpen } }));
  };

  setMenuOpen(false);

  if (menuRoot && menuToggle) {
    menuToggle.addEventListener("click", () => {
      const next = menuToggle.getAttribute("aria-expanded") !== "true";
      setMenuOpen(next);
    });

    document.addEventListener("click", (event) => {
      if (menuToggle.getAttribute("aria-expanded") !== "true") {
        return;
      }
      if (!menuRoot.contains(event.target)) {
        setMenuOpen(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    });

    menuRoot.querySelectorAll("[data-nav]").forEach((link) => {
      link.addEventListener("click", () => {
        setMenuOpen(false);
      });
    });
  }
})();
