import React, { use } from 'react';
import BookCard from '../shared/BookCard';

const Books = ({booksPromise}) => {
    const books=use(booksPromise)
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto mt-8'>
            {books.map(book=><BookCard key={book.bookId} book={book}></BookCard>)}
        </div>
    );
};

export default Books;