import React from "react";
import { MdDeleteForever } from 'react-icons/md';
import { AiTwotoneEdit } from 'react-icons/ai';
import { BsFillShareFill } from 'react-icons/bs';
import seller8 from "../assets/seller8.png";

export default function Like({ review, onDelete}) {
  const handleDelete = () => {
    onDelete(review.id);
  };
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={seller8} alt="joseph maina" />
          </div>
          <h2 className="title">{review?.title}</h2>
          <p className="description">{review?.content}</p>
          <div className="actionbtn">
          <button onClick={handleDelete}>
              <AiTwotoneEdit fill="orange" fontSize="1.5em"/>
          </button>
          <button>
              <BsFillShareFill fill="orange" fontSize="1.5em"/>
          </button>
          <button onClick={handleDelete}>
             <MdDeleteForever fill="orange" fontSize="1.5em"/>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
