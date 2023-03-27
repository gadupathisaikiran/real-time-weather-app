import React, { useContext, useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';
import { useGeolocated } from "react-geolocated";
import AuthContext from './context';

export default function Home() {

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    });




// MAY BE RAIN------- HUMIDITY(70-100)
// SUMMER ---------   HUMIDITY (40-60)
 // WINTER-------------HUMIDITY(25-40)   

const [data,setdata]=useState()



useEffect(()=>{
    async function main(){

        if(coords){

       
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=1555e19e96a49961ad9799a2f895826f`).then(function (response) {
       
   if(response.data){
    setdata(response.data)
   }
  

    }).catch(function (error) {
        console.error(error);
    });


    }


    }
    

    main()

},[coords])


    


  return (
   
    
    <div>
    
    <video className='video' loop id="myVideo"  autoPlay={true} muted={true} >

   {data?
    data.main.humidity>80&&<source src="https://react-uploder.s3.us-east-2.amazonaws.com/rain-17902.mp4" type="video/mp4"/>
   :""}

   {data?
    data.main.humidity>60&&data.main.humidity<81&&<source src="https://react-uploder.s3.us-east-2.amazonaws.com/clouds-1154.mp4" type="video/mp4"/>
   :""}

   {data?
  data.main.humidity<60&&<source src="https://react-uploder.s3.us-east-2.amazonaws.com/lights-13441.mp4" type="video/mp4"/>
   :""}



  </video>

 
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
  
  <h1>favourite place :{sessionStorage.getItem("list")}</h1>

  
  </div>
    
    </div>
  )
}
