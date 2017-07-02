import React from 'react';
import '../css/PriceTotal.css';

function PriceTotal(props) {

  return (
    <div className="order-list">
      <p>{props.total === 0 ? props.order : `Total = ${props.total}€`}</p>
    </div>
  )
}

export default PriceTotal
