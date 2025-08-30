"use client";
import './global.css';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useEffect } from "react";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Disable right click
    document.addEventListener("contextmenu", (e) => e.preventDefault());

    // Disable common copy/inspect shortcuts
    document.addEventListener("keydown", (e) => {
      if (
        (e.ctrlKey && ["c", "u", "s", "x"].includes(e.key.toLowerCase()))  // Ctrl+C, U, S, X
        // (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") 
      ) {
        e.preventDefault();
      }
    });
  }, []);
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}  
        <Footer />
      </body>
    </html>
  );
}
