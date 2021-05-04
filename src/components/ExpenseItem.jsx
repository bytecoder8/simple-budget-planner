import React from 'react'
import PropTypes from 'prop-types'
import { TiDelete } from 'react-icons/ti'

export function ExpenseItem({ id, name, cost, onDelete }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">
          ${cost}
        </span>
        <TiDelete size="1.5em" onClick={ () => onDelete(id) }></TiDelete>
      </div>
    </li>
  )
}

ExpenseItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired
}
