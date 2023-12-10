import { React, useState } from "react";

function Form({ onAdditems }) {

  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  //Submit
  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAdditems(newItem)

    console.log(newItem)
    setDescription('')
    setQuantity(1)
  }
  //Input
  function handleInput(event) {
    setDescription(event.target.value)
  }
  //Select
  function handleSelect(event) {
    setQuantity(+event.target.value)
  }

  //Form
  return <form className="add-form" onSubmit={handleSubmit}>
    <h3> What do you need for your trip? 🌴</h3>
    <select value={quantity} onChange={handleSelect}>
      {Array.from({ length: 20 }, (_, i) => i + 1).map(num => <option
        value={num}
        key={num}>
        {num}
      </option>)}
    </select>
    <input type='text' placeholder='Item...' value={description} onChange={handleInput} />
    <button>Add</button>
  </form>
}

export default Form;