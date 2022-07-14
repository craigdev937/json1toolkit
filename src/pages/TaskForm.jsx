import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";

export const TaskForm = () => {
    const [task, setTask] = React.useState({
        title: "", description: ""
    });
    
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setTask({...task, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (params.id) {
            dispatch(
                API.Update({
                    id: params.id,
                    title: task.title,
                    description: task.description
                })
            );
            navigate("/");
        } else {
            dispatch(API.Create(task));
            navigate("/");
        }
    };

    React.useEffect(() => {
        const loadTask = () => {
            try {
                const res = API.GetOne(params.id);
                setTask(res);
            } catch (error) {
                console.log(error);
            }
        };
        loadTask();
    }, [params.id]);

    return (
        <main className="max-w-sm mx-auto">
            <form 
                onSubmit={handleSubmit} 
                className="bg-zinc-800 p-10">
                <label htmlFor="title" 
                    className="block">Title:
                </label>
                <input 
                    autoFocus
                    className="p-2 w-full 
                        text-block bg-zinc-400 
                        placeholder:text-neutral-600"
                    placeholder="Task name"
                    type="text"                     
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                />
                <label htmlFor="description" 
                    className="block">Description:
                </label>
                <textarea 
                    name="description" 
                    rows="3"
                    className="p-2 w-full 
                        text-black bg-zinc-400 
                        placeholder:text-neutral-600"
                    placeholder="Write a Description"
                    value={task.description}
                    onChange={handleChange}
                    >
                </textarea>
                <button 
                    className="block 
                    bg-indigo-500 
                    px-2 py-1 w-full"
                    >Save
                </button>
            </form>
        </main>
    );
};


