"use client";
import { useReveal } from "./useReveal";

const STEPS = [
  { num:"01", title:"Briefing", desc:"Conversa de 30 minutos para entender o negócio, objectivos e público-alvo. Sem formulários longos." },
  { num:"02", title:"Proposta", desc:"Escopo, prazo e orçamento detalhados enviados em menos de 24 horas." },
  { num:"03", title:"Design & Build", desc:"Construção iterativa com revisões incluídas. O cliente acompanha o progresso em tempo real." },
  { num:"04", title:"Entrega & Suporte", desc:"Deploy, domínio configurado e formação incluída. Suporte nos 30 dias seguintes ao lançamento." },
];

export function Process() {
  const ref = useReveal();
  const gridRef = useReveal();

  return (
    <section id="process" className="ws-mob-pad" style={{ padding:"7rem 3.5rem", position:"relative", zIndex:1 }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>

        <div ref={ref} className="ws-reveal" style={{ textAlign:"center", marginBottom:"4rem" }}>
          <span className="ws-label">Como funciona</span>
          <h2 className="ws-section-title">Do primeiro contacto<br />à entrega em dias.</h2>
          <p style={{ color:"rgba(238,234,255,0.42)", fontSize:".96rem", fontWeight:300, lineHeight:1.8, maxWidth:420, margin:".75rem auto 0" }}>
            Um processo simples e transparente. Sem surpresas, sem atrasos.
          </p>
        </div>

        <div ref={gridRef} className="ws-reveal ws-mob-col2" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1px", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:14, overflow:"hidden" }}>
          {STEPS.map((s, i) => (
            <div key={i} style={{ background:"rgba(22,20,30,0.9)", padding:"2.25rem 1.85rem", position:"relative", transition:"background .3s" }}
              onMouseEnter={e => (e.currentTarget.style.background="rgba(29,158,117,0.05)")}
              onMouseLeave={e => (e.currentTarget.style.background="rgba(22,20,30,0.9)")}
            >
              <div style={{ position:"absolute", right:"1rem", top:".75rem", fontFamily:"var(--font-display,'Syne',sans-serif)", fontSize:"3.5rem", fontWeight:800, color:"rgba(255,255,255,0.03)", lineHeight:1, userSelect:"none" }}>{s.num}</div>
              <div style={{ width:36, height:36, borderRadius:9, background:"rgba(29,158,117,0.12)", border:"1px solid rgba(29,158,117,0.25)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"1.1rem" }}>
                <span style={{ fontFamily:"var(--font-display,'Syne',sans-serif)", fontSize:".82rem", fontWeight:800, color:"#1D9E75" }}>{s.num}</span>
              </div>
              <h3 style={{ fontFamily:"var(--font-display,'Syne',sans-serif)", fontWeight:700, fontSize:"1rem", marginBottom:".5rem" }}>{s.title}</h3>
              <p style={{ color:"rgba(238,234,255,0.42)", fontSize:".84rem", lineHeight:1.68, fontWeight:300 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
