import React from 'react'
import {useSelector} from 'react-redux'
import {Descriptions} from 'antd';
import './weather.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

 import sunny from '../../images/sunny.jpg'
 import rainy from '../../images/rainy.jpg'
 import cloudy from '../../images/cloudy.jpg'
 import temp from '../../images/temp.jpg'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import { useEffect } from 'react';
import axios from 'axios'
import Alert from '@mui/material/Alert';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import WindPowerIcon from '@mui/icons-material/WindPower';

function Weather() {

  const location=useSelector((state)=>state.location.value)
  const weather=useSelector((state)=>state.weather)
  
  console.log(weather)

  useEffect(() => {   
    console.log(weather)   
    console.log("in weather") 
  },[weather])
 
  
  return (
<div className='weather_container'>

<Card className="weather_card" sx={{ width: 445 }}>
  {location=="city" ? <Alert severity="info">No such city found</Alert> : null}


      <CardMedia
        sx={{ height: 240 }}
        image={weather.clouds>50 ? cloudy : sunny}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {location}
        </Typography>
        <Typography variant="body2" color="text.secondary">

        <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
             <DeviceThermostatIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Temperture" secondary={weather.temp+"°C"} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <InvertColorsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Humidity" secondary={weather.humidity+"%"} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <WindPowerIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Wind" secondary={weather.wind+"10km/h"} />
      </ListItem>
    </List>
          
        </Typography>
      </CardContent>
    
    </Card>
    

    </div>
  )
}

export default Weather