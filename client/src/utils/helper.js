function allPossibleMoves(piece, row, col, map, lastMove){
    var map=map;
    var ps = [];
    var en={color:null, pos:null};
    //console.log(lastMove);
    if(lastMove.piece != null){
        lastMoveColor = lastMove.piece[0];
        if(lastMove.piece[1] === 'p' && Math.abs(lastMove.from[0]-lastMove.to[0])>1) {
            en={color: lastMoveColor, pos:tn(lastMove.to[0], lastMove.to[1])};
        }
            
    }
    
    switch(piece){
       
        case 'wr': 
        for(i=col;i<=8;i++){
            if(i!=col && map[row-1][i-1][0]=='w')
                break;
            else if(map[row-1][i-1][0]=='b'){
                ps.push(tn(row,i));
                break;
            }
            else if(i!=col)
            ps.push(tn(row,i));
        }
        for(i=col;i>=1;i--){
            if(i!=col && map[row-1][i-1][0]=='w')
                break;
            else if(map[row-1][i-1][0]=='b'){
                ps.push(tn(row,i));
                break;
            }
            else if(i!=col)
            ps.push(tn(row,i));
        }
    
        for(i=row;i<=8;i++){
            if(i!=row && map[i-1][col-1][0]=='w')
            break;
            else if(map[i-1][col-1][0]=='b'){
                ps.push(tn(i,col));
                break;
            }
            else if(i!=row)
            ps.push(tn(i,col));
        }
        for(i=row;i>=1;i--){
            if(i!=row && map[i-1][col-1][0]=='w')
            break;
            else if(map[i-1][col-1][0]=='b'){
                ps.push(tn(i,col));
                break;
            }
            else if(i!=row)
            ps.push(tn(i,col));
        }
        break;
    
        case 'br': 
        for(i=col;i<=8;i++){
            if(i!=col && map[row-1][i-1][0]=='b')
                break;
            else if(map[row-1][i-1][0]=='w'){
                ps.push(tn(row,i));
                break;
            }
            else if(i!=col)
            ps.push(tn(row,i));
        }
        for(i=col;i>=1;i--){
            if(i!=col && map[row-1][i-1][0]=='b')
                break;
            else if(map[row-1][i-1][0]=='w'){
                ps.push(tn(row,i));
                break;
            }
            else if(i!=col)
            ps.push(tn(row,i));
        }
    
        for(i=row;i<=8;i++){
            if(i!=row && map[i-1][col-1][0]=='b')
            break;
            else if(map[i-1][col-1][0]=='w'){
                ps.push(tn(i,col));
                break;
            }
            else if(i!=row)
            ps.push(tn(i,col));
        }
    
        for(i=row;i>=1;i--){
            if(i!=row && map[i-1][col-1][0]=='b')
            break;
            else if(map[i-1][col-1][0]=='w'){
                ps.push(tn(i,col));
                break;
            }
            else if(i!=row)
            ps.push(tn(i,col));
        }
        break;
    
        case 'wp': 
        if(row==2 && map[row+1][col-1]==""){
            ps.push(tn(row+2,col));
        } 
    
         if(row+1<=8){
             if(map[row][col-1]=="")
                ps.push(tn(row+1,col));
            if(col-1>=1 && map[row][col-2][0]=='b') ps.push(tn(row+1,col-1));
            if(col+1<=8 && map[row][col][0]=='b') ps.push(tn(row+1,col+1));
            if(en.color==='b'){
                if(Math.floor(en.pos/10)=== row && Math.abs(en.pos%10-col)===1) ps.push(tn(row+1,en.pos%10))
            }
        }
    
        break;
    
        case 'bp':
            if(row==7 && map[4][col-1]=="") ps.push(tn(row-2,col));
    
            if(row-1>=1){
                if(map[row-2][col-1]=="")
                ps.push(tn(row-1,col));
                if(col-1 >= 1 && map[row-2][col-2][0]=='w') ps.push(tn(row-1,col-1));
                if(col+1 <= 8 && map[row-2][col][0]=='w') ps.push(tn(row-1,col+1));
                if(en.color==='w'){
                    if(Math.floor(en.pos/10)=== row && Math.abs(en.pos%10-col)===1) ps.push(tn(row-1,en.pos%10))
                }
            }
            break;
        
        case 'wb':
            i=1;
            rt = true;
            lt = true;
            while(row-i>=1){
                if(col-i>=1 && lt){
                    if(map[row-i-1][col-i-1][0]=='w') lt=false ;
                    else if(map[row-i-1][col-i-1][0]=='b'){
                        ps.push(tn(row-i,col-i));    
                        lt=false;
                    }
                    else if(lt)
                    ps.push(tn(row-i,col-i));
                }
                if(col+i<=8 && rt){
                    if(map[row-i-1][col+i-1][0]=='w') rt=false;
                    else if(map[row-i-1][col+i-1][0]=='b'){
                        ps.push(tn(row-i,col+i));
                        rt=false;   
                    }
                    else if(rt)
                    ps.push(tn(row-i,col+i));
                } 
                i++;
            }
            i=1;
            rt=true;
            lt=true;
            while(row+i<=8){
                if(col-i>=1 && lt){
                    if(map[row+i-1][col-i-1][0]=='w') lt=false;
                    else if(map[row+i-1][col-i-1][0]=='b'){
                        ps.push(tn(row+i,col-i));
                        lt=false;    
                    }
                    else if(lt)
                    ps.push(tn(row+i,col-i));
                }
                if(col+i<=8 && rt){
                    if(map[row+i-1][col+i-1][0]=='w') rt=false;
                    else if(map[row+i-1][col+i-1][0]=='b'){
                        ps.push(tn(row+i,col+i));
                        rt=false;    
                    }
                    else if(rt)
                    ps.push(tn(row+i,col+i));
                } 
                i++;
            }
            break;
            case 'bb':
                i=1;
                lt=true;
                rt=true;
                while(row-i>=1){
                    if(col-i>=1 && lt){
                        if(map[row-i-1][col-i-1][0]=='b') lt=false;
                        else if(map[row-i-1][col-i-1][0]=='w'){
                            ps.push(tn(row-i,col-i));
                            lt=false;    
                        }
                        else if(lt)
                        ps.push(tn(row-i,col-i));
                    }
                    if(col+i<=8 && rt){
                        if(map[row-i-1][col+i-1][0]=='b') rt=false;
                        else if(map[row-i-1][col+i-1][0]=='w'){
                            ps.push(tn(row-i,col+i));
                            rt=false;    
                        }
                        else if(rt)
                        ps.push(tn(row-i,col+i));
                    } 
                    i++;
                }
                i=1;
                lt=true;
                rt=true;
                while(row+i<=8){
                    if(col-i>=1 && lt){
                        if(map[row+i-1][col-i-1][0]=='b') lt=false;
                        else if(map[row+i-1][col-i-1][0]=='w'){
                            ps.push(tn(row+i,col-i));
                            lt=false;    
                        }
                        else if(lt)
                        ps.push(tn(row+i,col-i));
                    }
                    if(col+i<=8 && rt){
                        if(map[row+i-1][col+i-1][0]=='b') rt=false;
                        else if(map[row+i-1][col+i-1][0]=='w'){
                            ps.push(tn(row+i,col+i));
                            rt=false;    
                        }
                        else if(rt)
                        ps.push(tn(row+i,col+i));
                    } 
                    i++;
                }
                break;
    
        case 'wn':
            if(row+2<=8){
                if(col-1>=1 && map[row+1][col-2][0]!='w') ps.push(tn(row+2,col-1));
                if(col+1<=8&& map[row+1][col][0]!='w') ps.push(tn(row+2,col+1));
            }
    
            if(row-2>=1){
                if(col-1>=1&& map[row-3][col-2][0]!='w') ps.push(tn(row-2,col-1));
                if(col+1<=8&& map[row-3][col][0]!='w') ps.push(tn(row-2,col+1));
            }
    
            if(col+2<=8){
                if(row-1>=1 && map[row-2][col+1][0]!='w') ps.push(tn(row-1,col+2));
                if(row+1<=8&& map[row][col+1][0]!='w') ps.push(tn(row+1,col+2));
            }
    
            if(col-2>=1){
                if(row-1>=1&& map[row-2][col-3][0]!='w') ps.push(tn(row-1,col-2));
                if(row+1<=8&& map[row][col-3][0]!='w') ps.push(tn(row+1,col-2));
            }
    
            break;
    
            case 'bn':
            if(row+2<=8){
                if(col-1>=1 && map[row+1][col-2][0]!='b') ps.push(tn(row+2,col-1));
                if(col+1<=8&& map[row+1][col][0]!='b') ps.push(tn(row+2,col+1));
            }
    
            if(row-2>=1){
                if(col-1>=1&& map[row-3][col-2][0]!='b') ps.push(tn(row-2,col-1));
                if(col+1<=8&& map[row-3][col][0]!='b') ps.push(tn(row-2,col+1));
            }
    
            if(col+2<=8){
                if(row-1>=1 && map[row-2][col+1][0]!='b') ps.push(tn(row-1,col+2));
                if(row+1<=8&& map[row][col+1][0]!='b') ps.push(tn(row+1,col+2));
            }
    
            if(col-2>=1){
                if(row-1>=1&& map[row-2][col-3][0]!='b') ps.push(tn(row-1,col-2));
                if(row+1<=8&& map[row][col-3][0]!='b') ps.push(tn(row+1,col-2));
            }
    
            break;
    
    
        case 'wk':
            if(col-1>=1 && map[row-1][col-2][0]!='w') ps.push(tn(row,col-1));
            if(col+1<=8 && map[row-1][col][0]!='w') ps.push(tn(row,col+1));
    
            if(row-1>=1){
                if(map[row-2][col-1][0]!='w')
                    ps.push(tn(row-1,col));
                if(col-1>=1 && map[row-2][col-2][0]!='w') ps.push(tn(row-1,col-1));
                if(col+1<=8 && map[row-2][col][0]!='w') ps.push(tn(row-1,col+1));
            }
            if(row+1<=8){
                if(map[row][col-1][0]!='w')
                    ps.push(tn(row+1,col));
                if(col-1>=1 && map[row][col-2][0]!='w') ps.push(tn(row+1,col-1));
                if(col+1<=8 && map[row][col][0]!='w') ps.push(tn(row+1,col+1));
            }
            if(map[0][4]=='wk'){
                if(map[0][5]==""&&map[0][6]==""&&map[0][7]=='wr') ps.push(tn(1,7));
                if(map[0][3]==""&&map[0][2]==""&&map[0][1]==""&&map[0][0]=='wr') ps.push(tn(1,3))
            }
    
            break;
    
            case 'bk':
            if(col-1>=1 && map[row-1][col-2][0]!='b') ps.push(tn(row,col-1));
            if(col+1<=8 && map[row-1][col][0]!='b') ps.push(tn(row,col+1));
    
            if(row-1>=1){
                if(map[row-2][col-1][0]!='b')
                    ps.push(tn(row-1,col));
                if(col-1>=1 && map[row-2][col-2][0]!='b') ps.push(tn(row-1,col-1));
                if(col+1<=8 && map[row-2][col][0]!='b') ps.push(tn(row-1,col+1));
            }
            if(row+1<=8){
                if(map[row][col-1][0]!='b')
                    ps.push(tn(row+1,col));
                if(col-1>=1 && map[row][col-2][0]!='b') ps.push(tn(row+1,col-1));
                if(col+1<=8 && map[row][col][0]!='b') ps.push(tn(row+1,col+1));
            }
            if(map[7][4]=='bk'){
                if(map[7][5]==""&&map[7][6]==""&&map[7][7]=='br') ps.push(tn(8,7));
                if(map[7][3]==""&&map[7][2]==""&&map[7][1]==""&&map[7][0]=='br') ps.push(tn(8,3))
            }
    
            break;
    
        case 'wq':
            for(i=col;i<=8;i++){
                if(i!=col && map[row-1][i-1][0]=='w')
                    break;
                else if(map[row-1][i-1][0]=='b'){
                    ps.push(tn(row,i));
                    break;
                }
                else if(i!=col)
                ps.push(tn(row,i));
            }
            for(i=col;i>=1;i--){
                if(i!=col && map[row-1][i-1][0]=='w')
                    break;
                else if(map[row-1][i-1][0]=='b'){
                    ps.push(tn(row,i));
                    break;
                }
                else if(i!=col)
                ps.push(tn(row,i));
            }
    
            for(i=row;i<=8;i++){
                if(i!=row && map[i-1][col-1][0]=='w')
                break;
                else if(map[i-1][col-1][0]=='b'){
                    ps.push(tn(i,col));
                    break;
                }
                else if(i!=row)
                ps.push(tn(i,col));
            }
            for(i=row;i>=1;i--){
                if(i!=row && map[i-1][col-1][0]=='w')
                break;
                else if(map[i-1][col-1][0]=='b'){
                    ps.push(tn(i,col));
                    break;
                }
                else if(i!=row)
                ps.push(tn(i,col));
            }
    
            i=1;
            rt = true;
            lt = true;
            while(row-i>=1){
                if(col-i>=1 && lt){
                    if(map[row-i-1][col-i-1][0]=='w') lt=false ;
                    else if(map[row-i-1][col-i-1][0]=='b'){
                        ps.push(tn(row-i,col-i));    
                        lt=false;
                    }
                    else if(lt)
                    ps.push(tn(row-i,col-i));
                }
                if(col+i<=8 && rt){
                    if(map[row-i-1][col+i-1][0]=='w') rt=false;
                    else if(map[row-i-1][col+i-1][0]=='b'){
                        ps.push(tn(row-i,col+i));
                        rt=false;   
                    }
                    else if(rt)
                    ps.push(tn(row-i,col+i));
                } 
                i++;
            }
            i=1;
            rt=true;
            lt=true;
            while(row+i<=8){
                if(col-i>=1 && lt){
                    if(map[row+i-1][col-i-1][0]=='w') lt=false;
                    else if(map[row+i-1][col-i-1][0]=='b'){
                        ps.push(tn(row+i,col-i));
                        lt=false;    
                    }
                    else if(lt)
                    ps.push(tn(row+i,col-i));
                }
                if(col+i<=8 && rt){
                    if(map[row+i-1][col+i-1][0]=='w') rt=false;
                    else if(map[row+i-1][col+i-1][0]=='b'){
                        ps.push(tn(row+i,col+i));
                        rt=false;    
                    }
                    else if(rt)
                    ps.push(tn(row+i,col+i));
                } 
                i++;
            }
            break;       
    
            case 'bq':
                for(i=col;i<=8;i++){
                    if(i!=col && map[row-1][i-1][0]=='b')
                        break;
                    else if(map[row-1][i-1][0]=='w'){
                        ps.push(tn(row,i));
                        break;
                    }
                    else if(i!=col)
                    ps.push(tn(row,i));
                }
    
                for(i=col;i>=1;i--){
                    if(i!=col && map[row-1][i-1][0]=='b')
                        break;
                    else if(map[row-1][i-1][0]=='w'){
                        ps.push(tn(row,i));
                        break;
                    }
                    else if(i!=col)
                    ps.push(tn(row,i));
                }
        
                for(i=row;i<=8;i++){
                    if(i!=row && map[i-1][col-1][0]=='b')
                    break;
                    else if(map[i-1][col-1][0]=='w'){
                        ps.push(tn(i,col));
                        break;
                    }
                    else if(i!=row)
                    ps.push(tn(i,col));
                }
        
                for(i=row;i>=1;i--){
                    if(i!=row && map[i-1][col-1][0]=='b')
                    break;
                    else if(map[i-1][col-1][0]=='w'){
                        ps.push(tn(i,col));
                        break;
                    }
                    else if(i!=row)
                    ps.push(tn(i,col));
                }
    
                i=1;
                lt=true;
                rt=true;
                while(row-i>=1){
                    if(col-i>=1 && lt){
                        if(map[row-i-1][col-i-1][0]=='b') lt=false;
                        else if(map[row-i-1][col-i-1][0]=='w'){
                            ps.push(tn(row-i,col-i));
                            lt=false;    
                        }
                        else if(lt)
                        ps.push(tn(row-i,col-i));
                    }
                    if(col+i<=8 && rt){
                        if(map[row-i-1][col+i-1][0]=='b') rt=false;
                        else if(map[row-i-1][col+i-1][0]=='w'){
                            ps.push(tn(row-i,col+i));
                            rt=false;    
                        }
                        else if(rt)
                        ps.push(tn(row-i,col+i));
                    } 
                    i++;
                }
                i=1;
                lt=true;
                rt=true;
                while(row+i<=8){
                    if(col-i>=1 && lt){
                        if(map[row+i-1][col-i-1][0]=='b') lt=false;
                        else if(map[row+i-1][col-i-1][0]=='w'){
                            ps.push(tn(row+i,col-i));
                            lt=false;    
                        }
                        else if(lt)
                        ps.push(tn(row+i,col-i));
                    }
                    if(col+i<=8 && rt){
                        if(map[row+i-1][col+i-1][0]=='b') rt=false;
                        else if(map[row+i-1][col+i-1][0]=='w'){
                            ps.push(tn(row+i,col+i));
                            rt=false;    
                        }
                        else if(rt)
                        ps.push(tn(row+i,col+i));
                    } 
                    i++;
                }
                break;       
    }
    return ps;
    
    }
    
    function isPossibleMove(piece,row,col,to_position,map, lastMove){
        tmp = allPossibleMoves(piece,row,col,map, lastMove);
        for(i=0;i<tmp.length;i++)
            if(tmp[i]==to_position) return true;
        return false;
        }
    
    function isLegal(piece,from_row,from_col,to_position, map, lastMove, moves){
        // make the move on updatedMap assuming the move is leagal
        var updatedMap = map.map(row => row.slice());
        updatedMap[from_row-1][from_col-1] = "";
        updatedMap[Math.floor(to_position/10)-1][to_position%10-1] = piece;
    
        //will the players king be in check if this move is made. return false if so
        if(isInCheck(piece[0],updatedMap, lastMove)) return false;
    
        //castling rules
        if(piece[1]=='k' && Math.abs(from_col-to_position%10)>1){
            //black or white king tried to castle
            let color = piece[0];
            let row,col;
            if(color==='w') row=1;
            else row=8;
    
            let castleType = '';
            //find short side castle or Long side castle
            if(to_position%10===7) castleType='short';
            else castleType='long';
    
            //check if king or rook ever moved
            if(castleType==='short') col = 8;
            else col = 1;
    
                
                for(let i=0; i<moves.length; i++){
                    
                    const move=moves[i];
                   // console.log(move);
                    const pos = (move.from[0]*10+move.from[1]);
                    const kingPos = row*10+5;
                    const rookPos = row*10+col;
                    if(pos === kingPos || pos === rookPos){console.log("king move"); return false;}
                }
    
            // lastly check if the oposite player eying the king or any square in between king and Rook
            
            var list=[];
            if(castleType==='short')
                 list = [row*10+5,row*10+6,row*10+7];
                
            else list = [row*10+2,row*10+3,row*10+4,row*10+5];
                
    
            console.log("list-", list);
            for(let i=0; i<list.length; i++){
                if(isInCheck(color,map,lastMove,list[i])) return false;
            }
        }
    // end of castle check
    
    ///.... provide more rules
    
        //nothing looks ilegal
        return true;
    }
    
    
    function isInCheck(color,map, lastMove, kingPos=""){
    
    var Kposition=kingPos;
    
    if(Kposition===""){
        for(i=0;i<8;i++){
            for(j=0;j<8;j++){
                if(map[i][j] === color+'k'){
                    Kposition=(tn(i+1,j+1));
                }
            }
        }
    }
    
    
    var opArmy = [];
    
    for(i=0; i<8; i++){
        for(j=0; j<8; j++){
            if(map[i][j]!=="" && map[i][j][0] !== color) opArmy.push({pos: (i+1)*10+j+1, val:map[i][j]}) 
        }
    }
    
    
    for(j=0;j<opArmy.length;j++){
        tmp = allPossibleMoves(opArmy[j].val,Math.floor(opArmy[j].pos/10), opArmy[j].pos%10,map, lastMove);
        for(i=0;i<tmp.length;i++){
            if(tmp[i]==Kposition){  
                return true;
            } 
        } 
    }
    return false;
    }
    
    function isMate(color,map, lastMove){
        const response =[];
        const defenseArmy=[];
        
        map.forEach((row,i) => {
            row.forEach((piece,j)=> {
                if(piece[0]===color) defenseArmy.push({piece:piece, pos:{row:i+1,col:j+1}})
            });
    });
    
    var count=0;
    var ismate=true;
    
    defenseArmy.forEach(item=>{
        const possible_moves = allPossibleMoves(item.piece,item.pos.row, item.pos.col,map, lastMove);
        count+=possible_moves.length;
    
        possible_moves.map(move=>{
            const row = Math.floor(move/10);
            const col = move%10;
    
            var updatedMap = map.map(row=> row.slice());
            updatedMap[row-1][col-1]=item.piece;
    
           return updatedMap;
        }).forEach(map=>{
            if(!isInCheck(color,map,lastMove)){
                //console.log(map);
                ismate=false;
                return false;
            } 
        })
    })
    
    
    if(ismate) return true;
    else return false;
        
    }
    
    function makeMove(props){
        const move = props.move;
        const lastMove = props.lastMove;
    
        const from_row = move.from.row;
        const from_col = move.from.col;
        const row = move.to.row;
        const col = move.to.col;
    
        var updatedMap = props.map.map(row => row.slice());
        updatedMap[from_row-1][from_col-1] = "";
        updatedMap[row-1][col-1] = move.piece;
          
            //check for enpasant movement
            var enpasant=false;
            if(move.piece[1]==='p' && Math.abs(move.from.col-col)===1 && map[row-1][col-1]===""){
              updatedMap[lastMove.to[0]-1][lastMove.to[1]-1]="";
              enpasant=true;
            }
          
            //check for castling
            if(move.piece[1]==='k' && Math.abs(from_col-col)>1){
              if(col===3){
                updatedMap[row-1][0] = "";
                updatedMap[row-1][3] = move.piece[0]+'r';
              }
              else{
                updatedMap[row-1][7] = "";
                updatedMap[row-1][5] = move.piece[0]+'r';
              }
            }
          
            //check for pawn promote
            if(activePiece.piece[1]==='p' && (row===1 || row===8)){
                updatedMap[row-1][col-1] = move.promoted;
              return;
            }
        
    
            return({
                map:updatedMap, 
                move:{
                    piece:move.piece,
                    from:[from_row, from_col],
                    to:[row,col],
                    promoted:move.promoted
                 }})
    
    }
    
    
    function tn(x,y){
        return 10*x+y*1;
        }
    
    
        function fenToMap(fen){
            var map=[["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""]];
            var str = fen.split(' ')[0].split('/');
            for(let i=0;i<8;i++){
                var tmp = str[i];
                let k=0;
                for(let z=0;z<tmp.length;z++){
                    if(!(tmp[z].toLowerCase() != tmp[z].toUpperCase())){
                        for(let j=0;j<tmp[z];j++){
                            map[i][k]="";
                            k++;
                        }
                    }
                    else{
                        if(tmp[z] === tmp[z].toUpperCase()) map[i][k]='w'+tmp[z].toLowerCase();
                        else map[i][k] = 'b'+tmp[z].toLowerCase();
                        k++;
                    }
                }
            }
            return map;
        }
    
    export {allPossibleMoves, tn, isPossibleMove,isLegal, isInCheck, isMate, fenToMap};