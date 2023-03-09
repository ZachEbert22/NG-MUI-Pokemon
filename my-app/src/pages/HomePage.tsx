import React from 'react';
import { NavBar } from '../NavBar';
import './AboutPage.css';
import { HomeRadio } from '../common/HomeRadio';
import { HomeUnitProps } from '../models/homeUnitProps';
import { HomePageUnit } from '../data/homeUnit';

export function HomePage() {
  function handleChange(pokemonDesc: string) {
    console.log(pokemonDesc);
  }
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'rgb(210, 97, 255)' }}>
        <h1 style={{ padding: '0px 900px' }}>What is your favorite Pokemon?</h1>
        {HomePageUnit.map((data: HomeUnitProps) => {
          return (
            <div style={{ padding: '2% 03.75%' }}>
              <img src={`${data.image}`} style={{ width: '600px', height: '300px' }} />
              <HomeRadio pokemonData={data} onChange={handleChange} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
