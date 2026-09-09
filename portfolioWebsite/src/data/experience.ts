import type { Role } from "./types";

/** Newest first — the Experience section renders this order as an <ol>. */
export const roles: Role[] = [
  {
    id: "uwm",
    organization: "United Wholesale Mortgage",
    title: "Database Intern",
    location: "Pontiac, MI",
    period: "Summer 2026",
    highlights: [
      "Built and maintained data pipelines as a database developer using SQL Server, Google Cloud Platform, and Talend Cloud and Studio.",
      "Led a five-intern team building an in-house AI model, trained on proprietary company data, to predict problematic code changes before they reached production.",
      "Organized a company fundraising event that raised $2,000 for Micah 6 through an in-house initiative.",
    ],
    tags: ["SQL Server", "Google Cloud Platform", "Talend", "Python"],
  },
  {
    id: "mtu-research",
    organization: "Michigan Technological University",
    title: "Undergraduate Researcher",
    location: "Houghton, MI",
    period: "Current",
    current: true,
    highlights: [
      "Researching whether human-authored or AI-generated pull requests better adhere to the V-model of software development, and how pull request size affects that adherence.",
      "Built a Google Chrome extension that analyzes how well pull requests follow the V-model.",
      "Applying data analysis and machine learning model-training techniques while authoring a research paper using the AiDev dataset.",
    ],
    tags: ["Python", "Machine Learning", "Data Analysis", "Chrome Extensions"],
  },
  {
    id: "outlier",
    organization: "Outlier.AI",
    title: "Prompt Engineer (Freelance)",
    location: "Remote",
    period: "May 2024 – Aug 2025",
    highlights: [
      "Enhanced AI-generated code quality by designing and testing prompts, and identified, debugged, and corrected AI-generated code errors across multiple programming languages.",
      "Provided detailed feedback that improved AI models' performance in generating clean, functional code.",
    ],
    tags: ["Java", "Python", "Prompt Engineering"],
  },
];
