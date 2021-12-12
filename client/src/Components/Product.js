import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className='col-lg-4 col-sm-12 col-md-6 col-12 mb-4'>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>Rs. {product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}