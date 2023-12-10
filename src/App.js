import { useState } from "react";
import Logo from './Components/Logo/Logo'
import Form from './Components/Form/Form'
import PackList from "./Components/PackList/PackList";
import Stats from "./Components/Stats/Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItem(id) {
    const updateItems = items.filter(item => item.id !== id)
    setItems(updateItems)
  }

  //Checkbox
  function checkBox(id) {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  //ClearList
  function handleClearList() {
    const confirmed = window.confirm('Are you seure that you want to delete all items?')

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAdditems={handleAddItems} />
      <PackList onClearList={handleClearList} checkBox={checkBox} items={items} onDeleteItem={handleDeleteItem} />
      <Stats items={items} />
    </div>
  )
}

