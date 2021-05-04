import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'


export function AddExpenseFrom() {
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')
  const { dispatch } = useContext(AppContext)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({
      type: 'ADD_EXPENSE',
      payload: {
        name,
        cost: parseInt(cost, 10)
      }
    })
    setName('')
    setCost('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="expense-form-name">Name</label>
          <input
            type="text"
            name="name"
            id="expense-form-name"
            className="form-control"
            required="required"
            onChange={ e => setName(e.target.value) }
          />
        </div>
        <div className="col-sm">
          <label htmlFor="expense-form-cost">Cost</label>
          <input
            type="text"
            name="cost"
            id="expense-form-cost"
            className="form-control"
            required="required"
            onChange={ e => setCost(e.target.value) }
          />
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}
