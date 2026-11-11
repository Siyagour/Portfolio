/**
 * Contact Section Renderer — Photorealistic Lunar Hemisphere & Enhanced Visibility Flags
 * Renders four physical interactive flags planted across the lunar surface:
 * 1. LinkedIn (Western Lunar Highlands - Active: https://linkedin.com/in/siyagour-299353360)
 * 2. GitHub (Montes Apenninus crater rim - Active: https://github.com/Siyagour)
 * 3. Email (Mare Tranquillitatis - Active: mailto:siyagour23@gmail.com)
 * 4. Resume (Eastern Lunar Highlands - Disabled until file destination is configured)
 * 
 * Strict Guidelines:
 * - Verified destinations (LinkedIn, GitHub, Email) are clickable links opening in new tabs (or mailto).
 * - Unconfigured destinations remain visually present but non-interactive (role="link" aria-disabled="true").
 * - Lighter charcoal fabric, silver-grey border, sharp high-contrast symbols.
 * - LinkedIn accented with electric blue; GitHub, Email, Resume in soft white.
 * - Contain absolutely no text, labels, captions, numbers, or pending messages under or on hover.
 */

import { profileData } from "../data/profile.js";

/**
 * Escapes HTML characters for safe attribute rendering.
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
 * Configuration for the 4 flags planted on the visible lunar hemisphere.
 * Coordinates (x, y in %) and tilts follow the authentic spherical curvature of the lunar surface:
 * - LinkedIn: 24% x, 52% y, -5deg tilt (Western highlands regolith)
 * - GitHub:   38% x, 32% y, -2deg tilt (Montes Apenninus crater rim)
 * - Email:    58% x, 29% y,  2deg tilt (Mare Tranquillitatis basalt plain)
 * - Resume:   76% x, 50% y,  5deg tilt (Eastern highlands)
 */
const LUNAR_FLAG_CONFIG = [
  {
    key: "linkedin",
    name: "LinkedIn",
    x: 24,
    y: 52,
    tilt: -5,
    symbolSvg: `
      <g class="flag-symbol flag-symbol-linkedin" transform="translate(19.5, 9.5)">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.67 1.67 0 0 0 1.67-1.66c0-.92-.75-1.66-1.67-1.66Z"/>
        </svg>
      </g>
    `
  },
  {
    key: "github",
    name: "GitHub",
    x: 38,
    y: 32,
    tilt: -2,
    symbolSvg: `
      <g class="flag-symbol" transform="translate(19.5, 9.5)">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      </g>
    `
  },
  {
    key: "email",
    name: "Email",
    x: 58,
    y: 29,
    tilt: 2,
    symbolSvg: `
      <g class="flag-symbol" transform="translate(19.5, 9.5)">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      </g>
    `
  },
  {
    key: "resume",
    name: "Resume",
    x: 76,
    y: 50,
    tilt: 5,
    symbolSvg: `
      <g class="flag-symbol" transform="translate(19.5, 9.5)">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
      </g>
    `
  }
];

/**
 * Builds the SVG markup for a flag with proportional sizing and silver-grey border.
 * @param {string} symbolSvg Inner symbol group
 * @param {string} flagId Unique identifier for gradient reference
 * @returns {string} SVG HTML
 */
function buildFlagSvg(symbolSvg, flagId) {
  const gradId = `flag-fabric-${flagId}`;
  return `
    <svg class="lunar-flag-svg" viewBox="0 0 54 70" width="54" height="70" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2D3342" />
          <stop offset="50%" stop-color="#212634" />
          <stop offset="100%" stop-color="#181C26" />
        </linearGradient>
      </defs>
      <!-- Ground Planting Contact Shadow on Lunar Dust -->
      <ellipse cx="7" cy="66" rx="9.5" ry="2.6" fill="rgba(0,0,0,0.65)" />
      
      <!-- Vertical Metallic Flagpole -->
      <line x1="7" y1="3" x2="7" y2="66" stroke="#D1D5DB" stroke-width="2.2" stroke-linecap="round" />
      <!-- Top Horizontal Support Crossbar (Apollo-style) -->
      <line x1="7" y1="4" x2="50" y2="4" stroke="#9CA3AF" stroke-width="1.6" stroke-linecap="round" />
      <!-- Pole Finial Cap -->
      <circle cx="7" cy="3" r="2.4" fill="#F3F4F6" stroke="#9CA3AF" stroke-width="0.6" />
      
      <!-- Flag Fabric (Lighter charcoal with silver-grey border) -->
      <rect x="7" y="4" width="42" height="28" rx="2.5" fill="url(#${gradId})" stroke="#94A3B8" stroke-width="1.2" class="flag-cloth" />
      
      <!-- Platform Symbol Only (High Contrast) -->
      ${symbolSvg}
    </svg>
  `;
}

/**
 * Renders an individual flag element as a semantic HTML link or disabled item.
 * @param {object} cfg Flag layout and SVG config
 * @param {object} item Data item from profileData.contact
 * @returns {string} HTML string
 */
function renderLunarFlag(cfg, item) {
  const isAvailable = Boolean(item && item.url && item.url.trim() !== "" && item.url !== "#" && !item.placeholder);
  const positionStyle = `left: ${cfg.x}%; top: ${cfg.y}%; --flag-tilt: ${cfg.tilt}deg;`;
  const flagSvg = buildFlagSvg(cfg.symbolSvg, cfg.key);

  if (isAvailable) {
    const ariaLabel = item.address ? `${cfg.name}: ${item.address}` : cfg.name;

    return `
      <a 
        href="${escapeHTML(item.url)}" 
        class="lunar-flag is-active" 
        style="${positionStyle}" 
        data-platform="${escapeHTML(cfg.key)}"
        aria-label="${escapeHTML(ariaLabel)}"
      >
        <div class="lunar-flag-visual">
          ${flagSvg}
        </div>
      </a>
    `;
  }

  // Unavailable / Unconfigured destination — visible, non-interactive, no link, no text tooltip
  return `
    <div 
      class="lunar-flag is-disabled" 
      style="${positionStyle}" 
      data-platform="${escapeHTML(cfg.key)}"
      role="link" 
      aria-disabled="true" 
      aria-label="${escapeHTML(cfg.name)}"
    >
      <div class="lunar-flag-visual">
        ${flagSvg}
      </div>
    </div>
  `;
}

/**
 * Mounts the 4 interactive flags into the lunar stage overlay (#lunar-flags-mount).
 */
export function initContactSection() {
  const mountPoint = document.getElementById("lunar-flags-mount");
  if (!mountPoint) return;

  const contactData = profileData.contact || {};
  const flagsHTML = LUNAR_FLAG_CONFIG
    .map((cfg) => renderLunarFlag(cfg, contactData[cfg.key]))
    .join("");

  mountPoint.innerHTML = flagsHTML;
}

// Auto-initialize when DOM is ready in browser environment
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initContactSection);
  } else {
    initContactSection();
  }
}
