import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";

export const TaskCard = () => {
    const dispatch = useDispatch();
    const { tasks } = useSelector((state) => state.tasks);
    React.useEffect(() => {
        dispatch(API.fetchAll());
    }, [dispatch]);

    return (
        <React.Fragment>
            {tasks.map((task) => (
                <main key={task.id}>
                    <p>{task.title}</p>
                    <p>{task.description}</p>
                </main>
            ))}
        </React.Fragment>
    );
};


