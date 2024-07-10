import { FC } from 'react';

const Cart: FC<{ items: any[] }> = ({ items }) => {
  return (
    <div className="border p-2 rounded fixed bottom-0 right-0 m-4 w-64 bg-white shadow-lg">
      <h3 className="text-xl font-bold">Cart</h3>
      {items.map((item, index) => (
        <div key={index} className="flex justify-between my-1">
          <span>{item.name}</span>
          <span>${item.price}</span>
        </div>
      ))}
      <button className="mt-2 bg-green-500 text-white p-2 rounded w-full">Checkout</button>
    </div>
  );
};

export default Cart;
