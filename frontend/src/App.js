import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]); // State to store the products
  const [loading, setLoading] = useState(true); // State to track loading state

  useEffect(() => {
    // Call the API when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data); // Update the state with the fetched products
        } else {
          console.error('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); // Update loading state
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to run only on mount

  return (
    <div className="App">
      <h1>Product List</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
