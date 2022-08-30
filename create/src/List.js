import { useEffect, useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  
  const onChange = (event) => setItem(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    
    if(item === ""){
      return;
    }

    setItems((currentArray) => [item, ...currentArray]);

    setItem("");
  }

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div>
      <h1>items({items.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={item} type="text" placeholder="입력하세요" />
        <button>버튼!!</button>
      </form>
      <hr />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
