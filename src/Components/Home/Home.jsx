import React from "react";
import DemoPic from "../../assets/DemoPic.png";
import TextChange from "../TextChange";
import Resume from "../../assets/Resume.pdf";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div
            id="Home"
            className="text-white flex flex-col md:flex-row w-full justify-between items-center px-6 py-10 md:px-12 lg:px-20"
        >
            {/* Left Content */}
            <div className="w-full md:w-1/2 md:pt-10">

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-normal tracking-tighter">
                    <TextChange />
                </h1>

                <p className="text-sm sm:text-base md:text-xl lg:text-2xl tracking-tight mt-6 md:mt-8 lg:mt-10 font-semibold">
                    I build responsive, user-friendly web applications using
                    modern web technologies. Passionate about creating clean,
                    scalable solutions, I'm always eager to learn new
                    technologies and deliver impactful digital experiences.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-6 md:mt-8">

                    <button
                        onClick={() => navigate("/Contact")}
                        className="inline-block border border-[#465697] py-2 px-4 text-sm md:text-lg rounded-3xl text-white hover:bg-[#465697] duration-300"
                    >
                        Contact Me
                    </button>

                    <a
                        href={Resume}
                        download
                        className="inline-block border border-[#465697] py-2 px-4 text-sm md:text-lg rounded-3xl text-white hover:bg-[#465697] duration-300"
                    >
                        Download Resume
                    </a>

                </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
                <img
                    src={DemoPic}
                    alt="Portfolio"
                    className="w-80 sm:w-96 md:w-[550px] lg:w-[650px] xl:w-[700px] object-contain"
                />
            </div>
        </div>
    );
};

export default Home;