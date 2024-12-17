import { useState } from "react"

export const Contador = () => {
    const [ contador, setContador ] = useState(0);

    const handleContador = () => setContador(contador + 1)

    return ( 
        <div>
            <p>Contador: {contador}</p>
            <button onClick={ handleContador }>
                Incrementar
            </button>
        </div>
    );
};