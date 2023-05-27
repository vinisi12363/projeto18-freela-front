import { useContext } from "react";
import { TicketsContext } from "../Context/TicketsContext.jsx";

export function TicketsContextHook (){
    const context = useContext(TicketsContext)

    if (context === undefined)
    throw  new Error ('Não está dentro do contexto')

    return context
}

export default TicketsContextHook