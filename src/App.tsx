import './App.css'
import { ContextProvider } from './contexts/AppContext'
import { BookmarkProvider } from './contexts/BookmarkContext'
import Home from './pages/Home'

function App() {

  return (
    <>
    <ContextProvider>
      <BookmarkProvider>
    <Home />
     </BookmarkProvider>
    </ContextProvider>
    </>
  )
}

export default App
