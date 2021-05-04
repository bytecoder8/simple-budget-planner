import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { BudgetInlineForm } from './BudgetInlineForm'

export function Budget() {
  const { budget, dispatch } = useContext(AppContext)
  const [isFormDisplaying, setIsFormDisplaying] = useState(false)

  const handleEditClick = () => {
    setIsFormDisplaying(prev => !prev)
  }

  const handleSave = (newBudget) => {
    dispatch({
      type: 'CHANGE_BUDGET',
      payload: parseInt(newBudget, 10)
    })
    setIsFormDisplaying(false)
  }

  const handleCancel = () => {
    setIsFormDisplaying(false)
  }

  return (
    <>
      { isFormDisplaying ? 
          <BudgetInlineForm
            budget={budget}
            handleSave={handleSave}
            handleCancel={handleCancel}
          />
        :
          <div className="alert alert-secondary d-flex justify-content-between align-items-center">
            <div>Budget: ${budget}</div>
            <button 
              className="btn btn-primary btn-small"
              onClick={handleEditClick}
            >Edit</button>
          </div>
      }
    </>
  )
}
