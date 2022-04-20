function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((lastNameA, lastNameB) => (lastNameA.name.last > lastNameB.name.last ? 1: -1));
  return accounts;  
}

function getTotalNumberOfBorrows(account, books) {
  let listOfMatches = [];
  books.forEach((book) => book.borrows.forEach((borrowed) => listOfMatches.push(borrowed.id == account.id)));
  let result = listOfMatches.filter((matched) => matched === true);
  return result.length;

}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
    books.forEach((book) => {
      if (book.borrows.find((item) => item.id === account.id && !item.returned)) {
        result.push(book);
      }
    })
    result.forEach((book) => {
      let anAuthor = authors.find((person) => person.id === book.authorId);
      book['author'] = anAuthor;
    })
    return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
