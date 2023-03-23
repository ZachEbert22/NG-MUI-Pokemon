import React from 'react';
import { NavBar } from '../NavBar';
import './AboutPage.css';
import { TeamInfoProps } from '../models/teamInfoProps';
import { teamInfoData } from '../data/teamInfo';

export function TeamPage() {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'rgb(240, 158, 58)' }}>
        <h1 style={{ padding: '0px 45%' }}>Team Builder</h1>
        {teamInfoData.map((data: TeamInfoProps) => {
          return (
            <div style={{ padding: '1% 6%' }}>
              <img src={`${data.image}`} style={{ width: '500px', height: '300px' }} />
              <h2>{data.title}</h2>
              <h3>{data.desc1}</h3>
              <h3>{data.desc2}</h3>
              <h3>{data.desc3}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
