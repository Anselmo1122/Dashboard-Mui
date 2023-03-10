import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import BasicTable from './Table';

const CustomizedCard = styled(Card)`
  border-radius: 17px; 
`

const bull = (
  <Box
    component="span"
    sx={{ 
      display: 'inline-block', 
      mx: '2px', 
      transform: 'scale(0.8)',
    }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <BasicTable />
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function TableContent() {
  return (
    <Box sx={{ 
      borderRadius: "17px",
      ml: "1rem"
    }}>
      <CustomizedCard variant="outlined">{card}</CustomizedCard>
    </Box>
  );
}
