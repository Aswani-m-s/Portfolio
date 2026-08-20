
import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "@remixicon/react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
    const [menu, openMenu] = useState(false);
    const [showMenu, setshowMenu] = useState(true);
    return (
        <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
            <span className="text-xl font-bold tracking-wide">Portfolio</span>

            <ul className={`${menu ? "block" : "hidden"} mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none
                 text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
                <HashLink smooth to="/#Home">
                    <li className="text-md transition-all duration-300 p-1 md:p-0">
                        Home
                    </li>
                </HashLink>

                <HashLink smooth to="/#About">
                    <li className="text-md transition-all duration-300 p-1 md:p-0">
                        About
                    </li>
                </HashLink>

                <HashLink smooth to="/#Experience">
                    <li className="text-md transition-all duration-300 p-1 md:p-0">
                        Experience
                    </li>
                </HashLink>

                <HashLink smooth to="/#Projects">
                    <li className="text-md transition-all duration-300 p-1 md:p-0">
                        Projects
                    </li>
                </HashLink>

                <HashLink smooth to="/#Footer">
                    <li className="text-md transition-all duration-300 p-1 md:p-0">
                        Contact
                    </li>
                </HashLink>
            </ul>

            {showMenu ? (
                <RiMenu2Line
                    size={30}
                    className="md:hidden absolute right-10 top-6 transition-all duration-300"
                    onClick={() => {
                        openMenu(!menu);
                        setshowMenu(!showMenu);
                    }}
                />
            ) : (
                <RiCloseLine
                    size={30}
                    className="md:hidden absolute right-10 top-6 transition-all duration-300"
                    onClick={() => {
                        openMenu(!menu);
                        setshowMenu(!showMenu);
                    }}
                />
            )}
        </nav>
    );
};


export default Navbar;