import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import FeatureContextProvider from './contexts/FeatureContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <FeatureContextProvider>
      <App />
    </FeatureContextProvider>
)
