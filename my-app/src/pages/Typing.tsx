import { wrap } from "module"
import { NavBar } from "../NavBar"
import { TypingUnitProps } from "../models/typingUnitProps";
import { typingPageUnit } from "../data/typingUnit";
import './Typing.css' 

  export function TypingPage() {
    return(<div style = {{backgroundColor: "rgb(180, 58, 58)"}}>
      <div><NavBar></NavBar></div>
      <h1>Pokemon Typing</h1>
      <div style = {{display: "flex", flexWrap: "wrap"}}>
      <h2 style = {{padding: "0% 10%"}}>Type</h2>
        <h2 style = {{padding: "0% 20%"}}>Strength</h2>
        <h2 style = {{padding: "0% 10%"}}>Weakness </h2>
        </div>
      {typingPageUnit.map((unit:TypingUnitProps)=>{
        return(
        <div style = {{padding: "50px 100px", display: "flex",flexWrap: "wrap"}}>
          <div style = {{padding: "0px 70px"}}>
          <img src = {`${unit.image}`} style = {{width: "200px", height: "200px"}}/>
          <h2 style = {{padding: "0px 40px", flex: "2"}}>{unit.title}</h2>
          </div>
          <div className="strength">
          <h3>{unit.str1}</h3>
          <h3>{unit.str2}</h3>
          <h3>{unit.str3}</h3>
          <h3>{unit.str4}</h3>
          <h3>{unit.str5}</h3>
          </div>
          <div className="weakness">
          <h3>{unit.weak1}</h3> 
          <h3>{unit.weak2}</h3>
          <h3>{unit.weak3}</h3> 
          <h3>{unit.weak4}</h3> 
          <h3>{unit.weak5}</h3> 
          </div>   
        </div>)
      })}
      
    </div>);
  
  }