import { wrap } from "module"
import { NavBar } from "../NavBar"
import { TypingUnitProps } from "../models/typingUnitProps";
import { typingPageUnit } from "../data/typingUnit";
import './Typing.css' 

  export function TypingPage() {
    return(<div style = {{backgroundColor: "#4c8a55"}}>
      <div><NavBar></NavBar></div>
      <h1 style={{padding: "2% 38%", fontSize: "xxx-LARGE"}}>Pokemon Typing</h1>
      <div style = {{display: "flex", flexWrap: "wrap"}}>
      <h1 style = {{padding: "0% 10%"}}>Type</h1>
        <h1 style = {{padding: "0% 20%"}}>Strength</h1>
        <h1 style = {{padding: "0% 10%"}}>Weakness </h1>
        </div>
      {typingPageUnit.map((unit:TypingUnitProps)=>{
        return(
        <div style = {{padding: "50px 100px", display: "flex",flexWrap: "wrap"}}>
          <div style = {{padding: "0px 70px"}}>
          <img src = {`${unit.image}`} style = {{width: "200px", height: "200px"}}/>
          <h2 style = {{padding: "0px 40px", flex: "2"}}>{unit.title}</h2>
          </div>
          <div className="strength">
          <h2>{unit.str1}</h2>
          <h2>{unit.str2}</h2>
          <h2>{unit.str3}</h2>
          <h2>{unit.str4}</h2>
          <h2>{unit.str5}</h2>
          </div>
          <div className="weakness">
          <h2>{unit.weak1}</h2> 
          <h2>{unit.weak2}</h2>
          <h2>{unit.weak3}</h2> 
          <h2>{unit.weak4}</h2> 
          <h2>{unit.weak5}</h2>    
          </div>   
        </div>)
      })}
      
    </div>);
  
  }