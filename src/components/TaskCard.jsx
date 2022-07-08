import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";

export const TaskCard = ({ task }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/tasks/${id}`);
    };

    const handleDelete = (id) => {
        dispatch(API.Delete(id));
    };

    return (
        <main className="bg-zinc-800 rounded-md text-white p-4">
            <header className="flex justify-between">
                <h3>{task.title}</h3>
                <section className="flex gap-x-2">
                    <button 
                        className="bg-red-500 
                        px-2 py-1 text-sm"
                        onClick={() => handleDelete(task.id)}>
                        delete
                    </button>
                    <button 
                        className="bg-slate-300"
                        onClick={() => handleEdit(task.id)}
                        >edit
                    </button>
                </section>
            </header>
            <p className="text-slate-400">{task.description}</p>
        </main>
    );
};


