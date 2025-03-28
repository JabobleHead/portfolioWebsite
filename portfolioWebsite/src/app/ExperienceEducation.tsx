"use client";

import { useState } from "react";

export default function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
  const [sectionTitle, setSectionTitle] = useState("Experience");

  const changeTitle = (newTitle: string) => {
    setSectionTitle(newTitle);
  };

  return (
        
    <section  id ='Experience' className="p-20 bg-transparent text-white">

      {/* Title */}
      <h2 className="text-8xl font-bold mb-6 underline underline-offset-12 decoration-white" >{sectionTitle} </h2>

      {/* Tab Navigation */}
      <div className="flex space-x-4 border-b border-red-950 mb-6">
        <button
          className={`flex-grow justify center py-2 text-lg font-semibold rounded-t-lg ${
            activeTab === "experience" ? "bg-red-950 text-white" : "text-gray-400 bg-black"
          }`}
          onClick={() => {
            setActiveTab("experience"); 
            changeTitle("Experience");
          }
          }

        >
          Experience
        </button>
        <button
          className={`flex-grow justify center py-2 text-lg font-semibold rounded-t-lg ${
            activeTab === "education" ? "bg-red-950 text-white" : "text-gray-400 bg-black"
          }`}
          onClick={() => {
            setActiveTab("education"); 
            changeTitle("Education");
          }
          
          }
        >
          Education
        </button>
      </div>
      <div id="Experience"></div>

      {/* Tab Content */}
      <div className="bg-red-950 p-6 rounded-lg shadow-lg border-white border 5">
        {activeTab === "experience" ? (
          <div className="space-y-6">
            {/* Experience Item */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <p className="text-lg font-semibold text-white-300">May 2024 - Present</p>
                <p className="text-white">Remote</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Outlier.AI - Freelancer</h3>
                <ul className="list-disc ml-5 text-white">
                  <li>Reviewed and edited Java and Python code produced by advanced LLMs for accuracy and efficiency.</li>
                  <li>Developed Java code for third-party clients to improve LLM task completion accuracy.</li>
                  <li>Authored clear Markdown documentation to explain changes and ensure code reproducibility.</li>
                </ul>
              </div>
            </div>
        </div>
          
        ) : (
          <div className="space-y-6">
            {/* Education Item */}

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <p className="text-lg font-semibold text-white">August 2023 - Present</p>
                <p className="text-white">Houghton, Michigan</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Michigan Technological University</h3>
                <p className="text-white">Bachelor of Science in Computer Science</p>
                <ul className="list-disc ml-5 text-white">
                  <li>GPA: 3.71, 86.5 credits completed</li>
                  <li>Minor: Business IT Solutions</li>
                  <li>Relevant coursework: Data Structures, Discrete Structures, Formal Models, Team Software Project, Computer Organization, Hardware Software </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

    </section>
  );
}

