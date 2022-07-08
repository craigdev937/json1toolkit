import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "http://localhost:5000/tasks";

class FetchClass {
    fetchAll = createAsyncThunk("taks/fetchAll", 
    async () => {
        const res = await fetch(URL);
        if (!res.ok) throw new Error(res.statusText);
        const tasks = await res.json();
        return [...tasks];
    });
}

export const API = new FetchClass();


