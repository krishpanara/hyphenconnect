"use client";

const categories = [
  {
    title: "AI Models",
    technologies: [
      {
        name: "OpenAI GPT", bg: "#000",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.01 14.463A4.501 4.501 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.12 7.2a.076.076 0 0 1 .071 0l4.816 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.394-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.816-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>,
      },
      {
        name: "Claude API", bg: "#CC785C",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M17.304 1.273L10.866 19.88l2.4.002 1.595-4.6h5.48l1.594 4.6H24L17.304 1.273zm0 5.21l2.14 6.504h-4.28l2.14-6.503zM0 19.878l4.87-9.15L1.705 4.12h2.668l2.106 4.613L8.574 4.12h2.614L7.97 10.704 12.79 19.88H9.975L6.477 13.11 2.814 19.879H0z"/></svg>,
      },
      {
        name: "Gemini", bg: "#fff",
        logo: <svg viewBox="0 0 24 24" width="20" height="20"><defs><linearGradient id="gem" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#4285F4"/><stop offset="100%" stopColor="#9B72CB"/></linearGradient></defs><path d="M12 22C12 22 4 16.4 4 10.5 4 6.36 7.58 3 12 3s8 3.36 8 7.5C20 16.4 12 22 12 22z" fill="url(#gem)"/><ellipse cx="12" cy="10.5" rx="7" ry="3.5" fill="none" stroke="#4285F4" strokeWidth="1.5" transform="rotate(90 12 10.5)"/></svg>,
      },
      {
        name: "Llama (Meta)", bg: "#0081FB",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M6.5 2C4.567 2 3 3.567 3 5.5v4C3 11.433 4.567 13 6.5 13S10 11.433 10 9.5v-4C10 3.567 8.433 2 6.5 2zm11 0C15.567 2 14 3.567 14 5.5v4c0 1.933 1.567 3.5 3.5 3.5S21 11.433 21 9.5v-4C21 3.567 19.433 2 17.5 2zM6.5 15C4.567 15 3 16.567 3 18.5S4.567 22 6.5 22c1.17 0 2.208-.575 2.841-1.453C10.025 21.34 11.44 22 13 22h.5c2.485 0 4.5-2.015 4.5-4.5S15.985 13 13.5 13H13c-1.56 0-2.975.66-3.659 1.547C8.708 13.57 7.67 15 6.5 15z"/></svg>,
      },
      {
        name: "DeepSeek", bg: "#4A6CF7",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><circle cx="12" cy="12" r="9" fill="none" stroke="white" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>,
      },
      {
        name: "Mistral", bg: "#FF6B35",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><rect x="3" y="4" width="5" height="5" rx="1"/><rect x="10" y="4" width="5" height="5" rx="1"/><rect x="16" y="4" width="5" height="5" rx="1"/><rect x="3" y="10" width="5" height="5" rx="1"/><rect x="10" y="10" width="5" height="5" rx="1"/><rect x="16" y="10" width="5" height="5" rx="1"/></svg>,
      },
    ],
  },
  {
    title: "Frameworks",
    technologies: [
      {
        name: "LangChain", bg: "#1C3A2E",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><circle cx="7" cy="12" r="4"/><circle cx="17" cy="12" r="4"/><line x1="11" y1="12" x2="13" y2="12"/></svg>,
      },
      {
        name: "CrewAI", bg: "#E53E3E",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><circle cx="12" cy="7" r="3"/><circle cx="5" cy="10" r="2.2"/><circle cx="19" cy="10" r="2.2"/><path d="M12 12c-3.3 0-5.5 1.7-5.5 3.5V17h11v-1.5C17.5 13.7 15.3 12 12 12z"/><path d="M5.5 13C4 13 2.5 14 2.5 15.5V17H7v-.5c0-.9-.5-1.8-.5-2-1 0-1 .5-1 .5z" opacity=".7"/><path d="M18.5 13c1.5 0 3 1 3 2.5V17H17v-.5c0-.9.5-1.8.5-2 1 0 1 .5 1 .5z" opacity=".7"/></svg>,
      },
      {
        name: "Ollama", bg: "#111",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M12 3a6 6 0 0 0-6 6c0 2.09 1.07 3.93 2.69 5.02L8 17h8l-.69-2.98A6 6 0 0 0 18 9a6 6 0 0 0-6-6zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/><rect x="8" y="17" width="8" height="2" rx="1"/></svg>,
      },
      {
        name: "LlamaIndex", bg: "#7C3AED",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h12v2H3z"/></svg>,
      },
      {
        name: "MCP", bg: "#0891B2",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
      },
      {
        name: "AutoGen", bg: "#5C2D91",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm1-13h-2v5l4.25 2.55.75-1.23-3.5-2.08V7z" opacity=".3"/><path d="M12 4a8 8 0 1 0 0 16A8 8 0 0 0 12 4zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm.5-9.5h-1v4l3.5 2.1.5-.85-3-1.75V8.5z"/></svg>,
      },
    ],
  },
  {
    title: "Backend & DB",
    technologies: [
      {
        name: "Python", bg: "#3776AB",
        logo: <svg viewBox="0 0 24 24" width="18" height="18"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.402 3.347-3.402h5.764s3.236.052 3.236-3.13V3.13S18.28 0 11.914 0zm-3.2 1.812a1.04 1.04 0 1 1 0 2.08 1.04 1.04 0 0 1 0-2.08z" fill="#FFD43B"/><path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752H12v-.826h8.12S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.402-3.347 3.402H9.456s-3.236-.052-3.236 3.13V18.87S5.72 24 12.086 24zm3.2-1.812a1.04 1.04 0 1 1 0-2.08 1.04 1.04 0 0 1 0 2.08z" fill="#3776AB"/></svg>,
      },
      {
        name: "Node.js", bg: "#339933",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M12 1.85L2 7.28v9.44L12 22.15l10-5.43V7.28L12 1.85zm8 14.53L12 20.15 4 16.38V7.62L12 3.85l8 3.77v8.76z"/><path d="M12 7.5l-4 2.17v4.33l4 2.17 4-2.17V9.67L12 7.5z"/></svg>,
      },
      {
        name: "PostgreSQL", bg: "#336791",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M12 2C9.2 2 6.8 3.3 5.3 5.3c-1 .2-2 .6-2.8 1.3C1.2 7.7.5 9.2.5 10.8c0 2.5 1.5 4.7 3.8 5.7.1.4.3.8.5 1.2.5 1 1.5 1.8 2.7 2V21c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-1.3c1.2-.2 2.2-1 2.7-2 .2-.4.4-.8.5-1.2 2.3-1 3.8-3.2 3.8-5.7 0-1.6-.7-3.1-1.8-4.2-.8-.7-1.8-1.1-2.8-1.3C16.2 3.3 14.8 2 12 2zm0 2c1.7 0 3 .8 3.8 2H8.2C9 4.8 10.3 4 12 4zm-5.5 4h11c.6.7 1 1.5 1.1 2.4-.7-.1-1.4 0-2 .3-.8.3-1.5 1-1.6 1.8-.4 2-2 3.5-4 3.5s-3.6-1.5-4-3.5c-.1-.8-.8-1.5-1.6-1.8-.6-.3-1.3-.4-2-.3.1-.9.5-1.7 1.1-2.4z"/></svg>,
      },
      {
        name: "MongoDB", bg: "#47A248",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>,
      },
      {
        name: "Pinecone", bg: "#1A1A2E",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M12 2L7 9l1 3-3 2 7 1 7-1-3-2 1-3L12 2z"/><line x1="12" y1="15" x2="12" y2="22" stroke="white" strokeWidth="2"/></svg>,
      },
      {
        name: "Weaviate", bg: "#FA0050",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2zm0 2.3l6 3.4v9.6L12 20.3 6 17.3V7.7l6-3.4z"/><path d="M12 8l-3 1.7v3.6l3 1.7 3-1.7V9.7L12 8z"/></svg>,
      },
    ],
  },
  {
    title: "Frontend & DevOps",
    technologies: [
      {
        name: "React", bg: "#20232A",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="#61DAFB"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)"/></svg>,
      },
      {
        name: "Next.js", bg: "#000",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0z"/></svg>,
      },
      {
        name: "Docker", bg: "#2496ED",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.186v1.887c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg>,
      },
      {
        name: "FastAPI", bg: "#009688",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm-.624 21.624v-7.247H6.25l6.75-13.002v7.247h5.124l-6.748 13.002z"/></svg>,
      },
      {
        name: "Redis", bg: "#DC382D",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M10.9 5.3l2 1.1-2 1.1L8.9 6.4l2-1.1zm9.8 6l-.9.5v1l-.9-.5-.9.5v-1l-.9-.5.9-.5V9.8l.9.5.9-.5v1zm-3.9-1.6l-.9.5V11l-.9-.5-.9.5v-1l-.9-.5.9-.5V7.9l.9.5.9-.5v1zm5.2-5.5L16.8 7.1 14.7 5.9 12.5 7.1 7.3 4.2 12.5 1.3l9.5 3zm-18.5.5L8.7 7.6V10.9l2.2 1.2V15L6.8 17 2.5 14.7V7.7zm16.8 1.9l-5.8 3.1v3.3l-4.1 2.2v3l4.1 2.2 9-5V6.8l-3.2-1.2z"/></svg>,
      },
      {
        name: "Kubernetes", bg: "#326CE5",
        logo: <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.516-.734zm1.145-1.98a.44.44 0 0 0 .698-.132l.01.004 2.08-1.607a5.19 5.19 0 0 0-2.951-1.136l-.017 2.612.003.014a.44.44 0 0 0 .177.245zm2.724 1.48a.44.44 0 0 0-.77.108l-.014-.002-1.355 2.327a5.157 5.157 0 0 0 2.968-.95l-1.653-1.636.005-.006a.44.44 0 0 0-.181-.441zm.665-1.768l-2.518-.738-2.02 1.164.003.014v3.001l2.015 1.163 2.52-.74.739-2.522-.739-2.342zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.5a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19z"/></svg>,
      },
    ],
  },
];

export default function TechStackSection() {
  return (
    <section style={{ background: "#fff", padding: "80px 0" }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 64px" }}>
          <span style={{ display: "block", fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#0284c7", marginBottom: "16px" }}>
            Powered by Cutting-Edge AI
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.2, marginBottom: "16px" }}>
            Built With Industry-Leading Technologies
          </h2>
          <p style={{ fontSize: "17px", color: "#475569", lineHeight: 1.7 }}>
            We work with the best AI models, frameworks, and infrastructure to build robust, scalable solutions.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px" }}>
          {categories.map((category, ci) => (
            <div key={ci} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "28px" }}>
              <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#0f172a", marginBottom: "20px" }}>
                {category.title}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {category.technologies.map((tech) => (
                  <div key={tech.name} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 14px", background: "#fff", border: "1px solid #e2e8f0", borderRadius: "10px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: tech.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {tech.logo}
                    </div>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "#334155" }}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: "16px", color: "#64748b", marginTop: "48px" }}>
          Don't see your tech stack?{" "}
          <span style={{ fontWeight: 700, color: "#0284c7" }}>We integrate with virtually any system.</span>
        </p>

      </div>
    </section>
  );
}
