export const PERSONAL_INFO = {
  name: 'Manapov Bayel',
  title: 'Frontend / React Developer',
  tagline: 'Clean Code. Bold Architecture. Pixel-Perfect UIs.',
  email: 'bayel.dev@gmail.com',
  github: 'https://github.com/bayel-dev',
  linkedin: 'https://linkedin.com/in/bayel-dev',
  telegram: 'https://t.me/bayel_dev',
  telegramHandle: '@bayel_dev',
}

export const ABOUT_TEXT = {
  bio: [
    "I'm a 3rd-year Computer Science student at Ala-Too International University in Bishkek, on a journey that started with competitive programming in C++ and evolved into a passion for high-end frontend engineering.",
    "My path has taken me through the worlds of hardware (Arduino), mobile development (Flutter & Dart), and now I've found my true home crafting immersive web experiences with React. I believe great software is an intersection of clean architecture, beautiful design, and meticulous attention to detail.",
    "When I'm not building the web, you'll find me debugging life alongside my cat 🐱 — or occasionally wondering if cats and recursion have something in common.",
  ],
  stats: [
    { value: '2+', label: 'Years CP Experience', icon: '🏆' },
    { value: '10+', label: 'Projects Shipped', icon: '🚀' },
    { value: '3rd', label: 'Year CS Student', icon: '🎓' },
    { value: '∞', label: 'Passion for Code', icon: '💜' },
  ],
}

export const PROJECTS = [
  {
    id: 1,
    title: 'Student Management System',
    description:
      'A full-featured student management platform with role-based access control, real-time grade tracking, attendance management, and CRUD operations. Built with a clean RESTful API backend and a responsive React frontend.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/bayel-dev',
    demo: null,
    featured: true,
    gradient: 'from-violet-600 to-indigo-600',
    icon: '📚',
  },
  {
    id: 2,
    title: 'Smart Light Control via BLE',
    description:
      'An IoT system for controlling LED lighting via Bluetooth Low Energy. Features include custom color palettes, brightness control, and scheduling — all managed through a Flutter mobile app communicating with an Arduino microcontroller.',
    tech: ['Arduino', 'C++', 'Flutter', 'Bluetooth LE'],
    github: 'https://github.com/bayel-dev',
    demo: null,
    featured: true,
    gradient: 'from-cyan-500 to-blue-600',
    icon: '💡',
  },
  {
    id: 3,
    title: 'E-Commerce MVP',
    description:
      'A minimal viable e-commerce platform with a dynamic product catalog, persistent shopping cart, user authentication, and a complete checkout flow integrated with Stripe for payments and Firebase for real-time data sync.',
    tech: ['React', 'Firebase', 'Stripe API', 'Tailwind CSS'],
    github: 'https://github.com/bayel-dev',
    demo: null,
    featured: true,
    gradient: 'from-rose-500 to-pink-600',
    icon: '🛍️',
  },
]

export const SKILLS = {
  Frontend: [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 75 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'Framer Motion', level: 80 },
    { name: 'Next.js', level: 72 },
  ],
  Mobile: [
    { name: 'Flutter', level: 82 },
    { name: 'Dart', level: 80 },
    { name: 'React Native', level: 65 },
  ],
  Tools: [
    { name: 'Git', level: 88 },
    { name: 'GitHub', level: 88 },
    { name: 'VS Code', level: 95 },
    { name: 'Figma', level: 75 },
    { name: 'Firebase', level: 78 },
    { name: 'Arduino', level: 70 },
    { name: 'Docker', level: 60 },
    { name: 'Linux', level: 72 },
  ],
  Languages: [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 75 },
    { name: 'C++', level: 85 },
    { name: 'Dart', level: 80 },
    { name: 'Python', level: 70 },
  ],
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const SKILL_CATEGORY_ICONS = {
  Frontend: '⚛️',
  Mobile: '📱',
  Tools: '🛠️',
  Languages: '💻',
}
