// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Button, Typography, Box, CardContent, Checkbox, FormControlLabel, TextField, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';

function ShuttleService() {
  const [locationOn, setLocationOn] = useState(false);
  const [selectedReasons, setSelectedReasons] = useState([]);

  const toggleLocation = () => {
    setLocationOn(!locationOn);
  };

  const handleCheckboxChange = (reason) => {
    setSelectedReasons((prev) =>
      prev.includes(reason) ? prev.filter((r) => r !== reason) : [...prev, reason]
    );
  };

  return (
    <Box display="flex" justifyContent="center"
      sx={{
      mt:'-2%',
      marginLeft: { xs: "-1.6%", sm: "-0.98%", md: "-0.51%" },
      marginRight: { xs: "-1.6%", sm: "-0.97%", md: "-0.51%" },
      mb:'-10%',
      backgroundColor: '#47758C', 
      p: { xs: 2, sm: 4, md: 7.4 },
       }}>
      <Box sx={{ width: '100%', maxWidth: '1440px' }}>
        {/* Logo */}
        <Box
          component="img"
          src="src/assets/W-PNG.png"
          alt="CINEC Logo"
          sx={{
            height: { xs: '30px', sm: '40px', md: '40px', lg: '40px' },
            
          }}
        />

        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem', lg: '2.5rem' },
            color: '#ffffff',
            mb: 2,
          }}
        >
          SHUTTLE - GAMPAHA 1
        </Typography>

        <Box display="flex" justifyContent="center" 
        sx={{ backgroundColor: '#47758C',
        
         }}>
          <Paper elevation={3} sx={{ width: '100%', maxWidth: '1500px', borderRadius: '10px' }}>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', md: 'row' }}
              
            >
              {/* Left Section */}
              <CardContent
                sx={{
                  borderTopLeftRadius:10,
                  borderBottomLeftRadius:10,
                  backgroundColor: '#022E61',
                  color: '#fff',
                  flex: 0.8,
                  p: { xs: 2, sm: 3, md: 5 },
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                <Typography variant="h5" gutterBottom>
                  <LocationOnIcon /> Turn on your location
                </Typography>

                <Box display="flex" justifyContent="center" gap={2} mb={3}>
                  <Button href='/shuttleService2'
                    variant="contained"
                    color={locationOn ? 'primary' : 'default'}
                    onClick={toggleLocation}
                    sx={{
                      bgcolor: locationOn ? '#ffffff' : '#ffffff',
                      color: locationOn ? '#000000' : '#000000',
                      borderRadius: '30px',
                      width: { xs: '45%', sm: '30%' },
                    }}
                  >
                    TURN ON
                  </Button>
                  <Button href='/signin2'
                    variant="contained"
                    color={!locationOn ? 'primary' : 'default'}
                    onClick={toggleLocation}
                    sx={{
                      bgcolor: !locationOn ? '#ffffff' : '#ffffff',
                      color: !locationOn ? '#000000' : '#000000',
                      borderRadius: '30px',
                      width: { xs: '45%', sm: '35%' },
                    }}
                  >
                    TURN OFF
                  </Button>
                </Box>

                <Box display="flex" justifyContent="center" mb={2}>
                  <Box
                    component="img"
                    src="src/assets/images.png"
                    alt="CINECBus"
                    sx={{
                      height: { xs: '100px', sm: '140px', md: '150px', lg: '180px' },
                    }}
                  />
                </Box>
                <Box textAlign="center">
                <Typography variant="h5">S0001</Typography>
                <Typography>Bus No: 0002</Typography>
                <Typography>Driver name: Driver</Typography>
                <Typography>Start place: Destination</Typography></Box>
              </CardContent>

              {/* Right Section */}
              <Box 
              sx={{ flex: 0.8, backgroundColor: '#ffffff', 
              p: 4,
              borderTopRightRadius:10,
              borderBottomRightRadius:10, }}>
                <Typography variant="h6" gutterBottom>
                  <EditIcon /> Add a note
                </Typography>

                <Box mb={3}>
                  {[
                     'The shuttle will depart from Malabe in 10 mins',
                     'Just started the journey',
                     'The bus will be a little late due to reasonable cause',
                     'The bus will be delayed due to an emergency',
                     'The shuttle schedule is cancelled due to an inconvenient reason',
                     'The bus is packed, so try the next turn',
                     'Other',
                  ].map((reason, index) => (
                    <FormControlLabel
                      key={index}
                      control={
                        <Checkbox
                          checked={selectedReasons.includes(reason)}
                          onChange={() => handleCheckboxChange(reason)}
                        />
                      }
                      label={reason}
                    />
                  ))}
                </Box>

                <TextField
                  variant="outlined"
                  label="Other reasons"
                  fullWidth
                  multiline
                  minRows={3}
                  sx={{ mb: 2 }}
                />

                <Box display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: '#022e61',
                      color: '#fff',
                      fontWeight: 'bold',
                      width: { xs: '100%', sm: '50%' },
                      borderRadius: '10px',
                      '&:hover': { bgcolor: '#001f42' },
                    }}
                  >
                    SUBMIT
                  </Button>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default ShuttleService;
