import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { ExpenseItem } from './ExpenseItem'


export function ExpensesList() {
  const { expenses, dispatch } = useContext(AppContext)
  const [searchString, setSearchString] = useState('')

  const handleDelete = id => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id
    })
  }

  const handleSearch = (event) => {
    setSearchString(event.target.value)
  }

  let displayExpenses = expenses
  if (searchString.trim()) {
    displayExpenses = expenses.filter(
      ({name}) => name.toLowerCase().includes(searchString.trim().toLowerCase())
    )
  }

  return (
    <>
      <input
        type="text"
        name="search"
        placeholder="Type to search..."
        className="form-control mb-3"
        value={searchString}
        onChange={ handleSearch }
      />
      { displayExpenses.length > 0 ?
        <ul className="list-group">
          {displayExpenses.map(expense => (
            <ExpenseItem key={expense.id} {...expense} onDelete={handleDelete} />
          ))}
        </ul>
        :
        <div className="alert alert-primary">Nothing found</div>
      }
    </>
  )
}

