import React, { useContext } from 'react';
import { ProductContextWithReducer, useProducts } from '../../contexts/ProductsWithReducer';

function ProductListUseReducer() {
  //const { state } = useProducts();
  const { state, dispatch } = useContext(ProductContextWithReducer);
  const { products, loading, error } = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export default ProductListUseReducer;