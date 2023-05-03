import './App.css';
import Button from '../Button';

function App() {

  function handleSubmit() {
    console.log("handleSubmit called onClick");
  }


  return (
    <div className="App">
      <h1>Todo List</h1>
      <Button handleSubmit={handleSubmit}/>
      <footer>Made by Gregor Aubrey</footer>
    </div>
  );
}

export default App;
