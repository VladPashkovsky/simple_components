import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { Counter } from './pages/counter/Counter'
import {Modal} from './pages/modal/Modal'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Counter />} />
        <Route path='counter' element={<Counter />}/>
        <Route path='modal' element={<Modal/>} />
      </Route>
    </Routes>
  )
}

export default App
