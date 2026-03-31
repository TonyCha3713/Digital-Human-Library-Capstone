export const navItems = [
  { label: "Home", href: "/" },
  { label: "K-12", href: "/k-12" },
  { label: "Higher Education", href: "/higher-education" },
  { label: "Public Libraries", href: "/public-libraries" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Getting Started", href: "/getting-started" },
  { label: "Our Impact / Research", href: "/our-impact-research" },
  { label: "Sponsor a School", href: "/sponsor-a-school" },
  { label: "Apply for Partnership", href: "/apply-for-partnership" },
];

export const footerLinks = [
  { label: "Pricing (Draft)", href: "/pricing" },
  { label: "K-12", href: "/k-12" },
  { label: "Higher Education", href: "/higher-education" },
  { label: "Public Libraries", href: "/public-libraries" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Research / Impact", href: "/our-impact-research" },
];

export const serviceRoutes = [
  "virtual-classrooms",
  "virtual-tours-vr",
  "implementation-services",
  "higher-ed-learning-services",
  "bed-learning-services",
  "public-library-learning-services",
] as const;

export const audienceServices = {
  "k-12": [
    {
      title: "Virtual Classrooms",
      copy: "Connect classrooms to experts around the world through live, interactive sessions that spark curiosity and expand perspective.",
      href: "/services/virtual-classrooms",
    },
    {
      title: "Virtual Tours & VR",
      copy: "Bring immersive place-based learning to students through guided virtual tours and technology-enhanced storytelling.",
      href: "/services/virtual-tours-vr",
    },
    {
      title: "Implementation Services",
      copy: "Support educators with implementation coaching, planning tools, and practical frameworks for curriculum alignment.",
      href: "/services/implementation-services",
    },
  ],
  "higher-education": [
    {
      title: "Higher Education Learning Services",
      copy: "Extend learning beyond the classroom with professional experts, global insights, and experiential learning modules.",
      href: "/services/higher-ed-learning-services",
    },
    {
      title: "B.Ed Learning Services",
      copy: "Equip future educators with practical experiences that model real-world, relationship-centered virtual pedagogy.",
      href: "/services/bed-learning-services",
    },
  ],
  "public-libraries": [
    {
      title: "Public Library Learning Services",
      copy: "Deliver inclusive community learning programs that engage children, adults, and seniors through live virtual experiences.",
      href: "/services/public-library-learning-services",
    },
  ],
};

export const testimonials = [
  {
    quote:
      "Our students asked deeper questions than ever before. The experience made the world feel close and reachable.",
    name: "Grade 7 Teacher, Ontario",
  },
  {
    quote:
      "dHL helps us deliver meaningful experiential learning without major travel costs. It is practical and inspiring.",
    name: "Higher Education Faculty Member",
  },
  {
    quote:
      "Families and seniors joined programs together at our branch, and the engagement was incredible.",
    name: "Public Library Program Lead",
  },
];

export const stats = [
  { value: "250,000", label: "Educators" },
  { value: "2,075,000", label: "Student Impressions" },
  { value: "84,000", label: "Live Programs Delivered" },
];
