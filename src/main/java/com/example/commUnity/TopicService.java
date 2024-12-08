package com.example.commUnity;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class TopicService {

    private final TopicRepository topicRepository;

    public List<Topic> getTopicsOrderedByLikes() {
        return topicRepository.findAllOrderedByLikes();
    }

    @Autowired
    public TopicService(TopicRepository topicRepository) {
        this.topicRepository = topicRepository;
    }

    // Get all topics
    public List<Topic> getAllTopics() {
        return topicRepository.findAll();
    }

    // Get a topic by ID
    public Topic getTopicById(Long id) {
        return topicRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Topic not found with id: " + id));
    }

    // Create a new topic
    public Topic createTopic(Topic topic) {
        return topicRepository.save(topic);
    }

    // Update an existing topic
    public Topic updateTopic(Long id, Topic updatedTopic) {
        Topic existingTopic = topicRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Topic not found with id: " + id));

        existingTopic.setTitle(updatedTopic.getTitle());
        existingTopic.setAuthor(updatedTopic.getAuthor());
        existingTopic.setDescription(updatedTopic.getDescription());
        return topicRepository.save(existingTopic);
    }

    // Delete a topic
    public void deleteTopic(Long id) {
        Topic topic = topicRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Topic not found with id: " + id));
        topicRepository.delete(topic);
    }

    // In TopicService.java

    public void adjustLike(Long topicId, boolean isLike) {
        Topic topic = topicRepository.findById(topicId)
                .orElseThrow(() -> new NoSuchElementException("Topic not found with id: " + topicId));

        if (isLike) {
            topic.setLikes(topic.getLikes() + 1);
        } else {
            topic.setDislikes(topic.getDislikes() + 1);
        }

        topicRepository.save(topic);
    }

}
