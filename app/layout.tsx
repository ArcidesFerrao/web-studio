import type { Metadata } from "next";
import "./webstudio.css";

export const metadata: Metadata = {
  title: "Evolure Web Studio — Sites que vendem. Código que dura.",
  description:
    "Desenvolvedor full-stack de Maputo. Landing pages, sites completos, e-commerce e soluções personalizadas para marcas que querem crescer.",
};

export default function WebStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="ws">{children}</body>;
    </html>
  );
}
