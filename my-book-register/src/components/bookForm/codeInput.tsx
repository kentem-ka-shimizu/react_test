import { ChangeEvent } from 'react';

const CodeInput = ({
  isbn,
  setIsbn,
}: {
  isbn: string;
  setIsbn: (e: string) => void;
}) => {
  return (
    <div className="label-input">
      <label className="label">ISBNコード</label>
      <input
        className="input"
        placeholder="入力してください"
        value={isbn}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setIsbn(e.target.value)}
      ></input>
    </div>
  );
};

export default CodeInput;
