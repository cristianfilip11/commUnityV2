import React, { useState } from 'react';
import './FeedItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as farThumbsUp, faThumbsDown as farThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as fasThumbsUp, faThumbsDown as fasThumbsDown } from '@fortawesome/free-solid-svg-icons';

const FeedItem = ({ data, onUpdate }) => {
  const { id, title, status, description, score, likes, dislikes } = data;
  
  const [hasLiked, setHasLiked] = useState(false);
  const [hasDisliked, setHasDisliked] = useState(false);
  const [rating, setRating] = useState(score);

  const handleLike = () => {
    if (!hasLiked) {
      setHasLiked(true);
      setHasDisliked(false); 
      onUpdate(id, { likes: likes + 1, dislikes: hasDisliked ? dislikes - 1 : dislikes });
    }
  };

  const handleDislike = () => {
    if (!hasDisliked) {
      setHasDisliked(true);
      setHasLiked(false);
      onUpdate(id, { dislikes: dislikes + 1, likes: hasLiked ? likes - 1 : likes });
    }
  };

  const handleRatingChange = (e) => {
    const newRating = parseInt(e.target.value, 10);
    setRating(newRating);
    onUpdate(id, { score: newRating });
  };

  return (
    <div className="feed-item">
      <h3>
        <span className={`status-indicator status-${status.replace(" ", "-")}`}></span>
        {title}
      </h3>
      <h4 className={`status ${status.replace(" ", "-")}`}>{status}</h4>
      <p>{description}</p>
      
      <div className="score">Score: {rating}</div>

      <div className="actions">
        <button className={`like-button ${hasLiked ? 'liked' : ''}`} onClick={handleLike}>
          <FontAwesomeIcon icon={hasLiked ? fasThumbsUp : farThumbsUp} />
          ({likes})
        </button>
        <button className={`dislike-button ${hasDisliked ? 'disliked' : ''}`} onClick={handleDislike}>
          <FontAwesomeIcon icon={hasDisliked ? fasThumbsDown : farThumbsDown} />
          ({dislikes})
        </button>
      </div>

      {hasLiked && (
        <div className="rating">
          <label htmlFor={`rating-${id}`}>Vote a score (1-10): </label>
          <select id={`rating-${id}`} value={rating} onChange={handleRatingChange}>
            {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default FeedItem;
