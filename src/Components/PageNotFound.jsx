import React from "react";
import { Link } from "react-router-dom";


export default function pageNotFound(){
    return (
        <>
        <h2>404 Page Not found</h2>
        <Link to="/">Return Home</Link>
        </>
    )
}