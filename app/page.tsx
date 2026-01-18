export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-950 via-black to-zinc-900 font-sans">
      <main className="flex flex-col items-center justify-center px-6 py-16 text-center">
        {/* Robot Avatar */}
        <div className="mb-8 transition-transform duration-300 hover:scale-105">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-700/30 to-transparent blur-3xl"></div>
            <div className="relative z-10 text-8xl sm:text-9xl drop-shadow-[0_0_30px_rgba(244,244,245,0.3)]">
              🤖
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-5xl font-light tracking-tight text-zinc-50 sm:text-6xl md:text-7xl transition-opacity duration-300">
          Motti Aronsohn
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-zinc-400 sm:text-2xl md:text-3xl font-light tracking-wide transition-opacity duration-300 mb-16">
          Data Science & Fullstack Developer
        </p>

        {/* Projects Section */}
        <div className="w-full max-w-4xl mt-16">
          <h2 className="text-3xl font-light text-zinc-50 mb-8 text-center">Projects</h2>
          <div className="space-y-6">
            {[
              {
                name: "Predictive Analytics Platform",
                technologies: ["MLFLOW", "Python", "React", "PostgreSQL"],
                description: "A comprehensive machine learning platform for building and deploying predictive models with automated experiment tracking and model versioning."
              },
              {
                name: "Real-time Dashboard System",
                technologies: ["HTML+CSS", "JavaScript", "WebSocket", "D3.js"],
                description: "Interactive data visualization dashboard with real-time updates and customizable widgets for monitoring business metrics."
              },
              {
                name: "NLP Sentiment Analyzer",
                technologies: ["Python", "TensorFlow", "FastAPI", "Docker"],
                description: "Natural language processing service that analyzes sentiment and emotion from text data with RESTful API integration."
              },
              {
                name: "E-commerce Analytics Suite",
                technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
                description: "Full-stack application for tracking e-commerce performance with advanced filtering, reporting, and data export capabilities."
              },
              {
                name: "Computer Vision Pipeline",
                technologies: ["PyTorch", "OpenCV", "MLFLOW", "Kubernetes"],
                description: "Scalable image recognition system with automated model training, evaluation, and deployment workflows."
              },
              {
                name: "Data Pipeline Orchestrator",
                technologies: ["Python", "Apache Airflow", "PostgreSQL", "Redis"],
                description: "ETL pipeline management tool for scheduling, monitoring, and managing complex data workflows across multiple systems."
              },
              {
                name: "Responsive Portfolio Website",
                technologies: ["HTML+CSS", "JavaScript", "Next.js", "Tailwind CSS"],
                description: "Modern, responsive web application showcasing projects and skills with smooth animations and mobile-first design."
              }
            ].map((project, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-6 hover:bg-zinc-900/70 transition-all duration-300 hover:border-zinc-700"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-medium text-zinc-50 mb-2 sm:mb-0">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
