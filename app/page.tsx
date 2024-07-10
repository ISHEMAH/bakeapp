"use client"

import { useRef, useState } from 'react';
import SearchBar from '../components/SearchBar';
import MenuItem from '../components/MenuItem';
import Cart from '../components/Cart';

const Home = () => {
  const [query, setQuery] = useState('');
  const [cart, setCart] = useState<any[]>([]);
  const [items, setItems] = useState([
    { name: 'Cheese Burger', price: 4, image: '/images/cheese-burger.png' },
    { name: 'Small Waffle', price: 4, image: '/images/small-waffle.png' },
    { name: 'Medium Waffle', price: 4, image: '/images/cheese-burger.png' },
    { name: 'Big Waffle', price: 4, image: '/images/big-waffle.png' },
    { name: 'Beef Burger', price: 4, image: '/images/small-waffle.png' },
  ]);

  const filteredItems = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  const cartRef = useRef<HTMLDivElement>(null);

  const handleAddToCart = (item: any) => {
    setCart([...cart, item]);
    const itemElement = document.getElementById(`item-${item.name}`);
    if (itemElement && cartRef.current) {
      const rect = cartRef.current.getBoundingClientRect();
      const itemRect = itemElement.getBoundingClientRect();
      const clone = itemElement.cloneNode(true) as HTMLElement;
      clone.style.position = 'absolute';
      clone.style.left = `${itemRect.left}px`;
      clone.style.top = `${itemRect.top}px`;
      clone.style.width = `${itemRect.width}px`;
      clone.style.height = `${itemRect.height}px`;
      clone.classList.add('animate-to-cart');
      document.body.appendChild(clone);
      setTimeout(() => {
        clone.remove();
      }, 500);
    }
  };

  return (
    <div className="">
      <header className='w-full bg-orange-500 rounded-3xl p-4 pr-8 pl-8 relative rounded-b-full'>
        <h1 className="text-2xl font-bold mb-4 text-white">Bakery Menu</h1>
        <SearchBar onSearch={setQuery} />
      </header>
      
      
      <div className="flex ">
        {filteredItems.map((item, index) => (
          <MenuItem key={index} item={item} onAdd={() => handleAddToCart(item)} id={`item-${item.name}`} />
        ))}
      </div>
      <div ref={cartRef}>
        <Cart items={cart} />
      </div>
    </div>
  );
};

export default Home;
