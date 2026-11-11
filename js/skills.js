/**
 * Skills Section Renderer — Compact Four-Card Layout
 * 
 * Strict Guidelines:
 * - Four approved categories in exact order:
 *   01 / PRODUCT (Product & Strategy)
 *   02 / CODE (Programming)
 *   03 / TOOLKIT (Tools & Platforms)
 *   04 / TECHNOLOGIES EXPLORED (Technologies & Concepts Explored)
 * - Three equal-width cards in row 1; one full-width card in row 2.
 * - Skills inline separated by middle dots ( · ).
 * - Understated caption below Category 04.
 * - Zero progress bars, percentages, star ratings, or invented skills.
 */

import { skillsData } from "../data/skills.js";

document.addEventListener("DOMContentLoaded", () => {
  renderSkillsIndex();
});

export function renderSkillsIndex() {
  const mount = document.getElementById("skills-mount");
  if (!mount || !skillsData || !skillsData.categories) return;

  const html = `
    <div class="skills-index-wrapper">
      <div class="skills-cards-grid" role="region" aria-label="Technical and Product Skills Index">
        ${skillsData.categories.map((cat, idx) => {
          const isExplored = idx === 3;
          const cardClass = isExplored ? "skills-card skills-card-explored" : "skills-card";

          return `
            <div class="${cardClass}" id="skill-card-${escapeHtml(cat.id)}">
              <!-- Card Header -->
              <div class="skills-card-header">
                <h3 class="skills-card-title">${escapeHtml(cat.title)}</h3>
              </div>

              <!-- Skills Body (Inline text flow with middle dots) -->
              <p class="skills-card-body">
                ${cat.skills.map((skill, sIdx) => {
                  const isLast = sIdx === cat.skills.length - 1;
                  return `<span class="skill-name">${escapeHtml(skill)}</span>${isLast ? '' : '<span class="skill-sep" aria-hidden="true"> · </span>'}`;
                }).join('')}
              </p>

              ${cat.caption ? `
                <p class="skills-exploration-caption">${escapeHtml(cat.caption)}</p>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  mount.innerHTML = html;
}

function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
