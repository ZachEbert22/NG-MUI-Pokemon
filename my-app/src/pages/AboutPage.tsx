import { NavBar } from "../NavBar";
import './AboutPage.css'
import { imgObject } from "../common/Images";

export function AboutPage() {
  return (<div>
    <div><NavBar></NavBar></div>
    <h1>About Page</h1>
    <div className="row1-container">
      <div className = "col1-container" >
        <img src = {imgObject.picture1}></img>
        <img src = {imgObject.picture2}></img>
        <img src = {imgObject.picture3}></img>
        <h2>Sword and Shield: Base Set</h2>
        <p>How Long it can be in length ahhh ahhh ahhh</p>
        <p>Description for the Base Set</p>
        <p>Description 2</p>
      </div>
      <div className = "col2-container" style= {{padding: "0px 100px"}} >
        <img src = "https://assets.pokemon.com/assets/cms2/img/trading-card-game/series/swsh_series/swsh02/swsh02_logo_169_en.png"></img>
        <h2>Sword and Shield: Rebel Clash</h2>
        <p> Description 3</p>
        <p>Description 4</p>
      </div>

      <div className = "col3-container"><img src = "src/assets/SilverTempest.png" alt="Loading..."></img>
      <img src = "https://assets.pokemon.com/assets/cms2/img/trading-card-game/series/swsh_series/swsh02/swsh02_logo_169_en.png"></img>
        <h2>Sword and Shield: Darkness Ablaze</h2>
        <p></p>
        <p></p>
      </div>
    </div>
    <div className="row1-container">
      <div className = "col1-container">
        <h2>Sword and Shield: Champions Path</h2>
        <p></p>
        <p></p>
      </div>
      <div  className = "col2-container" >
        <h2>Sword and Shield: Vivid Voltage</h2>
        <p></p>
        <p></p>
      </div>
      <div className = "col3-container" style= {{padding: "0px 80px"}}>
        <h2>Sword and Shield: Shining Fates</h2>
        <p></p>
        <p></p>
      </div>
    </div>
    <div className="row1-container">
      <div className = "col1-container">
        <h2>Sword and Shield: Battle Styles</h2>
        <p></p>
        <p></p>
      </div>
      <div className = "col2-container" style= {{padding: "0px 50px"}} >
        <h2>Sword and Shield: Chilling Reign</h2>
        <p></p>
        <p></p>
      </div>
      <div className = "col3-container" style= {{padding: "0px 10px"}}>
        <h2>Sword and Shield: Evolving Skies</h2>
        <p></p>
        <p></p>
      </div>
    </div>
    <div className="row1-container">
      <div className = "col1-container">
        <h2>Sword and Shield: Fusion Strike</h2>
        <p></p>
        <p></p>
      </div>
      <div className = "col2-container" style= {{padding: "0px 40px"}} >
        <h2>Sword and Shield: Brilliant Stars</h2>
        <p></p>
        <p></p>
      </div>
      <div className = "col3-container" style= {{padding: "0px 20px"}}>
        <h2>Sword and Shield: Astral Radiance</h2>
        <p></p>
        <p></p>
      </div>
    </div>
    <div className="row1-container">
      <div className = "col1-container">
        <h2>Sword and Shield: Lost Orgin</h2>
        <p></p>
        <p></p>
      </div>
      <div className = "col2-container" style= {{padding: "0px 75px"}} >
        <h2>Sword and Shield: Silver Tempest</h2>
        <p></p>
        <p></p>
      </div>
      <div className = "col3-container" >
        <h2>Sword and Shield: Crown Zenith</h2>
        <p></p>
        <p></p>
      </div>
    </div>
    <h1>Special Collection Boxes</h1>
    <div className="row2-container">
      <div className = "sec1-container">
        <h2>Celebrations</h2>
        <p></p>
        <p></p>
      </div>
      <div className = "sec2-container">
        <h2>Pokemon Go</h2>
        <p></p>
        <p></p>
      </div>
    </div>
  </div>);
}
