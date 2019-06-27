import React from 'react';

const RelatedProducts = props => {
  const data = props['data-rdl'];

  const relatedProducts = _.get(data.product, 'relatedProducts', false);

  if (!relatedProducts || !relatedProducts.length) {
    return null;
  }

  return (
    <div className="product-related-products-container">
      <h2>Recommended Products</h2>
      {data.relatedProducts}
    </div>  
  );
};

export default RelatedProducts;
