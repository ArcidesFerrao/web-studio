"use client";
import { useReveal } from "./useReveal";
import Image from "next/image";
const SKILLS = [
  "Next.js / React",
  "TypeScript",
  "Node.js / Prisma",
  "PostgreSQL",
  "Tailwind CSS",
  "Figma & UI Design",
  "SEO Técnico",
  "Vercel / Deploy",
];
const STATS = [
  { val: "10+", label: "Anos de experiência", color: "#1D9E75" },
  { val: "3+", label: "Projetos entregues", color: "#4a8fd4" },
  { val: "7d", label: "Prazo médio", color: "#e89c35" },
  { val: "24h", label: "Resposta garantida", color: "#8b7fe8" },
];

export function About() {
  const ref = useReveal();

  return (
    <section
      id="about"
      className="ws-mob-pad"
      style={{ padding: "7rem 3.5rem", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          ref={ref}
          className="ws-reveal ws-mob-col1 ws-mob-gap"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          {/* Left — text */}
          <div>
            <span className="ws-label">Sobre mim</span>
            <h2
              className="ws-section-title"
              style={{ marginBottom: "1.25rem" }}
            >
              Sou Arcides Ferrao,
              <br />
              <span style={{ color: "#1D9E75" }}>desenvolvedor</span>
              <br />
              full‑stack de Maputo 🇲🇿
            </h2>
            <p
              style={{
                color: "rgba(238,234,255,0.44)",
                fontSize: ".95rem",
                lineHeight: 1.84,
                fontWeight: 300,
                marginBottom: "1.75rem",
              }}
            >
              Com mais de uma década de experiência em JavaScript, ajudo marcas
              locais a construir presença digital que gera resultados reais —
              não apenas sites bonitos que ninguém visita.
            </p>

            {/* skills grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: ".4rem",
                marginBottom: "2rem",
              }}
            >
              {SKILLS.map((sk) => (
                <div
                  key={sk}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".55rem",
                    color: "rgba(238,234,255,0.5)",
                    fontSize: ".84rem",
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "#1D9E75",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  {sk}
                </div>
              ))}
            </div>

            <a
              href="https://github.com/ArcidesFerrao"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: ".5rem",
                color: "#1D9E75",
                fontSize: ".88rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              Ver perfil no GitHub
            </a>
          </div>

          {/* Right — profile + stats */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {/* Profile card */}
            <div
              style={{
                background: "rgba(22,20,30,0.9)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14,
                padding: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "rgba(29,158,117,0.15)",
                  border: "2px solid rgba(29,158,117,0.35)",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/assets/profile.png"
                  alt="Arcides Ferrao"
                  width={100}
                  height={100}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display,'Syne',sans-serif)",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                  }}
                >
                  Arcides Ferrao
                </div>
                <div
                  style={{
                    color: "#1D9E75",
                    fontSize: ".78rem",
                    fontWeight: 600,
                    marginTop: ".2rem",
                  }}
                >
                  Full-Stack Developer
                </div>
                <div
                  style={{
                    color: "rgba(238,234,255,0.35)",
                    fontSize: ".75rem",
                    marginTop: ".25rem",
                  }}
                >
                  Maputo, Moçambique 🇲🇿
                </div>
              </div>
            </div>

            {/* Stats 2x2 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1px",
                background: "rgba(255,255,255,0.06)",
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {STATS.map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "rgba(22,20,30,0.9)",
                    padding: "1.75rem 1.5rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display,'Syne',sans-serif)",
                      fontSize: "2.2rem",
                      fontWeight: 800,
                      letterSpacing: "-.03em",
                      color: s.color,
                      lineHeight: 1,
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      color: "rgba(238,234,255,0.35)",
                      fontSize: ".74rem",
                      marginTop: ".4rem",
                      fontWeight: 300,
                      lineHeight: 1.35,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
