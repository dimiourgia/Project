import {useState} from 'react'
 export default function FormMessage(props){
  const [type, setType] = useState(props.type)

  return(
  <div style={{
    display:'flex',
    alignItems:'flex-start',
    color: (type==='error')? '#d93025' : '#25AE88',
    paddingLeft:'2px'
  }}>
    {type==='error' && <svg  fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>}
    
    {type === 'success' && <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width='16px' height='16px' viewBox="0 0 50 50" xml:space="preserve">
<circle style={{fill: '#25AE88'}} cx="25" cy="25" r="25"/>
<polyline style={{fill:'none',stroke:'#FFF',strokeWidth:4,strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:10}} points="
	38,15 22,33 12,25 "/>
</svg>}

    <div style={{marginLeft:'2px', fontSize:'12px'}}>
        {props.message}
    </div>
  </div>
  )  
}