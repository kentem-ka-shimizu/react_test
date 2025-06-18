import { ChangeEvent } from 'react';
import InputWithLabel from '../inputWithLabel/inputWithLabel';

type Props = {
  isbnCode: string;
  onValueChange: (value: string) => void;
};

const CodeInput = ({ isbnCode, onValueChange }: Props) => {
  return (
    <InputWithLabel
      labelText="ISBNコード"
      placeholder="入力してください"
      value={isbnCode}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        onValueChange(e.target.value)
      }
    />
  );
};

export default CodeInput;
