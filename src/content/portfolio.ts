import type { Project, SkillCategory } from './portfolioTypes';

// export const heroContent = {
//   greeting: 'Привет, я',
//   name: 'Ваше Имя.',
//   intro: 'Fullstack Web Developer, превращающий идеи в работающий код.',
//   ctaProjects: 'Мои Проекты',
//   ctaContact: 'Связаться',
//   socialLinks: [
//     { icon: 'https://img.icons8.com/ios-filled/50/e0e0e0/github.png', url: 'https://github.com/yourusername', label: 'GitHub' },
//     { icon: 'https://img.icons8.com/ios-filled/50/e0e0e0/linkedin.png', url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
//   ] as SocialLink[],
// };

export const aboutContent = {
  stack: ['React', 'Node.js', 'Postgres', 'Fastapi']
};

export const skillsContent = {
  categories: [
    {
      title: 'Frontend',
      items: ['JavaScript (ES6+)', 'React / Next.js', 'Vue.js / Nuxt.js', 'TypeScript', 'Tailwind CSS', 'SCSS/SASS']
    },
    {
      title: 'Backend',
      items: ['Node.js / Express', 'Python / Django', 'REST API', 'GraphQL', 'WebSocket', 'Microservices']
    },
    {
      title: 'Tools & Cloud',
      items: ['PostgreSQL / MongoDB', 'Docker', 'Git / GitHub', 'AWS / Vercel', 'Jest / Cypress', 'Webpack / Vite']
    }
  ] as SkillCategory[],
};

export const projectsContent = {
  projects: [] as Project[],
};

export const contactContent = {
  email: 'mpolyak7@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mxmplk-поляк-193839350/',
  github: 'https://github.com/maxempolk',
};