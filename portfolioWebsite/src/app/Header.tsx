"use client";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import React, { useState, useEffect, useRef } from 'react';


const NavigationBar = () => {
  
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const sections = ["About Me", "Experience", "Projects", "Resumé"];
  
  const scrollToSection = (sectionId: string) => {
    if (sectionId === "Resumé") {
      // Open the PDF in a new tab
      window.open("/Resume_ GabrielDautovi.pdf", "_blank");
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  

  // Track scroll position to add background to navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // IntersectionObserver to track which section is in view
  const sectionPriorities: Record<string, number> = {
    "About Me": 3,
    "Experience": 2, // Higher numbers = higher priority
    "Projects": 1,
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            id: entry.target.id,
            distance: Math.abs(entry.boundingClientRect.top - window.innerHeight / 2), // Distance from center
            priority: sectionPriorities[entry.target.id] || 999, // Default low priority if not in list
          }));
  
        if (visibleSections.length > 0) {
          // Sort by priority first, then by distance to center
          visibleSections.sort((a, b) => {
            if (a.priority !== b.priority) return b.priority - a.priority; // Higher priority first
            return a.distance - b.distance; // Closer to center if priorities are equal
          });
  
          setActiveSection(visibleSections[0].id); // Pick highest priority + closest
        } else {
          setActiveSection(null);
        }
      },
      {
        root: null, // Viewport
        threshold: 0.3, // Adjust sensitivity
      }
    );
  
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });
  
    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) observer.unobserve(section);
      });
    };
  }, [sections]);

  return (
    <Navbar fixed='top' className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <Container className="navbar-container">
        
        {sections.map((section) => (

          <Nav.Link
          
            key={section}
            onClick={() => scrollToSection(section)}
            onMouseEnter={() => setHovered(section)}
            onMouseLeave={() => setHovered(null)} 
            className={`nav-link ${activeSection === section ? 'active' : ''}`}
            href={`#${section}`}
            style={{
              color: hovered ===  section ? 'Purple' : 'White',
            }}
            
          >
           {section} {/* Convert camel case to spaced words */} 
          </Nav.Link>
        ))}
      </Container>
    </Navbar>
  );
  
};

       

export default NavigationBar;