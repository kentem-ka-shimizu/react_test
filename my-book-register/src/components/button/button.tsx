import { css } from 'styled-system/css';

type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={button} {...props}>
      {children}
    </button>
  );
};

const button = css({
  color: 'antiquewhite',
  fontSize: '10px',
  height: 'fit-content',
  padding: '40px',
});

export default Button;
