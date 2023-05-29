import { useContext } from "react";
import { HotelsContext } from "../Context/HotelsContext.jsx";

export function HotelsContextHook (){
    const context = useContext(HotelsContext)

    if (context === undefined)
    throw  new Error ('Não está dentro do contexto')

    return context
}

export default HotelsContextHook