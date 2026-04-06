import React, { Suspense } from 'react';

import Books from './Books';
const booksPromise=fetch('/booksData.json').then(res=>res.json())
const Allbooks = () => {
    return (
        <div className='mt-25 '>
            <h1 className='text-center font-bold text-4xl'>Books</h1>
            <Suspense fallback={<h3>Data Loading...</h3>}>
                <Books booksPromise={booksPromise}></Books>
            </Suspense>
        </div>
    );
};

export default Allbooks;