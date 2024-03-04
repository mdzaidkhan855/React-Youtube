
import React from "react"
import Button from "./Button"

const list = ["All","Gaming","Songs","Soccer","Cricket","News","Cooking", 
                        "Valentines","Soccer","Cricket","News","Cooking", "Valentines"];
const ButtonList = () => {
  return (
    <div className="flex overflow-x-scroll">
      {
        list.map((name,index) =>{
          return ( <Button name={name} key={index}></Button>)
        })
      }
      
      
    </div>
  )
}
export default ButtonList