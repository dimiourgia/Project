import {motion} from 'framer-motion'
import wr from '../assets/images/pieces/wr.png'
import wn from '../assets/images/pieces/wn.png'
import wb from '../assets/images/pieces/wb.png'
import wk from '../assets/images/pieces/wk.png'
import wq from '../assets/images/pieces/wq.png'
import wp from '../assets/images/pieces/wp.png'
import br from '../assets/images/pieces/br.png'
import bn from '../assets/images/pieces/bn.png'
import bb from '../assets/images/pieces/bb.png'
import bk from '../assets/images/pieces/bk.png'
import bq from '../assets/images/pieces/bq.png'
import bp from '../assets/images/pieces/bp.png'


function getSource(piece){
  switch(piece){
    case 'wr': return wr
    case 'wn': return wn
    case 'wb': return wb
    case 'wk': return wk
    case 'wq': return wq
    case 'wp': return wp

    case 'br': return br
    case 'bn': return bn
    case 'bb': return bb
    case 'bk': return bk
    case 'bq': return bq
    case 'bp': return bp
  }
}


import boardImage from '../assets/images/others/board.jpg'
import { useEffect, useRef } from 'react'



export default function Board(props){
    const board_size = props.board_size
    const flipped = props.flipped
    const map = props.map
    const map_c = map.map(row=>row.slice())
    const board = []

    const previousMapRef = useRef(props.map)

    useEffect(()=>{
      previousMapRef.current = props.map  
    },[props.map])
    
    const previousMap = previousMapRef.current
    let movedTo=[-1,-1], movedFrom=[-1,-1]

    map.map((row,i)=>{
      row.map((piece, j)=>{
        if(map[i][j] !== '' && previousMap[i][j] !== map[i][j]) movedTo=[i,j] 
        if(previousMap[i][j]!=='' && map[i][j]==='' ) movedFrom=[i,j]
      })
    })

    //console.log(movedFrom, movedTo)

    const spring = {
      type: 'spring',
      damping: 10,
      stiffness: 100
    }


        map.map((row, i) =>{
            row.map((piece, j) =>{
                
                var finalTop = flipped ? ((i)*(board_size/8)) : ((7-i)*(board_size/8))
                var finalLeft = flipped ?   (7-j)*board_size/8 : j*board_size/8

                var top = (movedTo[0]===i && movedTo[1]===j)? (flipped ? ((movedFrom[0])*(board_size/8)) : ((7-movedFrom[0])*(board_size/8))) : (flipped ? ((i)*(board_size/8)) : ((7-i)*(board_size/8)))
                var left = (movedTo[0]===i && movedTo[1]===j)? (flipped? (7-movedFrom[1])*board_size/8 : movedFrom[1]*board_size/8) : (flipped ?   (7-j)*board_size/8 : j*board_size/8)
             
      
              piece && board.push(
                  <motion.img src = {getSource(piece)} key={`${i}-${j}`} style={
                    {
                        zIndex:1,
                        width: board_size/8,
                        height: board_size/8,
                        position:"absolute",  
                    }}

                    initial={{left: left, top:top}}
                    animate={{left:finalLeft, top:finalTop}}
                    transition={{duration:.38, spring }}
                 />         
                 )})});
    
                 var flag=false;
                 map_c.map((row,i)=>{
                  flag=!flag;
                  row.map((sqr,j)=>{
                    board.push(
                    <div
                    key={`${i}--${j}`}
                    style={{
                      width:board_size/8,
                      height:board_size/8,
                      top: (7-i)*(board_size/8),
                      position:'absolute',
                      zIndex:.2,
                      left:  j*board_size/8,
                      backgroundColor : ((movedTo[0]===i && movedTo[1]===j) || (movedFrom[0]===i && movedFrom[1]===j) )? '#d7dd58ba' : flag ? '#30627980' : '#d1c1c180',
                    }}
                    />)
                    flag=!flag;
                  })
                })

    return(
        <div style={{position:'relative'}}>
        <div style={{
            position:'absolute',
            width:board_size,
            height:board_size,
            zIndex:.5,
            left:0,
            top:0,
            backgroundImage: `url(${boardImage})`,
            backgroundSize: 'cover',
            borderRadius:'4px',
        }}/>
        {board}
        </div>
        );
}