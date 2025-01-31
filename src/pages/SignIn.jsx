import React from 'react'
import { Box, Button, Grid2, TextField, Typography, InputAdornment } from '@mui/material'
import BG from "../assets/B1.png"
import IM1 from "../assets/IM1.png"
import L1 from "../assets/Logo2.png"
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';


const SignIn = () => {
  return (

    <Grid2 container size={{xs:10}}  
    sx={{
        mt:'-0.52%',
        marginLeft: { xs: "-1.6%", sm: "-0.98%", md: "-0.51%" },
        marginRight: { xs: "-1.6%", sm: "-0.97%", md: "-0.51%" }, 
        mb:'-1%',
        height:'100%'
        }}>
        <Box
          component="img"
          src={BG}
          alt="Background Image"
          sx= {{
                
                width:'100%',
                height: { xs: '543px',sm: '543px', md:'800px', lg:'800px',
                position:'relative',
                }}}
        />
        
        <Grid2 container size={{xs:10}} >

            <Grid2 container size={{xs:6}}>

                <Box
                    component="img"
                    src={L1}  
                    alt="Overlay Image"
                    sx={{
                        
                        width: {xs:'190px', sm:'200px', md:'0px', lg:'0px'},  
                        height: {xs:'60px', sm:'60px', md:'0px', lg:'0px'},
                        position: 'absolute',  
                        top: {xs:'30px', sm:'25px', md:'0px', lg:'0px'},
                        left: {xs:'22%', sm:'37%', md:'0px', lg:'0px'},
                                    
                        }}
                 />


            <Box  container size={{xs:6}} 
            sx={{ 
                mt:'-2%', 
                width: { xs: '84%', sm: '70%', md: '48%', lg:'48%' },
                height: { xs: '400px', sm:'425px',  md: '615px', lg:'660px' },
                borderTopLeftRadius:{xs:10, sm:10, md:10, lg:10},
                borderEndStartRadius:{xs:10, sm:10, md:10, lg:10},
                borderTopRightRadius: {xs:10, sm:10, md:0, lg:0},  
                borderEndEndRadius: {xs:10, sm:10, md:0, lg:0},
                bgcolor: '#ffffff', 
                flexDirection: 'column',  
                marginLeft: '8%',  
                alignItems: 'flex-start',  
                justifyContent: 'flex-start',  
                position: 'absolute',
                left:{ xs:0, sm: '7%', md: 0, lg:0 },
                top: { xs: '118px', sm: '100px', md: '10%', lg:'10%' }, }}> 

            <Typography 
                sx={{color: { xs: '#D4790E', sm: '#D4790E', md: '#D4790E', lg:'#002147FF' }, fontFamily:'inter', textAlign:'center',
                fontSize: {xs:'16px', sm:'20px', md:'24px', lg:'24px'},
                mt:{xs:4, sm:2.5, md:8, lg:10}, 
                fontFamily:'inter'}}>
                    WELCOME TO
            </Typography>

            <Typography sx={{color:'#002147FF', fontFamily:'inter', textAlign:'center',
                fontSize:{xs:'20px', sm:'22px', md:'30px', lg:'32px'},
                mb:{xs:1, sm:2, md:2, lg:3}, 
                fontFamily:'inter', fontWeight:'800'}}>
                    CINEC SHUTTLE SERVICES
            </Typography>

            <Typography sx={{color:'#002147FF', fontFamily:'inter', textAlign:'center', fontWeight: '500',  
                fontSize:{xs:'12px', sm:'16px', md:'16px', lg:'16px'},
                mt:{xs:2, sm:3, md:3, lg:5},
                mb:{xs:2, sm:2, md:2, lg:2}, 
                fontFamily:'inter'}}>
                    Enter your Username & Password to SignIn
            </Typography>
            
            <Box //Text field 1
                    component="form"
                    sx={{'& > :not(style)': {m: { xs: 0, sm: 1, md: 1, lg: 1 },
                        width: { xs: '180px', sm: '300px', md: '320px', lg: '380px' },
                        mt: { xs: 1, sm: 1, md: 1, lg: 2 },
                        mb: { xs: 0.5, sm: 1, md: 1.5, lg: 1.5 },
                        },display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',
                    }}noValidate autoComplete="off">
                <TextField id="outlined-basic" label="" variant="outlined" placeholder="Enter Your Username"
                    InputProps={{startAdornment: (<InputAdornment position="start"><AccountCircleOutlinedIcon /></InputAdornment>),}}
                    sx={{width: { xs: '180px', sm: '300px', md: '320px', lg: '380px' },
                    '& .MuiOutlinedInput-root': {height: { xs: '34px', sm: '40px', md: '45px', lg: '50px' }, borderRadius: '30px', 
                        '& fieldset': {borderColor: '#000000',},
                        '&:hover fieldset': {borderColor: '#002147FF', },},
                    '& input': {padding: '0 5px', fontSize: '12px', color: '#002147FF', height: '100%',},}}/>
            </Box>

                <Box //Text field 5
                    component="form"
                    sx={{'& > :not(style)': {m: { xs: 0, sm: 1, md: 1, lg: 1 },
                        width: { xs: '180px', sm: '300px', md: '320px', lg: '380px' },
                        mt: { xs: 1, sm: 1, md: 1, lg: 1 },
                        mb: { xs: 0.5, sm: 1, md: 1, lg: 1.5 },
                        },display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',
                    }}noValidate autoComplete="off">
                <TextField id="outlined-basic" label="" variant="outlined" placeholder="Enter Your Password"
                    InputProps={{startAdornment: (<InputAdornment position="start"><LockIcon /></InputAdornment>),}}
                    sx={{width: { xs: '180px', sm: '300px', md: '320px', lg: '380px' },
                    '& .MuiOutlinedInput-root': {height: { xs: '34px', sm: '40px', md: '45px', lg: '50px' }, borderRadius: '30px', 
                        '& fieldset': {borderColor: '#000000',},
                        '&:hover fieldset': {borderColor: '#002147FF', },},
                    '& input': {padding: '0 5px', fontSize: '12px', color: '#002147FF', height: '100%',},}}/>
            </Box>


            <Button href=" " sx={{alignItems:'center', justifyContent:'center', justifyItems:'center', display:'flex', color: '#002147CC', fontFamily:'inter',  
                marginLeft:{xs:'80px', sm:'150px', md:'200px', lg:'200px'},
                fontSize:{xs:'9px', sm:'12px', md:'15px', lg:'15px'}, fontWeight: 300, 
                mb:1, 
                mt:0}}>
                    Forgot Password?
            </Button>
            

            <Box  //Box of Button that used to center the box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                }}
            >
                <Link to="/home" style={{ textDecoration: 'none'}}><Button href=" "  type="submit" variant="contained"
                        sx={{alignItems:'center', justifyContent:'center', justifyItems:'center', display:'flex', fontWeight: 800, 
                            bgcolor:'#002147',  padding:'5px',
                            fontSize:{xs:'16px', sm:'18px', md:'18px', lg:'20px'},
                            width:{xs:'170px', sm:'290px', md:'310px', lg:'370px'}, 
                            height:{xs:'34px', sm:'40px', md:'45px', lg:'50px'}, 
                            borderRadius:'30px', 
                            mb:2,
                            '&:hover': {
                                bgcolor: '#D4790E',  
                              },
                        }}>
                            Sign In
                        </Button></Link>
            </Box>                

            <Typography sx={{color: '#002147FF', fontFamily:'inter', textAlign:'center',
                fontSize:{xs:'10px', sm:'14px', md:'14px', lg:'16px'},
                mb:0, fontFamily:'inter', fontWeight: 300, }}>
                    If you don't have account
            </Typography>


            <Box  //Box of Button that used to center the box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                }}
            >
                <Link to="/signup" style={{ textDecoration: 'none'}}><Button Button href=" " variant='text'
                    sx={{alignItems:'center', justifyContent:'center', justifyItems:'center', display:'flex', 
                        fontSize:{xs:'10px', sm:'15px', md:'16px', lg:'16px'}, 
                        color:'#D4790E', fontWeight: 800,
                        '&:hover': {
                                color: '#002147',  
                              },
                         }}>
                        Sign Up Now
                </Button></Link>
            </Box>


            </Box>
            
                
            </Grid2>

            <Grid2 container size={{xs:4}}>
            <Box  container size={{xs:4}} 
            sx={{ 
                mt:'-2%', 
                width:{xs:0, sm:0, md:'36%', lg:'36%'},   
                height:{xs:0, sm:0, md:'615px', lg:'660px'},
                borderTopRightRadius:{xs:0, sm:0, md:10, lg:10},
                borderTopLeftRadius: {xs:0, sm:0, md:0, lg:0},
                borderEndEndRadius:{xs:10, sm:10, md:10, lg:10},
                borderEndStartRadius:{xs:10, sm:10, md:0, lg:0},
                bgcolor: '#000000', 
                flexDirection: 'column',  
                marginRight: '8%',  
                alignItems: 'flex-start',  
                justifyContent: 'flex-start',  
                position: 'absolute',
                right: 0,
                top: {xs:'650px', sm:'690px', md:'10%', lg:'10%'},}}>

                <Box 
                sx={{ 
                    width: '100%', 
                    height: '100%', 
                    position: 'relative'  //  absolute positioning
                }}
                    >
                    {/* Main Image */}
                    <Box
                        component="img"
                        src={IM1}
                        alt="Cinec Campus"
                        sx={{
                        width: '100%',
                        height: '100%',
                        }}
                    />

                        {/* Overlay Image */}
                            <Box
                                component="img"
                                src={L1}  // Replace with the source of the second image
                                alt="Overlay Image"
                                sx={{
                                width: {xs:'0px', sm:'0px', md:'340px', lg:'340px'},  // Adjust the size of the overlay image
                                height: {xs:'0px', sm:'0px', md:'100px', lg:'100px'},
                                position: 'absolute',  // Position it absolutely within the main container
                                top: {xs:'0px', sm:'0px', md:'37%', lg:'37%'},
                                left: {xs:'0px', sm:'0px', md:'12%', lg:'24%'},
                                
                                }}
                            />
                </Box>


            </Box>

            
                
            </Grid2>


        </Grid2>
        </Grid2>

        
  
    
  )
}

export default SignIn