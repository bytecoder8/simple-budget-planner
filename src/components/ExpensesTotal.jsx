import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { getTotalExpenses } from '../util'

export function ExpensesTotal() {
  const { expenses } = useContext(AppContext)

  const total = getTotalExpenses(expenses)

  return (
    <div className="alert alert-primary p-4">
      <span>Spent so far: ${total}</span>
    </div>
  )
}
