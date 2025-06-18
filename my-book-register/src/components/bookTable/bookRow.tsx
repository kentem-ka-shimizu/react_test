import Button from 'src/components/button/button';
import { BookItem } from 'src/models';

interface Props {
  bookItem: BookItem;
  onDelete: (id: string) => void;
  onLendingSwitch: (id: string) => void;
}

const BookRow = ({ bookItem, onDelete, onLendingSwitch }: Props) => {
  return (
    <tr>
      <td>{bookItem.name}</td>
      <td>{bookItem.isOnLoan ? '貸出中' : '利用可能'}</td>
      <td>
        <Button onClick={() => onDelete(bookItem.id)}>削除</Button>
        <Button
          onClick={() => onLendingSwitch(bookItem.id)}
          disabled={bookItem.isOnLoan}
        >
          貸出
        </Button>
        <Button
          onClick={() => onLendingSwitch(bookItem.id)}
          disabled={!bookItem.isOnLoan}
        >
          返却
        </Button>
      </td>
    </tr>
  );
};
export default BookRow;
