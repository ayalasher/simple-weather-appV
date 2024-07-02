import { useState } from "react"
import styles from './Search.module.css'

export default function Search() {
    
    const [city,setCity] = useState('')

    return <div>

        <input className={styles.input} type="text" placeholder="Enter your city" 
        value={city}
        onChange={(e)=>setCity(e.target.value)}
         />

         <button className={styles.button} >
            Search
         </button>

    </div>
}