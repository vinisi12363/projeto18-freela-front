import { Form } from "react-router-dom";
import styled from "styled-components";
export default function HomeBody(){
    return (
        <>
                   <HomeBodyContainer/>
                 
                   <label> Para onde voce quer ir ?</label>

                    <select name="Destinos" id="destiny">
                        <option value="BA">Salvador - BA</option>
                        <option value="DF">Brasilia - DF</option>
                        <option value="RJ">Rio de Janeiro - RJ</option>
                        <option value="SP">São Paulo - SP</option>
                    </select>
                  
                   
        </>
     

    )


}


const HomeBodyContainer= styled.div `
    display: flex;
    background-image : url('../Assets/images/flatten.jpeg');
    overflow:hidden;
    min-width:100%;
`