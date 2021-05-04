import { createContext, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  budget: 2000,
  expenses: [
    { id: '1', name: "Shopping", cost: 50 },
    { id: '2', name: "Holiday", cost: 300 },
    { id: '3', name: "Transportaion", cost: 70 },
    { id: '4', name: "Fuel", cost: 40 },
    { id: '5', name: "Child Care", cost: 500 }
  ]
}

const appReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      const newExpense = action.payload
      newExpense.id = uuidv4()
      return {...state, expenses: [...state.expenses, action.payload]}
    default:
      return state
    }
  }
  
export const AppContext = createContext()
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppContext.Provider value={{
      budget: state.budget,
      expenses: state.expenses,
      dispatch
    }}>
      {props.children}
    </AppContext.Provider>
  )
}
