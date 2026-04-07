import React, { useContext } from 'react';
import { StoredBookContext } from '../../context/StoredBookContext';
import BookCards from '../shared/BookCards';


const WishlistBooks = ({ sortby }) => {
    const {wishlist}=useContext(StoredBookContext)
      let sortedbooks = [...wishlist];
      if(sortby === "pages"){
        sortedbooks.sort((a, b) => a.totalPages - b.totalPages);
      }
      else if(sortby === "rating"){
        sortedbooks.sort((a, b) => b.rating - a.rating);
      }
      if(sortedbooks.length == 0){
        return (
          <div className="bg-base-100 flex justify-center items-center h-screen border border-gray-300 rounded-2xl">
            <h1 className="text-4xl font-bold text-[#424242]">
              No Books in the wish list
            </h1>
          </div>
        );
      }
    return (
        <div>
            {sortedbooks.map(book=><BookCards key={book.bookId} book={book}></BookCards>)}
        </div>
    );
};

export default WishlistBooks;