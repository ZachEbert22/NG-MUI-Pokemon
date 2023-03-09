import { NavBar } from "../NavBar";
import './AboutPage.css'
import { imgObject } from "../common/Images";
import {aboutPageData} from "../data/aboutData";
import { HomeUnitProps } from "../models/homeUnitProps";
import { HomePageUnit } from "../data/homeUnit";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export function HomePage() {
  return(<div>
    <div><NavBar></NavBar></div>
    
    <div style = {{display: "flex", flexWrap: "wrap", backgroundColor: "rgb(210, 97, 255)"}}>
    <h1 style={{padding: "0px 900px"}}>What is your favorite Pokemon?</h1>
    {HomePageUnit.map((data:HomeUnitProps)=>{
      return(
      <div style = {{padding: "2% 03.75%"}}>
        <img src = {`${data.image}`} style = {{width: "600px", height: "300px"}}/>

        <FormControl style = {{padding: "50px 1%"}}>
          <FormLabel id="demo-radio-buttons-group-label">{data.title}</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="option1"
            name="radio-buttons-group"
          >
            <FormControlLabel value="option1" control={<Radio />} label={data.desc1} />
            <FormControlLabel value="option2" control={<Radio />} label={data.desc2} />
            <FormControlLabel value="option3" control={<Radio />} label={data.desc3} />
            <FormControlLabel value="option4" control={<Radio />} label={data.desc4} />
            <FormControlLabel value="option5" control={<Radio />} label={data.desc5} />
            <FormControlLabel value="option6" control={<Radio />} label={data.desc6} />
          </RadioGroup>
      </FormControl>   
      </div>)
    })}
    </div>
  </div>);

}
