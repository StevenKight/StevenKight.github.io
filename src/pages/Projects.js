import { useNavigate } from "react-router-dom";

import "./Projects.css";

const ProjectAreas = [
    { name: "Artificial Intellegence", description: "My work in AI has been primarily focused on the development of a student aid system that can help students with their daily tasks and assignments. During this project and others I have worked with a variety of AI technologies including machine learning, neural networks, and genetic algorithms. My work focused on facial recognition, vocal recognition, natural language processing, data analysis, and more." },
    { name: "Simulations", description: "My work in simulations has been primarily focused on the development of physics simulations such as gravity and nuclear physics. I worked with other students within the physics department to develop these simulations. My work focused on the development and optimization of the simulations themselves as well as the development of the user interface." },
    { name: "Software Engineering", description: "My work in software engineering has been primarily focused on the development of software for the university. I have worked on a variety of projects including the development of a student aid system, a student information system, and a student mental health system. My work focused on the development of the software itself as well as the development of the user interface. I worked on these projects with other students and faculty members. From database, to front-end, to back-end, I have worked on all aspects of the software development process." },
    { name: "Graphics and Design", description: "My work in graphics and design has been primarily focused on the development of logos, posters, and other graphic design work. I have worked on a variety of projects including the development of a logo for a student organization, a poster for a student event, and a website for a student organization. My work focused on the development of the graphics themselves in coordination with the client to approve and personalize each design to the clients needs and requirements." }
];

export default function Projects() {

    const navigate = useNavigate();

    function handleNavigation(e, destination) {
        e.preventDefault();
        
        navigate(destination);
    }

    return (
        <div className="Projects">
            <div className="ProjectsHeader">
                <h1>
                    From Artificial Intellegence
                    and Physics Simulations 
                    to small graphic design work.
                </h1>
                <h3>
                    I am in the process of expanding upon my abilities and am working on new projects 
                    in some of the below fields aswell as in other areas of computer science.
                    <br/><br/>
                </h3>
            </div>
            <div className="ProjectsContent">
                {
                    ProjectAreas.map((project, index) => {
                        let link = project.name.replace(/ /g, "-").toLowerCase();

                        return (
                            <div className="ProjectArea" key={index}>
                                <h2>{(index + 1) + ". " + project.name}</h2>
                                <p>{project.description}</p>
                                <h5 class="workLearnMore">
                                    <a onClick={(evt) => handleNavigation(evt, ("/works/" + link))}>
                                        Learn More &#62;
                                    </a>
                                </h5>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}