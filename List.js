import "./List.css";

export function List(props) {
  const deleteItem = (key) => {
    const newList = props.itemList.filter((item) => {
      return item.key !== key;
    });
    props.updateItemList(newList);
  };
  return (
    <div>
      {props.itemList.map((obj) => {
        return (
          <div className="TestItem">
            <p>{obj.item}</p>
            <button onClick={()=>deleteItem(obj.key)}>X</button>
          </div>
        );
      })}
    </div>
  );
}
