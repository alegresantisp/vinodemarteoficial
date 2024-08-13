import React from "react";
import { FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

const NavBar = () => {
    const iconSize = 32; 

    return (
        <div className="flex flex-col items-center space-y-11">
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
            >
                <FaInstagram size={iconSize} />
            </a>
            <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
            >
                <FaYoutube size={iconSize} />
            </a>
            <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
            >
                <FaSpotify size={iconSize} />
            </a>
            <a
                href="https://linktree.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
            >
                <SiLinktree size={iconSize} />
            </a>
            
        </div>
    );
};

export default NavBar;
