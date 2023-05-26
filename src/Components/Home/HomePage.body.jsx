

import styled from "styled-components";
import { useState , } from "react";
import { Navigate } from 'react-router-dom';



export default function HomeBody() {
  const [selectedCity, setSelectedCity] = useState("");
 

  const handleCitySelection = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Navigate ('/tickets')
  };

    return (
      <HomeBodyContainer>
       <PresentationDiv>
       <p> Aqui  na Viagens Alucinantes nós buscamos o melhor para você, com os melhores cidades e hóteis para tornar a sua viagem inesquecível!  </p>
       </PresentationDiv>

      
        <h2>Para onde você quer ir?</h2>
        <FormContainer>
        <form  onSubmit={handleSubmit}>
          <CustomSelect
            name="Destinos"
            id="destiny"
            value={selectedCity}
            onChange={handleCitySelection}
          >
            <option >
              <p>Escolha o destino... </p>
            </option>
            <option value="Salvador">Salvador - BA</option>
            <option value="Brasília">Brasília - DF</option>
            <option value="Rio de Janeiro">Rio de Janeiro - RJ</option>
            <option value="São Paulo">São Paulo - SP</option>
          </CustomSelect>

          <button type="submit">Go!</button>
        </form>
        </FormContainer>
    
      </HomeBodyContainer>
    );
  }






const FormContainer = styled.div`
  background-color:transparent;
  min-width:75%;
  form{
   justify-content:space-between;
  }
`



  const PresentationDiv = styled.div`
      margin-top:25px;
      display: flex;
      max-width:50%;
      max-height:100px;
      background-color:#ebebeb;
      border-radius: 5px  ;
      border:4px black solid ;
      p {
          font-size: 22px;
          font-weight: 200;
          text-align: center;
          text-decoration: italic;
      }
  `;
const ButtonSelect = styled.button `
  
  color: #0abfbc;
  border: 20px solid;
  border-radius:50%;
  height:40px;
  width:40px;
`
const CustomSelect = styled.select `
    min-width:70%;
    min-height:50px;
    background:#d9d9d9;
    text-align:center;
    font-size:18;
    font-weight:400;
`

const HomeBodyContainer= styled.div `
    button{
      position:relative;
      left:20%;
      margin-top:20px;
      background: #0abfbc;
      border:0.5px #b8d9c8 solid;
      border-radius:50%;
      height:60px;
      width:60px; 
      font-weight:700;
    }
    display: flex;
    background-color: #8dbdeb;
    align-items:center; 
    flex-direction:column;
    background-image : linear-gradient(to bottom, rgba(0,0,255,0.5),  rgba(245, 183, 39, 0.8)  ),
    url('https://assets3.thrillist.com/v1/image/3109501/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70');
    background-size: cover;
    overflow:hidden;
    min-width:100%;
    height: 100dvh;
    background-position: center;
    background-repeat: no-repeat;
`