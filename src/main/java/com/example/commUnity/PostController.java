package com.example.commUnity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/topics/{topicId}/posts")
public class PostController {
    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public List<Post> getPosts(@PathVariable Long topicId) {
        return postService.getPostsByTopicId(topicId);
    }

    @PostMapping
    public Post addPost(@PathVariable Long topicId, @RequestBody Post post) {
        return postService.addPost(topicId, post.getContent(), post.getAuthor());
    }
}
