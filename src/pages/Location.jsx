import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Layout from "../components/Layout";
import { Link } from 'react-router-dom';

export default function Location() {
  // Get the query parameter 'route' from the URL
  const location = useLocation();
  const routeName = new URLSearchParams(location.search).get('route'); // Extract route name from the query string

  return (
    
    <div>
      <Layout>
      <Box
        sx={{
          marginLeft: { xs: "-1.6%", sm: "-0.98%", md: "-0.51%" },
          marginRight: { xs: "-1.6%", sm: "-0.97%", md: "-0.51%" },
          height: '100vh',
          mt:'2%',
          padding:1,
          backgroundImage: `url('/src/assets/locationBG.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '90%',
            height: '85%',
            backgroundColor: 'rgba(0, 33, 71, 0.90)',
            borderRadius: 6,
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative',
            top: '10%',
          }}
        >
          <Grid container>
            <Grid item lg={6} md={12}>
              <Grid container>
                <Grid item lg={12} md={6} sm={12} xs={12}>
                  <Box textAlign={'center'}>
                    <Box
                      width={'50%'}
                      marginLeft={'auto'}
                      marginRight={'auto'}
                      sx={{
                        marginTop: '10%',
                      }}
                    >
                      <Box width={'100%'} display={'flex'} sx={{ textAlign: 'left' }}>
                        <FmdGoodIcon sx={{ width: '64px', height: '54px', color: '#FFC107' }} />

                        <Typography sx={{ color: 'white', fontWeight: '500', fontSize: '20px' }}>
                          Turn on your location
                          <Typography fontWeight={'100'} fontSize={'12px'} fontStyle={'italic'}>
                            you can see how far your bus from you
                          </Typography>
                        </Typography>
                      </Box>
                    </Box>
                    <Box width={'50%'} marginLeft={'auto'} marginRight={'auto'} sx={{ marginTop: '2%' }}>
                      <Button
                        sx={{
                          width: '150px',
                          backgroundColor: '#D9D9D9',
                          color: 'black',
                          letterSpacing: '1px',
                          fontWeight: '600',
                          marginTop: '5%',
                          marginLeft: '5%',
                        }}
                      >
                        TURN ON
                      </Button>
                      <Button
                        sx={{
                          width: '150px',
                          backgroundColor: '#D9D9D9',
                          color: 'black',
                          letterSpacing: '1px',
                          fontWeight: '600',
                          marginLeft: '5%',
                          marginTop: '5%',
                        }}
                      >
                        TURN ON
                      </Button>
                    </Box>
                    <Box
                      width={'50%'}
                      padding={'2%'}
                      sx={{
                        backgroundColor: '#D4790E',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '10%',
                        borderRadius: '15px',
                      }}
                    >
                      <Button
                        sx={{
                          backgroundColor: 'white',
                          height: '50px',
                          width: '80%',
                          marginTop: '5%',
                          borderRadius: '10px',
                        }}
                      >
                        <Box
                          sx={{
                            width: '45px',
                            height: '45px',
                            backgroundImage: `url('/src/assets/busicon.png')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }}
                        ></Box>
                        {routeName} {/* Dynamic route name */}
                      </Button>

                      <Typography fontSize={'14px'} marginTop={'2%'}>
                        {routeName} to Campus: 07:00AM
                      </Typography>
                      <Typography fontSize={'14px'} marginTop={'2%'}>
                        Campus to {routeName}: 07:00AM
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={12} md={6} sm={12} xs={12}>
                  <Box width={'50%'} marginLeft={'auto'} marginRight={'auto'} marginTop={'10%'}>
                    <Button href='/schedule'
                      sx={{
                        backgroundColor: 'white',
                        width: '100%',
                        marginTop: '-5%',
                      }}
                    >
                      VIEW BUS SCHEDULE
                    </Button>

                    <Link to="/setAlarm" ><Button
                      sx={{
                        backgroundColor: 'white',
                        width: '100%',
                        marginTop: '10%',
                      }}
                    >
                      Set Alarm
                    </Button></Link>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid item lg={6} md={12}>
              <Box textAlign={'center'}>
                <Box width={'80%'} marginLeft={'auto'} marginRight={'auto'} marginTop={'13%'} height={'90%'} 

                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44810.48049958517!2d79.93826798411983!3d6.92352057383237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256d59601df81%3A0x31a1dd96e8d49ba!2sMalabe!5e0!3m2!1sen!2slk!4v1731276460672!5m2!1sen!2slk"
                    width={'100%'}
                    height={'400px'}
                  ></iframe>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </Layout>
    </div>
    
  );
}
