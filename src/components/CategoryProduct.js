import React from 'react'

const CategoryProduct = ({ product }) => {
  console.log(product)
  return (
    <div>{product.category }</div>
  )
}

export default CategoryProduct