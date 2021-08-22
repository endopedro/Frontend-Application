import React from 'react'
import Card from '../../components/Card'

const ProductUser = ({ user, company }) => {
  return (
    <Card title="User">
      <div className="user-info">
        <img className="avatar" src={user.profilePicture} alt="user avatar" />
        <h3>
          {user.firstName} {user.lastName}
        </h3>
        <span className="text-small">{company.name}</span>
      </div>
    </Card>
  )
}

export default ProductUser
