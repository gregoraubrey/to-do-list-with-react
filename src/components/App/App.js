import './App.css';
import Input from '../Input';
import Button from '../Button';
import {useState, useEffect} from 'react';
import Output from '../Output';

function App() {

  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    console.log(`useEffect has been called. See todos on the line below:`);
    console.log(todos);
  }, [todos]);

  function handleSubmit() {
    if (value.trim() !== "") {
      console.log(`handleSubmit has been called onClick, and value is ${value}.`);
      setTodos([...todos, {id: Date.now(), text: value, completed: false,}]);
      setValue("");

   }
  }

  function handleDelete(key) {
    console.log(`handleDelete has been called onClick`);
    setTodos(todos.filter(x => key !== x.id));
  }

  function handleChange(event) {
    console.log(`handleChange has been called onChange`);
    setValue(event.target.value);
  }

  function toggleCompleted(key) {
    console.log(`toggleCompleted has been called onClick`);
    setTodos(todos.map(x => {
      if (x.id === key) {
        return {
          ...x,
          completed: !x.completed,
        }
      }
      return x;
    }))
  }

  return (
    <>
      <h1>Todo List</h1>
      <Input handleChange={handleChange} value={value}/>
      <Button handleSubmit={handleSubmit}/>
      <Output todos={todos} handleDelete={handleDelete} toggleCompleted={toggleCompleted}/>
      <footer>Made by Gregor Aubrey</footer>
    </>
  );
}

export default App;
