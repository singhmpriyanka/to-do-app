import "./App.css";
import { useState } from "react";
import {List} from './List';

function App() {
  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, updateItemList] = useState([]);

  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };

  const addItemToList = () => {
    updateItemList([...itemList, {item: currentItem, key: Date.now()}]);
    setCurrentItem("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="Input-wrapper">
            <input value={currentItem} onChange={onChangeHandler}></input>
            <button onClick={addItemToList}>+</button>
          </div>
          <List itemList ={itemList} updateItemList={updateItemList}/> 
        </div>
      </header>
    </div>
  );
}

export default App;
