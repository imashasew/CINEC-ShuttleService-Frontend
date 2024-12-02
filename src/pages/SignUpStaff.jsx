import React from 'react'
import { Box, Button, Grid2, TextField, Typography, InputAdornment } from '@mui/material'
import BG from "../assets/B1.png"
import IM2 from "../assets/M2.png"
import L1 from "../assets/Logo2.png"
import St1 from "../assets/St1.jpg"
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import { Link } from 'react-router-dom'


const SignUp2 = () => {
  return (

    <Grid2 container size={{xs:12}}  sx={{width:'100%', height:'100%'}}>
        
        <Grid2 container size={{xs:12}} >

            <Grid2 container size={{xs:6}}>
            <Box  container size={{xs:6}} 
            sx={{ 
                width: { xs: '100%', sm: '100%', md: '60%', lg:'60%' },   
                height:{ xs: '85%', sm: '100%', md: '100%', lg:'109%' }, 
                bgcolor: 'rgba(136, 193, 255, 0.8)' ,flexDirection: 'column',alignItems: 'flex-start', justifyContent: 'flex-start', position: 'absolute',
                marginLeft: 0,marginRight:0,left:0,top:0,}}>

            <Typography 
                sx={{color:'#000000', fontFamily:'inter', textAlign:'center',
                fontSize:{ xs: '16px', sm: '18px', md: '22px', lg:'24px' },
                mt:{ xs:4, sm:4, md:3, lg:10 },
                fontFamily:'inter',
                marginRight:{ xs:0, sm:0, md:0, lg:10 },
                }}>
                    Create an Account for
            </Typography>

            <Typography sx={{color:'#002147FF', fontFamily:'inter', textAlign:'center',
                fontSize:{ xs: '20px', sm: '22px', md: '30px', lg:'32px' },
                mb:1, fontFamily:'inter', fontWeight:'800',
                marginRight:{ xs:0, sm:0, md:0, lg:10 },
                }}>
                    CINEC SHUTTLE SERVICES
            </Typography>
            

             <Box //Text field 1
                    component="form"
                    sx={{'& > :not(style)': {m: { xs: 0, sm: 1, md: 1, lg: 1 },
                        width: { xs: '220px', sm: '300px', md: '320px', lg: '380px' },
                        mt: { xs: 1, sm: 1, md: 1, lg: 2 },
                        mb: { xs: 0.5, sm: 1, md: 1.5, lg: 1.5 },
                        },display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',
                    }}noValidate autoComplete="off">
                <TextField id="outlined-basic" label="" variant="outlined" placeholder="Enter Your Username"
                    InputProps={{startAdornment: (<InputAdornment position="start"><AccountCircleOutlinedIcon /></InputAdornment>),}}
                    sx={{width: { xs: '220px', sm: '300px', md: '320px', lg: '380px' },
                    '& .MuiOutlinedInput-root': {height: { xs: '34px', sm: '40px', md: '45px', lg: '50px' }, borderRadius: '30px', 
                        '& fieldset': {borderColor: '#000000',},
                        '&:hover fieldset': {borderColor: '#002147FF', },},
                    '& input': {padding: '0 8px', fontSize: '12px', color: '#002147FF', height: '100%',},}}/>
            </Box>

            <Box //Text field 2
                    component="form"
                    sx={{'& > :not(style)': {m: { xs: 0, sm: 1, md: 1, lg: 1 },
                        width: { xs: '220px', sm: '300px', md: '320px', lg: '380px' },
                        mt: { xs: 1, sm: 1, md: 1, lg: 1},
                        mb: { xs: 0.5, sm: 1, md: 1, lg: 1.5 },
                        },display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',
                    }}noValidate autoComplete="off">
                <TextField id="outlined-basic" label="" variant="outlined" placeholder="Enter Your Student ID"
                    InputProps={{startAdornment: (<InputAdornment position="start"><BadgeOutlinedIcon /></InputAdornment>),}}
                    sx={{width: { xs: '220px', sm: '300px', md: '320px', lg: '380px' },
                    '& .MuiOutlinedInput-root': {height: { xs: '34px', sm: '40px', md: '45px', lg: '50px' }, borderRadius: '30px', 
                        '& fieldset': {borderColor: '#000000',},
                        '&:hover fieldset': {borderColor: '#002147FF', },},
                    '& input': {padding: '0 8px', fontSize: '12px', color: '#002147FF', height: '100%',},}}/>
            </Box>

            <Box //Text field 3
                    component="form"
                    sx={{'& > :not(style)': {m: { xs: 0, sm: 1, md: 1, lg: 1 },
                        width: { xs: '220px', sm: '300px', md: '320px', lg: '380px' },
                        mt: { xs: 1, sm: 1, md: 1, lg: 1 },
                        mb: { xs: 0.5, sm: 1, md: 1, lg: 1.5 },
                        },display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',
                    }}noValidate autoComplete="off">
                <TextField id="outlined-basic" label="" variant="outlined" placeholder="Enter Your Email"
                    InputProps={{startAdornment: (<InputAdornment position="start"><EmailOutlinedIcon /></InputAdornment>),}}
                    sx={{width: { xs: '220px', sm: '300px', md: '320px', lg: '380px' },
                    '& .MuiOutlinedInput-root': {height: { xs: '34px', sm: '45px', md: '40px', lg: '50px' }, borderRadius: '30px', 
                        '& fieldset': {borderColor: '#000000',},
                        '&:hover fieldset': {borderColor: '#002147FF', },},
                    '& input': {padding: '0 8px', fontSize: '12px', color: '#002147FF', height: '100%',},}}/>
            </Box>
            
            <Box //Text field 4
                    component="form"
                    sx={{'& > :not(style)': {m: { xs: 0, sm: 1, md: 1, lg: 1 },
                        width: { xs: '220px', sm: '300px', md: '320px', lg: '380px' },
                        mt: { xs: 1, sm: 1, md: 1, lg: 1},
                        mb: { xs: 0.5, sm: 1, md: 1, lg: 1.5 },
                        },display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',
                    }}noValidate autoComplete="off">
                <TextField id="outlined-basic" label="" variant="outlined" placeholder="Enter Your Phone No."
                    InputProps={{startAdornment: (<InputAdornment position="start"><BadgeOutlinedIcon /></InputAdornment>),}}
                    sx={{width: { xs: '220px', sm: '300px', md: '320px', lg: '380px' },
                    '& .MuiOutlinedInput-root': {height: { xs: '34px', sm: '40px', md: '45px', lg: '50px' }, borderRadius: '30px', 
                        '& fieldset': {borderColor: '#000000',},
                        '&:hover fieldset': {borderColor: '#002147FF', },},
                    '& input': {padding: '0 8px', fontSize: '12px', color: '#002147FF', height: '100%',},}}/>
            </Box>

            <Box //Text field 5
                    component="form"
                    sx={{'& > :not(style)': {m: { xs: 0, sm: 1, md: 1, lg: 1 },
                        width: { xs: '220px', sm: '300px', md: '320px', lg: '380px' },
                        mt: { xs: 1, sm: 1, md: 1, lg: 1 },
                        mb: { xs: 0.5, sm: 1, md: 1, lg: 1.5 },
                        },display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',
                    }}noValidate autoComplete="off">
                <TextField id="outlined-basic" label="" variant="outlined" placeholder="Enter Your Password"
                    InputProps={{startAdornment: (<InputAdornment position="start"><LockIcon /></InputAdornment>),}}
                    sx={{width: { xs: '220px', sm: '300px', md: '320px', lg: '380px' },
                    '& .MuiOutlinedInput-root': {height: { xs: '34px', sm: '40px', md: '45px', lg: '50px' }, borderRadius: '30px', 
                        '& fieldset': {borderColor: '#000000',},
                        '&:hover fieldset': {borderColor: '#002147FF', },},
                    '& input': {padding: '0 8px', fontSize: '12px', color: '#002147FF', height: '100%',},}}/>
            </Box>
            
            <Box  //Box of Button that used to center the box
                sx={{display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
                <Button href="/signupM2 " type="submit" variant="contained"
                        sx={{alignItems:'center', justifyContent:'center', justifyItems:'center', display:'flex', fontWeight: 800, 
                            bgcolor:'#002147',  padding:'5px',
                            fontSize:{xs:'14px', sm:'18px', md:'16px', lg:'18px'},
                            width:{xs:'210px', sm:'290px', md:'310px', lg:'370px'}, 
                            height:{xs:'34px', sm:'40px', md:'45px', lg:'50px'}, 
                            borderRadius:'30px', 
                            mt:{xs:1.5, sm:1.5, md:1.5, lg:1},
                            mb:{xs:1, sm:1, md:1.5, lg:2}, 
                            '&:hover': {
                                bgcolor: '#D4790E',  
                              },}}>
                            SEND CODE
                </Button>
            </Box>  

            <Typography sx={{color: '#002147FF', fontFamily:'inter', textAlign:'center',
                fontSize:{xs:'10px', sm:'12px', md:'14px', lg:'16px'},
                mt:0, mb:0, fontFamily:'inter', fontWeight: 300,
                marginRight:{xs:0, sm:0, md:0, lg:10},
                 }}>
                    Already have an account?
            </Typography>


            <Box  //Box of Button that used to center the box
                sx={{display: 'flex',alignItems: 'center',justifyContent: 'center',}}
                >
               <Link to="/signin" style={{textDecoration:'none'}}> <Button href=" " variant='text'
                    sx={{alignItems:'center', justifyContent:'center', justifyItems:'center', display:'flex', color:'#D4790E', fontWeight: 800, mt:0,
                        fontSize:{xs:'10px', sm:'12px', md:'14px', lg:'16px'}, 
                        marginRight:{xs:0, sm:0, md:0, lg:10},
                        '&:hover': {color: '#000000',  },}}>
                        Sign In
                </Button></Link>
            </Box>
</Box>
            
                
            </Grid2>

            <Grid2 container size={{xs:4}}>
            <Box  container size={{xs:4}} 
            sx={{ 
                width:{ xs:0, sm:0, md: '44%', lg:'44%' },   
                height:{ xs: 0, sm: 0, md: '100%', lg:'100%' },
                bgcolor: '#ffffff', flexDirection: 'column', marginLeft:0, marginRight: 0, display:'flex', position: 'absolute',right: 0, top: 0,}}>

            <Box 
                sx={{ 
                    width: {xs:0, sm:0, md:'100%', lg:'100%'},  
                    height: {xs:0, sm:0, md:'100%', lg:'100%'}, 
                    position: 'relative'  //  absolute positioning
                }}>

                    {/* Main Image */}
                    <Box
                        component="img"
                        src={St1}
                        alt="Cinec Campus"
                        sx={{
                        width: { xs:0, sm: 0, md: '300px', lg:'380px' },
                        height: {xs:0, sm: 0, md: '300px', lg:'380px' },
                        marginLeft: {xs:0, sm: 0, md: 10, lg:20 },
                        }}
                    />
                
                </Box>


                            <Box
                                sx={{
                                position: 'absolute',
                                width:  {xs:0, sm: 0, md: '100%', lg:'100%' },
                                height:{xs:0, sm: 0, md: '47%', lg:'58%' },
                                top: {xs:0, sm: 0, md: '33.2rem', lg:'34.6rem' },   
                                left: '50%',  
                                bgcolor: 'rgba(218, 238, 245, 1)', 
                                transform: 'translate(-50%, -50%)',  // Center the content
                                textAlign: 'center',
                                }}
                            >
                            
                            <Typography sx={{ fontSize: {xs:0, sm: 0, md: '16px', lg:'20px' }, fontWeight: 700, color:'#000000', mt:{xs:4, sm: 4, md: 2, lg:4 }, }}>ACCOUNT</Typography>
                            <Typography sx={{ fontSize: {xs:0, sm: 0, md: '16px', lg:'20px' }, fontWeight: 700, color:'#000000', mb: 1}}>VERIFICATION</Typography>

                            <Box
                                sx={{
                                    display: {xs:'none', sm:'none', md:'flex', lg:'flex'},
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
                                    width: {xs:0, sm: 0, md: '150px', lg:'200px' },
                                    textAlign: 'center',
                                    border:{xs:0, sm:0, md:'1px solid #1D3B5C', lg:'1px solid #1D3B5C'},
                                    borderRadius:{xs:0, sm:0, md:'10px', lg:'10px'},
                                    mt:{xs:2, sm: 2, md: 1, lg:2 },
                                    mb:2,
                                    '& input': {color:'#000000',textAlign: 'center',// Center-align text
                                    },}}/>
                                </Box>
    
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                            <Button href="/signin"
                                type="submit" 
                                variant="contained"
                                sx={{
                                fontWeight: 800,
                                bgcolor: '#4B7B98',
                                color: '#ffffff',
                                padding: {xs:0, sm: 0, md: '3px', lg:'5px' },
                                fontSize:{xs:0, sm: 0, md: '12px', lg:'17px' },
                                width: {xs:0, sm: 0, md: '190px', lg:'190px' },
                                height: {xs:0, sm: 0, md: '40px', lg:'40px' },
                                borderRadius: {xs:0, sm: 0, md: '30px', lg:'30px' },
                                mb:0,
                                '&:hover': { bgcolor: '#D4790E'},
                                }}
                            >
                                CONTINUE
                            </Button>
                            </Box>                

                            <Typography 
                            sx={{
                                color: '#000000',
                                fontFamily: 'inter',
                                fontSize: {xs:0, sm: 0, md: '14px', lg:'14px' },
                                fontWeight: 300,
                            }}
                            >
                            Did not get the code?
                            </Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Button href=" " 
                                variant="text"
                                sx={{
                                fontSize:{xs:0, sm: 0, md: '12px', lg:'14px' },
                                color: '#D4790E',
                                fontWeight: 800,
                                '&:hover': { color: '#000000' },
                                }}
                            >
                                Send again
                            </Button>
                            </Box>
                        </Box>
                    </Box>
               


            
                
            </Grid2>


        </Grid2>
        </Grid2>

        
  
    
  )
}

export default SignUp2