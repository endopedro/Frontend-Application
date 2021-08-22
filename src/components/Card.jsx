import React from 'react'

const Card = ({ children, title }) => {
  return (
    <div className="card">
      {title && (
        <div className="card-header">
          <h4>{title}</h4>
        </div>
      )}
      <div className="card-body">{children}</div>
    </div>
  )
}

export default Card
