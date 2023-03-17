import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'


const Home: NextPage = () => {

  const [items, setItems] = useState([])

  function onRemoveItem(itemRemove) {
    const newItems = items.filter((item) =>{
      return item !== itemRemove
    });
    setItems(newItems) 
  }

  function onSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.item
    const newItems = [...items, input.value]
    setItems(newItems)
    form.reset()
  }

  function Item({ item, onRemoveItem }) {
    return (
      <li>
        {item}
        <button className={styles.delete} onClick={() => onRemoveItem(item)}>
          x
        </button>
      </li>
    );
  }

  return (
    <div className={styles.container}>
      <h1>Shopping List</h1>
      <div className={styles.shoppinglist}>
        <h2>Items to buy</h2>
        <form onSubmit={onSubmit}>
          <input 
            type="text"
            name="item"
            placeholder='Add thing to buy'
            required
            />
            
            <button>Add</button>
        </form>
        <ul>
          {items.map((item, index) =>
            <Item onRemoveItem={onRemoveItem} key={item + index } item={item} />
          )}
        </ul>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
