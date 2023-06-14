import {useState, useRef, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import king from '../assets/images/pieces/bk.png'
import Input from '../components/Input'
import FormMessage from '../components/FromMessage'
import Loading from '../components/Loading'
import {motion} from 'framer-motion'


const env = 'dev'

export default function Login(){


const emailRef = useRef()
const passwordRef = useRef()
const [error, setError] = useState(false)
const [emailError, setEmailError] = useState(false)
const [passwordError, setPasswordError] = useState(false)
const [fetchingFromServer, setFetchingFromServer] = useState(false)
const [success, setSuccess] = useState(false)
const [userName, setUsername] = useState('')
const host = env=='dev' ? 'http://localhost:8084' : 'https://acl-zeta.vercel.app' 

//animatin transition type
const spring = {
    type: 'spring',
    damping: 10,
    stiffness: 100
}

useEffect(()=>{
    emailRef.current.focus()
},[])

const handleLoggin = (e)=>{
    e.preventDefault()
    setSuccess(true)
}

const handleLogin = (e)=>{
    if(fetchingFromServer) return

    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value

    setError(false)
    setEmailError(false)
    setPasswordError(false)

    if(email===''){
        setError('Email can not be blank')
        setEmailError(true)
        return
    }

    if(password===''){
        setError('Password can not be blank')
        setPasswordError(true)
        return
    }

    if(email!==''){
        if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            setError('Invalid Email')
            setEmailError(true)
            return
        }
    }

    //Everything looks good sent form to the server
    setFetchingFromServer(true)

    axios.post(`${host}/api/login`, {email, password})
    .then(res=>{
        if(res.data.type !== undefined){
            if(res.data.type === 'error') setError(res.data.message)
        }
        if(res.data.type === 'success') {
            setUsername(res.data.userName)
            setSuccess(true);
        }
        console.log(res.data)
        setFetchingFromServer(false)
    })
    .catch((err)=>{
        console.log(err.message)
        if(err.message){
            setError(err.message)
            setFetchingFromServer(false)
        }
    })
}

    return(
    <div className='login_container'>
        <div className='topbar'>
            <div className='logoText'>
                <Link to='/'>Puzzler</Link>
            </div>
        </div>

       <div className="form_container_wrapper">
            <motion.div className="form_container" initial={{transform:'scale(.2)', opacity:0}} animate={{transform:'scale(1)', opacity:1}} transition={{duration:.2, spring}}>
                <form onSubmit={handleLogin}>
                        <Input placeholder={'Email'} ref={emailRef} type={'text'} error={emailError} />     
                        <Input placeholder={'Password'} ref={passwordRef} type={'password'} error={passwordError} />
                        {error && <FormMessage type='error' message={error}/>}
                        {fetchingFromServer && <Loading/> }
                        
                        <div className="form_button_wrapper">
                            <button className={fetchingFromServer? 'button form_button disabled' : 'button form_button'} type='submit'>
                             Login  
                            </button>
                        </div>
                        <br/>
                        <div style={{textAlign:'center'}}>
                            Don't have an account? <Link to='/register' className='registerLink'>Sign Up</Link>
                        </div> 
                   </form>
            </motion.div>
       </div>
        <div className='spacer layer1'></div>

        {success && 
        <motion.div 
            className='login_splash' 
            initial={{opacity:0}} 
            animate={{opacity:1}}
            transition={{duration:.28, spring}}
            >
            <h1>{`${userName}, Welcome to the system !`}</h1>
            </motion.div>}
    </div>
)}