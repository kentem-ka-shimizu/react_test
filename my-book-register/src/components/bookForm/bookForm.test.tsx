import { render } from '@testing-library/react';
import { test } from 'vitest';
import CodeInput from './codeInput';

test('ISBNコードの入力でInput', () => {
  const handleChange = () => {};
  render(<CodeInput isbnCode="" onValueChange={handleChange} />);
});

//テストコードの基本
