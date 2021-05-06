import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'


export function AddExpenseFrom() {
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')
  const [error, setError] = useState('')
  const { dispatch } = useContext(AppContext)

  const handleSubmit = event => {
    event.preventDefault()

    let validationError = ''
    if (name.trim() === '') {
      validationError = "Please enter the expense's name"
    } else if (cost.trim() === '' || isNaN(parseInt(cost, 10))) {
      validationError = "Please enter a valid number for cost"
    }

    if (validationError) {
      setError(validationError)
      return
    }

    dispatch({
      type: 'ADD_EXPENSE',
      payload: {
        name,
        cost: parseInt(cost, 10)
      }
    })
    setName('')
    setCost('')
    setError('')
  }

  return (
    <div className="row">
    <form onSubmit={handleSubmit} className="col-md-7">
      { error && <div className="alert alert-danger">{ error }</div> }
      <div className="form-group">
        <label htmlFor="expense-form-name">Name</label>
        <input
          type="text"
          name="name"
          id="expense-form-name"
          className="form-control"
          value={ name }
          onChange={ e => setName(e.target.value) }
        />
      </div>
      <div className="form-group">
        <label htmlFor="expense-form-cost">Cost</label>
        <input
          type="text"
          name="cost"
          id="expense-form-cost"
          className="form-control"
          value={ cost }
          onChange={ e => setCost(e.target.value) }
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
    </div>
  )
}
