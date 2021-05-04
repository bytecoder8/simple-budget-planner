export const getTotalExpenses = (expenses) => {
  return expenses.reduce((total, current) => total+=current.cost, 0)
}

export const getRemaining = (budget, expenses) => {
  return budget - getTotalExpenses(expenses)
}