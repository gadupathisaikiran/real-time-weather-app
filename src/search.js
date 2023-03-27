import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";


import './App.css';
import Details from './details';




export default function Search() {



const [name,setname]=useState()



const [toggle,settoggle]=useState(false)



  function submit(){




    settoggle(true)



  }








  return (
    <>{
    !toggle&&
    <div>
   
    <video className='video' loop id="myVideo"  autoPlay={true} muted={true} >
    <source src="https://react-uploder.s3.us-east-2.amazonaws.com/clouds-16163.mp4" type="video/mp4"/>
    </video>

    <a href='/'><button style={{top: "10px",position:"fixed",left:"10px"}}>HOME</button></a>
    <div className="search-container">
    

      <input style={{height:"30px",width:"200px"}} placeholder='enter city name ' onChange={(e)=>{setname(e.target.value)}}></input>


      <button style={{height:"30px",width:"60px",marginLeft:"10px"}} onClick={()=>{submit()}} >search</button>
    
    </div>
 

    </div>
    }

    
   
    {
        toggle&&
        <div>

        <Details name={name}/>

         </div>

    }



    </>

  )
}
