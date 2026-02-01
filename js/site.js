(() => {
  const translations = {
    en: {
      "site.title": "Shu Tamano",
      "site.subtitle": "Systems • Health Security • Data",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.cv": "Academic CV",
      "nav.research": "Research",
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
      "about.interest2": "Statistical machine learning",
      "about.interest3": "Deep learning theory",
      "about.applicationLead": "I am interested in applications in...",
      "about.application1": "Biostatistics",
      "about.application2": "Epidemiology",
      "about.bioTitle": "Biography",
      "about.bioText": "Short bio placeholder. Summarize your background, current work, and goals in 3–5 lines.",
      "cv.title": "Academic CV (Selected Information)",
      "cv.note": "Update the placeholders with your latest details.",
      "cv.period": "Period",
      "cv.details": "Details",
      "cv.notes": "Notes",
      "cv.education": "Education",
      "cv.jobs": "Job Experience",
      "cv.awards": "Awards",
      "cv.grants": "Grants & Funding",
      "research.title": "Selected Papers",
      "research.note": "Placeholder entries. Replace with your publications and links.",
      "research.conferenceTitle": "Conferences",
      "research.conferenceNote": "List conferences, symposiums, and invited talks.",
      "research.citation": "Citation",
      "research.bibtex": "BibTeX",
      "research.links": "Links",
      "research.doi": "DOI",
      "research.arxiv": "arXiv",
      "footer.label": "Quick Links",
      "footer.note": "Add more links later by extending the list below."
    },
    ja: {
      "site.title": "パーソナル研究ページ",
      "site.subtitle": "Systems • Health Security • Data",
      "nav.home": "ホーム",
      "nav.about": "概要",
      "nav.cv": "C.V.",
      "nav.research": "研究",
      "nav.links": "リンク",
      "home.tag": "博士課程・研究者",
      "home.profileTitle": "プロフィール",
      "label.name": "名前",
      "label.position": "職位",
      "label.affiliation": "所属",
      "label.email": "メール",
      "email.note": "メールは [at] を @ に置き換えてください",
      "value.name": "玉野 史結",
      "value.position": "Ph.D. candidate, Researcher",
      "value.position1": "博士課程",
      "value.position2": "研究者",
      "value.affiliation1": "東京大学",
      "value.affiliation2": "国立健康危機管理研究機構 国立感染症研究所",
      "value.email": "tamano-shu212 [at] g.ecc.u-tokyo.ac.jp, tamano.s [at] jihs.go.jp",
      "value.email1": "tamano-shu212 [at] g.ecc.u-tokyo.ac.jp",
      "value.email2": "tamano.s [at] jihs.go.jp",
      "about.title": "研究関心",
      "about.interest1": "因果推論",
      "about.interest2": "統計的機械学習",
      "about.interest3": "深層学習理論",
      "about.applicationLead": "I am interested in applications in...",
      "about.application1": "生物統計",
      "about.application2": "疫学",
      "about.bioTitle": "Biography",
      "about.bioText": "経歴のプレースホルダー。バックグラウンド、現在の研究、今後の目標を3〜5行でまとめてください。",
      "cv.title": "学術CV（抜粋）",
      "cv.note": "プレースホルダーを最新の情報に差し替えてください。",
      "cv.period": "期間",
      "cv.details": "内容",
      "cv.notes": "備考",
      "cv.education": "学歴",
      "cv.jobs": "職歴",
      "cv.awards": "受賞",
      "cv.grants": "研究費・助成金",
      "research.title": "主要論文",
      "research.note": "プレースホルダーです。ご自身の論文情報とリンクに置き換えてください。",
      "research.conferenceTitle": "学会・会議",
      "research.conferenceNote": "学会発表、シンポジウム、招待講演などを記載してください。",
      "research.citation": "引用",
      "research.bibtex": "BibTeX",
      "research.links": "リンク",
      "research.doi": "DOI",
      "research.arxiv": "arXiv",
      "footer.label": "クイックリンク",
      "footer.note": "後からこのリストに追加できます。"
    }
  };

  const supported = ["en", "ja"];
  const defaultLang = "en";

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

  const setLang = (lang) => {
    const normalized = supported.includes(lang) ? lang : defaultLang;
    document.documentElement.lang = normalized;
    document.documentElement.dataset.lang = normalized;
    window.localStorage.setItem("lang", normalized);
    applyTranslations(normalized);

    const toggle = document.querySelector("[data-lang-toggle]");
    if (toggle) {
      toggle.textContent = normalized === "en" ? "日本語" : "English";
      toggle.setAttribute(
        "aria-label",
        normalized === "en" ? "Switch to Japanese" : "Switch to English"
      );
    }
  };

  const initial = getInitialLang();
  setLang(initial);

  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const next = document.documentElement.lang === "en" ? "ja" : "en";
      setLang(next);
    });
  });
})();
