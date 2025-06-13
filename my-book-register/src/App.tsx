import { useState } from 'react';
import './App.css';
import FilterableBookTable from './components/filterableBookTable';
import { BookItemModel } from './models';
import BookForm from './components/bookForm/bookForm';
import { fetchBookfromApi } from './api/fetchData';

function App() {
  const [isbnCode, setIsbnCode] = useState('');
  const [books, setBooks] = useState<BookItemModel[]>([]);

  const handleSubmit = async () => {
    const data = await fetchBookfromApi(isbnCode);
    if (data.totalItems === 0) {
      alert('登録されていない ISBN コードです。');
      return;
    }
    onPostCompleted({
      name: data.items[0].volumeInfo.title,
      isOnLoan: false,
    });
  };

  const onPostCompleted = (postedItem: Omit<BookItemModel, 'id'>): void => {
    setBooks((prev) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 1e5).toString(),
        ...postedItem,
      },
    ]);
  };

  return (
    <div className="App">
      {/* 第1問：コンポーネントに分割 ↓ ↓ ↓ ↓ ↓ */}
      <BookForm
        onSubmit={handleSubmit}
        onValueChange={setIsbnCode}
        isbnCode={isbnCode}
      />
      {/* 第1問：コンポーネントに分割 ↑ ↑ ↑ ↑ ↑ ↑ */}
      <hr />
      <FilterableBookTable
        books={books}
        onClickDelete={(id) => {
          {
            /* 第2問：貸出 or 返却 or 削除の処理を追加 */
            const result = window.confirm('削除してもよろしいですか。');
            if (result) {
              const newBooks = books.filter((book) => {
                return book.id !== id;
              });
              setBooks(newBooks);
            }
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
