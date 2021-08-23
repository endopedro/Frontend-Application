import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'

import Card from '../../components/Card'

const ProductUser = () => {
  const product = useSelector((state) => state.product.data)

  return (
    <Card title="User">
      <div className="user-info">
        <div>
          <Image
            className="avatar"
            src={product.user.profilePicture}
            alt="user avatar"
            height={100}
            width={100}
          />
        </div>
        <h3>
          {product.user.firstName} {product.user.lastName}
        </h3>
        <span className="text-small">{product.company.name}</span>
      </div>
    </Card>
  )
}

export default ProductUser
