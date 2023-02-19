import { Button, ButtonGroup } from "@mui/material"
import { NavBar } from "../NavBar"
import { Box } from "@mui/system"
import { FabProps } from "@mui/material";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import { ComboInfoProps } from "../models/comboInfoProps";
import { ComboPageInfo } from "../data/ComboInfo";

export function ComboPage() {
  return(<Box style = {{backgroundColor: "rgb(131, 57, 173)"}}>
    <Box><NavBar></NavBar></Box>
    <h1 style={{padding: "1% 40%"}}>Combonations Page</h1>
    <Box style = {{display: "flex", flexWrap: "wrap" }}>
    
    {ComboPageInfo.map((data:ComboInfoProps)=>{
      return(<Box style = {{display: "flex", flexWrap: "wrap" }}>
        <Box style = {{padding: "50px 100px"}}>
        <h2>{data.ranking} {data.title}</h2>
        <h3>{data.combo1}</h3>
        <h3>{data.combo2}</h3>
        <h3>{data.combo3}</h3>
        </Box>
      <Box style = {{padding: "1% 100px"}}>
        <img src = {`${data.image}`} style = {{width: "300px", height: "300px", padding: "0% 50%"}}/>
        <h3 style = {{padding: "0px 85%"}}>{data.pokemon1}</h3>    
      </Box>
      </Box>)

    })}
    </Box>
  </Box>);

}