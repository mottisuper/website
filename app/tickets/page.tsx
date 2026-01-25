"use client";

import { useState } from "react";

interface PersonCard {
  name: string;
  position: string;
  missions: string[];
  talks: string[];
  emoji: string;
}

const personCards: PersonCard[] = [
  {
    name: "Alex Johnson",
    position: "Senior Data Engineer",
    missions: [
      "Data Pipeline Optimization",
      "ETL Process Design",
      "Cloud Infrastructure",
    ],
    talks: [
      "Data Engineering Best Practices",
      "Scalable Architecture Patterns",
    ],
    emoji: "🚀",
  },
  {
    name: "Sarah Chen",
    position: "Machine Learning Scientist",
    missions: ["Model Development", "Feature Engineering", "A/B Testing"],
    talks: ["Deep Learning Applications", "ML in Production"],
    emoji: "🧠",
  },
  {
    name: "Michael Rodriguez",
    position: "Full Stack Developer",
    missions: ["Frontend Development", "API Design", "Database Optimization"],
    talks: ["React Performance", "Modern Web Development"],
    emoji: "💻",
  },
  {
    name: "Emily Watson",
    position: "Product Manager",
    missions: ["Product Strategy", "User Research", "Roadmap Planning"],
    talks: ["Product-Market Fit", "Agile Methodologies"],
    emoji: "📊",
  },
  {
    name: "David Kim",
    position: "DevOps Engineer",
    missions: [
      "CI/CD Pipeline",
      "Infrastructure as Code",
      "Monitoring Systems",
    ],
    talks: ["Kubernetes Deep Dive", "Cloud Security"],
    emoji: "⚙️",
  },
  {
    name: "Lisa Anderson",
    position: "UX Designer",
    missions: ["User Experience Design", "Prototyping", "Design Systems"],
    talks: ["Design Thinking", "Accessibility in Design"],
    emoji: "🎨",
  },
  {
    name: "James Wilson",
    position: "Backend Architect",
    missions: [
      "System Architecture",
      "Microservices Design",
      "Performance Optimization",
    ],
    talks: ["Distributed Systems", "Database Scaling"],
    emoji: "🏗️",
  },
  {
    name: "Maria Garcia",
    position: "Data Analyst",
    missions: ["Data Visualization", "Statistical Analysis", "Reporting"],
    talks: ["Data Storytelling", "Business Intelligence"],
    emoji: "📈",
  },
  {
    name: "Robert Taylor",
    position: "Security Specialist",
    missions: ["Security Audits", "Threat Analysis", "Compliance"],
    talks: ["Cybersecurity Trends", "Zero Trust Architecture"],
    emoji: "🔒",
  },
  {
    name: "Jennifer Lee",
    position: "QA Engineer",
    missions: ["Test Automation", "Quality Assurance", "Bug Tracking"],
    talks: ["Testing Strategies", "Continuous Testing"],
    emoji: "✅",
  },
];

export default function TicketsPage() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate cards for seamless infinite scroll
  const duplicatedCards = [...personCards, ...personCards];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 font-sans py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-light text-zinc-50 mb-12 text-center">
          Ticket Intake
        </h1>

        <div className="relative overflow-hidden">
          <div
            className={`flex gap-6 ${isPaused ? "animate-scroll-horizontal-paused" : "animate-scroll-horizontal"}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedCards.map((person, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-6 hover:bg-zinc-900/70 transition-all duration-300 hover:border-zinc-700"
              >
                <div className="text-6xl mb-4 text-center">{person.emoji}</div>
                <h2 className="text-2xl font-medium text-zinc-50 mb-2">
                  {person.name}
                </h2>
                <p className="text-lg text-zinc-400 mb-4">{person.position}</p>

                <div className="mb-4">
                  <h3 className="text-sm font-medium text-zinc-300 mb-2">
                    Missions:
                  </h3>
                  <ul className="space-y-1">
                    {person.missions.map((mission, idx) => (
                      <li key={idx} className="text-sm text-zinc-400">
                        • {mission}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-300 mb-2">
                    Talks:
                  </h3>
                  <ul className="space-y-1">
                    {person.talks.map((talk, idx) => (
                      <li key={idx} className="text-sm text-zinc-400">
                        • {talk}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
