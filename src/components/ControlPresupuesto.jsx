import { useState, useEffect } from "react"

const ControlPresupuesto = ({gastos, presupuesto}) => {

    const [disponible, setDisponible] = useState(0)

    useEffect(() => {
        
        const totalDisponible = gastos.reduce((total, gasto) => {
            if(gastos.categoria === 'ingreso') {
                return total + gasto.cantidad
            }else {
                return total - gasto.cantidad
            }
        }, 0)

      setDisponible(totalDisponible)
      
    }, [gastos])
    
    

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>Grafica aqui</p>
        </div>

        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
            </p>

            <p>
                <span>Disponible: </span>{formatearCantidad(disponible)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto