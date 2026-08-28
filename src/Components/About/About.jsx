
import React from "react";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
    return (
        <div
            id="About"
            className="text-white bg-black bg-opacity-30 shadow-xl mx-0 md:mx-20 rounded-lg p-6 md:p-10 lg:p-16"
        >
            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <h2 className="text-2xl md:text-4xl font-bold mb-8">
                    About
                </h2>

                {/* About Content */}
                <div className="space-y-6">

                    {/* Content 1 */}
                    <div className="flex gap-3 items-start">
                        <IoArrowForward
                            size={25}
                            className="mt-1 flex-shrink-0"
                        />

                        <p className="text-sm md:text-base leading-relaxed text-gray-200">
                            I'm a passionate web developer with a strong interest
                            in building modern, responsive, and user-friendly web
                            applications. I enjoy transforming ideas into
                            functional digital solutions using the MERN stack and
                            continuously improving my skills through hands-on
                            projects and learning.
                        </p>
                    </div>

                    {/* Content 2 */}
                    <div className="flex gap-3 items-start">
                        <IoArrowForward
                            size={25}
                            className="mt-1 flex-shrink-0"
                        />

                        <p className="text-sm md:text-base leading-relaxed text-gray-200">
                            I completed my Bachelor of Computer Applications from
                            College of Applied Science Kozhikode and have been
                            expanding my expertise in full-stack web development
                            with technologies including MongoDB, Express.js,
                            React.js, and Node.js. Along with these, I'm proficient
                            in JavaScript, HTML, and CSS.
                        </p>
                    </div>

                    {/* Content 3 */}
                    <div className="flex gap-3 items-start">
                        <IoArrowForward
                            size={25}
                            className="mt-1 flex-shrink-0"
                        />

                        <p className="text-sm md:text-base leading-relaxed text-gray-200">
                            I enjoy solving real-world problems through clean,
                            maintainable code and creating intuitive user
                            experiences. My projects have strengthened my
                            understanding of frontend and backend development,
                            authentication, database management, and responsive
                            design. I'm currently seeking opportunities where I
                            can contribute to meaningful projects, collaborate
                            with experienced developers, and continue growing as
                            a Full Stack Developer.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;

