import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"


export const Landing =  ()=>{
    const navigate =  useNavigate()
    return(
        <div className="max-w-screen-md m-auto">
        <div className="pt-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                <div className="flex justify-center">
                    <img className="max-w-96" src={"./../../public/pexels-karolina-grabowska-5477776.jpg"} alt="chess-board image"></img>
                </div>
                <div className=" flex justify-center items-center">
                    <div>
                    <h1 className="text-4xl font-bold text-white">
                        Play chess online!
                    </h1>
                   
                    <div className="mt-4">
                        <Button onClick={()=>{
                            navigate("/game")
                        }}>Play game</Button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}