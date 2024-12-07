import React, { useState } from "react";
import api from "../services/api";

const CreateTopic = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/topics", { title, author });
            alert("Topic created successfully!");
            setTitle("");
            setAuthor("");
        } catch (error) {
            console.error("Error creating topic:", error);
        }
    };

    return (
        <div>
            <h1>Create a New Topic</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Topic Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Author Name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <button type="submit">Create Topic</button>
            </form>
        </div>
    );
};

export default CreateTopic;
