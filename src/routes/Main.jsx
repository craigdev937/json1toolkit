import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { TaskList } from "../pages/TaskList";
import { TaskForm } from "../pages/TaskForm";

export const Main = () => {
    return (
        <BrowserRouter>
            <main className="bg-neutral-900 h-screen text-white">
                <section className="container mx-auto">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<TaskList />} />
                        <Route path="/create" element={<TaskForm />} />
                        <Route path="/tasks/:id" element={<TaskForm />} />
                    </Routes>
                </section>
            </main>
        </BrowserRouter>
    );
};


