import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useGetData } from '../custom-hook/DrinkData';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const DataCard = ({ id }) => {

    const { drinkData, getData } = useGetData(id);
  
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Whiskey Drink Collection
          </Typography>
          <Typography variant="h5" component="div">
            {drinkData ? drinkData.name : 'Loading...'}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {drinkData ? drinkData.category : 'Loading...'}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {drinkData ? drinkData.distillery : 'Loading...'}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {drinkData ? drinkData.bottler : 'Loading...'}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {drinkData ? drinkData.bottling_series : 'Loading...'}
          </Typography>
          <Typography variant="body2">
            {drinkData ? drinkData.size : 'Loading...'}
          </Typography>
          <Typography variant="body2">
            {drinkData ? drinkData.strength : 'Loading...'}
          </Typography>
          <Typography variant="body2">
            {drinkData ? drinkData.year_bottled : 'Loading...'}
          </Typography>
          <Typography variant="body2">
            {drinkData ? drinkData.notes : 'Loading...'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={getData}>
            Refresh Data
          </Button>
        </CardActions>
      </Card>
    );
  };
  
  export default DataCard;