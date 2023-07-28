import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){

    const linkList =[
        {name: "Home",
        link: "/"},
        {name: "About",
        link: "/about"},
        {name: "Admin",
        link: "/admin"},

    ];
    return(
        <nav>
            <ul>
            {linkList.map((link, index) => 
            <li key={index}><Link to={link.link}>{link.name}</Link></li>)}
            </ul>
        </nav>
    )
}