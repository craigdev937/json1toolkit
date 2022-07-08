import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
    <main className="bg-neutral-900 h-screen text-white">
        <section className="container mx-auto">
            <header className="flex justify-between items-center p-7">
                <Link to="/">
                    <h1 className="text-3xl font-bold">RTK Crud</h1>
                </Link>
                <Link to="/create">
                    New Task
                </Link>
            </header>
        </section>
    </main>
);


