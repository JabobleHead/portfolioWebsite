"use client";
import { useEffect } from "react";

import Header from "@/app/Header";
import ExperienceEducation from "@/app/ExperienceEducation";
import Projects from "@/app/Project";
import AboutMe from "@/app/AboutMe"


export default function Home() {
  return (
    
    <main className="text-black bg-neutral-900">
      <title>Gabriel Dautovi Protfllio</title>
      <Header/>
      <AboutMe/>
      <ExperienceEducation/>
      <Projects/>
    </main>

  );
}
