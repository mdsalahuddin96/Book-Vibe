// import React, { use } from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";
const BookCard = ({ book }) => {
  const { bookName, image, tags,author, category,rating } = book;
  return (
    
      <Link to={`books/${book.bookId}`} className="card bg-base-100 space-y-6 p-6 border border-gray-200">
        <figure className="bg-base-200 px-24 py-8 rounded-2xl">
          <img className="h-41.5" src={image} alt={bookName} />
        </figure>
        <div className="card-body space-y-4">
          <div className="flex items-center gap-3">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge bg-[#F3F3F3] font-medium text-[#23BE0A]"
              >
                {tag}
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold">{bookName}</h2>
          <p className="font-medium text-[#424242]">
            By: {author}
          </p>
          <div className="card-actions justify-between border-t border-dashed pt-5">
            <div className="font-medium text-[#424242]">{category}</div>
            <div className="font-medium text-[#424242] flex items-center gap-1">{rating} <FaRegStar/> </div>
          </div>
        </div>
      </Link>
    
  );
};

export default BookCard;
