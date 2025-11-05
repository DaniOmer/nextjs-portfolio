import images from "@/constantes/images";

const data = [
  {
    title: "Parking Booking App",
    description:
      "A web platform that allows users to find, reserve, and pay for parking spots in real time. Includes location-based search, secure payment integration, and live spot availability tracking.",
    technologies: ["Next.js", "TailwindCSS", "Supabase", "Stripe", "Vercel"],
    image: images.Banner,
  },
  {
    title: "Salon Hair Booking App",
    description:
      "An online appointment management system for beauty salons and barbers. Features include user authentication, staff scheduling, payment processing, and automated reminders for clients.",
    technologies: ["React", "Node.js", "Supabase", "TailwindCSS"],
    image: images.Banner,
  },
  {
    title: "Stock Management App",
    description:
      "A full-featured inventory management system designed for small and medium businesses. Enables real-time tracking of products, supplier management, and automated stock alerts.",
    technologies: ["React Native", "Django", "PostgreSQL", "AWS Amplify"],
    image: images.Banner,
  },
  {
    title: "AI-Powered Chat Assistant",
    description:
      "A smart virtual assistant that leverages natural language processing to answer user questions, automate workflows, and assist with everyday tasks using OpenAI’s API.",
    technologies: ["Next.js", "FastAPI", "OpenAI API", "Redis"],
    image: images.Banner,
  },
];

export default data;
