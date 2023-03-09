import { Button, ButtonGroup } from '@mui/material';
import { NavBar } from '../NavBar';
import { Box } from '@mui/system';
import { FabProps } from '@mui/material';
import * as React from 'react';

import { ComboInfoProps } from '../models/comboInfoProps';
import { ComboPageInfo } from '../data/ComboInfo';

export function ComboPage() {
  return (
    <Box style={{ backgroundColor: 'rgb(100, 97, 255)' }}>
      <Box>
        <NavBar></NavBar>
      </Box>
      <h1 style={{ padding: '1% 40%' }}>Combonations Page</h1>
      <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
        {ComboPageInfo.map((data: ComboInfoProps) => {
          return (
            <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Box style={{ padding: '5% 150px' }}>
                <h2>
                  {data.ranking} {data.title}
                </h2>
                <h3>{data.combo1}</h3>
                <h3>{data.combo2}</h3>
                <h3>{data.combo3}</h3>
              </Box>
              <Box style={{ padding: '1% 150px' }}>
                <img src={`${data.image}`} style={{ width: '300px', height: '300px', padding: '0% 50%' }} />
                <h3 style={{ padding: '0px 85%' }}>{data.pokemon1}</h3>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
