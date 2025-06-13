import { useState } from 'react';
import './App.css';
import FilterableBookTable from './components/filterableBookTable';
import { BookItemModel } from './models';
import BookForm from './components/bookForm/bookForm';

function App() {
  const [isbn, setIsbn] = useState('');
  const [books, setBooks] = useState<BookItemModel[]>([]);

  const handleClickButton = (): void => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.totalItems === 0) {
          alert('登録されていない ISBN コードです。');
          return;
        }
        onPostCompleted({
          name: data.items[0].volumeInfo.title,
          isOnLoan: false,
        });
      });
  };

  const onPostCompleted = (postedItem: Omit<BookItemModel, 'id'>): void => {
    setBooks((prev) => [
      ...prev,
      {
        id: prev.length.toString(),
        ...postedItem,
      },
    ]);
  };

  console.log(books);

  return (
    <div className="App">
      {/* 第1問：コンポーネントに分割 ↓ ↓ ↓ ↓ ↓ */}
      <BookForm
        isbn={isbn}
        setIsbn={setIsbn}
        handleClickButton={handleClickButton}
      />
      {/* 第1問：コンポーネントに分割 ↑ ↑ ↑ ↑ ↑ ↑ */}
      <hr />
      <FilterableBookTable
        books={books}
        onClickDelete={(id) => {
          {
            /* 第2問：貸出 or 返却 or 削除の処理を追加 */
            const newBooks = books.filter((book) => {
              return book.id !== id;
            });
            setBooks(newBooks);
          }
        }}
        onClickLendingSwitch={(id) => {
          {
            /* 第2問：貸出 or 返却 or 削除の処理を追加 */
            const newBooks: BookItemModel[] = books.map((book) => {
              if (book.id === id) {
                const newBook: BookItemModel = {
                  ...book,
                  isOnLoan: !book.isOnLoan,
                };
                console.log(newBook);
                return newBook;
              } else {
                console.log(book);
                return book;
              }
            });
            setBooks(newBooks);
          }
        }}
      />
    </div>
  );
}

export default App;
