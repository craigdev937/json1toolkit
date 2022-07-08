import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "http://localhost:5000/tasks";

class FetchClass {
    fetchAll = createAsyncThunk("tasks/fetchAll", 
    async () => {
        const res = await fetch(URL);
        if (!res.ok) throw new Error(res.statusText);
        const tasks = await res.json();
        return [...tasks];
    });

    Create = createAsyncThunk("task/Create", 
    async (payload) => {
        const res = await fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: payload.title, 
                description: payload.description
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const task = await res.json();
        return task;
    });

    Update = createAsyncThunk("task/Update", 
    async (payload) => {
        const res = await fetch(`${URL}/${payload.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: payload.title, 
                description: payload.description
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const task = await res.json();
        return task;
    });

    Delete = createAsyncThunk("task/Delete", 
    async (payload) => {
        const res = await fetch(`${URL}/${payload.id}`, {
            method: "DELETE"
        });
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    });
}

export const API = new FetchClass();


