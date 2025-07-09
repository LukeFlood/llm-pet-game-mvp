// src/app/layout.js
import "./globals.css";
import Link from "next/link";
import { PetProvider } from "../context/PetContext";

export const metadata = {
  title: "LLM Pet Game MVP",
  description: "Your pet-care playground",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg text-text antialiased">
        <PetProvider>
          <header className="bg-card shadow-card">
            <nav className="container mx-auto px-4 py-3 flex space-x-4 text-sm">
              <Link href="/" className="hover:text-primary">Home</Link>
              <Link href="/explore" className="hover:text-primary">Explore</Link>
              <Link href="/game" className="hover:text-primary">Game</Link>
            </nav>
          </header>
          <main className="container mx-auto p-4">{children}</main>
        </PetProvider>
      </body>
    </html>
  );
}
