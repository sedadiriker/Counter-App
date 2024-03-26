import { useState } from "react";
function App() {
  const[sayac,setSayac] = useState('0')

  const plus = () => {
    setSayac(+sayac + 1)
  }
  const minus = () => {
    setSayac(+sayac - 1)
  }
  const reset = () => {
    setSayac('0')
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p className="sayac">{sayac}</p>
      <div className="btns">
        <button className="plus" onClick={plus}>+</button>
        <button className="reset" onClick={reset} >Reset</button>
        <button className="minus" onClick={minus}>-</button>
      </div>
    </div>
  );
}

export default App;
