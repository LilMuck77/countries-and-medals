
import React from 'react';
import {
  Card, CardContent, Typography, Button, Grid, Badge, IconButton} from '@mui/material';
import IncrementIcon from '@mui/icons-material/AddCircleOutline';
import DecrementIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';


const Country = ({ country, onIncrement, onDecrement, onDelete }) => {
  const { id, name, gold, silver, bronze } = country;

  const handleMedalIncrement = (medalType) => {
    onIncrement(id, medalType);
  };

  const handleMedalDecrement = (medalType) => {
    onDecrement(id, medalType);
  };
  
  const handleDelete = () => {
    onDelete(id);
  };

  const getTotalMedals = () => gold + silver + bronze;

  return (
    
    <Card key={id} sx={{ maxWidth: 300, margin: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name} 
          <Badge sx={{ marginLeft: 2 }} badgeContent={getTotalMedals()} color="primary"></Badge>
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="subtitle2">Gold: 
            <Badge sx={{ marginLeft: 2 }} badgeContent={gold} color="warning"></Badge>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button onClick={() => handleMedalIncrement('gold')}>
              <IncrementIcon />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={() => handleMedalDecrement('gold')}
              disabled={gold === 0}
            >
              <DecrementIcon />
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="subtitle2">Silver: 
            <Badge sx={{ marginLeft: 2 }} badgeContent={silver} color="secondary"></Badge>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button onClick={() => handleMedalIncrement('silver')}>
              <IncrementIcon />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={() => handleMedalDecrement('silver')}
              disabled={silver === 0}
            >
              <DecrementIcon />
            </Button>
          </Grid>


          <Grid item xs={4}>
            <Typography variant="subtitle2">Bronze: 
            <Badge sx={{ marginLeft: 2 }} badgeContent={bronze} color="error"></Badge>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button onClick={() => handleMedalIncrement('bronze')}>
              <IncrementIcon />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={() => handleMedalDecrement('bronze')}
              disabled={bronze === 0}
            >
              <DecrementIcon />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <IconButton onClick={handleDelete} color="secondary">
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>

  );
};

export default Country;

