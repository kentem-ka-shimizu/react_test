import { css } from 'styled-system/css';

type InputProps = {
  labelText: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputWithLabel = ({ labelText, ...props }: InputProps) => {
  return (
    <div className={labelInput}>
      <label className={label}>{labelText}</label>
      <input className={input} {...props}></input>
    </div>
  );
};

export default InputWithLabel;

const labelInput = css({
  display: 'flex',
  gap: '12px',
});

const input = css({
  height: '25px',
});

const label = css({
  fontWeight: 'bold',
  fontSize: '13px',
});
