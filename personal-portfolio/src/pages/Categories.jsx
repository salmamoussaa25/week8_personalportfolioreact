import React from 'react';
import NavBar from '../components/NavBar';
import FooterSection from '../components/FooterSection';
import NewsletterCard from '../components/NewsletterCard';
import HeroCategory from '../components/HeroCategory';
import ContCategory from '../components/ContCategory';

const categories = [
  {
    name: "UX Research & Strategy",
    desc: "I design experiences grounded in research and strategic thinking, focusing on understanding users, defining problems clearly, and aligning design decisions with real-world needs and constraints.",
    tags: ["User Research", "Personas", "User Journeys", "Competitive Analysis", "UX Audits", "Problem Definition", "FigJam", "Figma", "Notion"],
    projects: [] 
  },
  {
    name: "Information Architecture",
    desc: "This category highlights my work in structuring digital products to ensure clarity, usability, and logical content organization across complex websites and platforms.",
    tags: ["Information Architecture", "Site Mapping", "Navigation Design", "Content Hierarchy", "User Flows", "Figma", "FigJam"],
    projects: []
  },
  {
    name: "User Flow & Experience Mapping",
    desc: "I map user interactions and decision paths to create seamless experiences, ensuring users can complete tasks efficiently while minimizing friction.",
    tags: ["User Flows", "Journey Mapping", "Task Analysis", "Experience Mapping", "UX Logic", "Figma"],
    projects: []
  },
  {
    name: "UI Design & Visual Interfaces",
    desc: "I design visually refined interfaces that balance usability and aesthetics, with strong attention to hierarchy, spacing, typography, and consistency across screens.",
    tags: ["UI Design", "Visual Hierarchy", "Layout Design", "Typography", "Color Systems", "Responsive UI", "Figma", "Adobe XD"],
    projects: []
  },
  {
    name: "Interaction Design & Prototyping",
    desc: "This category focuses on how interfaces behave and respond, using interaction design and prototyping to communicate intent, flow, and usability.",
    tags: ["Interaction Design", "Micro-interactions", "State Design", "UX Feedback", "High-Fidelity Prototyping", "Figma"],
    projects: []
  },
  {
    name: "Design Systems & UI Kits",
    desc: "I create scalable design systems and UI kits that support consistency across products while enabling efficient design-to-development workflows.",
    tags: ["Design Systems", "UI Kits", "Component Libraries", "Atomic Design", "Auto Layout", "Variants", "Figma"],
    projects: []
  },
  {
    name: "Branding & Visual Identity",
    desc: "I translate brand values into cohesive visual identities, ensuring consistency across digital touchpoints through thoughtful use of color, typography, and layout.",
    tags: ["Brand Identity", "Visual Language", "Logo Usage", "Typography Systems", "Color Theory", "Illustrator", "Photoshop", "InDesign"],
    projects: []
  },
  {
    name: "Web Design (UX + UI)",
    desc: "I design end-to-end web experiences that integrate research, structure, and visual design, with a strong focus on usability, storytelling, and responsiveness.",
    tags: ["Website Design", "Responsive Design", "Content-Driven UX", "Accessibility Basics", "UX/UI Integration", "Figma"],
    projects: []
  },
  {
    name: "Frontend Development",
    desc: "This category showcases my ability to implement designs in code, translating visual systems and interaction logic into functional, responsive interfaces.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Responsive Layouts", "Git", "Design-to-Code"],
    projects: []
  },
  {
    name: "Conceptual & Experimental Design",
    desc: "This category includes exploratory and concept-driven projects where I experiment with ideas, visuals, and speculative approaches to digital design.",
    tags: ["Concept Design", "Visual Exploration", "Speculative UX", "Creative Direction", "Prototyping", "Figma", "Illustrator"],
    projects: []
  }
];

const Categories = () => {
  return (
        <>
    <div className="categories-page" style={{ backgroundColor: 'var(--maincolorlight)' }}>
      <NavBar />
      <HeroCategory 
        title="Portfolio Categories" 
        description="A deep dive into my multidisciplinary design approach and technical skill sets."
      />
      
      {categories.map((cat, index) => (
        <ContCategory 
          key={index}
          categoryName={cat.name}
          description={cat.desc}
          tags={cat.tags}
          projects={cat.projects}
          linkTo={`/projects/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
        />
    ))}
    <NewsletterCard />
    <FooterSection />
    </div>
    </>
  );
};

export default Categories;