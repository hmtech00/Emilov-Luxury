/* EMILOV LUXURY — shared interactions */
(function () {
  "use strict";

  /* ---------- Mobile nav ---------- */
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavClose = document.querySelector(".mobile-nav-close");
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      mobileNav.classList.add("open");
      mobileNav.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  }
  if (mobileNavClose && mobileNav) {
    mobileNavClose.addEventListener("click", closeMobileNav);
  }
  document.querySelectorAll(".mobile-nav a").forEach((a) => a.addEventListener("click", closeMobileNav));
  function closeMobileNav() {
    mobileNav.classList.remove("open");
    mobileNav.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  /* ---------- Toast ---------- */
  let toastEl = document.querySelector(".toast");
  if (!toastEl) {
    toastEl = document.createElement("div");
    toastEl.className = "toast";
    toastEl.setAttribute("role", "status");
    document.body.appendChild(toastEl);
  }
  let toastTimer;
  window.showToast = function (msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2600);
  };

  /* ---------- i18n (minimal — mirrors the static copy already on the page) ---------- */
  const IS_IT = document.documentElement.lang === "it";
  const t = (it, en) => (IS_IT ? it : en);

  /* ---------- Wishlist (localStorage) ---------- */
  const WISHLIST_KEY = "emilov_wishlist";
  function getWishlist() {
    try { return JSON.parse(localStorage.getItem(WISHLIST_KEY) || "[]"); }
    catch (e) { return []; }
  }
  function setWishlist(list) {
    try { localStorage.setItem(WISHLIST_KEY, JSON.stringify(list)); } catch (e) {}
  }
  function updateWishlistCount() {
    const count = getWishlist().length;
    document.querySelectorAll("[data-wishlist-count]").forEach((el) => {
      el.textContent = count;
      el.style.display = count > 0 ? "" : "none";
    });
  }
  document.querySelectorAll(".wishlist-btn").forEach((btn) => {
    const id = btn.dataset.productId;
    if (!id) return;
    const list = getWishlist();
    if (list.includes(id)) btn.classList.add("active");
    btn.setAttribute("aria-pressed", list.includes(id) ? "true" : "false");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      let current = getWishlist();
      if (current.includes(id)) {
        current = current.filter((x) => x !== id);
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
        showToast(t("Rimosso dalla lista dei desideri", "Removed from wishlist"));
      } else {
        current.push(id);
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
        showToast(t("Salvato nella lista dei desideri", "Saved to wishlist"));
      }
      setWishlist(current);
      updateWishlistCount();
    });
  });
  updateWishlistCount();

  /* ---------- Forms: intercept submit, show success (no real backend yet) ---------- */
  document.querySelectorAll("form[data-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const successEl = form.parentElement.querySelector(".form-success") || form.nextElementSibling;
      form.style.display = "none";
      if (successEl && successEl.classList.contains("form-success")) {
        successEl.classList.add("show");
        successEl.setAttribute("tabindex", "-1");
        successEl.focus();
      } else {
        showToast(t("Grazie — ti contatteremo a breve.", "Thank you — we'll be in touch shortly."));
      }
      // NOTE: [CONFIRM] wire to real endpoint (Formspree / CRM / email) before launch.
      console.info("[EMILOV] Form submitted (demo only, no backend configured):", form.dataset.form);
    });
  });

  /* ---------- Shop: category / brand / condition / availability filtering ---------- */
  const shopGrid = document.querySelector("[data-shop-grid]");
  if (shopGrid) {
    const cards = Array.from(shopGrid.querySelectorAll(".product-card"));
    const filterInputs = document.querySelectorAll("[data-filter]");
    const sortSelect = document.querySelector("[data-sort]");
    const resultsCount = document.querySelector("[data-results-count]");

    function applyFilters() {
      const active = {};
      filterInputs.forEach((input) => {
        if (input.checked) {
          const key = input.dataset.filter;
          active[key] = active[key] || [];
          active[key].push(input.value);
        }
      });
      let visibleCount = 0;
      cards.forEach((card) => {
        let visible = true;
        Object.keys(active).forEach((key) => {
          if (active[key].length && !active[key].includes(card.dataset[key])) visible = false;
        });
        card.style.display = visible ? "" : "none";
        if (visible) visibleCount++;
      });
      if (resultsCount) {
        const isItalian = document.documentElement.lang === "it";
        const label = isItalian
          ? (visibleCount === 1 ? " pezzo" : " pezzi")
          : (visibleCount === 1 ? " piece" : " pieces");
        resultsCount.textContent = visibleCount + label;
      }
    }
    filterInputs.forEach((input) => input.addEventListener("change", applyFilters));

    if (sortSelect) {
      sortSelect.addEventListener("change", () => {
        const val = sortSelect.value;
        const sorted = cards.slice().sort((a, b) => {
          const pa = parseFloat(a.dataset.price), pb = parseFloat(b.dataset.price);
          if (val === "price-asc") return pa - pb;
          if (val === "price-desc") return pb - pa;
          return 0; // "newest" keeps DOM order
        });
        sorted.forEach((card) => shopGrid.appendChild(card));
      });
    }
    applyFilters();

    const drawerToggle = document.querySelector(".filter-drawer-toggle");
    const filters = document.querySelector(".filters");
    if (drawerToggle && filters) {
      drawerToggle.addEventListener("click", () => filters.classList.toggle("open-mobile"));
    }
  }

  /* ---------- Product gallery (PDP) ---------- */
  const mainImg = document.querySelector("[data-pdp-main]");
  const thumbs = document.querySelectorAll("[data-pdp-thumb]");
  if (mainImg && thumbs.length) {
    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        thumbs.forEach((t) => t.classList.remove("active"));
        thumb.classList.add("active");
        const src = thumb.getAttribute("data-ph-src");
        const existingImg = mainImg.querySelector("img");
        if (src) {
          // Real photo: show/create the <img>, matching the thumb's alt text.
          const thumbImg = thumb.querySelector("img");
          if (existingImg) {
            existingImg.src = src;
            existingImg.alt = thumbImg ? thumbImg.alt : "";
          } else {
            const img = document.createElement("img");
            img.className = "ph-img";
            img.src = src;
            img.alt = thumbImg ? thumbImg.alt : "";
            mainImg.appendChild(img);
          }
          mainImg.removeAttribute("data-ph");
        } else {
          // Placeholder angle: remove any real photo so the pending label shows.
          if (existingImg) existingImg.remove();
          mainImg.setAttribute("data-ph", thumb.getAttribute("data-ph") || "");
        }
      });
    });
  }

  /* ---------- Header shadow on scroll (subtle) ---------- */
  const header = document.querySelector(".site-header");
  if (header) {
    let lastY = 0;
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      header.style.boxShadow = y > 12 ? "0 1px 0 rgba(0,0,0,0.04)" : "none";
      lastY = y;
    }, { passive: true });
  }

  /* ---------- Current year ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
