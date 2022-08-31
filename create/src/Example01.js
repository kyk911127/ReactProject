import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState(0);
  const [payment, setPayment] = useState("");
  const [change, setChange] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setChange("");
  }, [payment, coin]);
  const onChangePay = (event) => setPayment(event.target.value);
  
  const onChangeCoin = (event) => {
    if(event.target.value === ""){
      setCoin(0);
      return;
    }

    coins.map((coin) => {
      if(event.target.value === coin.id) {
        setCoin(coin.quotes.USD.price);
      }
    })
  }

  const onClick = () => {
    if(payment === "") {
      setChange("가격을 입력하세요");
      return;
    }

    if(coin <= 0){
      setChange("코인을 선택하세요");
      return;
    }

    if(parseFloat(payment) < coin){
      setChange(`금액이 ${coin - parseFloat(payment)} 부족합니다`);
      return;
    }

    let change = parseFloat(payment) - coin;
    setChange(`구매성공, 거스름돈 : ${change}`);
  }

  return (
    <div>
      <h1>코인 {loading ? null : `(${coins.length})`}</h1>
      <input value={payment} onChange={onChangePay} type="number" placeholder="금액 입력"/><br/>
      {loading ? (
        <strong>Loading...</strong>) : (
        <select onChange={onChangeCoin}>
          <option value="">선택</option>
          {coins.map((coin) => <option value={coin.id} key={coin.id}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}</option>)}
        </select>)
      }<br/>
      {loading ? null : <button onClick={onClick}>구매</button>}
      <h3>{change}</h3>
    </div>
  );
}

export default App;
