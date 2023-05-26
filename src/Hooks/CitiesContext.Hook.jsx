import { useContext } from "react";
import { CitiesContext } from "../Context/CitiesContext.jsx";

export function CitiesContextHook (){
    const context = useContext(CitiesContext)

    if (context === undefined)
    throw  new Error ('Não está dentro do contexto')

    return context
}

export default CitiesContextHook