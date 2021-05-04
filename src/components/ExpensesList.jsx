import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { ExpenseItem } from './ExpenseItem'


export function ExpensesList() {
  const { expenses, dispatch } = useContext(AppContext)

  const handleDelete = id => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id
    })
  }

  return (
    <ul className="list-group">
      {expenses.map(expense => (
        <ExpenseItem key={expense.id} {...expense} onDelete={handleDelete} />
      ))}
    </ul>
  )
}

