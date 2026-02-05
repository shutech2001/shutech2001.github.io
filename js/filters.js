(() => {
  const setupFilterBar = (bar) => {
    const scopeSelector = bar.dataset.filterScope;
    if (!scopeSelector) {
      return;
    }

    const scope = document.querySelector(scopeSelector);
    if (!scope) {
      return;
    }

    const items = Array.from(scope.querySelectorAll("[data-tags]"));
    if (items.length === 0) {
      return;
    }

    const buttons = Array.from(bar.querySelectorAll("[data-filter]"));
    if (buttons.length === 0) {
      return;
    }

    const activeFilters = new Set();

    const syncButtons = () => {
      buttons.forEach((button) => {
        const value = button.dataset.filter;
        const isActive = value === "all" ? activeFilters.size === 0 : activeFilters.has(value);
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
    };

    const applyFilters = () => {
      items.forEach((item) => {
        const tagList = (item.dataset.tags || "")
          .split(" ")
          .map((tag) => tag.trim())
          .filter(Boolean);
        const matches =
          activeFilters.size === 0 || Array.from(activeFilters).every((tag) => tagList.includes(tag));
        item.hidden = !matches;
      });
    };

    const resetAll = () => {
      activeFilters.clear();
      syncButtons();
      applyFilters();
    };

    resetAll();

    bar.addEventListener("click", (event) => {
      const target = event.target.closest("[data-filter]");
      if (!target) {
        return;
      }

      const selected = target.dataset.filter;
      if (selected === "all") {
        resetAll();
        return;
      }

      if (activeFilters.has(selected)) {
        activeFilters.delete(selected);
      } else {
        activeFilters.add(selected);
      }

      syncButtons();
      applyFilters();
    });
  };

  const init = () => {
    document.querySelectorAll("[data-filter-scope]").forEach(setupFilterBar);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
