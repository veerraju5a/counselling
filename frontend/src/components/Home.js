import React from 'react'
import Show from './Show'
import ProductList from './ProductList';
import TodoList from './TodoList';
import FetchData from './FetchData';
import ResponsiveAppBar from './Navbar';
import Picture from './Picture';
import HomePage from './HomePage';

const Home = () => {
  const products = [
    { id: 1, name: 'Mobile Phone', price: 10 },
    { id: 2, name: 'Laptop', price: 20 },
    { id: 3, name: 'Mouse', price: 5 },
   
  ];
  const todos = [
    { title: 'Do the reservation for tirupathi', completed: false },
    { title: 'Purcase the cloths', completed: false },
    // Add more todo items as needed
  ];
  return (
    <div>
      <HomePage/>
      {/* <Picture/> */}
      {/* <ResponsiveAppBar/> */}
      {/* <Show/> */}
      {/* <ProductList products={products} />  */}
      {/* <TodoList todos={todos} /> */}
      {/* <FetchData/> */}
    </div>
  )
}

export default Home