import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const DataCard = ( {data, getData, onEdit, onDelete}) => {
  
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Whiskey Drink Collection
          </Typography>
          <Typography variant="h5" component="div">
            {data && data.name }
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data && data.category}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data && data.distilery }
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data && data.bottler }
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data && data.bottling_series }
          </Typography>
          <Typography variant="body2">
          {data && data.size }
          </Typography>
          <Typography variant="body2">
          {data && data.strength }
          </Typography>
          <Typography variant="body2">
          {data && data.year_bottled }
          </Typography>
          <Typography variant="body2">
          {data && data.notes }
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={getData}>
            Refresh Data
          </Button>
          <Button size="small" onClick={() => onEdit(data)}>
            Edit Drink
          </Button>
          <Button size="small" onClick={() => onDelete(data)}>
            Delete Drink
          </Button>
        </CardActions>
      </Card>
    );
  };
  
  export default DataCard;