import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

export const mount = (elRoot: HTMLElement) => {
  console.log('mount react-app')
  const root = ReactDOM.createRoot(elRoot)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )

  return () => {
    console.log('unmount react-app')
    root.unmount()
  }
}