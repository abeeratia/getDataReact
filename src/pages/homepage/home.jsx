import React, { useState } from "react";
import data from "../../data/data";
export default function Home() {
  const [peaple, setPeaple] = useState(data)

 
  return (<>
  <div>

 
    <div  className="bg-danger container text-center p-3 mt-5  w-50" >
      {peaple.map((dat, index) => {
        const { name, age, image } = dat;
        return (
          <div key={index}>
            <div className="container w-50  mt-5 ">
          <div className=" d-flex justify-content-between align-items-center   ">
       
              <div className="imgwidth">
              <img src={image} alt={name} className="imgwidthcircle" />

              </div>
             
              <div>
                <h5>{name}</h5>
                <p>{age}</p>
              </div>
          </div>
             
            </div>
            
          </div>
          
        );
      })}
                   <button className="btn btn-success" onClick={()=>setPeaple([])} >  clear all</button>
 
                    
        
    </div>
    </div>
    </> );
}
