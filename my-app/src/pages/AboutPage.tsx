import React from 'react';
import { NavBar } from '../NavBar';
import './AboutPage.css';
import { imgObject } from '../common/Images';
import { aboutPageData } from '../data/aboutData';
import { AboutDataProps } from '../models/aboutDataProps';

export function AboutPage() {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'rgb(180, 58, 58)' }}>
        <h1 style={{ padding: '0px 900px' }}>About Page - Each Set</h1>
        {aboutPageData.map((data: AboutDataProps) => {
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
