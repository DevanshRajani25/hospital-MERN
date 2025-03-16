import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

export const Context = createContext({isAuthanticated: false});
const AppWrapper = () => {
    const [isAuthanticated , setIsAuthanticated] = useState(false);
    const [user, setUser] = useState({})

    return(
      <Context.Provider value={{isAuthanticated , setIsAuthanticated, user, setUser}}>
        <App />
      </Context.Provider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)
