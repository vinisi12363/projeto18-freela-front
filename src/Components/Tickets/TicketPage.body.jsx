

import styled from "styled-components";
import { useState, } from "react";
import { Navigate } from 'react-router-dom';
import htl1 from '../../Assets/images/HotelImages/Salvador/htl1.png'
const SalvadorUrlBackGround = "https://revistaazul.voeazul.com.br/wp-content/uploads/2023/03/conheca-salvador-e-se-apaixone-pela-capital-baiana.jpeg"
import CitiesContextHook from '../../Hooks/CitiesContext.Hook.jsx'


export default function TicketBody() {
  const {cities} = CitiesContextHook();
  const [selectedMinimalPrice, setSelectedMinimalPrice] = useState(0);
  const [selectedMaximunPrice, setSelectedMaxmimunPrice] = useState(0);
  const handlePriceChange = (event) => {
    setSelectedMinimalPrice(event.target.value);
  };
  const handleMaxchange = (event) => {
    setSelectedMaxmimunPrice(event.target.value);
  };
  console.log("CITY", cities) 
  return (
    <HomeBodyContainer>
      <PresentationDiv>
        <p> passagens para {cities}</p>
      </PresentationDiv>

      <PanelContainer>
        <PriceContainer>
          <label >Faixa de Preço mínimo:</label>
          <input
            type="range"
            id="price_min"
            name="price_min"
            min="1"
            max="2000"
            step="10-1"
            value={selectedMinimalPrice}
            onChange={handlePriceChange}
          />
          <p>Valor selecionado: R$ ${selectedMinimalPrice},00</p>




          <label >Faixa de Preço máximo:</label>
          <input
            type="range"
            id="price_max"
            name="prince_max"
            min="1"
            max="2000"
            step="10-1"
            value={selectedMaximunPrice}
            onChange={handleMaxchange}
          />
          <p>Valor selecionado: R$ ${selectedMaximunPrice},00 </p>

          <button onClick={"olá!"}>filter</button>

        </PriceContainer>
        <PhotosContainer>
          <ImgDiv>
            <img src={htl1}></img>
            <p>R$299,00</p>
          </ImgDiv>
          <ImgDiv>
            <img src={htl1}></img>
            <p>R$299,00</p>
          </ImgDiv>
          <ImgDiv>
            <img src={htl1}></img>
            <p>R$299,00</p>
          </ImgDiv>
          <ImgDiv>
            <img src={htl1}></img>
            <p>R$299,00</p>
          </ImgDiv>
          <ImgDiv>
            <img src={htl1}></img>
            <p>R$299,00</p>
          </ImgDiv>
          <ImgDiv>
            <img src={htl1}></img>
            <p>R$299,00</p> 
          </ImgDiv>

        </PhotosContainer>
      </PanelContainer>



    </HomeBodyContainer>
  );
}

const PhotosContainer = styled.div`
    
      
     display:flex; 
     flex-wrap:wrap;
  
  
  `

const ImgDiv = styled.div`
    margin-left: 20px;
    margin-top:10px;
    margin-right:5px;
    p{
      position:relative;
      left:260px;
      bottom:60px;
      font-weight:700;
      font-size:22px;
      color:black; 
      transition: transform 0.3s ease;

      transition: scale(1.1); 
    }
    img{
        width:350px;
        border:3px solid;
        border-radius:6px;
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    img:hover{

      transform: scale(1.1);
    }

  `
const PanelContainer = styled.div`
    display: flex;
    flex-direction: rows;
    margin-top:20px;
    width:75%;
    justify-content: space-between;
    background-color: linear-gradient(to bottom, gray, transparent);
    border-radius:5px;
   // border: 2px solid gray;

`

const PriceContainer = styled.div`
  display:flex;
 flex-direction: column;
 background-color: lightgray;
 height:490px;
 width:30%;
 border-radius:5px;
 border:1px solid;
 margin-top:10px; 
 button{
  margin-left: 35px;
  border:1px solid;  
 }

`


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
      min-width:80%;
      max-height:100px;
      background-color:#ebebeb;
      border-radius: 5px  ;
      border:4px black solid ;
      align-items:center;
      p { 
          margin-left:35%;
          font-size: 45px;
          font-weight: 700;
          text-align: center;
          text-decoration: italic;
      }
  `;
const ButtonSelect = styled.button`
  
  color: #0abfbc;
  border: 20px solid;
  border-radius:50%;
  height:40px;
  width:40px;
`
const CustomSelect = styled.select`
    min-width:70%;
    min-height:50px;
    background:#d9d9d9;
    text-align:center;
    font-size:18;
    font-weight:400;
`

const HomeBodyContainer = styled.div`
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
    background-image : linear-gradient(to bottom, lightgray, transparent),
    url(${SalvadorUrlBackGround});
    background-size: cover;
    overflow:hidden;
    min-width:100%;
    height: 100dvh;
    background-position: center;
    background-repeat: no-repeat;
`