interface Props {
  type: string;
  onChange: (event: { target: { value: string; }}) => void;
  value: string;
}

const Input = ({ type, onChange, value }: Props) => {
  return (
    <input
      className="form-control m-3"
      type={type}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
