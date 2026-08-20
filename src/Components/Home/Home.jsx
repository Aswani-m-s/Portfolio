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
            className="text-white flex w-full justify-between items-center p-10 md:p-20">
            <div className="md:w-2/4 md:pt-10">
                <h1 className="text-xl md:text-6xl font-bold leading-normal tracking-tighter">
                    <TextChange />
                </h1>

                <p className="text-sm md:text-2xl tracking-tight mt-6 md:mt-10 font-semibold">
                    I build responsive, user-friendly web applications using modern web technologies. Passionate about creating clean, scalable solutions, I'm always eager to learn new technologies and deliver impactful digital experiences.
                </p>

                <div className="flex gap-4 mt-6">

                    <button
                        onClick={() => navigate("/Contact")}
                        className="inline-block border border-[#465697] py-2 px-4 text-sm md:text-lg rounded-3xl text-white hover:bg-[#465697] duration-300">
                        Contact Me
                    </button>

                    <a
                        href={Resume}
                        download
                        className="inline-block border border-[#465697] py-2 px-4 text-sm md:text-lg rounded-3xl text-white hover:bg-[#465697] duration-300">
                        Download Resume
                    </a>
                </div>
            </div>

            <div className="md:w-2/5 flex justify-center">
                <img src={DemoPic} alt="Portfolio" className="w-full md:-mt-8" />
            </div>
        </div>
    );
};

export default Home