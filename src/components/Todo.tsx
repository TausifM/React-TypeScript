import React from 'react'

const Todo:React.FC = () => {
    const [todo, setTodo] = React.useState<string>('');
    const [todos, setTodos] = React.useState<string[]>([]);
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTodo(event.target.value);
    // }

    const handleTodo = () => {
        // Uncontrolled component
        if(inputRef.current) {
            const todo = inputRef.current.value;
            setTodos([...todos, todo]);
            setTodo('');
        }
        // Controlled component
        // setTodos([...todos, todo]);
        // setTodo('');
    }

  return (
    <div>
        Todo
        <input type="test" value={todo} 
        ref={inputRef}
        // onChange={(event)=>handleChange(event)}
        />
        <button  onClick={handleTodo}>Add</button>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    </div>
  )
}

export default Todo