import React from 'react'
import { ExpenseItem } from './ExpenseItem'


export function ExpensesList() {

  const expenses = [
    { id: '123', name: "Shopping", cost: 50 },
    { id: '124', name: "Holiday", cost: 300 },
    { id: '125', name: "Transportaion", cost: 70 },
    { id: '126', name: "Fuel", cost: 40 },
    { id: '127', name: "Child Care", cost: 500 }
  ]

  return (
    <ul className="list-group">
      {expenses.map(expense => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </ul>
  )
}

