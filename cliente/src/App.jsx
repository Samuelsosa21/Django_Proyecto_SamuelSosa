import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { TareasPage } from './pages/tareasPage'
import { TareaFormPage } from './pages/tareaFormPage'
import { Navigation } from './components/Navigation'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>

      <Navigation />
      <div className='container mx-auto'>
        <Routes>
          <Route path="/" element={<Navigate to="/Tareas" />} />
          <Route path="/tareas" element={<TareasPage />} />
          <Route path="/crear-tareas" element={<TareaFormPage />} />
          <Route path="/tareas/:id" element={<TareaFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App