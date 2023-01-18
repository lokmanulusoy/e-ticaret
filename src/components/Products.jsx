import React from 'react';

import {ApiTopPropducts} from "../apifolder/TopProductsApi"

import Product from './Product';
function Products() {
  return (
    <div className='p-5 flex flex-wrap item-center justify-center '>
      {
        ApiTopPropducts.map((product,index)=>(
            <Product item={product} key={index} />
        ))
      }
    </div>
  );
}

export default Products;
