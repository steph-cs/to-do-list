
interface Props {
    toDo: string
}

const Todo = ({toDo}: Props) => {
  return (
    <div>{toDo}</div>
  )
}

export default Todo