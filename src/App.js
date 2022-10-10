import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const now = new Date()
  const day = days[now.getDay()];
  const submit = (e) => {
    e.preventDefault()
    if (toDo.trim() == '') {
      alert('Enter ToDo')
    } else {
      setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
      setToDo('')
    }
    
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <form onSubmit={submit}>

        <div className="input">
          <input
            value={toDo}
            onChange={(e) => {
              setToDo(e.target.value);
            }}
            type="text"
            placeholder="🖊️ Add item..."
          />
          <button type="submit" >
            <i

              className="fas fa-plus"
            ></i>    </button>
        </div>
      </form>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div key={obj.id} className={obj.status ? 'todo active' : "todo"}>
              <div className="left">
                <input onChange={(e) => {
                  setToDos(toDos.filter(obj2 => {
                    if (obj2.id === obj.id) {
                      obj2.status = e.target.checked;
                    }
                    return obj2
                  }))
                }} value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right" onClick={() =>
                setToDos(toDos.filter(obj2 => {
                  if (obj2.id !== obj.id) {
                    return obj2
                  }
                }))
              } >
                <i className="fas fa-times"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
