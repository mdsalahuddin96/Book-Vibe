import React, { useState } from "react";
import { StoredBookContext } from "../../context/StoredBookContext";
import { toast } from "react-toastify";
import { getFromLocalStorage, saveToLocalStorage } from "../../utils/localStorage";

const ContextProvider = ({ children }) => {
  const [readBooks, setReadBooks] = useState(()=>getFromLocalStorage('readbooks'));
  const [wishlist, setWishlist] = useState(()=>getFromLocalStorage('wishbooks'));
  
  const handleReadBooks = (currentBook) => {
    saveToLocalStorage(currentBook)
    const isExist = readBooks.find((book) => book.bookId == currentBook.bookId);
    if (isExist) {
      toast.error("Already in Read list!");
      return;
    }
    const isExistWishlist = wishlist.find((book) => book.bookId == currentBook.bookId);
    if(isExistWishlist){
        const newWishlist=wishlist.filter(book=>currentBook.bookId!=book.bookId);
        setWishlist(newWishlist)
    }
    setReadBooks([...readBooks, currentBook]);
    toast.success(`${currentBook.bookName} is added to Read list`)
  };

  const handleWishlistBooks = (currWishBook) => {
    saveToLocalStorage(currWishBook)
    const isExist = wishlist.find((book) => book.bookId == currWishBook.bookId);
    if (isExist) {
      toast.error("Already in Wishlist");
      return;
    }
    const isExistReadList=readBooks.find(book=>book.bookId==currWishBook.bookId);
    if(isExistReadList){
        toast.warning("This book in The read list")
        return;
    }
    setWishlist([...wishlist,currWishBook]);
    toast.success(`${currWishBook.bookName} added to Wishlist!`)
  };
  const data = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
    handleReadBooks,
    handleWishlistBooks,
  };
  return (
    <StoredBookContext.Provider value={data}>
      {children}
    </StoredBookContext.Provider>
  );
};

export default ContextProvider;
