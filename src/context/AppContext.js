import { createContext, useReducer, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { LOCAL_STORAGE_KEY } from '../config'
import { saveLocalStorageItem, getLocalStorageItem } from '../util'

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
    case 'DELETE_EXPENSE':
      return {...state, expenses: state.expenses.filter( item => item.id !== action.payload)}
    case 'CHANGE_BUDGET':
      return {...state, budget: action.payload}
    default:
      return state
    }
  }
  
export const AppContext = createContext()

const init = initial => getLocalStorageItem(LOCAL_STORAGE_KEY, initial)

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialState, init)

  useEffect(() => {
    saveLocalStorageItem(LOCAL_STORAGE_KEY, state)
  }, [state])

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
