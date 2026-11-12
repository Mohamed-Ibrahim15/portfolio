// Portfolio content. Live demos and GitHub are omitted until real URLs exist.

export const profile = {
  name: "Mohamed",
  role: "Front-End Developer",
  title: "React & Modern Web Developer",
  tagline:
    "I build responsive React interfaces with modern JavaScript, clear layout, and reusable components.",
  about: [
    "I am a front-end developer focused on responsive interfaces with React and modern CSS.",
    "I turn a screen into components, keep state understandable, and check the layout on small and large viewports.",
    "This page includes three projects I built to practice that work: a nutrition tracker, an online store, and a travel planner.",
  ],
  location: "Egypt",
  email: "mohamed01141660359@gmail.com",
  phone: "+201141660359",
  whatsapp: "https://wa.me/201141660359",
  socials: [
    { label: "WhatsApp", url: "https://wa.me/201141660359", icon: "whatsapp" },
    { label: "Email", url: "mailto:mohamed01141660359@gmail.com", icon: "email" },
  ],
};

export const stats = [
  { value: "3", label: "React projects on this page" },
  { value: "React", label: "Components, hooks, and routing" },
  { value: "CSS", label: "Responsive layouts" },
  { value: "Open", label: "Available for new work" },
];

export const services = [
  {
    icon: "code",
    title: "Web App Interfaces",
    desc: "Single-page interfaces in React, with reusable components and state kept in a place that is easy to follow.",
  },
  {
    icon: "layout",
    title: "Responsive Layout",
    desc: "Mobile-first screens built from a design or a rough wireframe, using Flexbox, Grid, and consistent spacing.",
  },
  {
    icon: "database",
    title: "Data on the Screen",
    desc: "Forms, lists, and client-side state, including data kept in the browser when a project needs it.",
  },
  {
    icon: "zap",
    title: "Careful UI Details",
    desc: "Semantic markup, readable type, and interactions that stay smooth without extra libraries.",
  },
];

export const skills = [
  {
    group: "Core Fundamentals",
    icon: "terminal",
    items: ["HTML5 / Semantic HTML", "CSS3 / Modern CSS", "JavaScript (ES6+)", "TypeScript basics", "DOM Manipulation"],
  },
  {
    group: "React Ecosystem",
    icon: "react",
    items: ["React.js", "React Hooks", "Redux Toolkit", "Context API", "React Router", "Vite"],
  },
  {
    group: "Styling & UI",
    icon: "palette",
    items: ["Tailwind CSS", "CSS Modules", "Responsive Design", "Flexbox & CSS Grid", "Micro-animations"],
  },
  {
    group: "Workflow & Tools",
    icon: "tool",
    items: ["Git & GitHub", "REST APIs", "npm / yarn", "Figma to Code", "Chrome DevTools", "VS Code"],
  },
];

export const projects = [
  {
    id: "nutrition-system",
    title: "Nutrition System",
    badge: "Health & Fitness",
    tagline: "Daily calorie and meal tracking interface",
    description:
      "A React screen for a daily calorie target, macronutrient bars, and a meal log. The layout is a dashboard a person can scan quickly on a phone or a laptop.",
    previewType: "nutrition",
    tags: ["React", "Context API", "Tailwind CSS", "LocalStorage"],
    highlights: [
      "Calorie target compared with intake for the day",
      "Protein, carbs, and fats shown as separate progress bars",
      "Meal row with a name and a calorie count",
      "Responsive dashboard layout",
    ],
    live: "",
    code: "",
  },
  {
    id: "e-commerce",
    title: "E-Commerce Platform",
    badge: "Storefront",
    tagline: "Product browsing, cart, and checkout UI",
    description:
      "A storefront interface with category filters, a product summary, and a cart. State for the cart is handled in Redux Toolkit so quantity and totals stay in sync.",
    previewType: "ecommerce",
    tags: ["React", "Redux Toolkit", "React Router", "Tailwind CSS"],
    highlights: [
      "Search and category filters on the catalog",
      "Product card with price, rating, and an add action",
      "Cart quantities, totals, and a stored cart in the browser",
      "Checkout form with basic validation",
    ],
    live: "",
    code: "",
  },
  {
    id: "travel-world",
    title: "Travel World",
    badge: "Travel",
    tagline: "Destination cards and a simple trip planner",
    description:
      "A travel browsing page with a destination card, trip length, and a price. The flow is meant to show how a listing and a booking summary can sit on one responsive screen.",
    previewType: "travel",
    tags: ["React", "CSS Modules", "Vite"],
    highlights: [
      "Destination card with location, stay length, and price",
      "Trip summary a visitor can scan before booking",
      "Booking details collected in a short form",
      "Layout that stacks cleanly on a narrow screen",
    ],
    live: "",
    code: "",
  },
];

export const experience = [
  {
    period: "2025 — Present",
    role: "Front-End Developer",
    company: "Personal projects",
    location: "Remote · Egypt",
    summary:
      "Building React interfaces and practicing how a small product is structured, from layout to client-side state.",
    achievements: [
      "Built the Nutrition System, E-Commerce, and Travel World projects shown on this page.",
      "Practiced layout, labels, and actions that stay easy to find on the screen.",
      "Checked how each screen behaves on a narrow viewport.",
    ],
  },
  {
    period: "2023 — 2025",
    role: "Self-taught Front-End",
    company: "Independent study",
    location: "Egypt",
    summary:
      "Learned JavaScript, React, and CSS by following documentation and rebuilding small interfaces.",
    achievements: [
      "Practiced React Hooks, Context, Redux Toolkit, and React Router.",
      "Learned responsive layout with Flexbox, Grid, and Tailwind CSS.",
      "Used Git locally and Vite for day-to-day development.",
    ],
  },
];
