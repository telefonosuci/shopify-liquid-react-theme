import React, { useCallback, useState, useEffect, useContext  } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts/ThemeProvider';
import { ProductContext } from '../../contexts/ProductProvider';

/**
 *
 * @param {date} format yyyy-mm-gg
 * @returns rendered comppnent
 */
function ProductLister({ size }) {



  const { theme, toggleTheme } = useContext(ThemeContext);
  const { products, setProducts, loading, error, getProducts } =
    useContext(ProductContext);


  const removeProduct = (product, index) => {
    return () => {
      console.log("removeProduct at index ", index);
      console.log("removeProduct is ", product);

      let updatedProducts = products.filter((product, i) => i !== index);
      setProducts(updatedProducts);
    }
  };



  const productList = <div>

    {products && products.length > 0 ? (
      <div>
      {products.map((product, index) => (
        <div>product<span onClick={removeProduct(product, index)} style={{cursor: 'pointer'}}>&nbsp;---remove</span></div>
      ))}
      </div>
    ) : (<div>Caricamento in corso...</div>)}

  </div>;

  const button = <a href={productUrl}><button>Acquista il prodotto</button></a>;

  return (
    <div className='productlist-container'>

      {productList}

    </div>
  );
}

// Define PropTypes
CountdownBanner.propTypes = {
  title: PropTypes.string.isRequired, // Required string
  subtitle: PropTypes.string,             // Optional number
  expire: PropTypes.date,           // Optional boolean
  productUrl: PropTypes.string,           // Optional
};

// Set default props (optional)
CountdownBanner.defaultProps = {
  title: "Titolo",
  subtitle: "Sottotitolo",
  expire: "2025-12-31",
  productUrl: "",
};

export default CountdownBanner;
