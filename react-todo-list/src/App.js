import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event)=> {
    setToDo(event.target.value);
  };
  const onSubmit = (event)=>{
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  };
  const onClick = (event) =>{
    setToDos((currentToDo) => currentToDo.filter((_,item) => event !== item))
    // onClick함수는 button클릭 이벤트로부터 전달받은 인자 index를 event라는 파라미터에 저장하고 event는 곧 button클릭시 생성된 li의 key값과 같기 때문에 event의 정보만으로 li의 상태를 변경할수있다. 현재 목적은 ❌버튼을 클릭했을시 클릭한 라인의 li를 날리는것이 목적인데 그것은 toDos의 배열중 클릭한 버튼의 index값만 날리고 새로 업데이트하면된다. 따라서 toDos의 셋팅 함수인 setToDos에 필터를 걸고 조건식을 걸어주면된다. filter는 총 3개의 인자를 받는데 첫번째는 value 두번째는 index 세번째는 배열을 받게된다. 그중 사용할것은 두번째인 index를 사용해서 현재toDos배열의 index들중 event와 같지않다면 true 같다면 false !==조건을걸어 false인값의 index를 제외시키고 그 결과를 setToDos에 전달하게되고 그값은 toDos에 업데이트된다. 주의할점은 setToDos함수는 항상 첫번째 인자로 현재상태의 toDos를 받기때문에 그값을 setToDos의 파라미터에 저장하고 새 함수를 열어 파라미터를 사용하는것이 바람직하다.
  };
  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="Text" placeholder="Write your todo"></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index)=>(<li key={index}>{item}
        <button onClick={()=> onClick(index)}>❌</button></li>))}
        {/* map 함수는 toDos(배열)로부터 2개의 인자를 받아 2개의 파라미터에 각각 인자를 저장하게된다 파라미터로는 item(value)과 index(index)를 셋팅했고 toDos배열의 값이 업데이트 될때마다 li태그가 추가되면서 속성으로 key값과 innerText에 item(value)를 갖게된다. 또한 li태그안에 button태그를 추가하고 button에 클릭리스너를 추가해 클릭시 toDos(배열)로 부터받은 두번째 인자 index(index)를 onClick함수에 첫번째 인자로 보내게된다 */}
      </ul>
    </div>
  );
}

export default App;
