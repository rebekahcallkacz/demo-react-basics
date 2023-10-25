import "./App.css";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="Click Me!" initialCount={0} />
      </header>
    </div>
  );
}

export default App;
