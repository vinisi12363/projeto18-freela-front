import { useContext } from "react";
import { CitySelectedContext } from "../Context/CitySelectedContext";

export function CitySelectedContextHook (){
    const context = useContext(CitySelectedContext)

    if (context === undefined)
    throw  new Error ('Não está dentro do contexto')

    return context
}

export default CitySelectedContextHook