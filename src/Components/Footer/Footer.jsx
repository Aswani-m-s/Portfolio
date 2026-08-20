import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div
            id="Footer"
            className="flex flex-col md:flex-row justify-around items-center bg-[#0c0e19] text-white p-10 md:p-12"
        >
            <div className="mb-8 md:mb-0">
                <h1 className="text-3xl md:text-6xl font-bold">Contact</h1>
                <h3 className="text-base md:text-2xl mt-2">
                    Feel Free To Reach Out!
                </h3>
            </div>

            <ul className="text-base md:text-xl space-y-4">
                <li className="flex items-center gap-3">
                    <MdOutlineEmail size={24} />
                    <a
                        href="mailto:aswanims2k03@gmail.com"
                        className="hover:underline"
                    >
                        aswanims2k03@gmail.com
                    </a>
                </li>

                <li className="flex items-center gap-3">
                    <CiLinkedin size={24} />
                    <a
                        href="https://www.linkedin.com/in/aswani-ms-1ab2192b0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        linkedin.com/in/aswani-ms
                    </a>
                </li>

                <li className="flex items-center gap-3">
                    <FaGithub size={24} />
                    <a
                        href="https://github.com/Aswani-m-s/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        github.com/Aswani-m-s
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;