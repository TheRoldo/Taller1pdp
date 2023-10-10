import { useState } from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

    const [mensaje, setMensaje] = useState('')

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')

    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if([ nombre, cantidad, categoria].includes('') ) {
            setMensaje('Todos los Campos son Obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 2000)
            return
        }

        guardarGasto({nombre, cantidad, categoria})
    }

  return (
    <div className="modal">

        <div className="cerrar-modal">
            <img src={CerrarBtn} alt="Cerrar Modal" onClick={ocultarModal} />
        </div>

        <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
            <legend>Nuevo Gasto</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>} 

            <div className='campo'>
                <label htmlFor="nombre">Nombre</label>
                <input 
                    id='nombre' 
                    type="text" 
                    placeholder='Ingresa el Nombre del Gasto o Ingreso' 
                    value={nombre} 
                    onChange={e => setNombre(e.target.value)} 
                />
            </div>

            <div className='campo'>
                <label htmlFor="cantidad">Cantidad</label>
                <input 
                    id='cantidad' 
                    type="number" 
                    placeholder='Ingresa la cantidad del Gasto o Ingreso' 
                    value={cantidad}
                    onChange={e => setCantidad(Number(e.target.value))}
                />
            </div>

            <div className='campo'>
                <label htmlFor="categoria">Categoria</label>
                <select id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>
                    <option value="">-- Seleccione la Categoria --</option>
                    <option value="ingreso">Ingreso</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>

            <input type="submit" value="Añadir" />

        </form>

    </div>
  )
}

export default Modal