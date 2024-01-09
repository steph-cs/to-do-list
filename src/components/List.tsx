import Button from "./Button";
import "./List.css"
interface Props {
  itemsList: string[];
  deleteTask: (index: number) => void;
}

const List = ({ itemsList, deleteTask }: Props) => {
  return (
    <ul className="list-group m-3" id="toDoList">
      {itemsList.map((item: string, index) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={index}
        >
          <input
            className="form-check-input me-3 col-1"
            type="checkbox"
            value={index}
            id={index.toString()}
          />
          <label className="form-check-label col-10" htmlFor={item}>
            {item}
          </label>
          <Button
            onClick={() => deleteTask(index)}
            color="red"
            text="X"
            key={index}
          />
        </li>
      ))}
    </ul>
  );
};

export default List;
