import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Form from './Form'

const Attributes = () => {
  const product = useSelector((state) => state.product.data)
  const [edit, setEdit] = useState(false)

  return (
    <>
      {edit ? (
        <Form setEdit={setEdit} />
      ) : (
        <>
          <div className="information">
            <span className="label">Categories:</span>
            <span className="text">
              {product.categories.map((cat, i) => {
                if (i + 1 == product.categories.length) return cat.name
                else return `${cat.name}, `
              })}
            </span>
          </div>
          <div className="information">
            <span className="label">Business Models:</span>
            <span className="text">
              {product.businessModels.map((model, i) => {
                if (i + 1 == product.businessModels.length) return model.name
                else return `${model.name}, `
              })}
            </span>
          </div>
          <div className="information">
            <span className="label">TRL:</span>
            <span className="text">{product.trl.name}</span>
          </div>
          <div className="footer">
            <button className="btn primary" onClick={() => setEdit(true)}>
              Edit
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default Attributes
