import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

const TopicDetail = () => {
    const { topicId } = useParams();
    const [topic, setTopic] = useState(null);
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        fetchTopic();
        fetchPosts();
    }, [topicId]);

    console.log(topicId);
    const fetchTopic = async () => {
        try {
            const response = await api.get(`/topics/${topicId}`);
            setTopic(response.data);
            //console.log(response);
            console.log("da");
            //console.log("Fetched topic:", response.data);

        } catch (error) {
            console.error("Error fetching topic:", error);
        }
    };

    const fetchPosts = async () => {
        try {
            const response = await api.get(`/topics/${topicId}/posts`);
            setPosts(response.data);

        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    const handleAddPost = async (e) => {
        e.preventDefault();
        try {
            await api.post(`/topics/${topicId}/posts`, { content: newPost, author });
            setNewPost("");
            setAuthor("");
            fetchPosts();
        } catch (error) {
            console.error("Error adding post:", error);
        }
    };

    return (
        <div>
            {topic && <h1>{topic.title} by {topic.author}</h1>}

            <h2>Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {post.content} by {post.author}
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
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
};

export default TopicDetail;
