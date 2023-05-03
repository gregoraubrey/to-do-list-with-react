import './App.css';
import Input from '../Input';
import Button from '../Button';
import {useState} from 'react';
import Output from '../Output';

function App() {

  const [value, setValue] = useState("");

  function handleSubmit() {
    if (value.trim() !== "") {
      console.log(`handleSubmit has been called onClick, and value is ${value}`);

      setValue("");
   }
  }

  function handleChange(event) {
    console.log(`handleChange has been called onChange`);
    setValue(event.target.value);
  }



  return (
    <div className="App">
      <h1>Todo List</h1>
      <Input handleChange={handleChange} value={value}/>
      <Button handleSubmit={handleSubmit}/>
      <Output value={value}/>
      <footer>Made by Gregor Aubrey</footer>
    </div>
  );
}

export default App;
