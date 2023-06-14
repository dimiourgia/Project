import { useRef, useState } from "react"
import Input from "../components/Input"



export default function Home(){

    const inputRef = useRef(null)

    const handleClick=(e)=>{
        e.preventDefault()
        console.log(inputRef.current.value)
    }

    return(<>
    <div className="form_container">
        <form>
            <Input placeholder={'email'} ref={inputRef}/>   
            <button onClick={handleClick}></button>
            <div className= {placeholderClass}>{placeholder}</div>
        </form>
    </div>

    </>)
}