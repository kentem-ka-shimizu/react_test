import Button from 'src/components/button/button';

type Props = {
  onSubmit: () => void;
};

const SubmitButton = ({ onSubmit }: Props) => {
  return <Button onClick={onSubmit}>書籍登録</Button>;
};

export default SubmitButton;
