import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
	setKeword(event.target.value);
  }
  useEffect( () => {
	console.log("I run only once.")
	}, []);
  useEffect(() => {
	console.log("I run when 'keyword' changs.");
  }, [keyword]);
  useEffect(() => {
	console.log("I run when 'counter' changs.");
  }, [counter]);
  useEffect(() => {
	console.log("I run when 'counter & keyword' changs.");
  }, [keyword, counter]);

  return (
	<div>
		<input type="text" placeholder="Search here..." onChange={onChange} value={keyword}/>
		<h1 className={styles.title}>{counter}</h1>
		<button onClick={onClick}>click me</button>
	</div>
  );
}

export default App;
