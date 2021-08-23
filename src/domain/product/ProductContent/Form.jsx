import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { updateProductData } from '../../../store/product/actions'
import LoadingSpin from '../../../components/LoadingSpin'
import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi'

const Attributes = ({ setEdit }) => {
  const dispatch = useDispatch()
  const trls = useSelector((state) => state.trl.data)
  const product = useSelector((state) => state.product.data)
  const notification = useSelector((state) => state.ui.notification)

  const { register, handleSubmit, watch, setValue, getValues } = useForm({
    defaultValues: {
      categories: product.categories.map((cat) => cat.name),
      business_models: product.businessModels.map((model) => model.name),
    },
  })

  const watchCategories = watch('categories')
  const watchModels = watch('business_models')

  const addField = (field) => {
    const newArray = [...getValues(field)]
    newArray.push('')
    setValue(field, newArray)
  }

  const removeField = (field, index) => {
    const newArray = [...getValues(field)]
    newArray.splice(index, 1)
    setValue(field, [...newArray])
  }

  const onSubmit = (data) => dispatch(updateProductData(data))

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ position: 'relative' }}>
      {notification?.status == 'loading' && <LoadingSpin />}
      <div className="information">
        <span className="label">Categories:</span>
        <span className="text">
          {watchCategories?.map((cat, i) => (
            <div className="fields" key={i}>
              <input
                type="text"
                defaultValue={cat.name}
                {...register(`categories[${i}]`)}
              />
              <BiMinusCircle
                size={28}
                className="icon"
                onClick={() => removeField('categories', i)}
              />
            </div>
          ))}
        </span>
        <BiPlusCircle
          size={28}
          className="icon"
          onClick={() => addField('categories')}
        />
      </div>
      <div className="information">
        <span className="label">Business Models:</span>
        <span className="text">
          {watchModels?.map((model, i) => (
            <div className="fields" key={i}>
              <input
                type="text"
                defaultValue={model.name}
                {...register(`business_models[${i}]`)}
              />
              <BiMinusCircle
                size={28}
                className="icon"
                onClick={() => removeField('business_models', i)}
              />
            </div>
          ))}
        </span>
        <BiPlusCircle
          size={28}
          className="icon"
          onClick={() => addField('business_models')}
        />
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
        <div className="btn cancel" onClick={() => setEdit(false)}>
          Cancel
        </div>
        <button className="btn primary" type="submit">
          Save
        </button>
      </div>
    </form>
  )
}

export default Attributes
