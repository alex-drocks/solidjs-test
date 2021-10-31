import {createSignal} from "solid-js";
import Button from "./components/Button/Button";
import logo from "./logo.svg";
import styles from "./App.module.css";


function App() {
  const [count, setCount] = createSignal(1);

  function incrementOnClick() {
    setCount(prev => prev + 1)
    console.log("clicked")
  }

  return (
    <div class={styles.App}>
      <button onClick={incrementOnClick}>{count()}</button>
      <Button text={`Clicked ${count()} times.`} incrementOnClick={incrementOnClick}/>
    </div>
  );
}


export default App;
