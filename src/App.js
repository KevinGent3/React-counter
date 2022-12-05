import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
library.add(faCalculator);

function App() {
  const [counter, setCounter] = useState(0);

  const handleClickPlus = () => {
    return setCounter(counter + 1);
  };
  const handleClickMinus = () => {
    return setCounter(counter - 1);
  };
  return (
    <div className="App">
      <Header></Header>
      <main>
        <div className="buttons-container">
          {counter > 0 && (
            <button
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              -
            </button>
          )}

          <div>
            <p>{counter}</p>
          </div>
          {counter < 10 && <button onClick={handleClickPlus}>+</button>}
        </div>

        <button
          onClick={() => {
            setCounter(0);
          }}
          className="reset-button"
        >
          Reset
        </button>
      </main>
    </div>
  );
}

export default App;
