const SubmitButton = ({
  handleClickButton,
}: {
  handleClickButton: () => void;
}) => {
  return (
    <button className="button" onClick={handleClickButton}>
      書籍登録
    </button>
  );
};

export default SubmitButton;
