/**
 * Main Application Orchestrator
 * Navigation states, mobile menu accessibility, and scroll spy.
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initMobileNav();
  initScrollSpy();
  initFooterYear();
});

/**
 * Toggles navbar background integration when scrolled past top
 */
function initNavbarScroll() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 24) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/**
 * Accessible mobile menu controller
 * - ARIA expanded state management
 * - Keyboard Escape trap
 * - Body scroll locking only while mobile menu is open
 * - Auto-close on link navigation
 */
function initMobileNav() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");
  if (!toggleBtn || !navMenu) return;

  const toggle = (isOpen) => {
    const currentState = toggleBtn.getAttribute("aria-expanded") === "true";
    const shouldOpen = typeof isOpen === "boolean" ? isOpen : !currentState;

    toggleBtn.setAttribute("aria-expanded", String(shouldOpen));
    navMenu.classList.toggle("open", shouldOpen);

    // Lock background scroll only while mobile menu is open
    document.body.style.overflow = shouldOpen ? "hidden" : "";
  };

  toggleBtn.addEventListener("click", () => toggle());

  // Close menu when clicking any nav link
  navMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 820) {
        toggle(false);
      }
    });
  });

  // Close on Escape key and return focus to toggle
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggleBtn.getAttribute("aria-expanded") === "true") {
      toggle(false);
      toggleBtn.focus();
    }
  });

  // Close and unlock scroll if window is resized past mobile breakpoint
  window.addEventListener("resize", () => {
    if (window.innerWidth > 820 && toggleBtn.getAttribute("aria-expanded") === "true") {
      toggle(false);
    }
  });
}

/**
 * Highlights active section anchor in the navbar using IntersectionObserver
 */
function initScrollSpy() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -65% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${activeId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/**
 * Updates copyright year dynamically
 */
function initFooterYear() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}
