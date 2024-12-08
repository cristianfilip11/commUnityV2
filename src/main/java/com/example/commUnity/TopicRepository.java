package com.example.commUnity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.domain.Sort;
import java.util.List;

public interface TopicRepository extends JpaRepository<Topic, Long> {
    // Custom query to sort topics by likes in descending order
    @Query("SELECT t FROM Topic t ORDER BY t.likes DESC")
    List<Topic> findAllOrderedByLikes();
}
