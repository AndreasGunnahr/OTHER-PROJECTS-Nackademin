const User = {
  id: ID,
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  reservations: [BookId],
  loanedBook: [BookId],
};

const Book = {
  id: ID,
  title: String,
  author: String,
  release: Date,
  reservations: [UserId],
  currentLoaner: String,
};
