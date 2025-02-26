import { Color, PieceSymbol, Square,Chess } from "chess.js"
import { useState } from "react";
import { MOVE } from "../screens/Game";


export const Chessboard=({chess,board,socket,setBoard}:{
    chess:Chess;
    board:({
        square:Square;
        type:PieceSymbol;
        color:Color;
    }|null)[][];
    socket:WebSocket;
    setBoard:any;
   
})=>{
    const [from,setFrom] = useState<null|Square>(null);
    const [to,setTo] =useState<null|Square>(null);
    return(
        <div className="text-black ">
            {board.map((row,i)=>{
                return <div key={i} className="flex">
                    {row.map((square,j)=>{
                        const squareRepresentation = String.fromCharCode(97+(j%8))+(8-i) as Square
                        return <div onClick={()=>{
                            if(!from){
                                setFrom(squareRepresentation);
                            }else{
                                setTo(squareRepresentation);

                                socket.send(JSON.stringify({
                                    type:MOVE,
                                    payload:{
                                       move:{
                                            from:from,
                                            to:squareRepresentation
                                       }

                                    }
                                }))
                                setFrom(null);
                                chess.move({
                                    from:from,
                                    to:squareRepresentation

                                });
                                setBoard(chess.board());
                            }
                        }} key={j} className={`w-16 h-16 ${(i+j)%2==0?'bg-green-500': "bg-slate-200"}`}>
                            <div className="w-full h-full flex justify-center items-center">
                                {square?<img className="w-10" src={`/${square?.color === "b" ? "b" + square?.type : "w" + square?.type}.png`}></img>:null}
                            </div>
                            
                        </div>
                    })}
                </div>
            })}
        </div>
    )
}