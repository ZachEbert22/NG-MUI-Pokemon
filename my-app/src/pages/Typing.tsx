import { wrap } from "module"
import { NavBar } from "../NavBar"

export function TypingPage() {
    return (<div>
      <div><NavBar></NavBar></div>
      <h1>Pokemon Typing</h1>
      <div style = {{display: "flex", flexWrap: "wrap"}}>
        <h2 style = {{padding: "0% 10%"}}>Type</h2>
        <h2 style = {{padding: "0% 20%"}}>Strength</h2>
        <h2 style = {{padding: "0% 10%"}}>Weakness </h2>
      </div>
      </div>);
  }
  