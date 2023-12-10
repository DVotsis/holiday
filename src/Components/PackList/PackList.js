import { React, useState } from "react";
import Item from "../Item/Item";

function PackList({ items, onDeleteItem, checkBox, onClearList }) {
  const [sortBy, setSortBy] = useState('input')

  let sortedItems;

  if (sortBy === 'input') {
    sortedItems = items;
  }

  if (sortBy === 'description') {
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
  }

  if (sortBy === 'packed') {
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
  }

  function handleIpnut(event) {
    setSortBy(event.target.value)
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) =>
          <Item checkBox={checkBox} onDeleteItem={onDeleteItem} items={item} key={item.id} />
        )}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={handleIpnut}>
          <option value={'input'}> Sort by input order </option>
          <option value={'description'}> Sort by input description </option>
          <option value={'packed'}> Sort by input packed status </option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}

export default PackList;