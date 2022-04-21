function getTotalBooksCount(books) {
  const Book = [...books];
  result = Book.length
  return result
}

function getTotalAccountsCount(accounts) {
  let accumulator = 0;
  let result = accounts.reduce((acc, account) => acc +1, accumulator);
  return(result);
}

function getBooksBorrowedCount(books) {
  checkedOut = books.filter((book)=> book.borrows.some((borrow) => borrow.returned === false))
  result = checkedOut.length
  return result
}

function getMostCommonGenres(books) {
  let genres = []
  books.forEach((book) => {
    if (genres.some((gen) => gen.name === book.genre)) {
      for (let i = 0; i < genres.length; i++) {
        if (genres[i].name === book.genre) {
          genres[i].count += 1
        }
      }
    } else {
     let newObject = {}
      newObject.name = book.genre;
      newObject.count = 1;
    genres.push(newObject);
    }
  })
  genres.sort((a, b) => b.count - a.count)
  return genres.slice(0,5)
}

function getMostPopularBooks(books) {
  let result = books.map((book) => {
    let newObject = {}
    newObject.name = book.title;
    newObject.count = book.borrows.length
    return newObject
  })
result.sort((a, b) => b.count - a.count)

  return result.slice(0, 5)
  
}

function getMostPopularAuthors(books, authors) {
  books.forEach((book) => {
    let number = book.borrows.length
    let theAuth = authors.find((person) => person.id === book.authorId);
    let theName = `${theAuth.name.first} ${theAuth.name.last}`
    book['name'] = theName;
    book['count'] = number;
  })
  let newArr = books.map(({ name, count }) => ({name, count}))
  let finalArr = []
  newArr.forEach((item) => {
    if (finalArr.some((obj) => obj.name === item.name)) {
      for (let i = 0; i <finalArr.length; i++) {
        if (finalArr[i].name === item.name) {
          finalArr[i].count += item.count
        }
      }
    } else {
      let newObject = {}
      newObject.name = item.name;
      newObject.count = item.count;
    finalArr.push(newObject);
    }
  })
  finalArr.sort((a, b) => b.count - a.count)
  return finalArr.slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
