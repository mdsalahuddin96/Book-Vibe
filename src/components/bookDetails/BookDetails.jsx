import React, { use } from "react";
import { useParams } from "react-router";
// import { useParams } from 'react-router';
const booksPromise=fetch('/booksData.json').then(res=>res.json());
const BookDetails = () => {
    const books=use(booksPromise);
    const {id}=useParams()
    const selectedBook=books.find((book)=>book.bookId==id);
    const { bookName, image, tags, author, category, rating, review, totalPages, publisher, yearOfPublishing } =
    selectedBook;
  return (
    <div className="card flex flex-col md:flex-row  container mx-auto mt-10 rounded-2xl">
      <figure className="bg-base-200 flex-1 rounded-2xl ">
        <img className="max-h-96" src={image} alt={bookName} />
      </figure>
      <div className="card-body flex-1">
        <div className="border-b border-gray-200 space-y-4 pb-6 ">
          <h1 className="text-4xl font-bold">{bookName}</h1>
          <p className="font-medium text-xl text-[#424242]">By: {author}</p>
        </div>
        <p className="font-medium text-xl text-[#424242]">{category}</p>
        <div className="border-y border-gray-200 space-y-4 py-6 ">
          <p className="font-medium text-[#424242]">
            <span className="font-bold">Review: </span>
            {review}
          </p>
          <div className="flex items-center gap-3">
            <spn className="font-bold">Tag: </spn>
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge bg-[#F3F3F3] font-medium text-[#23BE0A]"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table max-w-1/2">
            {/* head */}
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Number of Pages:</td>
                <td className="font-bold">{totalPages}</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>Publisher</td>
                <td className="font-bold">{publisher}</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>Year of Publishing:</td>
                <td className="font-bold">{yearOfPublishing}</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td className="font-bold">{rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card-actions">
          <button className="btn">Read</button>
          <button className="btn btn-accent">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
