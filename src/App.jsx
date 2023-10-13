import { useState, useEffect } from "react";
import Header from "./components/Header"
import ListadoGastos from "./components/ListadoGastos"
import Modal from "./components/Modal"
import Filtros from "./components/Filtros"
import { generarId } from "./helpers"
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  const [gastos, setGastos] = useState([])
  
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})

  const [filtro, setFiltro] = useState('')
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0) {
      setModal(true)

      setTimeout(() => {
        setAnimarModal(true)
      }, 500);
    }
  }, [gastoEditar])

  const gastosMostrados = gastos
  .filter(gasto => !filtro || gasto.categoria === filtro) // Filtrar por categoría
  .filter(gasto => !searchTerm || gasto.nombre.toLowerCase().includes(searchTerm.toLowerCase())); // Filtrar por nombre
  
  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

  const guardarGasto = gasto => {
    if(gasto.id) {
      //Actualizar Gasto
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
      setGastoEditar({})
    }else{
      //Nuevo Gasto
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }

    setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500)
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizados)
  }
 
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <Filtros 
              filtro={filtro}
              setFiltro={setFiltro}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <ListadoGastos 
              gastos={gastosMostrados}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              searchTerm={searchTerm}
            />
          </main>

          <div className="nuevo-gasto">
            <img src={IconoNuevoGasto} alt="Icono Nuevo Gasto" onClick={handleNuevoGasto}/>
          </div>
        </>
      )}

      {modal && <Modal 
                  setModal={setModal} 
                  animarModal={animarModal}
                  setAnimarModal={setAnimarModal}
                  guardarGasto={guardarGasto}
                  gastoEditar={gastoEditar}
                  setGastoEditar={setGastoEditar}
                />}
       
    </div>
  )
}

export default App
