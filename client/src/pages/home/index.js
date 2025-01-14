//import Page from '@App/page.js';
//import CountdownBanner from '@/components/countdown-banner/CountdownBanner';

import React from 'react';
import ReactDOM from 'react-dom';


import CountdownBanner from '@/components/countdown-banner/CountdownBanner';
import { ThemeProvider } from '../../contexts/ThemeProvider';
import { ProductProvider } from '../../contexts/ProductProvider';
import ProductLister from '../../components/product-lister/ProductLister';



document.addEventListener('DOMContentLoaded', () => {

  console.log("Home loaded");

  const elList = document.querySelectorAll('.js-react-countdown-banner');

  console.log("Element List: ", elList);

  elList.forEach((el) => {

    console.log("Processing element: ", el);

    const { heading, subtitle, expire, productUrl } = el.dataset ;

    console.log("Data: ", el.dataset);
    console.log("Heading: ", heading);
    console.log("Subtitle: ", subtitle);
    console.log("Expire: ", expire);
    console.log("Product url: ", productUrl);

    ReactDOM.render(
      <ThemeProvider>
        <ProductProvider>
          <CountdownBanner title={heading} subtitle={subtitle} productUrl={productUrl} expire={expire} />
        </ProductProvider>
      </ThemeProvider>,
      el
    );
  });

  const productElList = document.querySelectorAll('.js-react-product-lister');

  console.log("Element lister List: ", productElList);

  productElList.forEach((el) => {

    ReactDOM.render(
      <ThemeProvider>
        <ProductProvider>
          <ProductLister />
        </ProductProvider>
      </ThemeProvider>,
      el
    );
  });






  /*
  console.log("DEBUGGING");
  const cList = [
    {
      selector: 'js-webar-r-countdown-component',
      component: CountdownBanner
    }
  ]

  const home = new Page({
    vComponents: [],
    rComponents: cList
  });

  home.load();
  */
});
