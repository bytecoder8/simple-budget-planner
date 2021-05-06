import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { getRemaining } from '../util'


export function Remaining() {
  const { expenses, budget } = useContext(AppContext)

  const remaining = getRemaining(budget, expenses)

  const alertType = remaining > 0 ? 'alert-success' : 'alert-danger'

  return (
    <div className={`alert p-4 ${alertType}`}>
      <span>Remaining: ${remaining}</span>
    </div>
  )
}
