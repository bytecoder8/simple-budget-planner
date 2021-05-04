import React, { useState } from 'react'
import PropTypes from 'prop-types'


export function BudgetInlineForm({ budget, handleSave, handleCancel }) {

  const [newBudget, setNewBudget] = useState(budget)
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(false)

  const onInputChange = event => {
    let value = parseInt(event.target.value, 10)
    if (isNaN(value)) {
      value = ''
      setIsSaveButtonDisabled(true)
    } else {
      setIsSaveButtonDisabled(false)
    }
    setNewBudget(value)
  }

  const onSaveClick = event => {
    event.preventDefault()
    handleSave(newBudget)
  }

  const onCancelClick = event => {
    event.preventDefault()
    handleCancel()
  }

  return (
    <form className="alert alert-secondary d-flex justify-content-between align-items-center">
      <input
        type="text"
        name="budget"
        placeholder="Enter new budget"
        className="form-control"
        value={newBudget}
        onChange={onInputChange}
      />
      <div className="d-flex">
        <button 
          type="submit"
          className="btn btn-primary btn-small mr-1"
          onClick={onSaveClick}
          disabled={isSaveButtonDisabled}
        >Save</button>
        <button
          type="button"
          className="btn btn-secondary btn-small"
          onClick={onCancelClick}
        >Cancel</button>
      </div>
    </form>
  )
}

BudgetInlineForm.propTypes = {
  budget: PropTypes.number.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
}
