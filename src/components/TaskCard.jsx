import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const TaskCard = ({ task }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <main className="bg-zinc-800 rounded-md text-white p-4">
            <header className="flex justify-between">
                <h3>{task.title}</h3>
                
            </header>
        </main>
    );
};


