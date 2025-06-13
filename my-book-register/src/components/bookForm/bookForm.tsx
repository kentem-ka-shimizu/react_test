import CodeInput from './codeInput';
import SubmitButton from './submitButton';

type BookFormProps = {
  isbn: string;
  setIsbn: (e: string) => void;
  handleClickButton: () => void;
};

const BookForm = ({ isbn, setIsbn, handleClickButton }: BookFormProps) => {
  return (
    <div className="book-register">
      <CodeInput isbn={isbn} setIsbn={setIsbn} />
      <SubmitButton handleClickButton={handleClickButton} />
    </div>
  );
};

export default BookForm;
