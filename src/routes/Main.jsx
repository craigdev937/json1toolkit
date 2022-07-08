import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { TaskList } from "../pages/TaskList";
import { TaskForm } from "../pages/TaskForm";

export const Main = () => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Navbar />
                <Routes>
                    <Route path="/" element={<TaskList />} />
                    <Route path="/create" element={<TaskForm />} />
                    <Route path="/tasks/:id" element={<TaskForm />} />
                </Routes>
            </React.Fragment>
        </BrowserRouter>
    );
};


