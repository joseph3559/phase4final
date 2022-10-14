import React, { useState } from "react";
import "./Create.css";

const CreateReviews = ({ onAdd }) => {
  const [review, setReview] = useState({
    title: "",
    content: "",
  });
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setReview({ ...review, [name]: value });
  }

  function submitReview(event) {
    event.preventDefault();
    onAdd(review);
    setReview({
      title: "",
      content: "",
    });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-review" onSubmit={submitReview}>
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            autoFocus={true}
            value={review.title}
            placeholder="NFT title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={review.content}
          placeholder="Your NFT Description here..."
          rows={isExpanded ? "3" : "1"}
        />
        <button>
          <i class="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  );
};

export default CreateReviews;
