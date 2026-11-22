const transcript =
  "https://drive.google.com/file/d/1EOxy26dnXm1QK5IypYV-bPRF_-_c0gTO/view?usp=sharing";
const speakerCertificate =
  "https://drive.google.com/file/d/1zlrQaMys5e-iZtQzIOUNXdsVdXw9ujJy/view?usp=sharing";
const headActivities =
  "https://drive.google.com/file/d/1lvMuacaVqMDp0yuTCdgTRZGU--hSAhx8/view?usp=sharing";
const colabCKDMLP =
  "https://colab.research.google.com/drive/1gXpnPxg3UCX7J-GjqjaE7v-hLVntIli5";
const lostAndFound =
  "https://github.com/mansorabi324/Lost-and-found";
const waste =
  "https://colab.research.google.com/drive/1deO5EV0o0FUZqKESZfQr9GhnJqJ49GDf";
const ttg =
  "https://drive.google.com/file/d/1lR9_vGM2XlS7a8m_FKtTh7G1nSOMEtAT/view?usp=sharing";
const ppko =
  "https://drive.google.com/drive/folders/165rT75h2PYWzsh_cFilh8C1ifGFsS61-?usp=sharing";
const reservationPPKO =
  "https://github.com/mansorabi324/Tourism-Village-Reservation";
const pkm =
  "https://drive.google.com/file/d/19p7naROwp6gG6EWdcsvQIdqG9Vqh-V1Q/view?usp=sharing";
const empPred =
  "https://colab.research.google.com/drive/1cxNr3oqUB-G3ij06G8zRB8y9DBqbZ2Ma";
const portfolioRepo =
  "https://github.com/mansorabi324/profile-web";

export const resume = [
  {
    id: "education",
    period: "Aug 2024 - Present",
    title: "B.Sc. in Informatics",
    organization: "Universitas Brawijaya, Malang",
    description:
      "GPA 3.80/4.00. Focused on Artificial Intelligence, Machine Learning, Deep Learning, and Natural Language Processing.",
    link: { label: "View", href: transcript },
  },
  {
    id: "speaker",
    period: "2025",
    title: "Speaker",
    organization: "Universitas Brawijaya",
    description:
      "Delivered a session titled “Creative Digital: Promoting Tourism Villages through Social Media” for the Student Research Association’s capacity building program.",
    link: { label: "View", href: speakerCertificate },
  },
  {
    id: "head-of-potential-development",
    period: "Feb 2026 - Present",
    title: "Head of Potential Development",
    organization: "UAKI, Universitas Brawijaya",
    description:
      "Leading the potential development division, serving as steering committee for UAKI School 1 and 2 and the Jejak Tumbuh Training, and organizing open recruitment for new staff.",
    link: { label: "View", href: headActivities },
  },
  {
    id: "waste-classification",
    period: "2026",
    title: "Waste Classification Model",
    organization: "PyTorch, MobileNetV2",
    description:
      "Developed a deep learning model using transfer learning to classify waste into organic, electronic, and recyclable categories for Satria Data.",
    link: { label: "View", href: waste },
  },
  {
    id: "ckd-classification",
    period: "2026",
    title: "Chronic Kidney Disease Classification",
    organization: "Python, Multi-Layer Perceptron",
    description:
      "Built a machine learning MLP model to classify chronic kidney disease (CKD) as part of a lecturer-led project at FILKOM UB.",
    link: { label: "View", href: colabCKDMLP },
  },
  {
    id: "employee-promotion",
    period: "2026",
    title: "Employee Promotion Prediction",
    organization: "Python, Scikit-learn",
    description:
      "Built a classification model to predict employee promotion eligibility from an HR dataset for Basic Computing Community, FILKOM UB.",
    link: { label: "View", href: empPred },
  },
  {
    id: "portfolio-web-app",
    period: "2026",
    title: "Portfolio Web App",
    organization: "React, Vite",
    description:
      "Built a responsive portfolio web app with React and Vite, featuring a dark glassmorphism UI, reusable content models, and mobile-first layouts.",
    link: { label: "View", href: portfolioRepo },
  },
  {
    id: "lost-and-found",
    period: "2025",
    title: "Lost & Found Web App",
    organization: "Laravel",
    description:
      "Built a web app to manage lost and found items, with user and admin roles, authentication, and full CRUD features.",
    link: { label: "View", href: lostAndFound },
  },
  {
    id: "reservation-app",
    period: "2025",
    title: "Tourism Village Reservation App",
    organization: "Desktop Application",
    description:
      "Built a desktop app to manage tourism village reservations, with a statistics dashboard and visitor data analysis for the Student Research Association.",
    link: { label: "View", href: reservationPPKO },
  },
  {
    id: "pkm",
    period: "2026",
    title: "PKM Substance Selection, Stage 2",
    organization: "Kemdiktisaintek RI",
    description:
      "Passed Stage 2 of the national Student Creativity Program (PKM) substance selection, after clearing the internal university selection and administrative screening.",
    link: { label: "View", href: pkm },
  },
  {
    id: "national-funding",
    period: "2025",
    title: "National Funding Recipient",
    organization: "Kemdiktisaintek RI",
    description:
      "Secured national funding and advanced to the Field Visitation stage of the Student Organization Capacity Building Program, organized by the Ministry of Higher Education, Science, and Technology.",
    link: { label: "View", href: ppko },
  },
  {
    id: "regional-innovation-award",
    period: "2023",
    title: "1st Place, Regional Innovation Award",
    organization: "Balitbangda of Lampung Province",
    description:
      "Won first place at the provincial innovation competition in the student category.",
    link: { label: "View", href: ttg },
  },
];
