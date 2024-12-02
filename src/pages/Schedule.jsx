import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Layout from "../components/Layout";

const Schedule = () => {
  const scheduleData = [
    { time: "07:00 AM", route: "Wattla to Campus" },
    { time: "08:00 AM", route: "Wattla to Campus" },
    { time: "09:00 AM", route: "Wattla to Campus" },
    { time: "10:00 AM", route: "Wattla to Campus" },
    { time: "11:00 AM", route: "Wattla to Campus" },
    { time: "12:00 PM", route: "Wattla to Campus" },
    { time: "01:00 PM", route: "Wattla to Campus" },
  ];

  const returnScheduleData = [
    { time: "07:00 AM", route: "Campus to Wattla" },
    { time: "08:00 AM", route: "Campus to Wattla" },
    { time: "09:00 AM", route: "Campus to Wattla" },
    { time: "10:00 AM", route: "Campus to Wattla" },
    { time: "11:00 AM", route: "Campus to Wattla" },
    { time: "12:00 PM", route: "Campus to Wattla" },
    { time: "01:00 PM", route: "Campus to Wattla" },
  ];

  return (
    <Layout>
      <Box
        sx={{
          marginLeft: { xs: "-1.6%", sm: "-0.98%", md: "-0.51%" },
          marginRight: { xs: "-1.6%", sm: "-0.97%", md: "-0.51%" },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'white',
          minHeight: '100vh',
          justifyContent: 'center',
          padding: 2,
          backgroundImage: `url(/src/assets/schedule.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Decorative Image */}
        <Box
          component="img"
          src="/src/assets/image 6.png"
          sx={{
            position: 'absolute',
            top: { xs: '14%', sm: '19%', md: '18%' },
            height: { xs: '100%', sm: '106%', md: '70%' },
            width: { xs: '85%', sm: '85%', md: '75%' },
            objectFit: 'cover',
            zIndex: 1,
          }}
        />

        {/* Content Container */}
        <Container
          sx={{
            marginTop: { xs: '13%', sm: '12%', md: '-1%' },
            bgcolor: 'rgba(0, 30, 71, 0.85)',
            padding: { xs: 2, sm: 4, md: 6 },
            borderRadius: 2,
            zIndex: 2,
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              marginBottom: { xs: 3, sm: 4 },
              fontSize: { xs: '1.5rem', sm: '2rem' },
            }}
          >
            VIEW BUS SCHEDULES
          </Typography>

          {/* Schedules Grid */}
          <Grid container spacing={3}>
            {/* Wattla to Campus */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                align="center"
                sx={{ color: 'white', fontWeight: 'bold', marginBottom: 2 }}
              >
                Wattla to Campus
              </Typography>
              {scheduleData.map((schedule, index) => (
                <Box
                  key={index}
                  sx={{
                    
                    display: 'flex',
                    justifyContent: "space-between",
                    color: 'white',
                    paddingX: '20%',
                    marginBottom: 1,
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {schedule.time}
                  </Typography>
                  <Typography variant="body1">{schedule.route}</Typography>
                </Box>
              ))}
            </Grid>

            {/* Campus to Wattla */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                align="center"
                sx={{ color: 'white', fontWeight: 'bold', marginBottom: 2 }}
              >
                Campus to Wattla
              </Typography>
              {returnScheduleData.map((schedule, index) => (
                <Box
                  key={index}
                  sx={{
                    
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: 'white',
                    paddingX: '20%',
                    marginBottom: 1,
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {schedule.time}
                  </Typography>
                  <Typography variant="body1">{schedule.route}</Typography>
                </Box>
              ))}
            </Grid>
          </Grid>

          {/* Back Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
            <Button href='/location'
              variant="contained"
              sx={{
                backgroundColor: '#ffab00',
                fontWeight: 'bold',
                padding: { xs: '8px 16px', sm: '10px 24px' },
              }}
            >
              BACK
            </Button>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Schedule;
