import profilePhoto from "../assets/images/profile-photo.jpg";
import aboutPhoto from "../assets/images/about-photo.jpg";

export const profile = {
  brand: { first: "About", second: "Me." },
  name: "Naufal Abiyyu",
  role: "Web Developer & Designer",
  greeting: "Hello, Welcome",
  headline: "I'm Naufal Abiyyu",
  summary:
    "Informatics student at Brawijaya University focused on Machine Learning, Deep Learning, and Data Science. I enjoy turning data into models that solve real-world problems.",
  email: "naufalabiyyuarhab@gmail.com",
  phone: "+62 857 6951 9721",
  location: "Malang, Indonesia",
  photo: profilePhoto,
  aboutPhoto: aboutPhoto,
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
