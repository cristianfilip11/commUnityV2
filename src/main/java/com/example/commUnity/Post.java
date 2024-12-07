package com.example.commUnity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Topic topic;

    private String content;

    private String author;

    private LocalDateTime createdAt;

    public void setTopic(Topic topic) {
        this.topic = topic;

    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setCreatedAt(LocalDateTime now) {
        this.createdAt = now;
    }

    public String getContent() {
        return this.content;
    }

    public String getAuthor() {
        return this.author;
    }

    // Getters and setters
}
