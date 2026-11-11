/**
 * Projects Section Controller — Circular Lunar Orbit & Developer Workstation Modal
 * 
 * Rules:
 * - Only verified project data from data/projects.js is presented.
 * - Initial state: Only circular lunar selector is visible; monitor is closed.
 * - Clicking available phases (1-4) opens developer workstation popup modal.
 * - Selecting another available phase while open updates contents immediately.
 * - Locked phases (5-8) remain non-interactive.
 * - Escape key, close button, or clicking backdrop closes modal.
 * - Restores keyboard focus to selected phase button on close.
 */

import { projectsData } from "../data/projects.js";

/**
 * Escapes HTML characters to prevent XSS.
 * @param {string} str 
 * @returns {string}
 */
function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

let lastActiveTrigger = null;

/**
 * Populates the workstation editor with verified project facts.
 * @param {object} project 
 */
function populateWorkstation(project) {
  const editorContent = document.getElementById("modal-editor-content");
  const tabFilename = document.getElementById("modal-tab-filename");
  const sidebarFilename = document.getElementById("modal-sidebar-filename");
  const sidebarPhase = document.getElementById("modal-sidebar-phase");
  const statusCategory = document.getElementById("modal-status-category");
  const statusStage = document.getElementById("modal-status-stage");

  if (!editorContent || !project) return;

  const filename = `${project.id}.md`;
  if (tabFilename) tabFilename.textContent = filename;
  if (sidebarFilename) sidebarFilename.textContent = filename;
  if (sidebarPhase) sidebarPhase.textContent = `${project.phaseCode} // ${project.phaseName}`;
  if (statusCategory) statusCategory.textContent = project.category;
  if (statusStage) statusStage.textContent = project.status;

  const rolesHtml = project.roles
    .map((r) => `<span class="role-pill">${escapeHtml(r)}</span>`)
    .join("");

  const highlightsHtml = project.highlights
    .map(
      (h) => `
      <li class="highlight-item">
        <span class="highlight-bullet" aria-hidden="true">▹</span>
        <span>${escapeHtml(h)}</span>
      </li>`
    )
    .join("");

  const stackHtml = project.stack && project.stack.length > 0
    ? `
      <div class="editor-panel">
        <h4 class="panel-header">Verified Technology Stack</h4>
        <div class="tech-pills-wrap">
          ${project.stack.map((s) => `<span class="tech-pill">${escapeHtml(s)}</span>`).join("")}
        </div>
        ${project.datasets ? `<div style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-muted); margin-top: 4px;">Data Sources: ${escapeHtml(project.datasets)}</div>` : ""}
      </div>
    `
    : `
      <div class="editor-panel">
        <h4 class="panel-header">Technology Stack</h4>
        <span class="empty-stack-note">Stack unspecified (verified tools only)</span>
      </div>
    `;

  const achievementHtml = project.achievement
    ? `
      <div class="editor-panel">
        <h4 class="panel-header">Event Standing & Progress</h4>
        <p class="achievement-text">${escapeHtml(project.achievement)}</p>
      </div>
    `
    : "";

  const linksHtml = project.links && project.links.length > 0
    ? `
      <div class="editor-panel">
        <h4 class="panel-header">Verified Links & Demos</h4>
        <div class="links-wrap">
          ${project.links.map((l) => `
            <a 
              href="${escapeHtml(l.url)}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="project-link-btn"
              aria-label="${escapeHtml(project.title)} — ${escapeHtml(l.label)} (opens in a new tab)"
            >
              <span>${escapeHtml(l.label)}</span>
              <span aria-hidden="true">↗</span>
            </a>
          `).join("")}
        </div>
      </div>
    `
    : "";

  const summaryHtml = project.summary
    ? `<p class="editor-summary">${escapeHtml(project.summary)}</p>`
    : "";

  editorContent.innerHTML = `
    <div class="editor-breadcrumbs" aria-hidden="true">
      portfolio &gt; projects &gt; <span>${escapeHtml(project.id)}</span> &gt; ${escapeHtml(filename)}
    </div>

    <div class="editor-title-row">
      <div>
        <h3 class="editor-project-title" id="modal-project-title">${escapeHtml(project.title)}</h3>
        <p class="editor-tagline">${escapeHtml(project.tagline)}</p>
      </div>
      <span class="editor-status-tag ${project.isInProgress ? 'in-progress' : ''}">
        ${escapeHtml(project.status)}
      </span>
    </div>

    ${summaryHtml}

    <div class="editor-panels-grid">
      <!-- Column 1: Roles & Key Contributions -->
      <div class="editor-panel">
        <h4 class="panel-header">Verified Role</h4>
        <div class="role-pills-wrap">
          ${rolesHtml}
        </div>
        ${project.team ? `<div style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-muted); margin-top: 4px;">${escapeHtml(project.team)}</div>` : ""}

        <div style="margin-top: var(--space-4);">
          <h4 class="panel-header">Key Contributions</h4>
          <ul class="highlights-list">
            ${highlightsHtml}
          </ul>
        </div>
      </div>

      <!-- Column 2: Tech Stack, Achievement & Links -->
      <div class="editor-panel">
        ${stackHtml}
        ${achievementHtml}
        ${linksHtml}
      </div>
    </div>
  `;
}

/**
 * Opens the workstation modal with the given project.
 * @param {string} projectId 
 * @param {HTMLElement} triggerBtn 
 */
export function openWorkstation(projectId, triggerBtn) {
  const modal = document.getElementById("project-modal");
  const project = projectsData.find((p) => p.id === projectId);

  if (!modal || !project) return;

  lastActiveTrigger = triggerBtn || document.activeElement;

  // Populate project details
  populateWorkstation(project);

  // Update active state on orbit nodes
  document.querySelectorAll(".lunar-phase-node").forEach((node) => {
    const isCurrent = node.getAttribute("data-project-id") === projectId;
    node.classList.toggle("is-selected", isCurrent);
    if (node.hasAttribute("aria-pressed")) {
      node.setAttribute("aria-pressed", String(isCurrent));
    }
  });

  // Open modal & lock background scroll
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Focus the close button for accessibility
  const closeBtn = document.getElementById("modal-close-btn");
  if (closeBtn) {
    setTimeout(() => closeBtn.focus(), 50);
  }
}

/**
 * Closes the workstation modal and restores focus.
 */
export function closeWorkstation() {
  const modal = document.getElementById("project-modal");
  if (!modal || !modal.classList.contains("is-open")) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  // Restore focus to triggering lunar node
  if (lastActiveTrigger && typeof lastActiveTrigger.focus === "function") {
    lastActiveTrigger.focus();
  }
}

/**
 * Initializes the circular lunar orbit interactions and modal handlers.
 */
export function initProjectEngine() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const availableNodes = document.querySelectorAll(".lunar-phase-node.is-available");

  // Bind clicks to available lunar phase nodes (Phases 1-4)
  availableNodes.forEach((node) => {
    node.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = node.getAttribute("data-project-id");
      if (projectId) {
        openWorkstation(projectId, node);
      }
    });

    // Enter & Space keyboard support
    node.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const projectId = node.getAttribute("data-project-id");
        if (projectId) {
          openWorkstation(projectId, node);
        }
      }
    });
  });

  // Close button handler
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      closeWorkstation();
    });
  }

  // Backdrop click handler (clicking outside the monitor frame)
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.classList.contains("modal-dialog-container")) {
        closeWorkstation();
      }
    });
  }

  // Global Escape key handler
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("is-open")) {
      closeWorkstation();
    }
  });
}

// Auto-initialize when DOM is ready in browser environment
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initProjectEngine);
  } else {
    initProjectEngine();
  }
}
