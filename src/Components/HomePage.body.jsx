

import styled from "styled-components";
import backgrondPhoto from "../Assets/images/flatten.jpeg"


export default function HomeBody() {
    return (
      <HomeBodyContainer>
       <PresentationDiv>
       <p> Aqui  na Viagens Alucinantes nós buscamos o melhor para você, com os melhores cidades e hóteis para tornar a sua viagem inesquecível!  </p>
       </PresentationDiv>

      
        <h2>Para onde você quer ir?</h2>
  
        <CustomSelect name="Destinos" id="destiny">
          <option value="BA"><p>Salvador - BA</p></option>
          <option value="DF">Brasília - DF</option>
          <option value="RJ">Rio de Janeiro - RJ</option>
          <option value="SP">São Paulo - SP</option>
        </CustomSelect>
  
      </HomeBodyContainer>
    );
  }
  

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
  
const CustomSelect = styled.select `
    min-width:50%;
    min-height:50px;
    background:#d9d9d9;
    text-align:center;
    font-size:18;
    font-weight:400;
`

const HomeBodyContainer= styled.div `
    display: flex;
    background-color: #8dbdeb;
    align-items:center; 
    flex-direction:column;
    background-image : //linear-gradient(to bottom, rgba(0,0,255,0.5),  rgba(245, 183, 39, 0.8)  ),
    url('https://assets3.thrillist.com/v1/image/3109501/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70');
    background-size: cover;
    overflow:hidden;
    min-width:100%;
    height: 100dvh;
    background-position: center;
    background-repeat: no-repeat;
`