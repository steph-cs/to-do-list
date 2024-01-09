import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import List from "./components/List";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const [task, setTask] = useState("tarefa");
  const [tasksList, setTasksList] = useState<string[]>([]);

  const handleChangeInput = (event: { target: { value: string; }; }) => {
    const inputTask = event.target.value;
    setTask(inputTask);
  };

  const addTodo = () => {
    if (task.trim()) {
      setTasksList([...tasksList, task]);
      setTask("");
    }
  };

  const deleteTask = (index: number) => {
    const updatedTasksList = tasksList.filter((_, i) => i !== index);
    setTasksList(updatedTasksList);
  };

  return (
    <main className="text-bg-dark">
      <div className="container w-auto d-flex flex-column justify-content-around ">
        <h1 className="my-3 text-center">To do list</h1>
        <div className="my-3 d-flex justify-content-between">
          <Input type="text" value={task} onChange={handleChangeInput} />
          <Button text="Adicionar" color="green" onClick={addTodo} />
        </div>
        <List itemsList={tasksList} deleteTask={deleteTask} />
      </div>
    </main>
  );
}

export default App;
