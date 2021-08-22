import React from 'react'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

const Attributes = ({ setEdit }) => {
  const trls = useSelector((state) => state.trl.data)
  const product = useSelector((state) => state.product.data)

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="information">
        <span className="label">Categories:</span>
        <span className="text">
          {product.categories.map((cat, i) => (
            <input
              key={i}
              type="text"
              defaultValue={cat.name}
              {...register(`categories[${i}]`)}
            />
          ))}
        </span>
      </div>
      <div className="information">
        <span className="label">Business Models:</span>
        <span className="text">
          {product.businessModels.map((model, i) => (
            <input
              key={i}
              type="text"
              defaultValue={model.name}
              {...register(`business_models[${i}]`)}
            />
          ))}
        </span>
      </div>
      <div className="information">
        <span className="label">TRL:</span>
        <select {...register('trl')} defaultValue={product.trl.id}>
          {trls.map((trl, i) => (
            <option key={i} value={trl.id}>
              {trl.name}
            </option>
          ))}
        </select>
      </div>
      <div className="footer">
        <button className="btn cancel" onClick={() => setEdit(false)}>
          Cancel
        </button>
        <button
          className="btn primary"
          // onClick={() => setEdit(false)}
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default Attributes
