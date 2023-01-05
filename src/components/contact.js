import React from 'react'
import { Button, Grid, Typography,Paper, Card} from '@mui/material';
import { TextField } from '@mui/material';
import { useState } from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useForm } from 'react-hook-form';
import Image from 'mui-image';
import { Box } from '@mui/material';
import ResponsiveAppBar from './menu';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Footer from '../footer';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
	
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);
	console.log(errors);
	return (<>
	  <ResponsiveAppBar />
	  <Grid container xs={12}>
		  
		  <Grid container xs={4} sx={{alignItems:'center',margin:"auto"}}>
				<Grid item xs={8} sx={{ mt: 5, ml:7 }}>
				  <Typography variant='h2' sx={{
fontStyle: 'normal',
fontWeight: 600,
fontSize: '36px',textAlign:'initial',
lineHeight: '48px',
color: '#BB0000'}}>We would love to hear from you</Typography> 
				  </Grid>
			<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, ml:8 }}>
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
			
				<Grid container xs={12} sx={{mt:'10px',mb:'10px'}}>
				<Grid item xs={1} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial' }}>Email</Typography>
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
				<Grid item xs={4} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial' }}>Phone Number</Typography>
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
				<Grid item xs={4} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial' }}>Services Offered</Typography>
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
				<Grid item xs={6} >
					<Typography variant='h4' sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial' }}>Additional Comments</Typography>
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
			Let's Connect
			</Button>
              </Grid>
            </Grid>
              </Grid>
				  </Grid>					
          </Box>
		  </Grid>
		  <Grid container xs={7}>
			<Image src='https://drive.google.com/uc?export=view&id=1Qi7_LxOweUePS6YgWguzUwPBN2IJ4TWB' style={{position: 'absolute',
width: '612px',
height: '609px',
 }}></Image>
		  </Grid>
		</Grid>



		{/*contact us card */}

		<Box sx={{m:12}}>
		<Card sx={{
			display: 'flex', backgroundColor: '#bb00000a', width: '928px', alignItems:'center',borderRadius: '20px',margin:'auto',
height: '312px'}}>
	  <Box sx={{ display: 'flex', flexDirection: 'column' }}>		
			<CardMedia
				 image='https://drive.google.com/uc?export=view&id=1Mdb77T7XTIE5cHmLWCZNgjU5mhSJ5SVT' style={{width: '360px',
height: '360px'}}>
					</CardMedia>		
			</Box>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
			<CardContent>
					<Typography component="div" sx={{
fontStyle: 'normal',
fontWeight: 600,
fontSize: '36px'}}>Contact us</Typography>
	
					<Typography component='div'>Ground Floor, GF-001, T-2, Parsvnath Greenville,
Sector - 48, Sohna Road, South City - 2,
Gurgaon, Haryana, 122018 </Typography>
						
					<Typography component='div' ><LocalPhoneIcon/>+91-7060495034</Typography>
					<CardContent>
						<Typography ><EmailIcon />abhijeet@HubHawks.com</Typography>
					</CardContent>
					
				
				</CardContent>
				</Box>
			</Card>
			</Box>
		<Footer />
	  </>
  )
}
export default Contact;
