import React from "react";
import { useNavigate } from 'react-router';
import { IoLocationOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
const BookCards = ({ book }) => {
    const navigate=useNavigate()
    const{
        bookId,
        image,
        bookName,
        tags,
        yearOfPublishing,
        publisher,
        totalPages,
        category,
        rating,
        author
    }=book
  return (
    <div className=" flex items-center gap-10 flex-col md:flex-row bg-base-100 shadow-sm p-6 border border-gray-300 mb-4">
      <figure className=" p-6 bg-base-300 rounded-2xl">
        <img className="max-h-60 max-w-57.5"
          src={image}
          alt={bookName}
        />
      </figure>
      <div className="">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{bookName}</h1>
          <p className="font-medium text-[#424242]">By: {author}</p>
        </div>
        <div className="flex items-center gap-3">
            <span className="font-bold">Tag: </span>
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge bg-[#F3F3F3] font-medium text-[#23BE0A]"
              >
                {tag}
              </div>
            ))}
            <div className="flex items-center gap-1"><IoLocationOutline /> Year of Publishing:{yearOfPublishing}</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1"><FaUserFriends /> Publisher: {publisher}</div>
            <div className="flex items-center gap-1"><IoDocumentOutline /> Page {totalPages}</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full px-4 py-1 bg-[#a5c5eb] font-medium text-[#328EFF]">
                Category: {category}    
            </div>
            <div className="rounded-full px-4 py-1 bg-[#fadeb9] font-medium text-[#FFAC33]">
                Rating: {rating}    
            </div>
            <button className="btn bg-[#23BE0A] text-white text-lg font-semibold rounded-full border-none" onClick={()=>navigate(`/book/${bookId}`)}>View Details</button>
          </div>
      </div>
    </div>
  );
};

export default BookCards;
