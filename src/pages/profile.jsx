import { useState } from 'react';
import { Avatar, Box, Button, TextField, Typography, IconButton } from '@mui/material';
import Layout from "../components/layout";
import EditIcon from '@mui/icons-material/Edit';

const ProfileCard = () => {
  const [formData, setFormData] = useState({
    idNo: '',
    faculty: '',
    department: '',
    mobile: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Layout>
      <Box
        sx={{
         // marginTop: { xs: '11%', sm: '7.5%', md: '4%' },
         marginLeft: { xs: "-1.6%", sm: "-0.98%", md: "-0.51%" },
         marginRight: { xs: "-1.6%", sm: "-0.97%", md: "-0.51%" },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundImage: `url("/src/assets/Profile-bgimg.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 2,
        }}
      >
        <Box
          sx={{
            width: { xs: '90%', sm: '80%', md: '60%', lg: '70%' },
            borderRadius: 5,
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'rgba(10, 33, 71, 0.8)',
            boxShadow: 3,
          }}
        >
          {/* User Info Header */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: { xs: 5, sm: 3, md: 4 },
              mb: 2,
              borderBottomRightRadius: '80%',
              position: 'relative',
              backgroundColor: 'rgba(255, 140, 0, 0.3)',
              color: 'white',
            }}
          >
            <Avatar
              alt="Naveen Sandaru"
              src="path_to_avatar_image" // Ensure this path is correct
              sx={{
                width: { xs: 50, sm: 60, md: 70 },
                height: { xs: 50, sm: 60, md: 70 },
                mr: 2,
                border: '2px solid white',
              }}
            />
            <Box>
              <Typography variant="h6" fontWeight="bold" fontSize={{ xs: '1rem', sm: '1.25rem', md: '1.5rem' }}>
                Naveen Sandaru
              </Typography>
              <Typography variant="body2" color="rgba(255, 255, 255, 0.9)" fontSize={{ xs: '0.8rem', sm: '0.9rem', md: '1rem' }}>
                navee@gmail.com
              </Typography>
            </Box>
            <IconButton
              sx={{
                color: 'white',
                position: 'absolute',
                top: 10,
                right: 10,
              }}
              aria-label="edit profile"
            >
              <EditIcon />
            </IconButton>
          </Box>

          {/* Centered Input Fields */}
          <Box sx={{ padding: { xs: 5, sm: 5, md: 2 }, pb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {['ID No', 'Faculty', 'Department', 'Mobile'].map((label, index) => (
              <TextField
                key={index}
                name={label.toLowerCase().replace(" ", "")} // Dynamically set the name attribute
                label={label}
                variant="outlined"
                fullWidth
                value={formData[label.toLowerCase().replace(" ", "")]} // Set value from state
                onChange={handleChange} // Handle change
                InputProps={{
                  style: { color: 'white' },
                  disableUnderline: true,
                }}
                sx={{
                  mb: 2,
                  width: { xs: '100%', sm: '80%', md: '70%', lg: '60%' }, // Responsive width
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'primary.main',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.8)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#FF8C00',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                  input: { color: 'white' },
                }}
              />
            ))}
            {/* Centered Edit Button for Mobile and Tablet */}
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: { xs: 'center', sm: 'center', md: 'flex-end' }, // Center for xs and sm, right-aligned for md and lg
                mt: 2,
              }}
            >
              <Button
                variant="contained"
                size="small" // Make the button small
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'secondary.main',
                  ':hover': { backgroundColor: '#FF7A00' },
                  width: { xs: 'auto', sm: 'auto' }, // Full width on xs, auto on larger screens
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                }}
              >
                Edit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
    </>
  );
};

export default ProfileCard;
