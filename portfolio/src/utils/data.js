import frontend from '../assets/frontend.png';
import backend from '../assets/backend.png';
import tools from '../assets/tools.png';
import softskills from '../assets/softskills.png';

export const SKILLS = [
    {
        title: "Frontend",
        icon: frontend,
        skills: [
            {skill: "React.Js", percentage: "80%"},
            {skill: "HTML", percentage: "95%"},
            {skill: "CSS", percentage: "95%"},
            {skill: "JavaScript", percentage: "80%"},
        ],
    },
    {
        title: "Backend",
        icon: backend,
        skills: [
            {skill: "Node.js", percentage: "60%"},
            {skill: "Express.js", percentage: "50%"},
            {skill: "MongoDB", percentage: "60%"},
        ],
    },
    {
        title: "Tools",
        icon: tools,
        skills: [
            {skill: "Git & GitHub", percentage: "80%"},
            {skill: "Visual Studio Code", percentage: "90%"},
            {skill: "Responsive Design", percentage: "80%"},
        ],
    },
    {
        title: "Soft Skills",
        icon: softskills,
        skills: [
            {skill: "Problem-solving", percentage: "80%"},
            {skill: "Collaboration", percentage: "95%"},
            {skill: "Adaptive", percentage: "90%"},
            {skill: "Quick Learner", percentage: "80%"},
        ],
    },
]