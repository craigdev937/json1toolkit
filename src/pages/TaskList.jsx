import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";
import { TaskCard } from "../components/TaskCard";

export const TaskList = () => {
    const dispatch = useDispatch();
    const { loading, error, tasks } = 
        useSelector((state) => state.tasks);
    
    React.useEffect(() => {
        dispatch(API.fetchAll());
    }, [dispatch]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error.message}</h1>

    return (
        <main className="grid 
                grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-4 
                gap-3"
            >{tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </main>
    );
};


