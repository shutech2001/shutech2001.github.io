(() => {
  const header = `
    <header>
      <div class="container topbar">
        <div class="brand">
          <div class="title" data-i18n="site.title">Personal Research Page</div>
        </div>
        <nav>
          <a href="index.html" data-nav="home" data-i18n="nav.home">Home</a>
          <a href="about.html" data-nav="about" data-i18n="nav.about">About</a>
          <a href="cv.html" data-nav="cv" data-i18n="nav.cv">Academic CV</a>
          <a href="research.html" data-nav="research" data-i18n="nav.research">Research</a>
          <button class="lang-toggle" type="button" data-lang-toggle>日本語</button>
        </nav>
      </div>
    </header>
  `;

  const footer = `
    <footer>
      <div class="container">
        <div class="section-title" data-i18n="footer.label">Quick Links</div>
        <div class="link-row">
          <a
            class="button"
            href="https://scholar.google.com/citations?user=vHSV_pAAAAAJ&hl=ja"
            target="_blank"
            rel="noopener"
          >
            Google Scholar
          </a>
          <a class="button" href="https://x.com/01stamano" target="_blank" rel="noopener">X</a>
          <a class="button" href="https://github.com/shutech2001" target="_blank" rel="noopener">
            GitHub
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
})();
