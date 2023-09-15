import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const font = Poppins({
  weight: ["200", "400", "600", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Github repository",
  description:
    "Saves any repository that you like in your personal account, and dont lose then anymore.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={font.className}>{children}</body>
    </html>
  );
}
