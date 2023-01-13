import { useEffect, useState } from "react";

function App() {
  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinInfo, setCoinInfo] = useState(0);
  const [userMoney, setUsetMoney] = useState(0);
  const [coinName, setCoinName] = useState("Coin!");

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) => response.json()).then((json)=> {
      setCoins(json);
      setLoding(false);
    });
  }, [])
  const onChange = (event) =>{
    const aa = event.target.value;
    const arr = aa.split(",");
    const coinFo = parseFloat(arr[0]);
    const coName = arr[1];
    setCoinInfo(coinFo);
    setCoinName(coName);
  }
  const onChange2 = (event) =>{
    setUsetMoney(event.target.value);
  }
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : 
        <select onChange={onChange} style={{width: 700, backgroundColor: "blanchedalmond"}}>
          <option>Select Coin!</option>
          {coins.map((value1) => (
            <option key={value1.id} value={[value1.quotes.USD.price, value1.name]}>{value1.name} -------------- ${value1.quotes.USD.price} USD = 1{value1.name} -------------- updated: {value1.last_updated}
            </option>     
          ))}
        </select>
      }
      <form>
        <input style={{width: 300, backgroundColor: "blanchedalmond", border: 0}} onChange={onChange2} type="number" placeholder="your money $USD"></input>
      </form>
      <ul style={{width: 265, backgroundColor: "blanchedalmond"}}>{coinInfo === 0 ? "Select" : userMoney / coinInfo} {coinName} </ul>
    </div>
  )
}

export default App;
