import React from 'react'

const ProductPicture = ({ picture }) => {
  return (
    <div className="product-picture">
      <img src={picture} alt="product picture" />
    </div>
  )
}

export default ProductPicture
