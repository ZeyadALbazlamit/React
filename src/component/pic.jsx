import React, { useState, useContext,useEffect, useLayoutEffect } from 'react';
import A from "./a";

import {Context} from "./b";

function Pic()
{
    const con= useContext(Context);


const pic='https://robohash.org/';
useEffect(()=>{
    setNumber();
},[]

);

function setNumber()
{ 
const name=[
 "Leanne Graham","Kulas Light",
 "Kulas Light", "Ervin Howell",
"Victor Plains", "Wisokyburgh",
 "Clementine Bauch","Romaguera-Jacobson",
 "Patricia Lebsack",
"Chelsey Dietrich","Mrs. Dennis Schulist",
 "Kurtis Weissnat", "Nicholas Runolfsdottir V",
  "Bartholomebury"
];
const random = Math.floor(Math.random() * name.length);
const arr=[{picture:pic+'45',RoboteName:name[8],price:random}];    
for(let i=0;i<con.d;i++)
   arr[i]={picture:pic+(i+4).toString(),RoboteName:name[i%13],price:(random*i*i/2)%600}
    setImg([...img,...arr]);
      
        
    /*
for(let i=0;i<3;i++)
{
setImg([...img+{picture:pic+i.toString}]);
console.log(img[i].picture);
}
*/
}
const [img,setImg]=useState([ ]);


 return (
<div>
<ul>
    {img.map( a => {
return(
    <>
   
  { <A key={a.picture} picture={a.picture} name={a.RoboteName} price={a.price}/>}
 </>
     )
}
 
    )
}
    </ul>

   </div>
    );

}
 

export default Pic;