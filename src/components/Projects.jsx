import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-500">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          <ProjectCard
           link="https://shugic.com/"
            image="/nextjs nestJs AI.png"
            // title="E-Commerce Platform"
            // description="A modern e-commerce solution with real-time inventory management, secure payment integration, and responsive design."
            tags={["Next.js", "Node.js", "PostgreSQL", "Stripe"]}
          />

          <ProjectCard
          link="https://zapackbags.com "
            image="/React and Node.png"
            // title="Task Management App"
            // description="Collaborative task management tool with drag-and-drop interface, team collaboration features, and real-time updates."
            tags={["Node.js", "React",  "Tailwind CSS"]}
          />

          <ProjectCard
          link="https://www.kindertales.com"
            image="/React1.png"
            // title="Mobile Fitness Tracker"
            // description="Cross-platform mobile app for tracking workouts, setting goals, and monitoring progress with beautiful data visualizations."
            tags={["React", "MongoDB", "Express", ]}
          />

          <ProjectCard
            link="https://auth.balltime.com"
            image="/React2.png"
            // title="Analytics Dashboard"
            // description="Real-time analytics dashboard with interactive charts, custom reports, and data export functionality."
            tags={["React","Python", "FastAPI"]}
          />

        </div>
      </div>
    </section>
  );
}

/* Reusable Card Component */
function ProjectCard({ image, title, description, tags ,link}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 hover:-translate-y-1">

      {/* Image */}
      <a  href={link}>
        <div className="h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>
      </a>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-xl font-semibold mb-3">
          {title}
        </h3>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-rose-100 text-rose-500 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {/* <div className="flex items-center gap-6 text-sm">
          <a
            href="#"
            className="flex items-center gap-2 text-rose-500 hover:underline"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>

          <a
            href="#"
            className="flex items-center gap-2 text-gray-600 hover:text-black"
          >
            <Github size={16} />
            Source Code
          </a>
        </div> */}

      </div>
    </div>
  );
}