"use client";

import { useState } from "react";

import Script from "next/script";


const recipeApp  = [
    "/Images/RecipeApp/HomePage.png",
    "/Images/RecipeApp/CreatingPost1.png",
    "/Images/RecipeApp/CreatingPost.png",
    "/Images/RecipeApp/ViewPost.png",
    "/Images/RecipeApp/StartedPage.png",
    "/Images/RecipeApp/GrocreyList.png",
];

const SLSApp = [
    "/Images/SLSProject/SLSMain.png",
    "/Images/SLSProject/inventoryTable.png",
    "/Images/SLSProject/createEmployee.png",

];
export default function Projects() {
    const [currentIndexR, setCurrentIndexR] = useState(0);
    const [currentIndexS, setCurrentIndexS] = useState(0);

  const handleNextRecipe = () => {
    setCurrentIndexR((prevIndex) => (prevIndex + 1) % recipeApp.length);
  };

  const handlePrevRecipe = () => {
    setCurrentIndexR((prevIndex) =>
      prevIndex === 0 ? recipeApp.length - 1 : prevIndex - 1
    );
  };
  const handleNextSLS = () => {
    setCurrentIndexS((prevIndex) => (prevIndex + 1) % SLSApp.length);
  };

  const handlePrevSLS= () => {
    setCurrentIndexS((prevIndex) =>
      prevIndex === 0 ? SLSApp.length - 1 : prevIndex - 1
    );
  };

    return (
        <>
        <div className="text-white">
      <Script src="https://kit.fontawesome.com/da5c5ed2e2.js" strategy="afterInteractive" />
      {/* Projects Section */}
      
           <section id ='Projects' className="p-20 bg-transparent">
            <h3 className="text-9xl font-semibold mb-6 underline underline-offset-12 decoration-white ">Projects</h3>
                <div className = "bg-black border-3 border-white border-offset-20  grid grid-cols-1  md:grid-cols-2">
                    <div >
                        {/* Photots of project*/}
                        <div className="flex justify-center object-contain ">
                        <img
                            src={SLSApp[currentIndexS]} // Replace with your actual image path going to be a array of images that have buttons to cycle through
                            alt={`Slide ${currentIndexS + 1}`}
                            className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex justify-center ">
                        <div className="w-20 h-20 flex  justify-center ">
                            <button type="button" onClick={handlePrevSLS} id="leftarrow" className="fa-solid fa-arrow-left text-5xl"></button>
                            <button type="button" onClick={handleNextSLS} id="rightarrow" className="fa-solid fa-arrow-right text-5xl"></button>
                        </div>
                        </div>
                    </div>
                    <div className = "bg-red-950 text-xl">
                        <h4 className = "font-semibold ml-10 "> Humane Interface Design Enterprise (HIDE)</h4>
                        <ul className = "list-disc ml-15 text-white" >
                            <li>Full Stack Developer</li>
                            <div className="ml-10">
                                <li> Designed and implemented core features for a dynamic, user-friendly website for MTU’s Sound and Lighting Services, enhancing functionality, performance, and user experience.</li>
                                <li>Contributed to both front-end and back-end development, ensuring seamless integration and responsive design.</li>
                                <li>Collaborated with a team to optimize workflows and deliver an intuitive platform for efficient event management.</li>
                            </div>
                            <li> Tools Used</li>
                                <div className="ml-10">
                                    <li>TypeScript </li>
                                    <li>HTMl</li>
                                    <li>SQL</li>
                                    <li>NextJs</li>
                                    <li>ReactBootStrap</li>
                                    <li>CSS</li>
                                    <li>Cpanel </li>
                                    <li>PHPMyAdmin</li>
                                </div>


                        </ul>
                    </div>
                    
                    <div className = "bg-red-950 text-xl">
                    <div id ='Projects'></div> 
                    <h4 className = "font-semibold ml-10"> Recipe Sharing App</h4>
                        <ul className = "list-disc ml-15 text-white" >
                            <li>Team Lead | Agile Development</li>
                            <div className ="ml-10">
                            <li>Project was divid into four 2-weeks sprits</li>
                            <li>Led a team of four developers through the Scrum programming process, ensuring efficient collaboration and iterative development.</li>
                            <li>Managed and facilitated two-week sprints, dividing the project into well-structured tasks to maximize productivity.</li>
                            <li>Oversaw both front-end and back-end development, ensuring a seamless and user-friendly platform for recipe sharing.</li>
                            </div>
                            <li> Tools Used</li>
                            <div className ="ml-10">
                                <li>JavaScript</li>
                                <li>HTMl</li>
                                <li>SQL</li>
                                <li>Java</li>
                                <li>SpringBoot</li>
                                <li>CSS</li>
                            </div>


                        </ul>
                    </div>
                    <div>
                      {/* Photots of project*/}
                      <div className="flex justify-center object-contain ">
                      <img
                            src={recipeApp[currentIndexR]} // Replace with your actual image path going to be a array of images that have buttons to cycle through
                            alt={`Slide ${currentIndexR + 1}`}
                            className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex justify-center ">
                        <div className="w-20 h-20 flex  justify-center ">
                            <button type="button" onClick={handlePrevRecipe} id="leftarrow" className="fa-solid fa-arrow-left text-5xl"></button>
                            <button type="button" onClick={handleNextRecipe} id="rightarrow" className="fa-solid fa-arrow-right text-5xl"></button>
                        </div>
                        </div>

                    </div>
                </div>
           </section>
        </div>
        </>

            
        
   
    );

}

