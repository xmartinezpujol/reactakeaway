import React from 'react';
import '../css/PriceTotal.css';

function PriceTotal(props) {

  return (
    <ul className="order-list">
      <li>{props.total === 0 ? props.order : `${props.order} = ${props.total}€`}</li>
    </ul>
  )
}

export default PriceTotal
