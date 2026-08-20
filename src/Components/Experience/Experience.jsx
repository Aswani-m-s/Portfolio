import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaPython,
    FaGitAlt,
    FaGoogle,
} from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Experience = () => {
    return (
        <div id="Experience" className="p-10 md:p-24 bg-[#171d32]">
            <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">
                Experience
            </h1>

            <div className="flex flex-col lg:flex-row justify-between gap-10">
                {/* Skills Section */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 lg:w-3/5">

                    <div className="bg-zinc-900 p-5 rounded-2xl flex flex-col items-center hover:scale-110 transition duration-300">
                        <FaHtml5 size={55} color="#E34F26" />
                        <p className="text-white mt-2">HTML5</p>
                    </div>

                    <div className="bg-zinc-900 p-5 rounded-2xl flex flex-col items-center hover:scale-110 transition duration-300">
                        <FaCss3Alt size={55} color="#1572B6" />
                        <p className="text-white mt-2">CSS3</p>
                    </div>

                    <div className="bg-zinc-900 p-5 rounded-2xl flex flex-col items-center hover:scale-110 transition duration-300">
                        <FaJsSquare size={55} color="#F7DF1E" />
                        <p className="text-white mt-2">JavaScript</p>
                    </div>

                    <div className="bg-zinc-900 p-5 rounded-2xl flex flex-col items-center hover:scale-110 transition duration-300">
                        <FaReact size={55} color="#61DAFB" />
                        <p className="text-white mt-2">React</p>
                    </div>

                    <div className="bg-zinc-900 p-5 rounded-2xl flex flex-col items-center hover:scale-110 transition duration-300">
                        <FaNodeJs size={55} color="#339933" />
                        <p className="text-white mt-2">Node.js</p>
                    </div>

                    <div className="bg-zinc-900 p-5 rounded-2xl flex flex-col items-center hover:scale-110 transition duration-300">
                        <SiMongodb size={55} color="#47A248" />
                        <p className="text-white mt-2">MongoDB</p>
                    </div>

                    <div className="bg-zinc-900 p-5 rounded-2xl flex flex-col items-center hover:scale-110 transition duration-300">
                        <FaPython size={55} color="#3776AB" />
                        <p className="text-white mt-2">Python</p>
                    </div>

                    <div className="bg-zinc-900 p-5 rounded-2xl flex flex-col items-center hover:scale-110 transition duration-300">
                        <FaGitAlt size={55} color="#F05032" />
                        <p className="text-white mt-2">Git</p>
                    </div>

                    <div className="bg-zinc-900 p-5 rounded-2xl flex flex-col items-center hover:scale-110 transition duration-300">
                        <VscVscode size={55} color="#007ACC" />
                        <p className="text-white mt-2">VS Code</p>
                    </div>
                </div>

                {/* Experience Card */}
                <div className="bg-slate-900 bg-opacity-60 rounded-2xl p-6 lg:w-2/5 shadow-lg hover:shadow-blue-500/20 transition duration-300">
                    <div className="flex gap-5 items-center">


                        <div className="text-white">
                            <h2 className="text-xl font-semibold">
                                MERN Stack Developer Intern
                            </h2>

                            <p className="text-gray-400 text-sm">
                                Nov 2025 – May 2026
                            </p>
                            <p className="text-gray-400 text-sm">
                                Camerinfolks Pvt.Ltd
                            </p>

                            <ul className="list-disc ml-5 mt-3 space-y-2 text-gray-300">
                                <li>Developed responsive web applications using React.js.</li>
                                <li>Built REST APIs with Node.js and Express.js.</li>
                                <li>Worked with MongoDB for database management.</li>
                                <li>Implemented JWT Authentication.</li>
                                <li>Resolved front-end and back-end issues through debugging and testing,ensuring optimal application performance and reliability.</li>
                                <li>Used Git and GitHub for version control.</li>
                                <li>Collaborated using Visual Studio Code.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;