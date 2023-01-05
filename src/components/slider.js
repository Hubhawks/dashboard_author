import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Avatar, Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from "mui-image";
import { useState } from 'react';
function Partnerslider() {
	const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
	const [index, setState] = useState(0);
	// const handleChangeIndex = (index)=> {
	// 	setState({index});
	//onChangeIndex={handleChangeIndex}
	//   };
  return (
	  <>
		  
		  <AutoPlaySwipeableViews sx={{width: '480px',height: '240px'}}>
		  <Card sx={{ display: 'flex',background: '#FFFFFF',width: '480px',
					  height: '240px'
				  }}>
		  <Avatar
        
        src="https://drive.google.com/uc?export=view&id=1_IukUsNVyk1Vw1hd-blJfZA0weyEyPj4" 
        alt="Live from space album cover"
     sx={{width:'60px',height:'60px'}} />
		  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
			<CardContent sx={{ textAlign: 'initial' }}>
						  <Typography variant="h4"color= '#000000' component="div" sx={{fontSize: '18px',textAlign: 'initial',fontWeight: '600'}}>
			Manuraj Dubey
          </Typography>
			<Typography component="div" variant="h5" color= '#333335' sx={{width: '398px',fontSize:"16px"
,height: '120px'}}>
			It was a pleasure collaborating with HubHawks. The animated videos are well designed and conceptualised, videos are engaging, highly professional, very gripping, theme oriented and the best part is that they are well edited. 
			</Typography>
			
		  </CardContent>
			  </Box>  
		  </Card>
		  
			  <Card sx={{ display: 'flex' }}>
			  <Avatar
        
        src="https://drive.google.com/uc?export=view&id=1sboSwbsVonwhA_B57ON-DEkUkDJQz-Eo" 
        alt="Live from space album cover"
     sx={{width:'60px',height:"60px"}} />
		  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<CardContent sx={{textAlign:'initial'}}>
						<Typography component="div" variant="h5" color= '#333335' sx={{width: '398px',fontSize:"16px"
,height: '120px'}}>
						The team at HubHawks is like a breath of fresh air. They don't just copy-paste your ideas, these young individuals own your creative expression. Their brilliant additions take the work a notch higher. Glad to be working with them.	</Typography>
							<Typography variant="h4"color= '#000000' component="div" sx={{fontSize: '18px',textAlign: 'initial',fontWeight: '600'}}>
							Saba Karim Khan
          </Typography>
				  </CardContent>
				  </Box>
		  </Card>
		  
		   <Card sx={{ display: 'flex' }}>
		  <Avatar
        
        src="https://drive.google.com/uc?export=view&id=1TA1u04H2sjWcjT_KOTTjlTuPbt0zHSzg" 
        alt="Live from space album cover"
     sx={{width:'60px',height:"60px"}} />
					  <CardContent sx={{textAlign:'initial'}}>
						<Typography component="div" variant="h5" color= '#333335' sx={{width: '398px',fontSize:"16px"
,height: '120px'}}>
						I was amazed by the way the team was able to bring the descriptions and characters I shared with them to life. The attention to detail is simply impeccable.	</Typography>
							<Typography variant="h4"color= '#000000' component="div" sx={{fontSize: '18px',textAlign: 'initial',fontWeight: '600'}}>
							Krishna Udayasankar
          </Typography>
						</CardContent>
			  
		  </Card> 
			  
			  </AutoPlaySwipeableViews>
			
	  </>
  );
}

export default Partnerslider;