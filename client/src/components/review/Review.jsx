import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import "./Review.css";

const Review = ({ review, onDelete}) => {
    const handleDelete = () => {
        onDelete(review.id);
      };
      return (
        <div className="card">
            <h1 className="review">Our Reviews</h1>
          <div className="container">
            <div className="content">
              <h2 className="title">{review?.title}</h2>
              <p className="description">{review?.content}</p>
              <button onClick={handleDelete}>
                 <AiOutlineDelete />
              </button>
            </div>
          </div>
        </div>
      );
}

export default Review