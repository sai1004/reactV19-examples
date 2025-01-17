import React, { useEffect, useState } from "react";
import { CallApi } from "../CallAPI";

const CreateNewTodo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: title,
            description: description,
            profileId: "M1RIHPFK",
        };
        saveTodo(data);
    };

    const saveTodo = async (requestPayload) => {
        const response = requestPayload && (await new CallApi().withUsingPostMethod("todo/save", requestPayload));
    };

    useEffect(() => {}, []);

    return (
        <>
            <div className="create__newtodo">
                <h3> Add New Todo </h3>
                <form
                    onSubmit={(e) => {
                        onSubmit(e);
                    }}
                >
                    <div className="flex">
                        <div className="flex-item">
                            <input
                                type="text"
                                name="title"
                                placeholder="add new title"
                                onChange={(e) => setTitle(e?.target?.value)}
                                value={title}
                            />
                        </div>
                        <div className="flex-item">
                            <input
                                type="text"
                                name="description"
                                placeholder="add new description"
                                onChange={(e) => setDescription(e?.target?.value)}
                                value={description}
                            />
                        </div>
                        <div className="flex-item">
                            <button type="submit">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CreateNewTodo;
