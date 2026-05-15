"use client";
const ITEMS = ["Next.js","TypeScript","Tailwind CSS","Prisma ORM","Node.js","PostgreSQL","SEO On-Page","E-Commerce","REST APIs","Figma","Vercel","Responsive Design"];

export function Ticker() {
  const all = [...ITEMS, ...ITEMS];
  return (
    <div style={{ borderTop:"1px solid rgba(255,255,255,0.06)", borderBottom:"1px solid rgba(255,255,255,0.06)", padding:".95rem 0", overflow:"hidden", background:"rgba(18,16,25,0.7)" }}>
      <div className="ws-tick" style={{ display:"flex", gap:"3.5rem", whiteSpace:"nowrap", width:"max-content" }}>
        {all.map((item, i) => (
          <span key={i} style={{ color:"rgba(238,234,255,0.32)", fontSize:".74rem", fontWeight:500, letterSpacing:".1em", textTransform:"uppercase", display:"inline-flex", alignItems:"center", gap:".6rem" }}>
            <span style={{ width:4, height:4, borderRadius:"50%", background:"#1D9E75", display:"inline-block", flexShrink:0 }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
