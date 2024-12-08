import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api"; // Using centralized API instance
import './TopicDetail.css';
import user_icon from './assets/user-icon.png';
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faThumbsDown, faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad, faTrash, faLightbulb, faCar, faTree } from "@fortawesome/free-solid-svg-icons";


const TopicDetail = () => {
    const { topicId } = useParams(); // Extract topicId from the route
    const [topic, setTopic] = useState(null);
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState("");
    const [author, setAuthor] = useState("");
    const [error, setError] = useState(""); // State for handling errors

    useEffect(() => {
        fetchTopic(); // Fetch topic details
        fetchPosts(); // Fetch associated posts
    }, [topicId]); // Re-run effect when topicId changes

    const handleLike = async (like) => {
        try {
            await api.post(`/topics/${topicId}/${like ? "like" : "dislike"}`);
            if (like) {
                setTopic({ ...topic, likes: topic.likes + 1 });
            } else {
                setTopic({ ...topic, dislikes: topic.dislikes + 1 });
            }

        } catch (err) {
            setError("Error updating topic");
            console.error(err);
        }
    };

    const fetchTopic = async () => {
        try {
            const response = await api.get(`/topics/${topicId}`);
            setTopic(response.data);
        } catch (err) {
            setError("Error fetching topic");
            console.error(err);
        }
    };

    const fetchPosts = async () => {
        try {
            const response = await api.get(`/topics/${topicId}/posts`);
            setPosts(response.data);
        } catch (err) {
            setError("Error fetching posts");
            console.error(err);
        }
    };

    const handleAddPost = async (e) => {
        e.preventDefault();
        try {
            if (newPost && author) {
                await api.post(`/topics/${topicId}/posts`, { content: newPost, author });
                setNewPost("");
                setAuthor("");
                fetchPosts(); // Refresh the list of posts
            } else {
                alert("Fields should not be empty!");
            }
        } catch (err) {
            setError("Error adding post");
            console.error(err);
        }
    };

    return (
        <div className="topic-detail">
            {error && <p className="error">{error}</p>}
            {topic && (
                <>
                    <h1 className="title">{topic.title} by {topic.author}</h1>
                    <p>{topic.description}</p>
                </>
            )}
            {topic && (
                <div className="like-buttons">

                    <FontAwesomeIcon onClick={() => handleLike(true)} icon={faThumbsUp} cursor="pointer"/>
                    <span>{topic.likes - topic.dislikes}</span>
                    <FontAwesomeIcon onClick={() => handleLike(true)} icon={faThumbsDown} cursor="pointer"/>
                </div>
            )}
            <h2 className="comments">Comments:</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className="comment-list">
                        <img src={user_icon} className="user-icon"/> <strong>{post.author}</strong><br/>
                        {post.content}
                    </li>
                ))}
            </ul>

            <form onSubmit={handleAddPost}>
                <input
                    type="text"
                    placeholder="Your Post"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Your Name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
};

export default TopicDetail;
