import { useState, useEffect } from "react"

const ControlPresupuesto = ({gastos, presupuesto}) => {

    const [disponible, setDisponible] = useState(presupuesto)

    useEffect(() => {
        const totalDisponible = gastos.reduce((total, gasto) => {
          if (gasto.categoria === 'ingreso') {
            return total + gasto.cantidad;
          } else {
            return total - gasto.cantidad;
          }
        }, presupuesto);
    
        setDisponible(totalDisponible);
      }, [gastos, presupuesto]);
    
    

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">

        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto Inicial: </span>{formatearCantidad(presupuesto)}
            </p>

            <p>
                <span>Presupuesto Disponible: </span>{formatearCantidad(disponible)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto