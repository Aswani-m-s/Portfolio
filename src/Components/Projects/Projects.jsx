import React from "react";
import ProjectCard from "./ProjectCard";

import Jewelry from "../../assets/Jewelry.jpeg";
import Fashion from "../../assets/Fashion.jpeg";
import service from "../../assets/service.jpeg";
import bannerImg from "../../assets/bannerImg.jpeg";

const Projects = () => {
    return (
        <div id="Projects" className="p-6 md:p-10 lg:p-24 text-white">

            <h1 className="text-2xl md:text-4xl text-white font-bold">
                Projects
            </h1>

            <div className="py-12 px-4 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

                <ProjectCard
                    image={bannerImg}
                    title="Eventum"
                    link="https://eventum-frontend-iwor.onrender.com"
                    main="This is a MERN stack-based web application that simplifies ticket booking for concerts and events, offering users a smooth, time-saving experience while eliminating the need for long physical queues."
                />

                <ProjectCard
                    image={Jewelry}
                    title="Jewelry Website"
                    link="https://jewellery-website-r6vh.onrender.com"
                    main="A modern and responsive jewellery e-commerce website built with React and Tailwind CSS, designed to provide users with a smooth and attractive browsing experience for exploring jewellery collections."
                />

                <ProjectCard
                    image={Fashion}
                    title="Fashion Website"
                    link="https://fashion-qrg6.onrender.com"
                    main="A responsive fashion photography portfolio showcasing creative fashion photography, built with React and Tailwind CSS, featuring a modern and visually appealing design."
                />

                <ProjectCard
                    image={service}
                    title="Repair Service Website"
                    link="https://service-4mmo.onrender.com"
                    main="A responsive service-based website built with React and Tailwind CSS, designed to showcase services through a clean, modern, and user-friendly interface."
                />

            </div>
        </div>
    );
};

export default Projects;