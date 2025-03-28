"use client";
import { useEffect } from "react";

import Header from "@/app/Header";
import ExperienceEducation from "@/app/ExperienceEducation";
import Projects from "@/app/Project";
import AboutMe from "@/app/AboutMe"


export default function Home() {
  useEffect(() => {
    document.body.classList.add("bg-[url('/Images/Background.jpg')]", "bg-cover", "bg-center"); 
  
    return () => {
      document.body.classList.remove("bg-[url('/Images/Background.jpg')]", "bg-cover", "bg-center");
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
