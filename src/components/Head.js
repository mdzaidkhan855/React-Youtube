import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../utils/appSlice";
import {cacheResults} from "../utils/searchSlice";
import {YOUTUBE_SEARCH_API} from "../utils/constants";

const Head = () => {

    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector(store=> store.search)

    useEffect(()=>{

       // Apply logic for debouncing as well as caching 
       const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery])
            }else{
                getSearchSuggestions();
            }
            
        }, 200);
       
       return ()=>{
        clearTimeout(timer);
       }
    },[searchQuery])

    const getSearchSuggestions = async()=>{
        console.log("API CALL: " + searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);

        const json =await data.json();

        dispatch(
            cacheResults({
                [searchQuery]:json[1]
            })
        );
        setSuggestions(json[1]);
        
    }

    
    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu())
    }

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className="flex col-span-1">
            <img 
            onClick={()=>toggleMenuHandler()}
            className="h-8 cursor-pointer"
            alt="menu"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEX///8AAADIyMjZ2dkjIyMeHh4/Pz/Pz8/c3Ny9vb0uLi7n5+f5+fkqKiqpqanu7u5sbGyCgoIYGBi1tbU0NDQMDAyioqJ8fHycnJxGRkZmZmZOTk46OjqKiopeXl6VlZVYZr55AAACkElEQVR4nO3c2ZaiMBCAYQaw44Is4gINyvu/Zes4znEuyHLmolL4f09QdQKhklRIEgAAAAAAAAAAAERgl6URy3b+mRSbru7zVbTyvu42hV8uptn+it6+MT65lL10oH760p1Ld5CO0tehc47LSTpGfyfH2KRf0hGG+EptuRRX6fjCXG1zWrqSDi/MyjI0xVk6ulDn+aHZfUsHF+p7vhbI9tLBhdpns8kY6djCzdcBJCNrPplFvTOLms2KTjq4UJ2lBEjVlMxPB1txVjXS4YVpKksyidFVNTtWm62iCS13rTWLs5rV2clSZb6y2UgH6ctrg6ZS8bW5Wd/993QukU/Rh0vANuD9aVtHzHMDEAAAAAAAAMC8IttELAvZBUzrYTxuo3Uch9raz/RmNypoB1qNXrvNapqBzu5cFHWcXZ3jEvlhxruDY2yWdEC7qKNz2hol0dYYK9oao/UhyWQKLs78a2tpa6ylgwtVW9oa9X1nZnO5VwDK5ua9rThb1JWTxCi5cPbUO9oaS03rGecVukk6RH+TK5ckaY/SQfo5tu5c7l+b2ygdqNt48+0FNNd66L+i1Q/11ev+7B/F2kjfxp5n6GsEAAAAAAAA/l9lIuZ74fyhMNGfbdbGb1OzWA/SofoYfPZoq1I6TF+l82mrJj3/0Jhc2ZSKOs5Wrr81Kjk2ezpau5uri3R8YS7Wtkbp6ELZ2hqX9Bet3U06uFCWY9oslw4uVE5bY6w+JJlM1Sfz4VPaGhM1FfOLrTpLlc3Nua04KxR1mz1M1gVapmKV+TLMv/6/tZrWM872uVLNa+P88+RjbJQ8aYNXW2M2aWhrnBzvy1+mbYZ9Hq390LQhbY3VOovYOmRLEwAAAAAAAAAAIC4/L/Rkj2ChKHIAAAAASUVORK5CYII=" 
            />
            <a href="/">
                <img 
                className="h-8 mx-8 cursor-pointer"
                alt="youtube"    
                src="data:image/jpeg;base64,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"  
                />
            </a>
            
        </div>
        <div className="col-span-10 px-10">
            <div>
                <input 
                    type="text"
                    name="search"
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                    onFocus={()=>setShowSuggestions(true)}
                    onBlur={()=>setShowSuggestions(false)}
                    className="w-1/2 border border-gray-400 p-2 rounded-l-full" 
                />
                <button 
                className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
                🔍  
                </button>
            </div>
            {showSuggestions && <div className="absolute bg-white mx-2 py-2 px-5 w-1/3">
                <ul>
                    {suggestions.map(s=><li key={s} className="py-2 shadow-sm hover:bg-gray-100">🔍 {s}</li>)}
                                        
                </ul>

            </div>}
            
        </div>
        <div className="flex col-span-1">
            <img 
            className="h-8"
            alt="" 
            src="data:image/jpeg;base64,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" />
        </div>
    </div>
    
  )
}
export default Head