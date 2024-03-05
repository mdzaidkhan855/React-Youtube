
import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRanndomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector(store=> store.chat.messages);
    const [liveMessage, setLiveMessage] = useState();

  useEffect(()=>{
    const i = setInterval(()=>{
        dispatch(addMessage({
            name:generateRanndomName(),
            message:makeRandomMessage(20)
        }));
    },1000);

    return ()=>{
        clearInterval(i);
    }
  },[])  

  return (
    <div>
        <div className="w-full h-[500px] m-2 p-2 border border-black rounded-lg overflow-y-scroll flex-col-reverse">
            <div>
                    {chatMessages.map((c) =>
                        
                        <ChatMessage name={c.name} message={c.message}/>
                    )
                }
            </div>       
        </div>
        <form 
            className="flex border border-black w-full m-2 p-2"
             
            onSubmit={
                (e) => {
                    console.log("Submitted");
                    e.preventDefault();
                    dispatch(addMessage({
                        name:"Mursheed",
                        message:liveMessage
                    }));
                    setLiveMessage("");
                }
            }
        >
            <input  
                className="border border-black w-96 " 
                type="text" 
                value={liveMessage}
                onChange={(e)=>setLiveMessage(e.target.value)}
            />
            <button className="px-2 mx-2 bg-green-200 text-center">Send</button>
        </form>
    </div>
    
  )
}
export default LiveChat