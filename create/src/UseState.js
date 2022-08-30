import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [count, setValue] = useState(0);    // 카운터 변경
  const onClick = () => setValue((prev) => prev + 1);

  return (
    <div>
      <h1 className={styles.title}>UseState : {count}</h1>
      <Button text={"클릭!!"} onClick={onClick} />
    </div>
  );
}

export default App;
