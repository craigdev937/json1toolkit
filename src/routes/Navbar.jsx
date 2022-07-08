import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
    <React.Fragment>
        <header className="flex justify-between items-center p-7">
            <Link to="/">
                <h1 className="text-3xl font-bold">RTK Crud</h1>
            </Link>
            <Link to="/create" className="bg-blue-500 px-2 py-1">
                New Task
            </Link>
        </header>
    </React.Fragment>
);


