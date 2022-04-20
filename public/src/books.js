function findAuthorById(authors, id) {
  let result = authors.find((author) => author.id === id)
  return result
}

function findBookById(books, id) {
  let result = books.find((book) => book.id === id)
  return result
}

function partitionBooksByBorrowedStatus(books) {
  let booksOut = []
  let booksIn = []
  books.forEach((book) => {
    if (book.borrows.find((item) => item.returned === false)) {
      booksOut.push(book)
    } else {
      booksIn.push(book);
    }
  })
  result = [booksOut, booksIn];
  return result
}


function getBorrowersForBook(book, accounts) {
  let borrowHistory = book.borrows.map((borrow) => { 
    let accountInfo = findAuthorById(accounts, borrow.id)
    accountInfo.returned = borrow.returned
  return accountInfo
  }).slice(0, 10)
return borrowHistory
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
