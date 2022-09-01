import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { Counter } from './pages/counter/Counter'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Counter />} />
        <Route path='counter' element={<Counter />}/>
      </Route>
    </Routes>
  )
}

export default App
