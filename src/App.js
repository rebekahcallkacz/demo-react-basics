import { useLocalStorage } from "./hooks";
import "./App.css";
import Button from "./Button";

const BUTTON_ONE = "buttonOne";
const BUTTON_TWO = "buttonTwo";

function App() {
  const [totalClickCount, setTotalClickCount] = useLocalStorage(
    "totalClickCount",
    {
      [BUTTON_ONE]: 0,
      [BUTTON_TWO]: 0,
    }
  );

  const handleClick = (key) => {
    const newClickCount = totalClickCount[key] + 1;
    const newClickCountObject = { ...totalClickCount };
    newClickCountObject[key] = newClickCount;
    setTotalClickCount(newClickCountObject);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button
          id={BUTTON_ONE}
          label="Button 1"
          handleClick={handleClick}
          totalClickCount={totalClickCount}
        />
        <br></br>
        <Button
          id={BUTTON_TWO}
          label="Button 2"
          handleClick={handleClick}
          totalClickCount={totalClickCount}
        />
        <br></br>
        <h2>{`You have clicked a total of ${
          totalClickCount.buttonOne + totalClickCount.buttonTwo
        } times`}</h2>
      </header>
    </div>
  );
}

export default App;
