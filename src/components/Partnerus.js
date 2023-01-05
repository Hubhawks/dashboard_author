import React from 'react'
import { Button, Grid, Typography,Paper} from '@mui/material';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useForm } from 'react-hook-form';
import Image from 'mui-image';
import ResponsiveAppBar from './menu';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import Footer from '../footer';
import Carousel from 'react-material-ui-carousel'
import Partnerslider from './slider';
function Partnerus() {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);
	console.log(errors);
	return (<>
	  <ResponsiveAppBar />
	  <>
	  <Grid container xs={12}>
		  <Grid container xs={6}>
			<Box sx={{backgroundColor:' #BB00000A',position: 'absolute',width: '704px',height: '872px'}}>
			
			<Grid container xs={12} spacing={2} >
				  <Grid item xs={12} spacing={2} sx={{marginTop:'56px'}}>
				  <Typography variant='h2' sx={{
					  fontStyle: 'normal', fontWeight: '600', fontSize: '36px', lineHeight: '48px', textAlign: 'center',
					  color: '#BB0000'
				  }}>Why you should partner with us</Typography>   
							</Grid>
					<Box sx={{width:'500px',margin:"auto"}}>
					<Grid container spacing={2} sx={{m:'auto'}}>	
						<Grid item xs={1} style={{  }}>
					  <CheckCircleOutlineRoundedIcon color='Green' />
						  </Grid>
					<Grid item >
					  <Typography>200+ authors actively working with us</Typography>
					  </Grid>
					  
					  </Grid>
					  
					 
					  <Grid container spacing={2} sx={{m:'auto'}}>
					<Grid item xs={1} >
					  <CheckCircleOutlineRoundedIcon color='Green' />
						  </Grid>
					<Grid item >
					  <Typography>100k+ content pieces delivered</Typography>
					  </Grid>

					  </Grid>


					  <Grid container spacing={2} sx={{m:'auto'}}>
						<Grid item xs={1}>
					  <CheckCircleOutlineRoundedIcon color='Green' />
						  </Grid>
					<Grid item >
					  <Typography>Hassle-free payments</Typography>
					  </Grid>

					  </Grid>
								<Grid container spacing={2} sx={{m:'auto'}}>
						<Grid item xs={1}>
					  <CheckCircleOutlineRoundedIcon color='Green' />
						  </Grid>
					<Grid item >
					  <Typography>Connect with like-minded clients</Typography>
					  </Grid>

					  </Grid>
					  <Grid container spacing={2} sx={{m:'auto'}}>
						<Grid item xs={1}>
					  <CheckCircleOutlineRoundedIcon color='Green' />
						  </Grid>
					<Grid item >
					  <Typography>Excel in your niche</Typography>
					  </Grid>

					  </Grid>
					  </Box>
						</Grid>

					 <Grid container xs={12} sx={{m:"auto"}}>
						  <Typography variant='h4' sx={{fontSize:'18px',fontWeight:"600"}}>Trusted By</Typography>
							</Grid>	
				  <Grid container xs={12} sx={{m:"auto"}}>		
					  <Grid item xs={3} >
				<Image src="https://drive.google.com/uc?export=view&id=1oxOpbsvHPzmZz7El_wFTVxsp6t9U7gYL" style={{
    justifyContent:'space-around',borderRadius:'12px',width: '130px',
							  height: '48px'
						  }}>
							  
	</Image>
					  </Grid>
					  <Grid item xs={3}>
				<Image src="https://drive.google.com/uc?export=view&id=1RFPo_Uqxz8lYvx0ZSR5rtn9jdTL3kx-h" style={{
    justifyContent:'space-around',borderRadius:'12px',width: '130px',
	height: '48px'
  }}></Image>
					  </Grid>
					  <Grid item xs={3}>
				<Image src="https://drive.google.com/uc?export=view&id=1_R6Y-rgNyOtfvQRMofUe2X-he6a_NeYi" style={{
    justifyContent:'space-around',borderRadius:'12px',width: '130px',
	height: '48px'
  }}></Image>
			  </Grid>






				  </Grid>

						<Partnerslider />
			  </Box>		  
		  </Grid>
		  <Grid container xs={6}>
			  <Grid item xs={12}>
				  <Typography variant='h2'> Partner with Us </Typography> 
				  </Grid>
				  <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container >
			<Grid container xs={12} sx={{mt:'10px',mb:'20px'}} >
			<Grid item xs={1}>
			<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Name</Typography>
			</Grid>
			<Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Enter your name"
                  size='small'
                />
              </Grid>
              </Grid>
			
				<Grid container xs={12} sx={{mt:'10px',mb:'0px'}}>
				<Grid item xs={1} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Email</Typography>
				</Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="Enter your password"
                  type="password"
                  id="password"
													autoComplete="new-password"
													size='small'
                />
				</Grid>
					  </Grid>
					  <Grid container xs={12} sx={{mt:'10px',mb:'0px'}}>
				<Grid item xs={2} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Phone Number</Typography>
				</Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Enter your password"
                  type="password"
                  id="password"
				  autoComplete="new-password"
				  size='small'
                />
				</Grid>
					  </Grid>
					  <Grid container xs={12} sx={{mt:'10px',mb:'0px'}}>
				<Grid item xs={3} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Services Offered</Typography>
				</Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Enter your password"
                  type="password"
                  id="password"
				  autoComplete="new-password"
				  size='small'
                />
				</Grid>
				</Grid>
				<Grid container xs={12} sx={{mt:'10px',mb:'0px'}}>
				<Grid item xs={3} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Portfolio/Work samples</Typography>
				</Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Enter your password"
                  type="password"
                  id="password"
													autoComplete="new-password"
													size='small'
                />
				</Grid>
				</Grid>
				<Grid container xs={12} sx={{mt:'10px',mb:'0px'}}>
				<Grid item xs={3} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal' }}>Additional Comments</Typography>
				</Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Enter your password"
                  type="password"
                  id="password"
													autoComplete="new-password"
													size='small'
                />
				</Grid>
					  </Grid>
					  
              <Grid item xs={6} >
			  <Grid container justifyContent="flex-end" xs={12}>
              <Grid item>
			  <Button
              type="submit"
              fullWidth
              variant="contained"sx={{
				mt: 3, mb: 2, background: '#3A81F3',
				borderRadius: '8px'}}
			>
			Submit
			</Button>
              </Grid>
            </Grid>
              </Grid>
				  </Grid>					
          </Box>
		  </Grid>
	  </Grid>	  
  </>
		<Footer />
	</>
  )
}
export default Partnerus;
