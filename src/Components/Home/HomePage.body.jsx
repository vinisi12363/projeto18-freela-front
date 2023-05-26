import styled from "styled-components";
import { useState , useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import CitiesContextHook from '../../Hooks/CitiesContext.Hook.jsx'
import axios from 'axios'


export default function HomeBody() {
    const navigate = useNavigate()
    const {setCities} = CitiesContextHook()
    const [citiesList, setCitiesList] = useState([]);
  

  useEffect(()=>{
    const URL = `${import.meta.env.VITE_APP_API_URL}/home`

    try {
      const require = axios.get(URL)
      require.then(res => {
        setCitiesList([...res.data])
      })
      require.catch(err => {
        console.log(err.message)
        
      })


    }catch(err){alert(err.messsage)}
  
  }, [])
 

  const handleCitySelection = (event) => {
   
    setCities(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/tickets')
  };

    return (
      <HomeBodyContainer>
       <PresentationDiv>
       <p> Aqui  na Viagens Alucinantes nós buscamos o melhor para você, com os melhores cidades e hóteis para tornar a sua viagem inesquecível!  </p>
       </PresentationDiv>

      
        <h1>Para onde você quer ir?</h1>
        <FormContainer>
        <form  onSubmit={handleSubmit}>
          <CustomSelect
            name="Destinos"
            id="destiny"
            onChange={handleCitySelection}
          >
           
            {citiesList.map((data)=>{
            return(      
              <option  
                id={data.city_id} 
                value={data.city_name}>
                {data.city_name} - {data.city_uf}
              </option>
              );
            })}
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
    option{
      font-weight:700;
    }
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
    background-image : linear-gradient(to bottom, rgba(208, 252, 255, 0.8),  rgba(245, 183, 39, 0.8)  ),
    url('https://assets3.thrillist.com/v1/image/3109501/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70');
    background-size: cover;
    overflow:hidden;
    min-width:100%;
    height: 100dvh;
    background-position: center;
    background-repeat: no-repeat;
`