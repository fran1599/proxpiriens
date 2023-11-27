import React from 'react';
import './styles/ReviewCard.css';
import StarRating from './atoms/StarRating';

const ReviewCard = ({ review }) => {
  const { author, comment, rating, imageUrl } = review;

  return (
    <div className="review-card">
      <img src={imageUrl} alt={`${author}'s Avatar`} className="review-avatar" />
      <h3>{author}</h3>
      <StarRating rating={rating} />
      <p>{comment}</p>
    </div>
  );
};


export default ReviewCard;