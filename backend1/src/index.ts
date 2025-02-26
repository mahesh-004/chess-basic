
import WebSocket from "ws";
import { GameManager } from "./GameManager";

const wss = new WebSocket.Server({ port: 8080 });

const gameManager:GameManager = new GameManager();


wss.on('connection', function connection(ws) {
    gameManager.addUser(ws);
    
    ws.on('disconnect',()=>{
        gameManager.removeUser(ws)
    })

  
});