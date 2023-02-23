import { NavBar } from "../NavBar";
import './AboutPage.css'
import { imgObject } from "../common/Images";
import {aboutPageData} from "../data/aboutData";
import { HomeUnitProps } from "../models/homeUnitProps";
import { HomePageUnit } from "../data/homeUnit";

export function HomePage() {
  return(<div>
    <div><NavBar></NavBar></div>
    
    <div style = {{display: "flex", flexWrap: "wrap", backgroundColor: "rgb(226, 176, 74)"}}>
    <h1 style={{padding: "0px 900px"}}>What is your favorite Pokemon?</h1>
    {HomePageUnit.map((data:HomeUnitProps)=>{
      return(
      <div style = {{padding: "50px 100px"}}>
        <img src = {`${data.image}`} style = {{width: "500px", height: "300px"}}/>
        <h2>{data.title}</h2>
        <h3>{data.desc1}</h3>
        <h3>{data.desc2}</h3>
        <h3>{data.desc3}</h3>    
      </div>)
    })}
    </div>
  </div>);

}
