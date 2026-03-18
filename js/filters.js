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

    const filterBits = new Map();
    let nextBit = 1;

    buttons.forEach((button) => {
      const value = button.dataset.filter;
      if (!value || value === "all" || filterBits.has(value)) {
        return;
      }
      filterBits.set(value, nextBit);
      nextBit <<= 1;
    });

    const itemTargets = items.map((item) => {
      let mask = 0;
      (item.dataset.tags || "")
        .split(/\s+/)
        .map((tag) => tag.trim())
        .filter(Boolean)
        .forEach((tag) => {
          mask |= filterBits.get(tag) || 0;
        });
      return { element: item, mask };
    });

    let activeMask = 0;

    const syncButtons = () => {
      buttons.forEach((button) => {
        const value = button.dataset.filter;
        const bit = filterBits.get(value) || 0;
        const isActive = value === "all" ? activeMask === 0 : Boolean(activeMask & bit);
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
    };

    const applyFilters = () => {
      itemTargets.forEach(({ element, mask }) => {
        const matches = activeMask === 0 || (mask & activeMask) === activeMask;
        if (element.hidden !== !matches) {
          element.hidden = !matches;
        }
      });
    };

    const resetAll = () => {
      activeMask = 0;
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
        if (activeMask === 0) {
          return;
        }
        resetAll();
        return;
      }

      const bit = filterBits.get(selected);
      if (!bit) {
        return;
      }

      activeMask = activeMask & bit ? activeMask & ~bit : activeMask | bit;

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
