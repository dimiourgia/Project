
import { useRef, useState, forwardRef, useEffect } from "react"



export default forwardRef(function Input(props, ref){

    const placeholder = props.placeholder
    const countries = props.optionsList
    const [error, setError] =  useState(props.error) 
    const [focused, setFocused] = useState(false)
   
    useEffect(()=>{
        setError(props.error)
    },[props.error])

    /*

    const handleFocus = ()=>{
        if(!error){
            setPlaceholderClass('placeholder placeholder_focused')
            setInputBoxClass('input_box input_box_focused')
        }
            
        else{
            setPlaceholderClass('placeholder placeholder_focused placeholder_error')
            setInputBoxClass('input_box input_box_focused_error')
        }
            
    }

    const handleBlur=()=>{
        if(ref.current.value === ''){
            setPlaceholderClass('placeholder_focused filled')
            error? setInputBoxClass('input_box input_box_error') : setInputBoxClass('input_box')
        }
        else {
            if(!error){
                setPlaceholderClass('placeholder placeholder_focused filled')
                setInputBoxClass('input_box')
            }
                
            else 
                {
                    setPlaceholderClass('placeholder_focused placeholder_error')
                    setInputBoxClass('input_box input_box_error')
                }
        }
    }

    */

    const handleFocus = ()=>{
        setFocused(true)
    }
    
    const handleBlur = ()=>{
        setFocused(false)
    }

    const handleClick=()=>{
        ref.current.focus()
    }

    return(
        <div className="input_wrapper">
            <div className='input_container'>
                <select ref={ref}  
                    className={focused ? (error? 'input_box input_box_focused_error' : 'input_box input_box_focused') : (error? 'input_box input_box_error' : 'input_box') } 
                    onFocus={handleFocus} 
                    onBlur={handleBlur} >
                    <option>select country</option>
                    {countries.map(country=>(<option key={country.label}>{country.label}</option>))}
                </select>
                <div 
                className= {focused ? (error? 'placeholder placeholder_focused placeholder_error' : 'placeholder placeholder_focused') : (error? 'placeholder placeholder_focused placeholder_error' : 'placeholder placeholder_focused filled') } 
                onClick={handleClick}>
                    {placeholder}
                </div>
            </div>
        </div>
    )
})
