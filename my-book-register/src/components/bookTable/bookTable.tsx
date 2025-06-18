import { BookItem } from 'src/models';
import BookRow from './bookRow';

interface Props {
  //書籍情報一覧のstate
  bookItems: BookItem[];
  onDelete: (id: string) => void;
  onLendingSwitch: (id: string) => void;
}

const BookTable = ({ bookItems, onDelete, onLendingSwitch }: Props) => {
  return (
    <table border={1}>
      <thead>
        <tr>
          <td>書籍名</td>
          <td>貸出状況</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        {bookItems.map((book) => (
          <BookRow
            bookItem={book}
            onDelete={onDelete}
            onLendingSwitch={onLendingSwitch}
            key={book.id}
          />
        ))}
      </tbody>
    </table>
  );
};
export default BookTable;
