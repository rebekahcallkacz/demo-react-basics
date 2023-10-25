import { useState } from "react";

///// Requirements /////
// There is one button displayed on the page
// When the user clicks the button, the app will track the number of clicks of the user
// The number of clicks will be displayed to the user

const Button = (props) => {
  const initialCount = props.initialCount ?? 0;
  const [clickCount, setClickCount] = useState(initialCount);
  console.log("click count", clickCount);

  const handleClick = () => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);
  };
  return (
    <>
      <h4>{`Your initial count is ${initialCount}`}</h4>
      <button onClick={handleClick}>{props.label}</button>
      <h4>{`You have clicked ${clickCount} ${
        clickCount === 1 ? "time" : "times"
      }`}</h4>
    </>
  );
};

export default Button;
