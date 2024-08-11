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
      { skill: "UI/UX design, Prototyping", percentage: "95%" },
      { skill: "HTML, SCSS,CSS, Bootstrap, Tailwind", percentage: "95%" },
      { skill: "JavaScript, Jquery", percentage: "80%" },
    ],
  },
  {
    title: "Backend",
    icon: backend,
    skills: [
      { skill: "Node.js", percentage: "60%" },
      { skill: "Express.js", percentage: "50%" },
      { skill: "MongoDB", percentage: "60%" },
      { skill: "Python", percentage: "60%" },
    ],
  },
  {
    title: "Tools",
    icon: tools,
    skills: [
      { skill: "Git & GitHub", percentage: "80%" },
      { skill: "Figma", percentage: "80%" },
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

export const PROJECTS = [
  {
    title: "Eurofestia",
    link: "https://eurofestia.com/",
    description: [
      "A sophisticated web application built to schedule and view all the music festivals happening across Europe",
      "Developed using React, Redux, Bootstrap for seamless and consistent user experience.",
      "UI design created through Figma matching the theme of concerts and music to entrance the user",
      "The app features a stylish accordion UI design, enhancing user interaction and providing a smooth browsing experience through collapsible sections",
     
    ],
  },
  {
    title: "Netflix GPT",
    link: "https://netflix-gpt-three-gamma.vercel.app/",
    description: [
      "A sophisticated web application built to revolutionize user interaction with content using openAI API.",
      "Developed using React, Redux, Tailwind CSS, and Firebase with secure user authentication and efficient state management using Redux for a seamless and consistent user experience.",
      "State management is facilitated through Redux and Context API, enabling efficient data handling and seamless updates across components",
      "The app features a stylish accordion UI design, enhancing user interaction and providing a smooth browsing experience through collapsible sections",
      "Seamless ordering and checkout functionality allow users to add items to their cart and proceed to checkout effortlessly, streamlining the ordering process.",
    ],
  },
  {
    title: "Dash dine",
    link: "https://react-drill-jet.vercel.app/",
    description: [
      "This project is an online food ordering application inspired by platforms like Swiggy, built using React.js",
      "Utilizing live Swiggy API data, the app offers a dynamic selection of food options from various restaurants",
      "State management is facilitated through Redux and Context API, enabling efficient data handling and seamless updates across components",
      "The app features a stylish accordion UI design, enhancing user interaction and providing a smooth browsing experience through collapsible sections",
      "Seamless ordering and checkout functionality allow users to add items to their cart and proceed to checkout effortlessly, streamlining the ordering process.",
    ],
  },
  {
    title: "Service HelpDesk Portal",
    link: "https://helpdesk.geminisolutions.com/",
    description: [
      "The project built using React.js, designed to streamline employee requests for hardware and software requirements while facilitating resolution by the appropriate parties",
      "A structured workflow guides the lifecycle of each ticket, from creation to resolution, ensuring efficient handling and accountability at each stage",
      "Custom UI components, including modals, notifications, and tables, enhance the user experience by providing intuitive interfaces for interacting with the platform's features",
      "Seamless integration with external APIs enables the retrieval and manipulation of data, facilitating communication between the frontend and backend systems",
      "Through meticulous testing and debugging efforts, the project achieved a notable reduction in bugs, ensuring a stable and reliable user experience",
    ],
  },
  {
    title: "DogWalker App UI",
    link: "http://rb.gy/u6k5z8",
    description: [
      "DogWalker is a Figma UI design project aimed at conceptualizing the interface for a dog walking application",
      "As the UI designer, I meticulously crafted each element to ensure a seamless and visually engaging user experience",
      "A streamlined booking interface provides users with the ability to select preferred dates, times, and duration for dog walking sessions, ensuring convenience and flexibility",
      "Emphasis is placed on creating a realistic user experience through thoughtful interface designs and seamless navigation flows, enhancing user engagement and satisfaction.",
      "This project highlights my expertise as a UI designer in creating visually appealing and user-centric designs, with a focus on enhancing the usability and functionality of the DogWalker application.",
    ],
  },
  {
    title: "DogWalker App UI",
    link: "https://www.figma.com/proto/kQNIy5wqr0k401xblGS4ls/Dogwalker?type=design&node-id=47-167&t=dVGzigmn3q5yTHqn-1&scaling=scale-down&page-id=42%3A3&starting-point-node-id=47%3A167&show-proto-sidebar=1&mode=design",
    description: [
      "DogWalker is a Figma UI design project aimed at conceptualizing the interface for a dog walking application",
      "As the UI designer, I meticulously crafted each element to ensure a seamless and visually engaging user experience",
      "A streamlined booking interface provides users with the ability to select preferred dates, times, and duration for dog walking sessions, ensuring convenience and flexibility",
      "Emphasis is placed on creating a realistic user experience through thoughtful interface designs and seamless navigation flows, enhancing user engagement and satisfaction.",
      "This project highlights my expertise as a UI designer in creating visually appealing and user-centric designs, with a focus on enhancing the usability and functionality of the DogWalker application.",
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Frontend web Developer at Digital Innovations",
    date: "March 2024 - Present",
    responsibilities: [
      "Developed full-scale websites utilizing React, HTML, JavaScript, Bootstrap, and Tailwind, ensuring optimal performance and user experience.",
      "Designed intuitive and visually appealing user interfaces using Figma, translating design concepts into functional frontend components",
      "Integrated APIs seamlessly to add dynamic functionality and enhance website capabilities, improving user engagement and interaction.",
      "Collaborated closely with cross-functional teams to implement project requirements, ensuring alignment with design specifications and business objectives.",
      "Demonstrated adaptability and problem-solving skills",
    ],
  },
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
  // {
  //   title: "Student at GLA University",
  //   date: "August 2019 - July 2023",
  //   responsibilities: [
  //     "Sed ut perspiciatis unde omnis iste natus error sit voluptatem ",
  //     "aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
  //     " Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni ",
  //     "dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam cbsbs ",
  //     "beatae vitae dicta sunt explicabo."

  //   ],
  // },
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
    title: "Google Professional UX Design Certificate",
    date: "March 2024",
    skills: ["Figma, UI design, Wireframing, Prototyping, UX Research"],
  },
  {
    title: "JavaScript Intermediate by SoloLearn",
    date: "February 2024",
    skills: ["JavaScript"],
  },
  {
    title: "Advanced SQL by Kaggle",
    date: "Jan 2024",
    skills: ["SQL"],
  },
  {
    title: "Python by Kaggle",
    date: "December 2023",
    skills: ["Python"],
  },
  {
    title: "2023 Web Development BootCamp by Udemy",
    date: "June 2023",
    skills: [
      "React.js, JavaScript, REST APIs, Responsive Web Design, HTML, Cascading Style Sheets (CSS)",
    ],
  },
  {
    title: "Core Java by Internshala",
    date: "July 2021",
    skills: ["Java Development"],
  },
];
