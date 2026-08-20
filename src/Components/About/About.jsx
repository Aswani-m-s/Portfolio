import React from "react";
import { IoArrowForward } from "react-icons/io5";
import Aboutimg from "../../assets/Aboutimg.jpeg";


const About = () => {
    return <div id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black
     shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
        <div>
            <h2 className="text-2xl md:text-4xl font-bold ">About</h2>
            <div className="md:flex flex-wrap flex-col md:flex-row items-center">
                <img className="md:h-80" src={Aboutimg} alt="About img" />
                <ul>
                    <div className="flex gap-3 py-4">
                        <IoArrowForward size={30} className="mt-1" />

                        <span className="w-96">

                            <p className="text-sm md:text-md leading-tight">
                                I'm a passionate web developer with a strong interest in building modern, responsive, and user-friendly web applications. I enjoy transforming ideas into functional digital solutions using the MERN stack and continuously improving my skills through hands-on projects and learning.
                            </p>
                        </span>
                    </div>
                    <div className="flex gap-3 py-4">
                        <IoArrowForward size={30} className="mt-1" />

                        <span className="w-96">

                            <p className="text-sm md:text-md leading-tight">
                                I completed my Bachelor of Computer Applications from College of Applied Science Kozhikode and have been expanding my expertise in full-stack web development with technologies including MongoDB, Express.js, React.js, and Node.js. Along with these, I'm proficient in JavaScript, HTML, CSS and React.js.
                            </p>
                        </span>
                    </div>
                    <div className="flex gap-3 py-4">
                        <IoArrowForward size={30} className="mt-1" />

                        <span className="w-96">

                            <p className="text-sm md:text-md leading-tight">
                                I enjoy solving real-world problems through clean, maintainable code and creating intuitive user experiences. My projects have strengthened my understanding of frontend and backend development, authentication, database management, and responsive design.
                                I'm currently seeking opportunities where I can contribute to meaningful projects, collaborate with experienced developers, and continue growing as a Full Stack Developer.
                            </p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
    </div>
};

export default About;