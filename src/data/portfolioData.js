export const skills = [
  { name: 'JavaScript', level: 'Core language', icon: 'JS' },
  { name: 'React', level: 'Interface systems', icon: 'R' },
  { name: 'Next.js', level: 'App Router builds', icon: 'N' },
  { name: 'Node.js', level: 'Server foundations', icon: 'JS' },
  { name: 'Express.js', level: 'API foundations', icon: 'EX' },
  { name: 'MongoDB', level: 'Data foundations', icon: 'DB' },
  { name: 'HTML & CSS', level: 'Accessible UI', icon: '</>' },
  { name: 'Framer Motion', level: 'Purposeful motion', icon: 'FM' },
];

export const services = [
  { title: 'Responsive Website Development', description: 'Clear, adaptable interfaces that stay useful from phone to desktop.', icon: 'layout' },
  { title: 'Modern Frontend Development', description: 'Component-led UI with polished states, strong hierarchy, and care for detail.', icon: 'sparkles' },
  { title: 'React & Next.js Applications', description: 'Practical App Router experiences with reusable structure and clean code.', icon: 'layers' },
  { title: 'API Integration', description: 'Connect frontends to useful data and services with understandable flows.', icon: 'plug' },
  { title: 'Basic Full-Stack Development', description: 'Learning-focused full-stack foundations across interfaces, APIs, and data.', icon: 'server' },
];

export const projects = [
  {
    id: 'ecoclean',
    title: 'EcoClean',
    eyebrow: 'SUSTAINABILITY CONCEPT',
    description: 'A sustainability-themed recycling web application for collection centers and users.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    image: '/images/ecoclean-preview.svg',
    alt: 'Illustrated EcoClean project preview with recycling motifs',
    liveUrl: null,
    githubUrl: null,
    tone: 'green',
  },
  {
    id: 'ecommerce',
    title: 'Full-Stack E-commerce',
    eyebrow: 'COMMERCE APPLICATION',
    description: 'A modern e-commerce application featuring product browsing, shopping experiences and administrative product management.',
    technologies: ['React / Next.js', 'Node.js', 'Express.js', 'MongoDB'],
    image: '/images/ecommerce-preview.svg',
    alt: 'Illustrated e-commerce project preview with product cards',
    liveUrl: 'https://full-stack-e-commerce-inky.vercel.app/',
    githubUrl: null,
    tone: 'blue',
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    eyebrow: 'LEARNING JOURNEY',
    description: 'A responsive personal portfolio showcasing development skills, projects and a learning journey.',
    technologies: ['Next.js', 'React', 'JavaScript', 'Framer Motion'],
    image: '/images/portfolio-preview.svg',
    alt: 'Illustrated dark developer portfolio project preview',
    liveUrl: null,
    githubUrl: null,
    tone: 'violet',
  },
];
