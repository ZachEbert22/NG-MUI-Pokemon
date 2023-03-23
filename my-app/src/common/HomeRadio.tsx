import React from 'react';
import { HomeUnitProps } from '../models/homeUnitProps';
import { HomePageUnit } from '../data/homeUnit';
import { RadioGroup, Radio, FormLabel, FormControl, FormControlLabel } from '@mui/material';

interface HomeRadioProps {
  pokemonData: HomeUnitProps;
  onChange: (pokemonDesc: string) => void;
}

export const HomeRadio = ({ pokemonData, onChange }: HomeRadioProps): JSX.Element => {
  const [value, setValue] = React.useState(pokemonData.desc1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //console.log((event.target as HTMLInputElement).value);
    setValue((event.target as HTMLInputElement).value);
    onChange((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl style={{ padding: '50px 01%' }}>
      <FormLabel id="demo-radio-buttons-group-label">{pokemonData.title}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={value}
        onChange={handleChange}
        name="radio-buttons-group"
      >
        <FormControlLabel value={pokemonData.desc1} control={<Radio />} label={pokemonData.desc1} />
        <FormControlLabel value={pokemonData.desc2} control={<Radio />} label={pokemonData.desc2} />
        <FormControlLabel value={pokemonData.desc3} control={<Radio />} label={pokemonData.desc3} />
        <FormControlLabel value={pokemonData.desc4} control={<Radio />} label={pokemonData.desc4} />
        <FormControlLabel value={pokemonData.desc5} control={<Radio />} label={pokemonData.desc5} />
        <FormControlLabel value={pokemonData.desc6} control={<Radio />} label={pokemonData.desc6} />
        <input
          style={{ backgroundColor: 'rgb(210, 150, 255)', padding: "10px 30px" }}
          name="test"
          placeholder="or Enter it Here for a different starter!"
          onChange={handleChange}
        />
        <h1>
          Your Favorite Starter: <span>{value}</span>
        </h1>
      </RadioGroup>
    </FormControl>
  );
};
