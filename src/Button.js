const Button = ({ id, label, handleClick, totalClickCount }) => {
  const handleButtonClick = () => {
    handleClick(id);
  };

  return (
    <>
      <button onClick={handleButtonClick}>{label}</button>

      <p>{`You have clicked the ${label} button ${
        totalClickCount ? totalClickCount[id] : 0
      } ${totalClickCount && totalClickCount[id] === 1 ? "time" : "times"}`}</p>
    </>
  );
};

export default Button;
