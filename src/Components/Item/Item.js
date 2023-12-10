function Item({ items, onDeleteItem, checkBox }) {
  return <li>
    <input type="checkbox"
      style={{ marginRight: "1rem" }}
      onChange={() => checkBox(items.id)}
    />
    <span style={items.packed ? { textDecoration: 'line-through' } : {}}>
      {''}
      {items.quantity} {items.description}
    </span>
    <button onClick={() => onDeleteItem(items.id)}>❌</button>
  </li>
}

export default Item;