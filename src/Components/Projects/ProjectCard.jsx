import React from "react";

const ProjectCard = ({ title, main, image, link }) => {
    return (
        <div className="p-3 md:p-6 flex flex-col w-80 flex-shrink-0 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">

            <img
                className="p-4 rounded-lg h-90 w-full object-cover"
                src={image}
                alt={title}
            />

            <h3 className="px-4 text-xl md:text-2xl font-bold">
                {title}
            </h3>

            <p className="px-4 py-2 flex-grow">
                {main}
            </p>

            <div className="mt-2 p-4 flex justify-center gap-4">
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#465697] hover:bg-[#5a6fc0] transition duration-300 rounded-3xl px-5 py-2 text-white font-medium"
                >
                    Live Project
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;