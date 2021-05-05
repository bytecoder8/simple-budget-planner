export const getTotalExpenses = (expenses) => {
  return expenses.reduce((total, current) => total+=current.cost, 0)
}

export const getRemaining = (budget, expenses) => {
  return budget - getTotalExpenses(expenses)
}

export const getLocalStorageItem = (key, initialValue) => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  } catch (error) {
    console.error(error)
    return initialValue
  }
}

export const saveLocalStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error(error)
  }
}