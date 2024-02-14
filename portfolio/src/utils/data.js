import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";
import tools from "../assets/tools.png";
import softskills from "../assets/softskills.png";

export const SKILLS = [
  {
    title: "Frontend",
    icon: frontend,
    skills: [
      { skill: "React.Js", percentage: "80%" },
      { skill: "HTML", percentage: "95%" },
      { skill: "CSS", percentage: "95%" },
      { skill: "JavaScript", percentage: "80%" },
    ],
  },
  {
    title: "Backend",
    icon: backend,
    skills: [
      { skill: "Node.js", percentage: "60%" },
      { skill: "Express.js", percentage: "50%" },
      { skill: "MongoDB", percentage: "60%" },
    ],
  },
  {
    title: "Tools",
    icon: tools,
    skills: [
      { skill: "Git & GitHub", percentage: "80%" },
      { skill: "Visual Studio Code", percentage: "90%" },
      { skill: "Responsive Design", percentage: "80%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: softskills,
    skills: [
      { skill: "Problem-solving", percentage: "80%" },
      { skill: "Collaboration", percentage: "95%" },
      { skill: "Adaptive", percentage: "90%" },
      { skill: "Quick Learner", percentage: "80%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Software Development Engineer at Gemini Solutions Pvt. Ltd.",
    date: "March 2022 - April 2023",
    responsibilities: [
      "Developed and maintained web applications leveraging React and Redux",
      "Utilized Redux for efficient state management and data flow in complex applications",
      "Collaborated in identifying and resolving technical issues to enhance application performance",
      "Participated in code reviews, contributing to coding standards and best practices",
      "Assisted in designing and implementing REST APIs for frontend applications.",
    ],
  },
  {
    title: "Student at GLA University",
    date: "August 2019 - July 2023",
    responsibilities: [
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem ", 
      "aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
      " Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni ",
      "dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam cbsbs ",
      "beatae vitae dicta sunt explicabo."
      
    ],
  },
//   {
//     title: "Software Developer",
//     date: "March 2022 - April 2023",
//     responsibilities: [
//       "Developed and maintained web applications leveraging React and Redux",
//       "Utilized Redux for efficient state management and data flow in complex applications",
//       "Collaborated in identifying and resolving technical issues to enhance application performance",
//       "Participated in code reviews, contributing to coding standards and best practices",
//       "Assisted in designing and implementing REST APIs for frontend applications.",
//     ],
//   },
];

export const CERTIFICATES = [
  {
    title: "JavaScript Intermediate by SoloLearn",
    date: "February 2024",
    skills: ["JavaScript"]
  },
  {
    title: "Advanced SQL by Kaggle",
    date: "Jan 2024",
    skills: ["SQL"]
  },
  {
    title: "Python by Kaggle",
    date: "December 2023",
    skills: ["Python"]
  },
  {
    title: "2023 Web Development BootCamp by Udemy",
    date: "June 2023",
    skills: ["React.js, JavaScript, REST APIs, Responsive Web Design, HTML, Cascading Style Sheets (CSS)"]
  },
  {
    title: "Core Java by Internshala",
    date: "July 2021",
    skills: ["Java Development"]
  },
];
