const drive =
  "https://drive.google.com/drive/folders/1H-oMM6aJ3pr0lQHGLq1iUfFnDr8Iwog7?usp=sharing";
const colab =
  "https://colab.research.google.com/drive/1EOCzU0TKsLzicJd4xke96-6GJP6safBg?usp=sharing";
const github = "https://github.com/mansorabi324";

export const resume = [
  {
    id: "education",
    period: "Aug 2024 - Present",
    title: "B.Sc. in Informatics",
    organization: "Universitas Brawijaya, Malang",
    description:
      "GPA 3.80/4.00. Focused on Artificial Intelligence, Machine Learning, Deep Learning, and Natural Language Processing.",
    link: { label: "View Transcript", href: drive },
  },
  {
    id: "speaker",
    period: "2025",
    title: "Speaker",
    organization: "Universitas Brawijaya",
    description:
      "Delivered a session titled “Creative Digital: Promoting Tourism Villages through Social Media” for the Student Research Association’s capacity building program.",
    link: { label: "View Certificate", href: drive },
  },
  {
    id: "head-of-potential-development",
    period: "Feb 2026 - Present",
    title: "Head of Potential Development",
    organization: "UAKI, Universitas Brawijaya",
    description:
      "Leading the potential development division, serving as steering committee for UAKI School 1 and 2 and the Jejak Tumbuh Training, and organizing open recruitment for new staff.",
    link: { label: "View Certificate", href: drive },
  },
  {
    id: "waste-classification",
    period: "2026",
    title: "Waste Classification Model",
    organization: "PyTorch, MobileNetV2",
    description:
      "Developed a deep learning model using transfer learning to classify waste into organic, electronic, and recyclable categories for Satria Data.",
    link: { label: "View Notebook", href: colab },
  },
  {
    id: "ckd-classification",
    period: "2026",
    title: "Chronic Kidney Disease Classification",
    organization: "Python, Multi-Layer Perceptron",
    description:
      "Built a machine learning MLP model to classify chronic kidney disease (CKD) as part of a lecturer-led project at FILKOM UB.",
    link: { label: "View Notebook", href: colab },
  },
  {
    id: "employee-promotion",
    period: "2026",
    title: "Employee Promotion Prediction",
    organization: "Python, Scikit-learn",
    description:
      "Built a classification model to predict employee promotion eligibility from an HR dataset for Basic Computing Community, FILKOM UB.",
    link: { label: "View Notebook", href: colab },
  },
  {
    id: "lost-and-found",
    period: "2025",
    title: "Lost & Found Web App",
    organization: "Laravel",
    description:
      "Built a web app to manage lost and found items, with user and admin roles, authentication, and full CRUD features.",
    link: { label: "View on GitHub", href: github },
  },
  {
    id: "reservation-app",
    period: "2025",
    title: "Tourism Village Reservation App",
    organization: "Desktop Application",
    description:
      "Built a desktop app to manage tourism village reservations, with a statistics dashboard and visitor data analysis for the Student Research Association.",
    link: { label: "View on GitHub", href: github },
  },
  {
    id: "healthy-menu-app",
    period: "2024",
    title: "Healthy Menu Recommendation App",
    organization: "React, Node.js",
    description:
      "Built an app that recommends healthy meals with step-by-step recipes, plus a BMI checker to help users plan their diet.",
    link: { label: "View Project", href: github },
  },
  {
    id: "pkm",
    period: "2026",
    title: "PKM Substance Selection, Stage 2",
    organization: "Kemdiktisaintek RI",
    description:
      "Passed Stage 2 of the national Student Creativity Program (PKM) substance selection, after clearing the internal university selection and administrative screening.",
    link: { label: "View Certificate", href: drive },
  },
  {
    id: "national-funding",
    period: "2025",
    title: "National Funding Recipient",
    organization: "Kemdiktisaintek RI",
    description:
      "Secured national funding and advanced to the Field Visitation stage of the Student Organization Capacity Building Program, organized by the Ministry of Higher Education, Science, and Technology.",
    link: { label: "View Certificate", href: drive },
  },
  {
    id: "regional-innovation-award",
    period: "2023",
    title: "1st Place, Regional Innovation Award",
    organization: "Balitbangda of Lampung Province",
    description:
      "Won first place at the provincial innovation competition in the student category.",
    link: { label: "View Certificate", href: drive },
  },
];
