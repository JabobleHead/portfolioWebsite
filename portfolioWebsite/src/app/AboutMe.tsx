"use react";


import { useState } from "react";

export default function AboutMe() {


    return(
        <div>
            {/* About Me Section */}
            <section id="About Me" className="flex flex-col md:flex-row items-center justify-center p-40 text-white bg-transparent">
            {/* Circular Image */}
            <img
                src="/Images/profilePic.JPG" // Replace with your actual image path
                alt="Gabriel Dautovi"
                className="w-52 h-52 rounded-full object-cover mr-6 mb-4 md:mb-0"
            />

            {/* Text Content */}
            <div className="max-w-4xl text-left">
                <h1 className="text-4xl font-bold mb-4">Hello, I'm Gabriel Dautovi</h1>
                <p className="text-lg leading-relaxed">
                I am an independent contractor for Outlier.AI and a junior at Michigan Technological University.
                I have over six years of programming experience, specializing in full-stack development and IT.
                <br></br>
                Outside of programming, I enjoy playing video games, working out, hiking, and photography.
                </p>
                <div className = "flex">
                    <a href="https://github.com/JabobleHead">
                    <button id = "GitHub" className="fa-brands fa-github text-4xl pl-63 pr-15"></button>
                    </a>
                    <a href="https://www.linkedin.com/in/gabriel-dautovi/">
                    <button id = "LinkedIn" className="fa-brands fa-linkedin text-4xl pr-15"></button>
                    </a>
                    <a href="mailto:gabrielDautovi@gmail.com">
                    <button id = "Email" className="fa-solid fa-envelope text-4xl" ></button>
                    </a>
                </div>

            </div>
            </section>

        </div>



    );
}