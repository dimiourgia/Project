import {BrowserRouter as Router, Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import Board from '../components/Board'
import {fenToMap} from '../utils/helper.js'
import {motion} from 'framer-motion'




export default function LandingPage(){
    const board_states = [{fen:'2R1K3/2Q5/8/8/8/8/pp6/1k5r'}, {fen:'2R1K3/8/8/8/8/8/ppQ5/1k5r'}, {fen:'2R1K3/8/8/8/8/8/ppQ5/k6r'}, {fen:'2R1K3/8/8/8/8/8/pp6/k1Q4r'}, {fen:'2R1K3/8/8/8/8/8/pp6/k1r5'}, {fen:'4K3/8/8/8/8/8/pp6/k1R5'}]
    const [map, setMap] = useState(fenToMap(board_states[0].fen))
    const [skill, setSkill] = useState('tactics')
    const skills = ['tactics', 'openings', 'game strategy']

    //animation transition type
    const spring = {
        type: 'spring',
        damping: 10,
        stiffness: 100
    }

    
    let index = 1
    const updateMap = ()=>{
        if(index>5) index=0
        setMap(fenToMap(board_states[index].fen))
        index++

    }

    let skillIndex = 1
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(skillIndex>2) skillIndex =0
            setSkill(skills[skillIndex])
            skillIndex++
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    useEffect(()=>{
        const interval = setInterval(updateMap, 2000)

        return () => clearInterval(interval)
    }, [])


    return(
 
    <motion.div className='lp_container'>
        <div className='topbar'>
            <div className='logoText'>
               <Link to='/'>Puzzler</Link> 
            </div>
        </div>
        <div className="hero">
            <div className="section1">
                <motion.div 
                    initial={{marginLeft:'-500px'}}
                    animate={{marginLeft:'20px'}}
                    transition={{duration:.48, spring}}
                    className="hero_text">
                    Want to take your game to the next level?
                    <div className='subText'>Get access to the largest collection of over 10,000+ Chess Puzzles </div>
                </motion.div>
                
                <Link to='/login' style={{width:'fit-content'}}>
                    <motion.button
                        initial={{marginLeft:'-500px', opacity:.5}}
                        animate={{marginLeft:'20px', opacity:1}}
                        transition={{duration:.88, spring}} 
                        className='button login_button'>Login</motion.button>
                </Link>
            </div>
            
            <motion.div 
                initial={{transform: 'scale(.1)', transformOrigin:'-175px 175px'}}
                animate={{transform: 'scale(1)'}}
                transition={{duration:.38, spring}}
                className='board_container'>
                <Board 
                    board_size={350}
                    map = {map}
                    flipped={false}
                />
            </motion.div>  
        </div>
        
        <div className='spacer layer1'></div>    
    </motion.div>

    )
}