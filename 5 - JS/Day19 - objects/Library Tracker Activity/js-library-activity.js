let library = [
  (Book1 = {
    title: "Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    isAvailable: true,
  }),
  (Book2 = {
    title: "The Two Towers",
    author: "J.R.R. Tolkien",
    isAvailable: true,
  }),
  (Book3 = {
    title: "Return of the King",
    author: "J.R.R. Tolkien",
    isAvailable: true,
  }),
];

// Display Function -----

let displayAvailableBooks = library.filter((book) => book.isAvailable);

// Borrow Function -----

function borrowBook(title) {
  const book = library.find((book) => book.title === title);

  if (book.isAvailable) {
    book.isAvailable = false;
    return `You have borrowed ${title}`;
  } else {
    return `${title} is already borrowed.`;
  }
}

// Function Test -----

console.log("Available books:", displayAvailableBooks);
console.log(borrowBook("The Two Towers"));
console.log("Available books:", displayAvailableBooks);
console.log(borrowBook("The Two Towers"));
console.log("Available books:", displayAvailableBooks);

// Return Function -----

/*
function returnBook(title) {
  const book = library.find((book) => book.title === title);

  if (book.isAvailable === false) {
    book.isAvailable = true;
    return `You have returned ${title}`;
  } else {
    return `${title} is already returned.`;
  }
}

console.log(returnBook("The Two Towers"));
console.log("Available books:", displayAvailableBooks);
console.log(returnBook("The Two Towers"));
console.log("Available books:", displayAvailableBooks);
*/
