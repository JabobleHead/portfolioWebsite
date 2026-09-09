import slsMain from "@/images/sls/main.webp";
import slsInventory from "@/images/sls/inventory.webp";
import slsCreateEmployee from "@/images/sls/create-employee.webp";
import recipeHome from "@/images/recipe/home.webp";
import recipeStarred from "@/images/recipe/started.webp";
import recipeCreate1 from "@/images/recipe/create-post-1.webp";
import recipeCreate2 from "@/images/recipe/create-post-2.webp";
import recipeView from "@/images/recipe/view-post.webp";
import recipeGrocery from "@/images/recipe/grocery-list.webp";
import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "hide",
    name: "Humane Interface Design Enterprise (HIDE)",
    role: "Full Stack Developer",
    period: "Michigan Technological University",
    summary:
      "A dynamic website for MTU's Sound and Lighting Services, covering both the public-facing site and the internal tools staff use to manage equipment and personnel.",
    highlights: [
      "Developed key front-end and back-end features for the public site and the staff-facing management tools.",
      "Collaborated with a team to optimize user interfaces and database structures.",
      "Built inventory and employee administration screens backed by a relational schema.",
    ],
    tags: ["TypeScript", "Next.js", "HTML", "CSS", "SQL", "phpMyAdmin"],
    // TODO: add links when available.
    repoUrl: null,
    liveUrl: null,
    screenshots: [
      {
        image: slsMain,
        alt: "The public Michigan Tech SLS homepage: a red navigation bar over a concert photo lit with stage lighting, headed “Welcome To Michigan Tech SLS! Let's Get Started” with Submit Request, Camera Rental, and Emergency Request buttons.",
      },
      {
        image: slsInventory,
        alt: "The staff inventory screen listing video equipment in a table with Name, Active in Inventory, Event Price, Rental Price, and Remove columns.",
      },
      {
        image: slsCreateEmployee,
        alt: "The Create a New Employee admin form, with Employee Info fields for name, email, phone, M number, status, rank, graduation and hire date alongside Application Details text areas for interests, experience and intent.",
      },
    ],
  },
  {
    id: "recipe-app",
    name: "Week's Eats — Recipe Sharing App",
    role: "Team Lead & Full Stack Developer",
    period: "Four two-week Agile sprints",
    summary:
      "A recipe-sharing platform where users publish recipes, save favorites, and roll ingredients up into a costed grocery list.",
    highlights: [
      "Led a team of four to build a full-stack recipe-sharing platform with RESTful APIs, user authentication, and data persistence.",
      "Ran the project as Scrum lead across four two-week sprints, breaking the work into structured tasks.",
      "Oversaw both front-end and back-end development, including recipe authoring, starred recipes, and grocery list generation.",
    ],
    tags: ["Java", "Spring Boot", "JavaScript", "SQL", "HTML", "CSS"],
    // TODO: add links when available.
    repoUrl: null,
    liveUrl: null,
    screenshots: [
      {
        image: recipeHome,
        alt: "The Week's Eats recipes page: a green sidebar with Home, Recipes, Starred and Grocery List navigation beside a grid of recipe cards for Spaghetti, Chicken Parmesan, Sloppy Joe, Mac & Cheese and Tuna Roll, each with a photo and a star toggle.",
      },
      {
        image: recipeStarred,
        alt: "The Starred page filtered down to two saved recipes, Spaghetti and Sloppy Joe, each card marked with a filled yellow star.",
      },
      {
        image: recipeCreate1,
        alt: "The New Post dialog with a recipe title and description filled in, above an editable ingredient list where each row carries an ingredient name, a quantity, and a unit dropdown.",
      },
      {
        image: recipeCreate2,
        alt: "The lower half of the New Post dialog showing step-by-step cooking instructions, an Upload Cover Image control previewing the finished dish, and a Create Post button.",
      },
      {
        image: recipeView,
        alt: "The Spaghetti recipe detail view showing the cover photo, description, an ingredients list with quantities and units, instructions, and Delete Recipe, Edit Recipe and Add To Grocery List buttons.",
      },
      {
        image: recipeGrocery,
        alt: "The grocery list page totalling 15 items at $23.34, with an editable item table on the left and reusable item groups such as Pantry Items on the right, plus Save All and PDF export buttons.",
      },
    ],
  },
  {
    id: "v-model-extension",
    name: "V-Model Pull Request Analyzer",
    role: "Undergraduate Research",
    period: "Michigan Technological University",
    summary:
      "A Google Chrome extension that inspects a pull request and scores how closely it follows the V-model of software development — the tooling behind an ongoing research paper on the AiDev dataset.",
    highlights: [
      "Analyzes pull request contents in-page and reports V-model adherence for the change under review.",
      "Supports research comparing human-authored against AI-generated pull requests, including how PR size affects adherence.",
      "Feeds data analysis and machine learning model training over the AiDev dataset.",
    ],
    tags: ["JavaScript", "Chrome Extensions API", "Python", "Machine Learning"],
    // TODO: add links when available.
    repoUrl: null,
    liveUrl: null,
    screenshots: [],
  },
];
