import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Layout from "../components/Layout";

export default function Notification() {
  return (
    <Layout>
    <div>

<Box
        sx={{
            mt:'4%',
            padding:2,
            marginLeft: { xs: "-1.6%", sm: "-0.98%", md: "-0.51%" },
            marginRight: { xs: "-1.6%", sm: "-0.97%", md: "-0.51%" },
            height: "100vh",backgroundImage: `url('src/assets/notificationBG.png')`,backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", position:'relative'}}>

            <Box
                sx={{width: "80%",height: "90%",backgroundImage: `url('src/assets/secondBg.png')`,backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", position:'relative',top:'5%',marginLeft:'auto',marginRight:'auto',
                borderRadius: 6,
                boxShadow:'4px 4px 10px #181818'}}>

                    <Box
                        sx={{
                            width:'100%',height:'100%',
                            backgroundColor:'rgba(0, 33, 71, 0.85)',borderRadius: 6,
                        }}>

                            <Typography variant='h3'color='white' textAlign={'center'} sx={{ fontSize:'200%', position:'relative', top:'20px',letterSpacing:'3px',fontWeight:"50"}}>Notification
                            </Typography>

                            <Box sx={{width:'80%', height:'80%',marginLeft:'auto', marginRight:'auto',position:'relative',marginTop:'2%',}}>

                                <Typography color='white' sx={{position:'relative',top:'5%',marginLeft:'5%',fontSize:'24px',letterSpacing:'3px'}} >Today</Typography>

                                <List sx={{color:'white',position:'relative',marginTop:'4%',marginLeft:'10%',}}>
                                    <ListItem>
                                        <Box
                                             sx={{width: "45px",height: "45px",backgroundImage: `url('src/assets/busicon.png')`,backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",boxShadow:'2px 2px 5px #181818'}}>
                                            
                                        </Box>
                                        <ListItemText sx={{marginLeft:'1%',}}>end of route.thank you for your service today</ListItemText>
                                    </ListItem>

                                    <ListItem>
                                        <Box
                                             sx={{width: "45px",height: "45px",backgroundImage: `url('src/assets/busicon.png')`,backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",boxShadow:'2px 2px 5px #181818'}}>
                                            
                                        </Box>
                                        <ListItemText sx={{marginLeft:'1%'}}>end of route.thank you for your service today</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <Box
                                             sx={{width: "45px",height: "45px",backgroundImage: `url('src/assets/busicon.png')`,backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",boxShadow:'2px 2px 5px #181818'}}>
                                            
                                        </Box>
                                        <ListItemText sx={{marginLeft:'1%'}}>end of route.thank you for your service today</ListItemText>
                                    </ListItem>
                                    
                                    
                                </List>

                                <Typography color='white' sx={{position:'relative',top:'5%',marginLeft:'5%',fontSize:'24px',letterSpacing:'3px'}} >Yesterday</Typography>

                                <List sx={{color:'white',position:'relative',marginTop:'4%',marginLeft:'10%'}}>
                                    <ListItem>
                                        <Box
                                             sx={{width: "45px",height: "45px",backgroundImage: `url('src/assets/busicon.png')`,backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",boxShadow:'2px 2px 5px #181818'}}>
                                            
                                        </Box>
                                        <ListItemText sx={{marginLeft:'1%'}}>Notification 1</ListItemText>
                                    </ListItem>

                                    <ListItem>
                                        <Box
                                             sx={{width: "45px",height: "45px",backgroundImage: `url('src/assets/busicon.png')`,backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",boxShadow:'2px 2px 5px #181818'}}>
                                            
                                        </Box>
                                        <ListItemText sx={{marginLeft:'1%'}}>Notification 2</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <Box
                                             sx={{width: "45px",height: "45px",backgroundImage: `url('src/assets/busicon.png')`,backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",boxShadow:'2px 2px 5px #181818'}}>
                                            
                                        </Box>
                                        <ListItemText sx={{marginLeft:'1%'}}>Notification 3</ListItemText>
                                    </ListItem>
                                    
                                    
                                </List>

                            </Box>

                    </Box>



                </Box>
   
                   
               

          

        </Box>


    </div>
    </Layout>
  )
}
