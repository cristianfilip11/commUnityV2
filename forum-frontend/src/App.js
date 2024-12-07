import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopicList from "./Forum/TopicList";
import CreateTopic from "./Forum/CreateTopic";
import TopicDetail from "./Forum/TopicDetail";

const App = () => {
    return (
        <Router>
            {/* Application Header */}
            <header>
                <h1>CommUnity Forum</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/create-topic">Create Topic</a>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Define Application Routes */}
            <Routes>
                {/* Route for listing all topics */}
                <Route path="/" element={<TopicList />} />

                {/* Route for creating a new topic */}
                <Route path="/create-topic" element={<CreateTopic />} />

                {/* Route for viewing details of a specific topic */}
                <Route path="/topics/:topicId" element={<TopicDetail />} />
            </Routes>



        </Router>
    );
};

export default App;
