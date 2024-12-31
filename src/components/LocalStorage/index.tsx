import './style.css'
import React, { useState } from 'react'

// Add persistence to local storage for an existing app (https://reactpractice.dev/exercise/add-persistence-to-local-storage-for-an-existing-app/)

const getShoppingListValues = () => {
  const values = localStorage.getItem('shoppingList')
  return values?.length ? JSON.parse(values as string) : []
}

export default function App() {
  const [shoppingList, setShoppingList] = useState<string[]>(
    getShoppingListValues,
  )
  const [newItem, setNewItem] = useState('')

  const handleAddItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.setItem(
      'shoppingList',
      JSON.stringify([...shoppingList, newItem]),
    )
    setShoppingList([...shoppingList, newItem])
    setNewItem('')
  }

  const handleRemoveItem = (itemToDelete: string) => {
    localStorage.setItem(
      'shoppingList',
      JSON.stringify(shoppingList.filter((item) => item !== itemToDelete)),
    )
    setShoppingList(shoppingList.filter((item) => item !== itemToDelete))
  }

  return (
    <div className="App">
      <h1>Shopping list</h1>
      <div>
        <form onSubmit={handleAddItem}>
          <input
            name="newItem"
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button type="submit">Add item</button>
        </form>
      </div>
      <ul>
        {shoppingList.map((item) => (
          <li>
            {item}
            <button onClick={() => handleRemoveItem(item)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
