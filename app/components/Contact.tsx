"use client";
import { useState } from "react";
import { useReveal } from "./useReveal";

type Status = "idle" | "loading" | "success" | "error";

const Arrow = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Contact() {
  const ref = useReveal();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  // const [sent, setSent] = useState(false);

  const update =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  // const submit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const subject = encodeURIComponent(
  //     `[Web Studio] ${form.service || "Orçamento"} — ${form.name}`,
  //   );
  //   const body = encodeURIComponent(
  //     `Nome: ${form.name}\nEmail: ${form.email}\nServiço: ${form.service}\n\n${form.message}`,
  //   );
  //   window.open(`mailto:cidesferrao@gmail.com?subject=${subject}&body=${body}`);
  //   setSent(true);
  // };

  const handleSubmit = async () => {
    // if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      // setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="ws-mob-pad"
      style={{ padding: "7rem 3.5rem", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Top CTA banner */}
        <div
          ref={ref}
          className="ws-reveal"
          style={{
            background: "rgba(22,20,30,0.9)",
            border: "1px solid rgba(29,158,117,0.3)",
            borderRadius: 16,
            padding: "3.5rem",
            marginBottom: "3.5rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center bottom, rgba(29,158,117,0.08) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />
          <span className="ws-label">Pronto para começar?</span>
          <h2
            className="ws-section-title"
            style={{ maxWidth: 560, margin: "0 auto .75rem" }}
          >
            Vamos construir algo que os seus clientes não esquecem.
          </h2>
          <p
            style={{
              color: "rgba(238,234,255,0.42)",
              maxWidth: 440,
              margin: "0 auto",
              fontSize: ".95rem",
              fontWeight: 300,
              lineHeight: 1.78,
            }}
          >
            Descreva o seu projecto e receba uma proposta em menos de 24 horas.
          </p>
        </div>

        {/* Form + info */}
        <div
          className="ws-mob-col1 ws-mob-gap"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "3.5rem",
            alignItems: "start",
          }}
        >
          {/* Left */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display,'Syne',sans-serif)",
                fontSize: "1.5rem",
                fontWeight: 800,
                marginBottom: "1rem",
              }}
            >
              Fale comigo
            </h3>
            <p
              style={{
                color: "rgba(238,234,255,0.44)",
                fontSize: ".93rem",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "2rem",
              }}
            >
              Atendo projectos de qualquer tamanho. Seja uma landing page
              simples ou um sistema complexo, respondo sempre.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".85rem",
                marginBottom: "2.5rem",
              }}
            >
              {[
                {
                  className: "material-symbols-light--mail",
                  label: "Email",
                  val: "contacto@evolurelabs.com",
                  href: "mailto:contacto@evolurelabs.com",
                },
                {
                  className: "ic--round-whatsapp ",
                  label: "WhatsApp",
                  val: "+258 85 27 40 554",
                  href: "https://wa.me/258852740554",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    textDecoration: "none",
                    padding: ".9rem 1.1rem",
                    background: "rgba(22,20,30,0.9)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 10,
                    transition: "border-color .2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(29,158,117,0.4)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.07)")
                  }
                >
                  <span
                    style={{ fontSize: "1.3rem" }}
                    className={c.className}
                  ></span>
                  <div>
                    <div
                      style={{
                        fontSize: ".65rem",
                        color: "rgba(238,234,255,0.3)",
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        marginBottom: ".18rem",
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      style={{
                        fontSize: ".88rem",
                        color: "#eeeaff",
                        fontWeight: 500,
                      }}
                    >
                      {c.val}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Trust points */}
            {[
              "Resposta em menos de 24 horas",
              "Proposta sem compromisso",
              "Suporte pós-lançamento incluído",
              "Pagamento em MZN",
            ].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".55rem",
                  color: "rgba(238,234,255,0.45)",
                  fontSize: ".85rem",
                  marginBottom: ".5rem",
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
                {t}
              </div>
            ))}
          </div>

          {/* Right — form */}
          <div
            style={{
              background: "rgba(22,20,30,0.9)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 16,
              padding: "2.25rem",
            }}
          >
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>
                  ✅
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display,'Syne',sans-serif)",
                    fontWeight: 800,
                    fontSize: "1.3rem",
                    marginBottom: ".5rem",
                  }}
                >
                  Mensagem enviada!
                </h3>
                <p
                  style={{
                    color: "rgba(238,234,255,0.44)",
                    fontSize: ".9rem",
                    lineHeight: 1.7,
                  }}
                >
                  O cliente de email foi aberto com a sua mensagem. Responderei
                  em menos de 24 horas.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".95rem",
                }}
              >
                <div
                  className="ws-mob-col2sm"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: ".95rem",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: ".66rem",
                        color: "rgba(238,234,255,0.35)",
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        marginBottom: ".38rem",
                      }}
                    >
                      Nome
                    </label>
                    <input
                      className="ws-input"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="O seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: ".66rem",
                        color: "rgba(238,234,255,0.35)",
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        marginBottom: ".38rem",
                      }}
                    >
                      Numero de telefone
                    </label>
                    <input
                      className="ws-input"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="80 123 4567"
                      required
                    />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label
                      style={{
                        display: "block",
                        fontSize: ".66rem",
                        color: "rgba(238,234,255,0.35)",
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        marginBottom: ".38rem",
                      }}
                    >
                      Email
                    </label>
                    <input
                      className="ws-input"
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="email@exemplo.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: ".66rem",
                      color: "rgba(238,234,255,0.35)",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      marginBottom: ".38rem",
                    }}
                  >
                    Serviço
                  </label>
                  <select
                    className="ws-input"
                    value={form.service}
                    onChange={update("service")}
                  >
                    <option value="">Seleccione um serviço</option>
                    <option>Landing Page</option>
                    <option>Site Completo</option>
                    <option>E-Commerce</option>
                    <option>Solução Personalizada</option>
                  </select>
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: ".66rem",
                      color: "rgba(238,234,255,0.35)",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      marginBottom: ".38rem",
                    }}
                  >
                    Mensagem
                  </label>
                  <textarea
                    className="ws-input"
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Descreva o seu projecto e o que precisa..."
                    style={{ resize: "vertical" }}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="ws-btn"
                  style={{
                    justifyContent: "center",
                    marginTop: ".2rem",
                    fontSize: ".95rem",
                    padding: ".9rem",
                  }}
                >
                  Enviar Pedido <Arrow />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
