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
    "I’ve built classification models using Python, PyTorch, and Scikit-learn, including a waste classifier and a chronic kidney disease predictor.",
    "Beyond coding, I’m actively involved in campus organizations and have received national-level funding for student programs.",
  ],
};

export const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "highlights", label: "Highlights" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export const sectionIds = navigation.map((item) => item.id);

export const socials = [
  { label: "GitHub", href: "https://github.com/mansorabi324" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/naufal-abiyyu-arhab-4893ab322/",
  },
  { label: "Instagram", href: "https://www.instagram.com/abiyyu.arhab.1/" },
];
