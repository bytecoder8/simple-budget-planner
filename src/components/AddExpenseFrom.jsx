import React from 'react'

export function AddExpenseFrom() {
  return (
    <form>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="expense-form-name">Name</label>
          <input
            type="text"
            name="name"
            id="expense-form-name"
            className="form-control"
            required="required"
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
