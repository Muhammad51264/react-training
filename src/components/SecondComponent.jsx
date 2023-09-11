import { useEffect, useState } from "react";
import styles from "./components.module.css"
import ReactDOM from 'react-dom';

const Portal =({children})=>{
    return ReactDOM.createPortal(
        children,document.getElementById("root")
    )
}
const SecondComponent = () => {
    const [counter,setCounter]=useState(0);

    useEffect(()=>{
        console.log("render")
    },[])
  return (
    <>
      <Portal>
      <h4 className={styles.test}>number of counts: {counter}</h4>
      <button style={{margin:"0 auto",display:"table"}} onClick={()=>{setCounter(counter+1)}}>Click</button>
    </Portal>
    <h1 >This element is outside the portal
    </h1>
      </>
  )
}

export default SecondComponent
