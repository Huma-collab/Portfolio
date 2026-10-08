import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huma Saira · ML Researcher in Healthcare AI",
  description:
    "Portfolio of Huma Saira: physics-informed neural networks for ECG, federated learning for stress recognition, and trustworthy healthcare AI.",
  openGraph: {
    title: "Huma Saira · ML Researcher in Healthcare AI",
    description:
      "Physics-informed neural networks, federated learning and trustworthy ML for health monitoring.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
