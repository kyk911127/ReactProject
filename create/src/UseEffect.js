import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setValue] = useState(0);    // 카운터 변경
  const onClick = () => setValue((prev) => prev + 1);
  
  console.log('계속 호출'); // 랜더링 할때마다 호출

  // deps가 없기때문에 랜더링 시 최초 한번 함수 호출
  useEffect(() => {
    console.log("한번만 호출");
  }, []);

  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  
  // keyword 변경될 때마다 함수 호출
  useEffect(() => {
    console.log(`키워드 변경 ${keyword}`);
  }, [keyword]);

  // count 변경될때마다 함수를 실행
  useEffect(() => {
    console.log(`카운트 변경 ${count}`);
  }, [count]);

  // 랜더링 시 keyword & count 변경될때마다 함수를 실행
  useEffect(() => {
    console.log(`키워드 & 카운트 변경 ${keyword}, ${count}`);
  }, [keyword, count]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="검색어 입력" />
      <h1 className={styles.title}>UseState : {count}</h1>
      <Button text={"클릭!!"} onClick={onClick} />
    </div>
  );
}

export default App;
