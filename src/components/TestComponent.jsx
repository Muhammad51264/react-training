import { useEffect, useRef } from "react";
import { useState } from "react"
import SecondComponent from "./SecondComponent";

const TestComponent = () => {
    const name = useRef(null);
    const getDate =(date)=>`${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}:${date.getSeconds().toString().padStart(2,'0')}`;
    const[time,setTime]=useState(getDate(new Date()));
    useEffect(()=>{
        const interval = setInterval(()=>{
            const date = new Date();
            setTime(getDate(date));
        },1000)

        return () => clearInterval(interval);

    },[])
  return (
    <div style={{textAlign:"center"}}>
      <h1 ref={name} onClick={()=>{alert(name.current.outerText)}} >This is a Test Component</h1>
      <h5>Date:{time}</h5>
      <SecondComponent/>
    </div>
  )
}

export default TestComponent
