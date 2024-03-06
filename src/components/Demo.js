import { useMemo, useState } from "react"
import { findNthPrime } from "../utils/helper";

const Demo = () => {
    const[text, setText] = useState("");
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // Un-memoized, so every time theme changes, the pages re-renders.
    //  and this method IS AS MANY TIMeS called even for the same value of text
    //const nthPrimeNumber = findNthPrime(text);

    // memoized, so every time theme changes, the pages re-renders.
    //  However,this method NOT called for the same value of text
    const nthPrimeNumber = useMemo(()=> {
        console.log("Calculating Primenumber for : " + text);
        findNthPrime(text)
    },[text]);
    
  return (
    <div className={"m-4 p-2 w-96 h-96 border border-black " + 
                        (isDarkTheme && "bg-gray-900 text-white")
                    }>
        <div>
            <button onClick={()=>setIsDarkTheme(!isDarkTheme)}>toggle</button>
        </div>
        <div>
            <input 
                className="border border-red-600 w-72 px-2 text-black"
                type="text" 
                value={text} 
                onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className="border border-black text-red">
            <h1>nth Primeniber : {nthPrimeNumber}</h1>
        </div>
    </div>
  )
}
export default Demo