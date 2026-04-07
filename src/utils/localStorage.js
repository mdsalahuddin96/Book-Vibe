const saveToLocalStorage = (currentBook) => {
  const readbooks = getFromLocalStorage("readbooks");
  if (readbooks) {
    const isExist = readbooks.find((book) => book.bookId == currentBook.bookId);
    if (!isExist) {
      readbooks.push(currentBook);
      localStorage.setItem("readbooks", JSON.stringify(readbooks));
    }
  }
  const wishbooks = getFromLocalStorage("wishbooks");
  if (wishbooks) {
    const isExist = wishbooks.find((book) => book.bookId == currentBook.bookId);
    if (!isExist) {
      wishbooks.push(currentBook);
      localStorage.setItem("wishbooks", JSON.stringify(wishbooks));
    }
  }
};

const getFromLocalStorage = (key) => {
  const books = JSON.parse(localStorage.getItem(key));
  if (books) return books;
  return [];
};

export { saveToLocalStorage, getFromLocalStorage };
