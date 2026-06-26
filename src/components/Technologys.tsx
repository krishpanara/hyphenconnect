"use client";

import {
  Brain,
  Cpu,
  Database,
  Globe,
  Boxes,
  Bot,
  Server,
  Code2,
  Layers3,
  Workflow,
} from "lucide-react";

const categories = [
  {
    title: "AI Models",
    icon: Brain,
    technologies: [
      "OpenAI GPT",
      "Claude API",
      "Gemini",
      "Llama",
      "DeepSeek",
      "Mistral",
    ],
  },
  {
    title: "Frameworks",
    icon: Workflow,
    technologies: [
      "LangChain",
      "CrewAI",
      "Ollama",
      "LlamaIndex",
      "MCP",
      "AutoGen",
    ],
  },
  {
    title: "Backend & DB",
    icon: Database,
    technologies: [
      "Python",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Pinecone",
      "Weaviate",
    ],
  },
  {
    title: "Frontend & DevOps",
    icon: Globe,
    technologies: [
      "React",
      "Next.js",
      "Docker",
      "FastAPI",
      "Redis",
      "Kubernetes",
    ],
  },
];

const iconMap: Record<string, any> = {
  "OpenAI GPT": Bot,
  "Claude API": Brain,
  Gemini: Cpu,
  Llama: Boxes,
  DeepSeek: Server,
  Mistral: Layers3,

  LangChain: Workflow,
  CrewAI: Workflow,
  Ollama: Bot,
  LlamaIndex: Boxes,
  MCP: Cpu,
  AutoGen: Brain,

  Python: Code2,
  "Node.js": Server,
  PostgreSQL: Database,
  MongoDB: Database,
  Pinecone: Database,
  Weaviate: Database,

  React: Globe,
  "Next.js": Globe,
  Docker: Boxes,
  FastAPI: Server,
  Redis: Database,
  Kubernetes: Layers3,
};

export default function TechStackSection() {
  return (
    <section className="bg-white py-24 overflow-hidden" style={{ padding: '30px 0' }}>

      <div style={{ maxWidth: '1280px', margin: '48px auto 48px', padding: '0 80px', textAlign: 'center' }}>

        <div style={{ textAlign: 'center', maxWidth: '896px', margin: '0 auto' }}>

          <span className="text-sky-600 font-semibold uppercase tracking-wider" style={{ display: 'block', marginBottom: '20px' }}>
            Powered by Cutting-Edge AI
          </span>

          <h2 className="mt-14 text-4xl lg:text-5xl font-bold text-slate-900" style={{ marginBottom: '20px' }}>
            Built With Industry-Leading Technologies
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8" style={{ marginBottom: '20px' }}>
            We work with the best AI models, frameworks, and infrastructure
            to build robust, scalable solutions.
          </p>

        </div>

        <div className="mt-20 space-y-10">

          {categories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <div key={index}>

                <div className="flex items-center justify-center gap-3 mb-6">

                  <CategoryIcon
                    className="text-sky-500"
                    size={22}
                  />

                  <h3 className="text-2xl font-bold text-slate-900">
                    {category.title}
                  </h3>

                </div>

                {/* Marquee */}

                <div className="relative">

                  {/* Fade */}

                  <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-20" />

                  <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-20" />

                  <div className="group overflow-hidden">

                    <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">

                      {[...category.technologies, ...category.technologies].map(
                        (tech, i) => {
                          const Icon = iconMap[tech];

                          return (
                            <div
                              key={i}
                              style={{ margin: '12px 20px' }}
                              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-7 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:shadow-xl"
                            >
                              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50">
                                <Icon
                                  className="text-sky-600"
                                  size={22}
                                />
                              </div>

                              <div>
                                <p className="text-lg font-semibold text-slate-900">
                                  {tech}
                                </p>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

        <p className="mt-16 text-center text-lg text-slate-500" style={{ marginTop: '48px' }}>
          Don't see your tech stack?
          <span className="font-semibold text-sky-600">
            {" "}
            We integrate with virtually any system.
          </span>
        </p>

      </div>

    </section>
  );
}