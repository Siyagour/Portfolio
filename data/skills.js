/**
 * Core Skills Taxonomy (Source of Truth)
 * 
 * Strict Guidelines:
 * - Four verified categories in exact order:
 *   01 / PRODUCT (Product & Strategy)
 *   02 / CODE (Programming)
 *   03 / TOOLKIT (Tools & Platforms)
 *   04 / TECHNOLOGIES EXPLORED (Technologies & Concepts Explored)
 * - Exact confirmed skills and wording only.
 * - Understated caption for Category 04 clarifying project-based exposure.
 * - Zero invented proficiency levels, progress meters, or icons.
 */
export const skillsData = {
  sectionLabel: "SKILLS INDEX",
  sectionTitle: "Skills",
  categories: [
    {
      id: "product-strategy",
      number: "01",
      title: "Product & Strategy",
      skills: [
        "Product Thinking",
        "User Research",
        "Problem Framing",
        "Wireframing",
        "User Flow Design",
        "UX Thinking",
        "Feature Ideation",
        "Team Coordination"
      ]
    },
    {
      id: "programming",
      number: "02",
      title: "Programming",
      skills: [
        "C",
        "C++",
        "Python",
        "SQL",
        "HTML",
        "CSS",
        "JavaScript"
      ]
    },
    {
      id: "tools-platforms",
      number: "03",
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Google Antigravity",
        "Google Colab",
        "Jupyter Notebook",
        "Figma",
        "Canva",
        "Streamlit",
        "FastAPI"
      ]
    },
    {
      id: "technologies-explored",
      number: "04",
      title: "Technologies & Concepts Explored",
      caption: "Project-based exposure, including AI-assisted implementation and experimentation.",
      skills: [
        "React",
        "Computer Vision",
        "Multimodal AI",
        "QLoRA",
        "Model Fine-tuning",
        "Geospatial Technologies"
      ]
    }
  ]
};
