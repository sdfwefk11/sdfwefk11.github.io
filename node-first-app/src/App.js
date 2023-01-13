import Button from "./Button";
import styles from "./App.module.css";
import React, { useState, useEffect } from "react";

function Hello(){
  useEffect(()=>{
    console.log("hi");
    return ()=>{
      console.log("bye");
    }
  },[]);
  return <h1>Hello</h1>
}

function App() {
  const [counter, setCounter] = React.useState(0);
  const [keyword, setKeyword] = React.useState("");
  const [showing, setShowing] = useState(false);
  const onClick2 = ()=>{
    setShowing((event)=> !event);
  }
  const onClick = ()=>{
    setCounter((event) => event + 1);
  }
  const onChange = (event)=>{
    setKeyword(event.target.value);
  }

  const clear = ()=>{
    setCounter(0);
  }
  return (
    <div>
      <input
      value={keyword}
      onChange={onChange}
      type="text"
      placeholder="Search here."
      ></input>
      <h1
      className={styles.title}
      >{counter}</h1>
      <Button text={"Click Me"} onClick={onClick}/>
      <Button text={"RESET"} onClick={clear}/>
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;