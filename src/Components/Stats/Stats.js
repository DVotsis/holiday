function Stats({ items }) {
  if (!items.length) {
    return <p className="stats"><em>
      Start adding some items to your packing list 🚀
    </em></p>
  }

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percItems = Math.floor((packedItems / numItems) * 100)
  const oneHundred = percItems === 100

  return <footer className="stats">
    <em>
      {!oneHundred ? ` 🧺  You have ${numItems} items on your list and you already packed ${packedItems} ( ${percItems}%) ☀️` :
        'You got everything! Ready to go ✈️'}
    </em>
  </footer>
}

export default Stats;