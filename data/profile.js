/**
 * Profile & Bio Configuration (Source of Truth)
 * Edit this file to update biographical details, titles, and verified contact links.
 * 
 * Strict Guidelines:
 * - Only verified links and emails are made active (placeholder: false).
 * - Placeholders remain designated with placeholder: true and empty url to avoid dead links.
 */
export const profileData = {
  name: "Siya Gour",
  title: "Computer Science Student | Aspiring Technical Product Manager",
  subtitle: "2nd-Year BTech Computer Science",
  intro:
    "I'm a computer science student interested in how technology can solve real-world problems and make a meaningful difference in people's lives.\n\nI enjoy exploring ideas, understanding people and thinking about how those ideas can become useful products.\n\nCurrently exploring AI/ML, product thinking and the intersection of technology and human experience.",
  closingStatement: "Still exploring. Always building.",
  closingNote: "Open to technical product management internships, AI/ML initiatives, and student collaborations.",
  contact: {
    linkedin: {
      label: "LinkedIn",
      url: "https://linkedin.com/in/siyagour-299353360",
      placeholder: false
    },
    github: {
      label: "GitHub",
      url: "https://github.com/Siyagour",
      placeholder: false
    },
    email: {
      label: "Email",
      address: "siyagour23@gmail.com",
      url: "mailto:siyagour23@gmail.com",
      placeholder: false
    },
    resume: {
      label: "Resume",
      url: "",
      placeholder: true
    }
  }
};
