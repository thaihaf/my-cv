import React, { useState } from "react";

interface Props {
  a: number;
  b?: () => void;
}
const Actions = ({ a }: Props) => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const addItem = () => {
    const newItem = `New Item ${items.length + 1}`;
    setItems([...items.slice(0, 1), newItem, ...items.slice(1)]);
  };
  console.log(a);
  return (
    <div className="">
      Actions
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Actions);
