import { useState } from 'react';
import BookForm from 'src/components/bookForm/bookForm';
import FilterableBookTable from './components/bookTable/filterableBookTable';
import { BookItem } from './models';
import { fetchData } from './api/fetchData';
import { css } from 'styled-system/css';
import { v4 as uuidv4 } from 'uuid';
import Button from './components/button/button';

function App() {
  const [isbnCode, setIsbnCode] = useState('');
  const [books, setBooks] = useState<BookItem[]>([]);

  const SubmitBook = async (isbnCode: string) => {
    const data = await fetchData(isbnCode);
    if (data.totalItems === 0) {
      alert('登録されていない ISBN コードです。');
      return;
    }
    setBooks((prev) => [
      ...prev,
      {
        id: uuidv4(),
        ...{
          name: data.items[0].volumeInfo.title,
          isOnLoan: false,
        },
      },
    ]);
  };

  const deleteBook = async (id: string) =>
    setBooks(books.filter((book) => book.id !== id));

  const switchLending = async (id: string) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id
          ? {
              ...book,
              isOnLoan: !book.isOnLoan,
            }
          : book,
      ),
    );
  };

  return (
    <div className={appContainer}>
      <Button>test</Button>
      <BookForm
        onSubmit={() => SubmitBook(isbnCode)}
        onValueChange={(isbnCode: string) => setIsbnCode(isbnCode)}
        isbnCode={isbnCode}
      />
      <FilterableBookTable
        books={books}
        onDelete={deleteBook}
        onLendingSwitch={switchLending}
      />
    </div>
  );
}

export default App;

const appContainer = css({
  padding: '30px',
});
