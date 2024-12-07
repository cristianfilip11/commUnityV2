import React, { useEffect, useState } from "react";
import api from "../services/api";
import './TopicList.css'

import { Link } from "react-router-dom";
const TopicList = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetchTopics();
    }, []);

    const fetchTopics = async () => {
        try {
            const response = await api.get("/topics");
            console.log(response);
            setTopics(response.data);
        } catch (error) {
            console.error("Error fetching topics:", error);
        }
    };

    //console.log(topics.id)
    //console.log("dasda")
    return (

        <div className="topics">
            <h1>Forum Topics</h1>
            <ul>
                {topics.map((topic) => (
                    <li key={topic.id}>

                        <Link to={`/topics/${topic.id}`}>{topic.title}</Link> by {topic.author}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopicList;
