import { useState, useEffect } from 'react'

const Filtros = ({filtro, setFiltro, searchTerm, setSearchTerm}) => {

  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label>Filtrar Gastos e Ingresos</label>
                <input
                    type="text"
                    placeholder="Buscar..."
                    className='barra'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <select value={filtro} onChange={ e => setFiltro(e.target.value) }>
                    <option value="">-- Todas las Categorias --</option>
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
        </form>
    </div>
  )
}

export default Filtros