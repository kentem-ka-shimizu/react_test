type Props = {
  onSubmit: () => void;
};

const SubmitButton = ({ onSubmit }: Props) => {
  return (
    <button className="button" onClick={onSubmit}>
      書籍登録
    </button>
  );
};

export default SubmitButton;
