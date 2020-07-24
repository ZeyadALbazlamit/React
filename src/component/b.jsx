import React, { useState } from 'react';
export const Context =React.createContext();
export  function Con(Props)
{
    function change(event)
    {
setd(event.target.value);


    }
const [d,setd] =useState('');

 return (

<Context.Provider value= {{d,setd,change}}>
 {Props.children}
</Context.Provider>
            );
}
 

