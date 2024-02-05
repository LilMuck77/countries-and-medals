import React, { Component } from 'react';
import { Typography, Badge } from '@mui/material';

class Medals extends Component {
  render() {
    const { countries } = this.props;

  
    const totalMedalsPerCountry = countries.reduce(
      (acc, country) => ({
        gold: acc.gold + country.gold,
        silver: acc.silver + country.silver,
        bronze: acc.bronze + country.bronze,
      }),
      { gold: 0, silver: 0, bronze: 0 }
    );

    const getAllMedals = () =>
      totalMedalsPerCountry.gold +
      totalMedalsPerCountry.silver +
      totalMedalsPerCountry.bronze;

    return (
      <div className='header'>
        <Typography variant="h4" gutterBottom>
          Olympic Medals
        </Typography>
        <Typography variant="h6" gutterBottom>
          <Badge
            sx={{ marginLeft: 2, fontSize: 100 }}
            badgeContent={getAllMedals()}
            color="success"
          ></Badge>
        </Typography>
      </div>
    );
  }
}

export default Medals;
