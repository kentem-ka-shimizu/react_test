import { css } from 'styled-system/css';
import CodeInput from './codeInput';
import SubmitButton from './submitButton';

type Props = {
  onValueChange: (value: string) => void;
  onSubmit: () => void;
  isbnCode: string;
};

const BookForm = ({ isbnCode, onSubmit, onValueChange }: Props) => {
  return (
    <div className={bookRegister}>
      <CodeInput isbnCode={isbnCode} onValueChange={onValueChange} />
      <SubmitButton onSubmit={onSubmit} />
    </div>
  );
};

export default BookForm;

const bookRegister = css({
  display: 'flex',
  gap: '12px',
});
