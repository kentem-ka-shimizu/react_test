import { ChangeEventHandler, useState } from 'react';
import { BookItem } from 'src/models';
import BookTable from './bookTable';
import { css } from 'styled-system/css';
import InputWithLabel from '../inputWithLabel/inputWithLabel';

interface Props {
  books: BookItem[];
  onDelete: (id: string) => void;
  onLendingSwitch: (id: string) => void;
}

const FilterableBookTable = ({ books, onDelete, onLendingSwitch }: Props) => {
  const [filterText, setFilterText] = useState('');

  const handleChangeFilterText: ChangeEventHandler<HTMLInputElement> = (e) =>
    setFilterText(e.target.value);

  return (
    <div className={filterableBookTable}>
      <InputWithLabel
        labelText="filter"
        placeholder="入力してください"
        value={filterText}
        onChange={handleChangeFilterText}
      />
      <BookTable
        bookItems={books.filter(
          (x) => !filterText || x.name.includes(filterText),
        )}
        onDelete={onDelete}
        onLendingSwitch={onLendingSwitch}
      />
    </div>
  );
};
export default FilterableBookTable;

const filterableBookTable = css({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 'fit-content',
  textAlign: 'center',
  gap: '12px',
});
