import "./KeyButton.css";

export const KeyButton = ({ value, keyType, handleClick }) => {
  return (
    <div
      className={"grid place-items-center rounded-md " + keyType}
      onClick={() => handleClick(value)}
    >
      <p>{value}</p>
    </div>
  );
};
