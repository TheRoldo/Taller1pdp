import ControlPresupuesto from "./ControlPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos }) => {

  return (
    <header>
        <h1>Planificador de Gastos e Ingresos</h1>
        {isValidPresupuesto ? (
          <ControlPresupuesto 
            gastos={gastos}
            presupuesto={presupuesto}
          />
        ): <NuevoPresupuesto 
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
        }
        
    </header>
  )
}

export default Header