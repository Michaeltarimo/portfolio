import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Michael Tarimo",
  initials: "Dr",
  url: "https://tarimo.vercel.app",
  location: "Dar es salaam, TZ",
  locationLink: "https://maps.app.goo.gl/dS4qGRDDq3FrV8A99",
  description:
    "Medical Doctor turned Health Tech Entrepreneur. Driven by the goal of integrating technology with healthcare to improve patient care and clinical research. Always learning, building, and reaching for solutions.",
  summary:
    "At the end of 2023, I shifted my focus from clinical practice to building innovative health tech solutions full-time. In the past, [I pursued my medical degree in Tanzania](/#education), [led multiple health outreach programs across the country](/#community-involvement), and [taught myself software development to solve healthcare challenges](/#skills). I’m currently working on scaling [Rezour](https://rezour.com), a startup I founded to automate clinical research and optimize patient data management using AI-driven solutions.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "ReactNative",
    "Next.js",
    "Expo Go",
    "Node.js",
    "Linux",
    "MongoDB",
    "Prisma",
    "Javascript",
    "Python",
    "Tailwindcss",
  ],
  clinicalskills: [
    "Physical Examinations",
    "Diagnostic Skills",
    "Treatment Planning",
    "Patient Management",
    "Emergency Care",
    "Patient Education",
    "Cultural Competence",
    "Ethical Practice",
    "Interprofessional Collaboration",
    "Lifelong Learning"
  ],
  researchskills: [
    "Clinical Trial Design",
    "Data Collection and Analysis",
    "Statistical Methods",
    "Patient Recruitment",
    "Regulatory Compliance",
    "Publication and Presentation of Findings",
    "Literature Review",
    "Protocol Development",
    "Grant Writing",
    "Collaborative Research"
  ],
  outreachskills: [
    "Community Engagement",
    "Health Education Workshops",
    "Screening Programs",
    "Collaboration with NGOs",
    "Advocacy for Health Initiatives",
    "Cultural Sensitivity in Outreach",
    "Needs Assessment",
    "Public Speaking",
    "Partnership Development",
    "Program Evaluation"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "michael@rezour.com",
    tel: "+255767644497",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/michaeltarimo",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/dr-michael-tarimo",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/gutoshix",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@michaeltarimo1930",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Rezour Inc",
      href: "https://rezour.com",
      badges: [],
      location: "Remote",
      title: "Founder/Dev",
      logoUrl: "/rezour.png",
      start: "Sept 2024",
      end: "Current",
      description:
        "Architected and wrote the entire MVP of Rezour using Next.js, Prisma, Neon, and D3.js for real-time data visualization. Integrated OpenAI API for AI-driven research tasks, FHIR.js for healthcare data interoperability, and implemented unit testing with Jest and CI/CD pipelines using GitHub Actions."
    },
    {
      company: "Momentam Ltd",
      href: "https://momentam.io",
      badges: [],
      location: "Remote",
      title: "Senior Software Developer",
      logoUrl: "/momentam.png",
      start: "Aug 2024",
      end: "Current",
      description:
        "Architected and developed mobile applications for photographers and clients using React Native, NativeWind, and the Expo Go framework. Integrated secure data storage solutions with Appwrite and Firebase. Designed and launched the web application and administration system with Next.js, utilizing Prisma for database management in Neon."
    },
    {
      company: "Amana Regional Referral Hospital",
      href: "http://amanarrh.go.tz/",
      badges: [],
      location: "Dar es salaam, Tanzania",
      title: "Medical Doctor",
      logoUrl: "/amana.png",
      start: "Apr 2023",
      end: "May 2024",
      description:
        "Provided comprehensive patient care as a general practitioner, performing physical exams, managing chronic conditions with tailored care plans, and ensuring continuity of care through coordination with specialists. Emphasized early detection of health issues via routine screenings while staying updated on medical advancements through professional development."
    },
    {
      company: "Kilimanjaro Christian Medical Center",
      href: "https://www.kcmc.ac.tz/",
      badges: [],
      location: "Moshi, Tanzania",
      title: "Medical Doctor",
      logoUrl: "/kcmc.png",
      start: "Nov 2022",
      end: "Apr 2023",
      description:
        "Delivered holistic patient care in a general practitioner role, conducting thorough physical examinations and developing individualized care plans for chronic condition management. Fostered effective communication and collaboration with specialists to maintain seamless patient care. Prioritized early intervention through regular health screenings and committed to ongoing professional growth by engaging in workshops and medical education."
    },

  ],
  education: [
    {
      school: "Muhimbili University of Health & Allied Science (MUHAS)",
      href: "https://muhas.ac.tz/",
      degree: "Doctor of Medicine",
      logoUrl: "/muhas.png",
      start: "2017",
      end: "2022",
    },
    {
      school: "Kibaha Secondary School",
      href: "https://www.kec.or.tz/",
      degree: "Advanced Certificate of Secondary Education Examination (ACSEE)",
      logoUrl: "/kibaha.png",
      start: "2015",
      end: "2017",
    },
    {
      school: "Christ the King Sec School",
      href: "https://maps.app.goo.gl/G7HYxtYZ3a7ZcCBj9",
      degree: "Certificate of Secondary Education Examination (CSEE)",
      logoUrl: "/ctk.png",
      start: "2012",
      end: "2014",
    },
    {
      school: "St Francis De Sales Seminary",
      href: "https://msfs-eastafrica.com/",
      degree: "Aspirant class - English & Bible knowledge",
      logoUrl: "/msfs.png",
      start: "2010",
      end: "2012",
    },
  ],
  projects: [
    {
      title: "Automated Research Co-pilot",
      href: "https://rezour.com",
      dates: "Aug 2024 - Dec 2024",
      active: true,
      description:
        "With recent AI advancements, I'm building Rezour, an automated SaaS platform that streamlines clinical study management. Using [OpenAI GPT](https://openai.com/), Rezour simplifies data collection and enhances collaboration among healthcare professionals.",
      technologies: [
        "Next.js",
        "JavaScript",
        "PostgreSQL (Neon)",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Clerk Auth",
        "OpenAI API"
      ],
      links: [
        {
          type: "Website",
          href: "https://rezour.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rezourlab",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/vids/rezour_demo.mp4",
    },
    {
      title: "Tanapa UI",
      href: "https://tanapa.vercel.app",
      dates: "March - April 2024",
      active: true,
      description:
        "Developed a fully functional website from a well-prepared UI for TANAPA. Delivered a responsive and interactive user experience with optimized performance.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "DaisyUI",
        "Vercel",
        "JavaScript",
        "React Query",
        "ESLint",
        "Prettier",
      ],
      links: [
        {
          type: "Website",
          href: "https://tanapa.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/vids/tanapa_demo.mp4",
    },
    {
      title: "Momentam",
      href: "https://momentam.io",
      dates: "August 2024 - current",
      active: true,
      description:
        "Architected & Developed mobile apps for photographers & clients live requests. Book, schedule and get your photos all in your app.",
      technologies: [
        "React Native",
        "JavaScript",
        "Expo Go",
        "Appwrite",
        "Nativewind",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://momentam.io",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/momentamtech",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/vids/photographer_demo.mp4",
    },
    {
      title: "CEOs Forum",
      href: "https://ceosforum.tz",
      dates: "July 2024 - August 2024",
      active: true,
      description:
        "Developed a website for CEOs forum, another gig for a client",
      technologies: [
        "HTML",
        "JavaScript",
        "PHP",
        "Mysql",
        "TailwindCSS",
        "Linux",
      ],
      links: [
        {
          type: "Website",
          href: "https://ceosforum.tz",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/vids/ceosforum_demo.mp4",
    },
  ],
  hackathons: [
    {
      title: "Binary Labs",
      dates: "May, 2024",
      location: "Dar es salaam, Tanzania",
      description:
        "Developed a telemedicine chatbot for triage and patient consultations",
      image:
        "/hackathon.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    
    {
      title: "Post operative woundcare",
      dates: "July, 2021 - May, 2022",
      location: "Muhimbili National Hospital",
      description:
        "Wrote a research paper report on knowledge & practice regarding post op woundcare and trends of SSI at MNH",
      image:
        "/research.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Michaeltarimo/research/blob/main/Practice%20trends-Post-op%20woundcare%20(MNH).pdf",
        },
      ],
    },
  ],
} as const;
