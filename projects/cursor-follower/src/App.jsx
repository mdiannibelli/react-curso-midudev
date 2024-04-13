import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false) 
  const [position, setPosition] = useState({x: 0, y:0})


  //! Cursor Pointer
  useEffect(() => {
    // Este console.log se ejecuta 2 veces debido al React.StrictMode, ejecuta el useEffect, luego lo desmonta y luego lo vuelve a ejecutar
    console.log('useEffect')
    const handlePointer = (e) => {
      const {clientX, clientY} = e;
      //console.log(clientX, clientY)
      setPosition({x: clientX, y: clientY})
    }
    // SUBSCRIBIRSE A EVENTO
    if(enabled) {
      window.addEventListener('pointermove', handlePointer)
    }
    
    // DESUBSCRIBIR EVENTO AL DESMONTAR COMPONENTE 
    return () => {
      window.removeEventListener('pointermove', handlePointer)
      setPosition({x:-100, y:-100})
    }
  }, [enabled])

  //! Oculta el cursor del mouse con una clase no-cursor de index.css
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])
  return (
    <>
      <div
      style={{
        position: 'absolute',
        backgroundColor: '#1111',
        pointerEvents: 'none',
        border: '1px solid #fff',
        opacity: 0.7,
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`
      }}/>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} cursor</button>
    </>
  )
}

export default App
