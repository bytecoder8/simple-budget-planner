import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ExpensesList } from './components/ExpensesList'
import { Budget } from './components/Budget'
import { Remaining } from './components/Remaining'
import { ExpensesTotal } from './components/ExpensesTotal'
import { AddExpenseFrom } from './components/AddExpenseFrom'


function App() {
  return (
    <div className="container">
      <h1 className="mt-3">Simple Budget Planner</h1>
      <div className="row mt-3">
        <div className="col col-xl col-md-12">
          <Budget />
        </div>
        <div className="col-md">
          <Remaining />
        </div>
        <div className="col-md">
          <ExpensesTotal />
        </div>
      </div>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpensesList />
        </div>
      </div>
      <h3 className="mt-3">Add Expense</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpenseFrom />
        </div>
      </div>
    </div>
  )
}

export default App
