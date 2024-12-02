import React from 'react'
import { Box, Button, Grid2, TextField, Typography, InputAdornment } from '@mui/material'
import BG from "../assets/B1.png"
import IM2 from "../assets/M2.png"
import L1 from "../assets/Logo2.png"


const SignUpM2 = () => {
  return (

    <Grid2 container size={{xs:12, sm:12}}>
        <Box container size={{xs:6}} 
          sx= {{ width:'100%', 
            height:{ xs: '100%', sm: '100%', md:0, lg:0},bgcolor: 'rgba(136, 193, 255, 0.8)',
            flexDirection: 'column',alignItems: 'flex-start', justifyContent: 'flex-start', position: 'absolute', }}
        />

            <Box
                    component="img"
                    src={L1}  
                    alt="Overlay Image"
                    sx={{
                        width: {xs:'190px', sm:'250px', md:0, lg:0},  
                        height: {xs:'60px', sm:'80px', md:0, lg:0},
                        position: 'absolute',  
                        top: {xs:'25px', sm:'30px'},
                        left: {xs:'22%', sm:'35%'},
                                    
                        }}
                 />

            <Box  container size={{xs:6}} 
            sx={{ 
                width:{ xs: '84%', sm: '78%',md:0, lg:0},   
                height:{ xs: '380px', sm:'380px', md:0, lg:0 },
                borderTopLeftRadius:{xs:10, sm:10, },
                borderEndStartRadius:{xs:10, sm:10, },
                borderTopRightRadius: {xs:10, sm:10, },  
                borderEndEndRadius: {xs:10, sm:10, },  
                bgcolor: '#ffffff', 
                flexDirection: 'column',  
                marginLeft: { xs: '8%', sm: '11%' },  
                alignItems: 'flex-start',  
                justifyContent: 'flex-start',  
                position: 'absolute',
                left:0,
                top: { xs: '100px', sm: '120px'},}}>    

               <Typography sx={{ fontSize: {xs:14, sm:18, md:0, lg:0}, fontWeight: 600, color:'#000000', mt:{xs:5, sm:8 },  textAlign:'center'}}>ACCOUNT</Typography>
                <Typography sx={{ fontSize: {xs:14, sm:18, md:0, lg:0}, fontWeight: 600, color:'#000000', mb: 1, textAlign:'center'}}>VERIFICATION</Typography>

                            <Box
                                sx={{
                                    display: {xs:'flex', sm:'flex', md:'none', lg:'none'},
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    
                                }}
                                >
                                <TextField
                                    variant="outlined"
                                    label=""
                                    placeholder='Enter the Code'
                                
                                    inputProps={{
                                    maxLength: 4,          // Limit input to 4 characters
                                    inputMode: 'numeric',   // Show numeric keyboard on mobile devices
                                    pattern: "[0-9]*",      // Allow only numbers
                                    
                                    }}
                                    sx={{
                                    width: {xs:200, sm:220, md:0, lg:0},
                                    textAlign: 'center',
                                    border:{xs:'2px solid #000000', sm: '2px solid #000000', md:0, lg:0},
                                    borderRadius:{xs:'10px', sm:'10px', md:0, lg:0},
                                    mt:{xs:2, sm:2, md:0, lg:0},
                                    mb:{xs:3, sm:3, md:0, lg:0},
                                    '& input': {
                                        textAlign: 'center',  // Center-align text
                                        color:'#000000'
                                    },
                                    }}
                                    
                                />
                                </Box>
    
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                            <Button href="/signin " 
                                type="submit" 
                                variant="contained"
                                sx={{
                                fontWeight: 800,
                                bgcolor: '#3C6279',
                                color: '#ffffff',
                                padding: {xs:'5px', sm:'5px',md:0, lg:0},
                                fontSize: {xs:'14px', sm:'16px',md:0, lg:0},
                                width: {xs:'180px', sm:'200px', md:0, lg:0},
                                height: {xs:'35px', sm:'40px', md:0, lg:0},
                                borderRadius: {xs:30, sm:30, md:0, lg:0},
                                '&:hover': { bgcolor: '#ffffff', color:'#000000'},
                                }}
                            >
                                CONTINUE
                            </Button>
                            </Box>                   

                            <Typography 
                            sx={{
                                color: '#000000',
                                fontFamily: 'inter',
                                fontSize: {xs:'12px', sm:'14px',md:0, lg:0 },
                                textAlign: 'center',
                                mt: 1, mb:0,
                                fontWeight: 300,
                            }}
                            >
                            Did not get the code?
                            </Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Button href=" " 
                                variant="text"
                                sx={{
                                fontSize: {xs:'12px', sm:'14px',md:0, lg:0},
                                color: '#D4790E',
                                fontWeight: 800,
                                '&:hover': { color: '#002147' },
                                }}
                            >
                                Send again
                            </Button>
                            </Box>
                        </Box>
                    
               


            
                
            </Grid2>


        
  )
}

export default SignUpM2