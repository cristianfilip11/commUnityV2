package com.example.commUnity;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TopicService {
    private final TopicRepository topicRepository;

    public TopicService(TopicRepository topicRepository) {
        this.topicRepository = topicRepository;
    }

    public List<Topic> getAllTopics() {
        return topicRepository.findAll();
    }

    public Topic createTopic(String title, String author, String description) {
        Topic topic = new Topic();
        topic.setTitle(title);
        topic.setAuthor(author);
        topic.setCreatedAt(LocalDateTime.now());
        topic.setDescription(description);
        return topicRepository.save(topic);
    }
}
