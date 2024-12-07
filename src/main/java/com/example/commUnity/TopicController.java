package com.example.commUnity;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/topics")
public class TopicController {

    private final TopicService topicService;

    @Autowired
    public TopicController(TopicService topicService) {
        this.topicService = topicService;
    }

    // Get all topics
    @GetMapping
    public ResponseEntity<List<Topic>> getAllTopics() {
        List<Topic> topics = topicService.getAllTopics();
        return ResponseEntity.ok(topics);
    }

    // Get a specific topic by ID
    @GetMapping("/{id}")
    public ResponseEntity<Topic> getTopicById(@PathVariable Long id) {
        try {
            Topic topic = topicService.getTopicById(id);
            return ResponseEntity.ok(topic); // Return the topic if found
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build(); // Return 404 if not found
        }
    }

    // Create a new topic
    @PostMapping
    public ResponseEntity<Topic> createTopic(@RequestBody Topic topic) {
        Topic createdTopic = topicService.createTopic(topic);
        return ResponseEntity.ok(createdTopic);
    }

    // Update an existing topic
    @PutMapping("/{id}")
    public ResponseEntity<Topic> updateTopic(@PathVariable Long id, @RequestBody Topic updatedTopic) {
        try {
            Topic topic = topicService.updateTopic(id, updatedTopic);
            return ResponseEntity.ok(topic);
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a topic
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTopic(@PathVariable Long id) {
        try {
            topicService.deleteTopic(id);
            return ResponseEntity.noContent().build(); // Return 204 No Content on success
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
