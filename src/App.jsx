import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginRoute } from './pages/LoginRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={
          <>
            <LoginRoute/>
          </>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
