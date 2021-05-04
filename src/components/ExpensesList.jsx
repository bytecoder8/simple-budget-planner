import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { ExpenseItem } from './ExpenseItem'


export function ExpensesList() {
  const { expenses } = useContext(AppContext)

  return (
    <ul className="list-group">
      {expenses.map(expense => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </ul>
  )
}

