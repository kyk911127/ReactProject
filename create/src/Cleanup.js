import { useEffect, useState } from "react";

function Hello(){
  useEffect(() => {
    console.log("Hello");
    // 컴포넌트가 삭제될 때 함수를 리턴해서 상태를 받을 수 있음
    return () => console.log("Bye");
  }, []);
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
