import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { productActions } from '../../../store/product/slice'
import { updateProductData } from '../../../store/product/actions'
import LoadingSpin from '../../../components/LoadingSpin'

const Attributes = ({ setEdit }) => {
  const dispatch = useDispatch()
  const trls = useSelector((state) => state.trl.data)
  const product = useSelector((state) => state.product.data)
  const notification = useSelector((state) => state.ui.notification)

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    dispatch(updateProductData(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ position: 'relative' }}>
      {notification?.status == 'loading' && <LoadingSpin />}
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
