import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CreateButton from "@/components/Todo/CreateButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TODO App",
  description: "A simple todo app built for task.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-5`}
      >
        <div className="bg-[#ffc64d] flex justify-between items-center px-5 py-4 rounded-lg text-xl text-gray-800 font-semibold shadow-xs">
          <span>
            <h1 className="text-2xl font-semibold font-mono">Todo App</h1>
            <p className="text-sm font-medium font-mono">A simple todo app.</p>
          </span>
          <CreateButton/>
        </div>
        {children}
      </body>
    </html>
  );
}
