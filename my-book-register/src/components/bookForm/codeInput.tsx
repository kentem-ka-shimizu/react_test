import { ChangeEvent } from 'react';

type Props = {
  isbnCode: string;
  onValueChange: (value: string) => void;
};

const CodeInput = ({ isbnCode, onValueChange }: Props) => {
  return (
    <div className="label-input">
      <label className="label">ISBNコード</label>
      <input
        className="input"
        placeholder="入力してください"
        value={isbnCode}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onValueChange(e.target.value)
        }
      ></input>
    </div>
  );
};

export default CodeInput;
