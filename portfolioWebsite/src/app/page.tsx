"use client";
import { useEffect } from "react";

import Header from "@/Header";
import ExperienceEducation from "@/ExperienceEducation";
import Projects from "@/Project";
import AboutMe from "@/AboutMe"


export default function Home() {
  useEffect(() => {
    document.body.classList.add("bg-[url('/Images/Background.jpg')]"); // Change color to fit your needs
    return () => {
      document.body.classList.remove("w-full h-screen bg-[url('/Images/Background.jpg')] bg-cover bg-center");
    };
  }, []);

  return (
    <main className="text-black">
      <Header/>
      <AboutMe/>
      <ExperienceEducation/>
      <Projects/>
    </main>

  );
}
