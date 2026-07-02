(() => {
  const translations = {
    en: {
      "site.title": "Shu Tamano",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.cv": "Academic C.V.",
      "nav.research": "Research",
      "menu.open": "Open menu",
      "menu.close": "Close menu",
      "nav.links": "Links",
      "home.tag": "Ph.D. candidate · Researcher",
      "home.lastUpdated": "Last Updated",
      "home.profileTitle": "Profile",
      "home.contactLead": "Please feel free to contact me:",
      "label.name": "Name",
      "label.position": "Position",
      "label.affiliation": "Affiliation",
      "label.email": "Email",
      "email.note": "Replace [at] with @",
      "value.name": "Shu Tamano",
      "value.position": "Ph.D. candidate, Researcher",
      "value.position1": "Ph.D. candidate",
      "value.position2": "Researcher",
      "value.affiliation1": "The University of Tokyo",
      "value.affiliation2": "National Institute of Infectious Diseases, Japan Institute for Health Security",
      "value.email": "tamano-shu212 [at] g.ecc.u-tokyo.ac.jp, tamano.s [at] jihs.go.jp",
      "value.email1": "tamano-shu212 [at] g.ecc.u-tokyo.ac.jp",
      "value.email2": "tamano.s [at] jihs.go.jp",
      "about.title": "Research Interests",
      "about.interest1": "Statistical causal inference",
      "about.interest1Desc": "Under statistical constraints, I study counterfactual structures and quantify how challenges arising in applied settings affect intervention effects. I am also interested in connections between statistical causal inference and mathematical concepts such as algebra and geometry.",
      "about.interest2": "Statistical machine learning",
      "about.interest2Desc": "I am interested in the theory of statistical models for data with complex structures, such as high-dimensional data and network dependence. In particular, I am interested in theoretically and quantitatively analyzing how model structures and regularization affect estimation, statistical inference, and predictive uncertainty.",
      "about.interest3": "Deep learning theory",
      "about.interest3Desc": "I study the generalization performance and learning dynamics of deep learning models mathematically. In particular, I am interested in what kinds of mathematical and physical structures these models and their learning methods can be understood to correspond to.",
      "about.applicationLead": "I am interested in applications in...",
      "about.application1": "Biostatistics",
      "about.application1Desc": "I conduct effect estimation and uncertainty quantification for clinical and observational studies.",
      "about.application2": "Epidemiology",
      "about.application2Desc": "I study infectious disease transmission, intervention effect estimation, and sensitivity analysis.",
      "about.application3": "Econometrics",
      "about.application3Desc": "I develop statistical methodology for optimal policy learning and decision support.",
      "about.bioTitle": "Biography",
      "about.bioText": "Short bio placeholder. Summarize your background, current work, and goals in 3–5 lines.",
      "cv.title": "Academic C.V.",
      "cv.period": "Period",
      "cv.details": "Details",
      "cv.notes": "Notes",
      "cv.education": "Education",
      "cv.jobs": "Job Experience",
      "cv.awards": "Awards",
      "cv.grants": "Grants & Funding",
      "cv.label.organization": "Organization",
      "cv.label.presentation": "Presentation",
      "cv.label.copresenter": "Co-presenter",
      "cv.label.role": "Role",
      "cv.label.paper": "Paper",
      "cv.label.agency": "Agency",
      "cv.label.program": "Program",
      "cv.label.category": "Category",
      "research.title": "Papers (Selected)",
      "research.note": "",
      "research.conferenceTitle": "Conferences (Selected)",
      "research.conferenceNote": "",
      "research.citation": "Citation",
      "research.bibtex": "BibTeX",
      "research.github": "GitHub Repo",
      "research.links": "Links",
      "research.doi": "DOI",
      "research.arxiv": "arXiv",
      "research.equalContribution": "<sup>&dagger;</sup> Equal contribution.",
      "tag.lead": "Lead Author",
      "tag.corresponding": "Corresponding Author",
      "tag.last": "Last Author",
      "tag.peer": "Peer-reviewed",
      "tag.leadPresenter": "Lead Presenter",
      "tag.coPresenter": "Co-presenter",
      "tag.oral": "Oral",
      "tag.poster": "Poster",
      "tag.invited": "Invited Talk",
      "filter.all": "All",
      "filter.lead": "Lead Author",
      "filter.corresponding": "Corresponding Author",
      "filter.last": "Last Author",
      "filter.peer": "Peer-reviewed",
      "filter.leadPresenter": "Lead Presenter",
      "filter.coPresenter": "Co-presenter",
      "filter.oral": "Oral",
      "filter.poster": "Poster",
      "filter.invited": "Invited Talk",
      "conf.society": "Society",
      "conf.city": "City",
      "conf.country": "Country",
      "conf.presenters": "Presenters",
      "conf.date": "Date",
      "conf.organization": "Organizer",
      "conf.seminar": "Seminar",
      "research.otherSeminars": "Other Seminars",
      "research.otherSeminarsNote": "",
      "footer.label": "Quick Links",
      "footer.note": ""
    },
    ja: {
      "site.title": "Shu Tamano",
      "nav.home": "ホーム",
      "nav.about": "概要",
      "nav.cv": "C.V.",
      "nav.research": "研究",
      "menu.open": "メニューを開く",
      "menu.close": "メニューを閉じる",
      "nav.links": "リンク",
      "home.tag": "博士後期課程・研究員",
      "home.lastUpdated": "最終更新日",
      "home.profileTitle": "プロフィール",
      "home.contactLead": "気軽にご連絡ください：",
      "label.name": "名前",
      "label.position": "身分",
      "label.affiliation": "所属",
      "label.email": "メール",
      "email.note": "[at] を @ に置き換えてください",
      "value.name": "玉野 史結",
      "value.position": "Ph.D. candidate, Researcher",
      "value.position1": "博士後期課程",
      "value.position2": "研究員",
      "value.affiliation1": "東京大学",
      "value.affiliation2": "国立健康危機管理研究機構 国立感染症研究所",
      "value.email": "tamano-shu212 [at] g.ecc.u-tokyo.ac.jp, tamano.s [at] jihs.go.jp",
      "value.email1": "tamano-shu212 [at] g.ecc.u-tokyo.ac.jp",
      "value.email2": "tamano.s [at] jihs.go.jp",
      "about.title": "研究関心",
      "about.interest1": "統計的因果推論",
      "about.interest1Desc": "統計的制約の下で，反事実構造を扱い，各応用場面で生じる課題に対して介入効果への影響を定量化します．また，統計的因果推論と代数・幾何などの数学的概念との接続に興味があります．",
      "about.interest2": "統計的機械学習",
      "about.interest2Desc": "高次元データやネットワーク依存性など，複雑な構造を有するデータに対する統計モデルの理論に関心があります．とくに，モデル構造や正則化が推定・統計的推論および予測不確実性に与える影響を．理論的・定量的に解析することに興味があります．",
      "about.interest3": "深層学習理論",
      "about.interest3Desc": "深層学習モデルにおける汎化性能や学習ダイナミクスを数理的に考えます．特に，これらのモデルやその学習方法が，どのような数理構造・物理構造と対応すると考えることができるのかについて興味があります．",
      "about.applicationLead": "応用研究領域",
      "about.application1": "生物統計",
      "about.application1Desc": "臨床研究や観察研究に対して，効果推定や不確実性評価を行います．",
      "about.application2": "疫学",
      "about.application2Desc": "特に感染症における感染伝播，介入効果推定，感度分析を行います．",
      "about.application3": "計量経済",
      "about.application3Desc": "最適な方策学習や，政策決定支援のための統計的方法論を構築します．",
      "about.bioTitle": "Biography",
      "about.bioText": "現在の研究テーマ、これまでの経歴、今後の目標などを3〜5行で簡潔に記載してください。",
      "cv.title": "学術C.V.",
      "cv.period": "期間",
      "cv.details": "内容",
      "cv.notes": "備考",
      "cv.education": "学歴",
      "cv.jobs": "職歴",
      "cv.awards": "受賞",
      "cv.grants": "研究費・助成金",
      "cv.label.organization": "主催",
      "cv.label.presentation": "発表",
      "cv.label.copresenter": "共同演者",
      "cv.label.role": "役割",
      "cv.label.paper": "論文",
      "cv.label.agency": "助成元",
      "cv.label.program": "プログラム",
      "cv.label.category": "区分",
      "research.title": "主要論文",
      "research.note": "",
      "research.conferenceTitle": "学会・会議（抜粋）",
      "research.conferenceNote": "",
      "research.citation": "引用",
      "research.bibtex": "BibTeX",
      "research.github": "GitHub",
      "research.links": "リンク",
      "research.doi": "DOI",
      "research.arxiv": "arXiv",
      "research.equalContribution": "<sup>&dagger;</sup> Equal contribution.",
      "tag.lead": "筆頭著者",
      "tag.corresponding": "責任著者",
      "tag.last": "最終著者",
      "tag.peer": "査読あり",
      "tag.leadPresenter": "筆頭演者",
      "tag.coPresenter": "共同演者",
      "tag.oral": "口頭",
      "tag.poster": "ポスター",
      "tag.invited": "招待講演",
      "filter.all": "すべて",
      "filter.lead": "筆頭著者",
      "filter.corresponding": "責任著者",
      "filter.last": "最終著者",
      "filter.peer": "査読あり",
      "filter.leadPresenter": "筆頭演者",
      "filter.coPresenter": "共同演者",
      "filter.oral": "口頭",
      "filter.poster": "ポスター",
      "filter.invited": "招待講演",
      "conf.society": "学会名",
      "conf.city": "開催地",
      "conf.country": "開催国",
      "conf.presenters": "演者",
      "conf.date": "年月",
      "conf.organization": "主催",
      "conf.seminar": "セミナー名",
      "research.otherSeminars": "その他セミナー等",
      "research.otherSeminarsNote": "",
      "footer.label": "クイックリンク",
      "footer.note": ""
    }
  };

  const supported = ["en", "ja"];
  const defaultLang = "en";
  const supportedThemes = ["light", "dark"];
  const defaultTheme = "light";
  const textTargets = Array.from(document.querySelectorAll("[data-i18n]")).map((element) => ({
    element,
    key: element.dataset.i18n,
    labelElement: null
  }));
  const textTargetByElement = new Map(textTargets.map((target) => [target.element, target]));
  const htmlTargets = Array.from(document.querySelectorAll("[data-i18n-html]")).map((element) => ({
    element,
    key: element.dataset.i18nHtml
  }));
  const langToggles = Array.from(document.querySelectorAll("[data-lang-toggle]"));
  const themeToggles = Array.from(document.querySelectorAll("[data-theme-toggle]"));
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const bibtexActionLinks = Array.from(document.querySelectorAll('a[data-i18n="research.bibtex"]'));
  const githubActionLinks = Array.from(document.querySelectorAll('a[data-i18n="research.github"]'));
  const arxivLinks = Array.from(document.querySelectorAll('.paper .links a[href*="arxiv.org"]'));
  const doiLinks = Array.from(document.querySelectorAll('.paper .links a[href*="doi.org"]'));
  const conceptPanels = Array.from(document.querySelectorAll(".concept-panel"));
  const collapsibleSections = Array.from(document.querySelectorAll("[data-collapsible]"));

  const getInitialLang = () => {
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    if (supported.includes(urlLang)) {
      return urlLang;
    }
    const stored = window.localStorage.getItem("lang");
    if (supported.includes(stored)) {
      return stored;
    }
    return defaultLang;
  };

  const setTranslatedText = (target, value) => {
    const node = target.labelElement || target.element;
    if (node.textContent !== value) {
      node.textContent = value;
    }
  };

  const applyTranslations = (lang) => {
    const dict = translations[lang] || translations[defaultLang];
    textTargets.forEach((target) => {
      const value = dict[target.key];
      if (value !== undefined) {
        setTranslatedText(target, value);
      }
    });
    htmlTargets.forEach((target) => {
      const value = dict[target.key];
      if (value !== undefined && target.element.innerHTML !== value) {
        target.element.innerHTML = value;
      }
    });
  };

  const ensureDecoratedActionLink = (link, buttonClass, iconMarkup) => {
    const target = textTargetByElement.get(link);
    if (!target) {
      return;
    }

    link.classList.add("button-with-icon", buttonClass);
    if (target.labelElement) {
      return;
    }

    const label = link.textContent.trim();
    link.innerHTML = `${iconMarkup}<span class="button-label">${label}</span>`;
    target.labelElement = link.querySelector(".button-label");
  };

  const decorateResearchActionLinks = () => {
    const bibtexIcon =
      '<svg class="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 4h8l4 4v12H6z"></path><path d="M14 4v4h4"></path><path d="M9 12h6"></path><path d="M9 16h6"></path></svg>';
    const githubIcon =
      '<svg class="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.3 6.4-1.5 6.4-7A5.5 5.5 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5 5 0 0 0 5 4.8 5.5 5.5 0 0 0 3.5 8.5c0 5.4 3.3 6.6 6.4 7A3.4 3.4 0 0 0 9 18.1V22"></path></svg>';

    bibtexActionLinks.forEach((link) => {
      ensureDecoratedActionLink(link, "bibtex-button", bibtexIcon);
    });

    githubActionLinks.forEach((link) => {
      ensureDecoratedActionLink(link, "github-button", githubIcon);
    });

    const decorateInlineResearchLinks = (links, brandClass) => {
      links.forEach((link) => {
        link.classList.add("inline-brand-link", brandClass);
      });
    };

    decorateInlineResearchLinks(arxivLinks, "brand-arxiv");
    decorateInlineResearchLinks(doiLinks, "brand-doi");
  };

  const setupConceptPanelVisibility = () => {
    if (!conceptPanels.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      conceptPanels.forEach((panel) => {
        panel.classList.add("is-in-view");
      });
      return;
    }

    const viewportMargin = 160;
    const setPanelVisibility = (panel, visible) => {
      panel.classList.toggle("is-in-view", visible);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setPanelVisibility(entry.target, entry.isIntersecting || entry.intersectionRatio > 0);
        });
      },
      { rootMargin: `${viewportMargin}px 0px` }
    );

    conceptPanels.forEach((panel) => {
      const rect = panel.getBoundingClientRect();
      const initiallyVisible =
        rect.bottom >= -viewportMargin && rect.top <= window.innerHeight + viewportMargin;
      setPanelVisibility(panel, initiallyVisible);
      observer.observe(panel);
    });
  };

  const getCollapsibleTitle = (section) => {
    return section.querySelector(".collapsible-header .section-title")?.textContent.trim() || "section";
  };

  const getCollapsibleToggleLabel = (section, expanded) => {
    const lang = document.documentElement.lang === "ja" ? "ja" : "en";
    const title = getCollapsibleTitle(section);
    if (lang === "ja") {
      return expanded ? `${title}を閉じる` : `${title}を開く`;
    }
    return expanded ? `Collapse ${title}` : `Expand ${title}`;
  };

  const updateCollapsibleToggleLabel = (section) => {
    const button = section.querySelector("[data-collapsible-toggle]");
    if (!button) {
      return;
    }
    const expanded = button.getAttribute("aria-expanded") === "true";
    const label = getCollapsibleToggleLabel(section, expanded);
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
  };

  const updateCollapsibleToggleLabels = () => {
    collapsibleSections.forEach(updateCollapsibleToggleLabel);
  };

  const setCollapsibleState = (section, expanded) => {
    const button = section.querySelector("[data-collapsible-toggle]");
    const content = section.querySelector("[data-collapsible-content]");
    if (!button || !content) {
      return;
    }
    content.hidden = !expanded;
    button.setAttribute("aria-expanded", String(expanded));
    section.classList.toggle("is-expanded", expanded);
    section.classList.toggle("is-collapsed", !expanded);
    updateCollapsibleToggleLabel(section);
  };

  const setupCollapsibleSections = () => {
    if (!collapsibleSections.length) {
      return;
    }

    collapsibleSections.forEach((section) => {
      const button = section.querySelector("[data-collapsible-toggle]");
      const content = section.querySelector("[data-collapsible-content]");
      if (!button || !content) {
        return;
      }

      setCollapsibleState(section, section.hasAttribute("data-collapsible-open"));
      button.addEventListener("click", () => {
        const expanded = button.getAttribute("aria-expanded") === "true";
        setCollapsibleState(section, !expanded);
      });
    });
  };

  const getInitialTheme = () => {
    const stored = window.localStorage.getItem("theme");
    if (supportedThemes.includes(stored)) {
      return stored;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return defaultTheme;
  };

  const getThemeToggleLabel = (lang, theme) => {
    if (theme === "dark") {
      return lang === "ja" ? "ライトモードに切り替え" : "Switch to light mode";
    }
    return lang === "ja" ? "ダークモードに切り替え" : "Switch to dark mode";
  };

  const getMenuToggleLabel = (lang, isOpen) => {
    return isOpen
      ? (translations[lang] || translations[defaultLang])["menu.close"]
      : (translations[lang] || translations[defaultLang])["menu.open"];
  };

  const updateMenuToggleLabel = () => {
    if (!menuToggle) {
      return;
    }
    const lang = document.documentElement.lang === "ja" ? "ja" : "en";
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    const label = getMenuToggleLabel(lang, isOpen);
    menuToggle.setAttribute("aria-label", label);
    menuToggle.setAttribute("title", label);
  };

  const updateThemeToggleLabel = () => {
    if (!themeToggles.length) {
      return;
    }
    const lang = document.documentElement.lang === "ja" ? "ja" : "en";
    const theme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const label = getThemeToggleLabel(lang, theme);
    themeToggles.forEach((toggle) => {
      toggle.setAttribute("aria-label", label);
      toggle.setAttribute("title", label);
    });
  };

  const setTheme = (theme, options = {}) => {
    const normalized = supportedThemes.includes(theme) ? theme : defaultTheme;
    const persist = options.persist !== false;
    document.documentElement.dataset.theme = normalized;
    if (persist) {
      window.localStorage.setItem("theme", normalized);
    }
    updateThemeToggleLabel();
  };

  const setLang = (lang) => {
    const normalized = supported.includes(lang) ? lang : defaultLang;
    document.documentElement.lang = normalized;
    document.documentElement.dataset.lang = normalized;
    window.localStorage.setItem("lang", normalized);
    applyTranslations(normalized);

    langToggles.forEach((toggle) => {
      toggle.textContent = normalized === "en" ? "日本語" : "English";
      toggle.setAttribute(
        "aria-label",
        normalized === "en" ? "Switch to Japanese" : "Switch to English"
      );
    });
    updateThemeToggleLabel();
    updateMenuToggleLabel();
    updateCollapsibleToggleLabels();
    decorateResearchActionLinks();
  };

  const initialTheme = getInitialTheme();
  setTheme(initialTheme, { persist: false });

  setupConceptPanelVisibility();
  setupCollapsibleSections();
  const initial = getInitialLang();
  setLang(initial);

  langToggles.forEach((button) => {
    button.addEventListener("click", () => {
      const next = document.documentElement.lang === "en" ? "ja" : "en";
      setLang(next);
    });
  });

  themeToggles.forEach((button) => {
    button.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      setTheme(next);
    });
  });

  window.addEventListener("site-menu-toggle", () => {
    updateMenuToggleLabel();
  });
})();
