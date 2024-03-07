
import React ,{useRef} from "react";

const Demo2 = () => {

    let x = 10;
    const ref = useRef(0);

  return (
    <div className="m-2 p-2 border border-black w-96 h-70">
        <div>
            <button onClick={()=>{x = x =1 }}>Increase Let x:  </button>
            <h1 className="font-bold text-xl">{x}</h1>
        </div>
        <div>
            <button onClick={()=>{ref.current = ref.current + 1 }}>Increase Let ref: </button>
            <h1 className="font-bold text-xl">{ref.current}</h1>
        </div>
    </div>
  )
}
export default Demo2