import { useState } from "react"
import styles from './Search.module.css'

export default function Search({city,setCity,handleClick}) {
    
   

    return <div>



        <input className={styles.input} type="text" placeholder="Enter your city" 
        value={city}
        onChange={(e)=>setCity(e.target.value)}
         />

         <button onClick={handleClick} className={styles.button} >
            Search
         </button>

    </div>
}