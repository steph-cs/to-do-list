interface Props {
  text: string;
  color: string;
  onClick: () => void;
}

const Button = ({ text, color, onClick }: Props) => {
  return (
    <button
      className={
        color == "green" ? "btn btn-success m-3" : "btn btn-danger m-3"
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
