import './App.css'
import { ContextProvider } from './contexts/AppContext'
import Home from './pages/Home'

function App() {

  return (
    <>
    <ContextProvider>
    <Home />
    </ContextProvider>
    </>
  )
}

export default App
