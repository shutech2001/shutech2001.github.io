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
      "home.profileTitle": "Profile",
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
      "about.interest1": "Causal inference",
      "about.interest1Desc": "I study intervention and policy effects under counterfactual structure, interference, and uncertainty.",
      "about.interest2": "Statistical machine learning",
      "about.interest2Desc": "I study structure, regularization, and predictive uncertainty in high-dimensional data.",
      "about.interest3": "Deep learning theory",
      "about.interest3Desc": "I study the generalization performance, optimization structure, and learning dynamics of deep learning models from mathematical and geometric perspectives.",
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
      "research.title": "Selected Papers",
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
      "home.profileTitle": "プロフィール",
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
      "about.interest1": "因果推論",
      "about.interest1Desc": "反事実構造，干渉，不確実性の下での介入効果・政策効果を扱います．",
      "about.interest2": "統計的機械学習",
      "about.interest2Desc": "高次元データにおける，構造・正則化・予測不確実性を考えます．",
      "about.interest3": "深層学習理論",
      "about.interest3Desc": "深層学習モデルにおける汎化性能や最適化構造や学習ダイナミクスを数理的・幾何学的に考えます．",
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

  const applyTranslations = (lang) => {
    const dict = translations[lang] || translations[defaultLang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const value = dict[key];
      if (value) {
        el.textContent = value;
      }
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.dataset.i18nHtml;
      const value = dict[key];
      if (value) {
        el.innerHTML = value;
      }
    });
  };

  const decorateResearchActionLinks = () => {
    const bibtexIcon =
      '<svg class="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 4h8l4 4v12H6z"></path><path d="M14 4v4h4"></path><path d="M9 12h6"></path><path d="M9 16h6"></path></svg>';
    const githubIcon =
      '<svg class="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.3 6.4-1.5 6.4-7A5.5 5.5 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5 5 0 0 0 5 4.8 5.5 5.5 0 0 0 3.5 8.5c0 5.4 3.3 6.6 6.4 7A3.4 3.4 0 0 0 9 18.1V22"></path></svg>';

    document.querySelectorAll('a[data-i18n="research.bibtex"]').forEach((link) => {
      const label = link.textContent.trim();
      link.classList.add("button-with-icon", "bibtex-button");
      link.innerHTML = `${bibtexIcon}<span class="button-label">${label}</span>`;
    });

    document.querySelectorAll('a[data-i18n="research.github"]').forEach((link) => {
      const label = link.textContent.trim();
      link.classList.add("button-with-icon", "github-button");
      link.innerHTML = `${githubIcon}<span class="button-label">${label}</span>`;
    });

    const decorateInlineResearchLinks = (selector, brandClass) => {
      document.querySelectorAll(selector).forEach((link) => {
        link.classList.add("inline-brand-link", brandClass);
      });
    };

    decorateInlineResearchLinks('.paper .links a[href*="arxiv.org"]', "brand-arxiv");
    decorateInlineResearchLinks('.paper .links a[href*="doi.org"]', "brand-doi");
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
    const toggle = document.querySelector("[data-menu-toggle]");
    if (!toggle) {
      return;
    }
    const lang = document.documentElement.lang === "ja" ? "ja" : "en";
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    const label = getMenuToggleLabel(lang, isOpen);
    toggle.setAttribute("aria-label", label);
    toggle.setAttribute("title", label);
  };

  const updateThemeToggleLabel = () => {
    const toggles = document.querySelectorAll("[data-theme-toggle]");
    if (!toggles.length) {
      return;
    }
    const lang = document.documentElement.lang === "ja" ? "ja" : "en";
    const theme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const label = getThemeToggleLabel(lang, theme);
    toggles.forEach((toggle) => {
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

    document.querySelectorAll("[data-lang-toggle]").forEach((toggle) => {
      toggle.textContent = normalized === "en" ? "日本語" : "English";
      toggle.setAttribute(
        "aria-label",
        normalized === "en" ? "Switch to Japanese" : "Switch to English"
      );
    });
    updateThemeToggleLabel();
    updateMenuToggleLabel();
    decorateResearchActionLinks();
  };

  const initialTheme = getInitialTheme();
  setTheme(initialTheme, { persist: false });

  const initial = getInitialLang();
  setLang(initial);

  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const next = document.documentElement.lang === "en" ? "ja" : "en";
      setLang(next);
    });
  });

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      setTheme(next);
    });
  });

  window.addEventListener("site-menu-toggle", () => {
    updateMenuToggleLabel();
  });
})();
