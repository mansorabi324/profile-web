import profilePhoto from "../assets/images/about-photo.jpg";

export const profile = {
  brand: { first: "About", second: "Me." },
  name: "Anderson Coper",
  role: "Web Developer & Designer",
  greeting: "Hello, Welcome",
  headline: "I'm Anderson Coper",
  summary:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
  email: "hello@andersoncoper.dev",
  phone: "+62 812 3456 7890",
  location: "Malang, Indonesia",
  photo: profilePhoto,
  aboutPhoto: profilePhoto,
  about: [
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    "Passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
  ],
};

export const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "service", label: "Service" },
  { id: "portfolio", label: "Portfolio" },
  { id: "experience", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export const sectionIds = navigation.map((item) => item.id);

export const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Instagram", href: "https://instagram.com" },
];
