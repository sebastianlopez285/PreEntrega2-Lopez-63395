import { useState } from "react"

const EjemploContador = () => {
    // hook de estado: estado o variable de estado
    const [contador, setContador] = useState(1)

    // Aumenta el contador de forma correcta
    const aumentarContador = () => {
        setContador(prevContador => prevContador + 1)
    }

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={aumentarContador}>+</button>
        </div>
    )
}

export default EjemploContador
