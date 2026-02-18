import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Medora",
            desc: "Coded the frontend of a medical report storage app with AI summarizer and Medicine alert system.",
            image: "/images/Medora.jpg"
        },
        {
            title: "C3 Webpage",
            desc: "A clean and responsive single page website for promoting blockchain club events and updates.",
            image: "/images/C3 LOGO.png"
        },
        {
            title: "Online Voting System",
            desc: "A webpage for voting during elections with user authentication and secure voting mechanism. Contains infos about the election party a user is voting.",
            image: "/images/Vote.png"
        },
        {
            title: "Kuru-Kuru",
            desc: "A fun and enjoyable tap counter webpage with a simple and clean design.",
            image: "/images/kuru kuru.gif"
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <h2 className="fade-in">Featured Projects</h2>
                <p className="section-subtitle fade-in">A selection of my most impactful work across various industries and technologies.</p>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card fade-in">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
