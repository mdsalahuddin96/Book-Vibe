import React, { useContext } from 'react';
import { StoredBookContext } from '../../context/StoredBookContext';
import BookCards from '../shared/BookCards';

const ReadlistBooks = () => {
    const {readBooks}=useContext(StoredBookContext)
    return (
        <div>
            {readBooks.length==0&&
                <div className='bg-base-100 flex justify-center items-center h-screen border border-gray-300 rounded-2xl'>
                    <h1 className='text-4xl font-bold text-[#424242]'>No Books in the Read list</h1>
                </div>
            }
            {readBooks.map(book=><BookCards key={book.bookId} book={book}></BookCards>)}
        </div>
    );
};

export default ReadlistBooks;