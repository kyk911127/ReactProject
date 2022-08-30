import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>PropTypes, 독립적CSS모듈</h1>
      <Button text={"클릭!!"} />
    </div>
  );
}

export default App;
