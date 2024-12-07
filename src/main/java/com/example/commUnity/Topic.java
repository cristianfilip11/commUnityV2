package com.example.commUnity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Topic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description; // New field

    private String title;

    private String author;

    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "topic", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Post> posts = new ArrayList<>();

    // Getters and setters

    public void setTitle(String title){
        this.title = title;
    }
    public void setAuthor(String author){
        this.author = author;
    }

    public void setCreatedAt(LocalDateTime now) {
        this.createdAt = now;
    }

    public List<Post> getPosts() {
        return this.posts;
    }

    public String getTitle() {
        return this.title;
    }

    public String getAuthor() {
        return this.author;
    }
    public Long getId() {
        return this.id;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getDescription(){
        return this.description;
    }
}
