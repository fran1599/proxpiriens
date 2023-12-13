import React from "react";
import "../styles/Home.module.css";
import StarRating from "@/atoms/StarRating";

const ReviewCard = ({ review }) => {
  const { author, comment, rating, imageUrl } = review;

  return (
    <>
      <div className="review-card">
        <img
          className="review-avatar"
          src={imageUrl}
          alt={`${author}'s Avatar`}
        />
        <h3>{author}</h3>
        <StarRating rating={rating} />
        <p>{comment}</p>
      </div>

      <style jsx>{`
         .review-card {
          font-family: 'San Francisco Pro Display';
          border: 1px solid #b3426c;
          padding: 10px;
          margin: 10px;
          width: 300px;
          text-align: center;
          border-radius: 10px;
        }
        
        .review-avatar {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 50%;
        }
      `}</style>
    </>
  );
};

export default ReviewCard;
