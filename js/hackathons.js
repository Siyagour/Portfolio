/**
 * Hackathons Section Renderer — Expandable Mission Log Engine
 * Uses native <details> and <summary> disclosure pattern for accessible, clean mission logs.
 */

import { missionLogsData } from "../data/mission-logs.js";

/**
 * Escapes HTML characters for safe text rendering.
 * @param {string} str 
 * @returns {string}
 */
function escapeHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Renders a single collapsible mission log entry.
 * @param {object} item 
 * @returns {string} HTML string
 */
function renderMissionDetails(item) {
  const teamLabel = item.teamSize 
    ? `${escapeHTML(item.team)} (${item.teamSize} members)` 
    : escapeHTML(item.team);

  const domainStatement = item.problemStatement 
    ? `${escapeHTML(item.domain)} · Statement: ${escapeHTML(item.problemStatement)}`
    : escapeHTML(item.domain);

  const stageLabel = item.organizer 
    ? `${escapeHTML(item.stage)} (${escapeHTML(item.organizer)})` 
    : escapeHTML(item.stage);

  const contributionsHTML = item.contributions
    .map(
      (c) => `
        <li class="contribution-item">
          <span class="contribution-bullet" aria-hidden="true">▹</span>
          <span>${escapeHTML(c)}</span>
        </li>`
    )
    .join("");

  const demoActionHTML = item.demoUrl
    ? `
      <div class="mission-actions-row">
        <a 
          href="${escapeHTML(item.demoUrl)}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="mission-demo-link"
          aria-label="${escapeHTML(item.eventName)} - ${escapeHTML(item.project)}: ${escapeHTML(item.demoLabel || 'Watch Demo Video')} (opens in new tab)"
        >
          <span>${escapeHTML(item.demoLabel || "Watch Demo Video")}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>`
    : "";

  const taglineHTML = item.tagline
    ? `<p class="mission-tagline">“${escapeHTML(item.tagline)}”</p>`
    : "";

  return `
    <details class="mission-log-entry" id="${escapeHTML(item.id.toLowerCase())}">
      <summary class="mission-log-summary">
        <div class="summary-left">
          <span class="mission-code-num">${escapeHTML(item.entryNumber)}</span>
          <div class="summary-titles">
            <h3 class="mission-event-title">${escapeHTML(item.eventName)}</h3>
            <span class="mission-project-meta">${escapeHTML(item.project)} · ${teamLabel}</span>
          </div>
        </div>

        <div class="summary-right">
          <span class="mission-outcome-badge">${escapeHTML(item.outcomeBadge || item.outcome)}</span>
          <span class="chevron-wrap" aria-hidden="true">
            <svg class="chevron-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>
      </summary>

      <div class="mission-expanded-content">
        <div class="mission-meta-grid">
          <div class="mission-meta-item">
            <span class="meta-label">Stage & Domain</span>
            <span class="meta-value">${stageLabel} · ${domainStatement}</span>
          </div>
          <div class="mission-meta-item">
            <span class="meta-label">Verified Role</span>
            <span class="meta-value">${escapeHTML(item.role)}</span>
          </div>
        </div>

        ${taglineHTML}

        <div class="mission-contributions-section">
          <h4 class="contributions-heading">Verified Contributions</h4>
          <ul class="contributions-list">
            ${contributionsHTML}
          </ul>
        </div>

        ${demoActionHTML}
      </div>
    </details>
  `;
}

/**
 * Initializes and mounts the mission logs into the DOM.
 */
export function initMissionLogs() {
  const mountPoint = document.getElementById("missions-mount");
  if (!mountPoint) return;

  const html = `
    <div class="missions-container">
      <div class="mission-log-list" role="region" aria-label="Expandable Hackathons Mission Log">
        ${missionLogsData.map(renderMissionDetails).join("")}
      </div>
    </div>
  `;

  mountPoint.innerHTML = html;
}

// Auto-initialize when DOM is ready in browser environment
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMissionLogs);
  } else {
    initMissionLogs();
  }
}
