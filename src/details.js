import React, { useEffect,useState} from 'react'
import './App.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Details(props) {

    const [data,setdata]=useState()
    const navigate = useNavigate();

console.log(props.name)



useEffect(()=>{
    async function main(){

     

       
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.name}&appid=1555e19e96a49961ad9799a2f895826f`).then(function (response) {
       
   if(!response.message){
    setdata(response.data)
   }
  

    }).catch(function (error) {
        console.error(error);
       
        alert("error try again")
        navigate("/")

    });


    

}



sessionStorage.setItem("list",props.name)

main()

},[props.name])



  

return (
   
    
    <div>
    
    <video className='video' loop id="myVideo"  autoPlay={true} muted={true} >

   {data?
    data.main.humidity>77&&<source src="https://react-uploder.s3.us-east-2.amazonaws.com/rain-17902.mp4" type="video/mp4"/>
   :""}

   {data?
    data.main.humidity>60&&data.main.humidity<=76&&<source src="https://react-uploder.s3.us-east-2.amazonaws.com/clouds-1154.mp4" type="video/mp4"/>
   :""}

   {data?
    data.main.humidity<=60&&<source src="https://react-uploder.s3.us-east-2.amazonaws.com/lights-13441.mp4" type="video/mp4"/>
   :""}



  </video>

  <a href='/'><button style={{top: "10px",position:"fixed",left:"10px"}}>HOME</button></a>
{
    data?
    <div className="content">
  
    <p>current location: {data.name?data.name:""}</p>
    <p>temperature: {data.name?parseInt(data.main.temp-273):""}°C</p>
    <p>humidity: {data.name?parseInt(data.main.humidity):""}</p>
    <p>wind: {data.name?data.wind.speed:""} km/h</p>
  
   <a href='/search'><button>search for another place</button></a> 
    </div>:""
}
 

  <div className="list">


  
  </div>
    
    </div>
  )
}
