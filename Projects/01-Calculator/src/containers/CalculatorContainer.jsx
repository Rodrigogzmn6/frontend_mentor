import { useEffect, useState } from "react";
import { CalcScreen } from "../components/CalcScreen/CalcScreen";
import { KeyPad } from "../components/KeyPad/KeyPad";

export const CalculatorContainer = () => {
  const [screen, setScreen] = useState("");
  const [editingNumber, setEditingNumber] = useState("number1");
  const [operating, setOperating] = useState(false);
  const [equation, setEquation] = useState({
    number1: "",
    operation: "",
    number2: "",
  });
  const [result, setResult] = useState("");

  const handleOnNumberPressed = (value) => {
    if (operating) {
      setScreen(value);
    } else {
      setScreen(screen + value);
      if (editingNumber === "number1") {
        setEquation({ ...equation, number1: screen + value });
      } else {
        setEquation({ ...equation, number2: screen + value });
      }
    }
    setOperating(false);
  };

  const handleOnDelPressed = () => {
    if (!operating) {
      setScreen(screen.substring(0, screen.length - 1));
    }
  };

  const handleOnResetPressed = () => {
    setScreen("");
    setEditingNumber("number1");
    setOperating(false);
    setEquation({
      number1: "",
      operation: "",
      number2: "",
    });
    setResult("");
  };

  const handleOnDotPressed = () => {
    if (!operating && !screen.includes(".")) {
      screen ? setScreen(screen + ".") : setScreen("0.");
    }
  };

  const handleOnOperationPressed = (value) => {
    setOperating(true);
    setEditingNumber("number2");
    if (equation.number1 === "" || equation.number2 === "") {
      setEquation({ ...equation, operation: value });
      setScreen(value);
    }
  };

  const handleOnEqualsPressed = () => {
    console.log(equation);
  };

  return (
    <div className={`flex flex-col gap-4`}>
      <CalcScreen screen={screen} />
      <KeyPad
        onNumberPressed={handleOnNumberPressed}
        onDelPressed={handleOnDelPressed}
        onResetPressed={handleOnResetPressed}
        onDotPressed={handleOnDotPressed}
        onOperationPressed={handleOnOperationPressed}
        onEqualsPressed={handleOnEqualsPressed}
      />
    </div>
  );
};
