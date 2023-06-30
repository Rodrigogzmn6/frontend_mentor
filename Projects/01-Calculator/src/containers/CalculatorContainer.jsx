import { useState } from "react";
import { CalcScreen } from "../components/CalcScreen/CalcScreen";
import { KeyPad } from "../components/KeyPad/KeyPad";

export const CalculatorContainer = () => {
  const [screen, setScreen] = useState("");
  const [operating, setOperating] = useState(false);
  const [numberEditing, setNumberEditing] = useState("n1");
  const [equation, setEquation] = useState({
    number1: "",
    operation: "",
    number2: "",
  });

  const handleOnNumberPressed = (value) => {
    setOperating(false);
    if (!equation.operation) {
      setNumberEditing("n1");
      setEquation({ ...equation, number1: screen + value });
      setScreen(screen + value);
    } else if (equation.number2) {
      setNumberEditing("n2");
      setEquation({ ...equation, number2: screen + value });
      setScreen(screen + value);
    } else {
      setNumberEditing("n2");
      setScreen(value);
      setEquation({ ...equation, number2: value });
    }
  };

  const handleOnDelPressed = () => {
    if (!operating) {
      setScreen(screen.substring(0, screen.length - 1));
      if (numberEditing === "n1") {
        setEquation({
          ...equation,
          number1: screen.substring(0, screen.length - 1),
        });
      } else {
        setEquation({
          ...equation,
          number2: screen.substring(0, screen.length - 1),
        });
      }
    }
  };

  const handleOnResetPressed = () => {
    setScreen("");
    setOperating(false);
    setEquation({
      number1: "",
      operation: "",
      number2: "",
    });
  };

  const handleOnDotPressed = () => {
    if (!operating && !screen.includes(".")) {
      screen ? setScreen(screen + ".") : setScreen("0.");
    }
  };

  const handleOnOperationPressed = (value) => {
    setOperating(true);
    value === "x" ? (value = "*") : value;
    if (equation.number1 && equation.number2) {
      calculateOperation(value);
    } else if (equation.number1) {
      setEquation({ ...equation, operation: value });
    } else {
      setEquation({ ...equation, number1: "0", operation: value });
    }
    setScreen(value);
  };

  const handleOnEqualsPressed = () => {
    calculateOperation();
  };

  const calculateOperation = (value) => {
    const result = eval(
      equation.number1 + equation.operation + equation.number2
    );
    setScreen(result.toString());
    if (value) {
      setEquation({
        number1: result.toString(),
        number2: "",
        operation: value,
      });
    } else {
      setEquation({
        number1: result.toString(),
        number2: "",
        operation: "",
      });
    }
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
