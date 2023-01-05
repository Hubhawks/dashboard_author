import  Grid  from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';
import Image from 'mui-image';

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 2 }}
        py={{ xs: 3, sm: 2 }}
        bgcolor="#FAFBFC"
        color="black"
      >
        
				  <Grid container>
					  <Grid item xs={3} >
				  <Image src="https://drive.google.com/uc?export=view&id=1DAyaOiRTn1fi2eVSohkY6-2XgHxuwLd5" style={{
    justifyContent:'space-around',width:'auto'
						  }}></Image>
						  </Grid>
						  <Grid item xs={2} >
						  <Box sx={{marginTop:"20px",marginBottom:'20px'}}>
							  <Typography variant='h4' sx={{fontSize:'18px',fontWeight:"600"}}>Why Hubhawks</Typography></Box>
           				
              <Box sx={{marginTop:"20px",marginBottom:'20px'}}>
                <Link href="/" color="inherit" sx={{textDecoration:'none'}}>
				<Typography variant='h4' sx={{fontSize:'18px',fontWeight:"600"}}> SignUp </Typography>
                </Link>
              </Box>      
			</Grid>
					  
            <Grid item xs={2} >
              <Box sx={{marginTop:"20px"}}><Typography sx={{fontSize:'18px',fontWeight:"600"}}>Company</Typography></Box>
              <Box>
                <Link href="/" color="inherit" sx={{textDecoration:'none'}}>
				<Typography sx={{fontSize:'16px',fontWeight:"400",color: '#63636D'
}}>About us</Typography>
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" sx={{textDecoration:'none'}}>
				<Typography sx={{fontSize:'16px',fontWeight:"400",color: '#63636D'
}}>Services</Typography>
                </Link>
						  </Box>
						  <Box>
                <Link href="/" color="inherit" sx={{textDecoration:'none'}}>
				<Typography sx={{fontSize:'16px',fontWeight:"400",color: '#63636D'
}}>Blog</Typography>
                </Link>
              </Box>
            </Grid>
					  <Grid item xs={3} sm={3} sx={{marginTop:"20px"}}>
              <Typography sx={{fontSize:'18px',fontWeight:"600"}}>Support</Typography>
              <Box>
                <Link href="/" color="inherit" sx={{textDecoration:'none'}}>
                <Typography sx={{fontSize:'16px',fontWeight:"400",color: '#63636D'
}}>Contact us</Typography>
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" sx={{textDecoration:'none'}}>
				<Typography sx={{fontSize:'16px',fontWeight:"400",color: '#63636D'
}}>Privacy Policy</Typography>
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" sx={{textDecoration:'none'}}>
				<Typography sx={{fontSize:'16px',fontWeight:"400",color: '#63636D'
}}>Terms and Conditions</Typography>
                </Link>
              </Box>
			 </Grid>
					  
			  </Grid>
			  {/*
				  Icons Bar for left side*/} 
				  <Box textAlign="center" pt={{ xs: 5, sm: 7 }} pb={{ xs: 5, sm: 0 }}>
					  <Grid container xs={2} sx={{marginLeft:'130px'}}>
						  <Grid item sx={{m:"10px"}}>
						  <Image src="https://drive.google.com/uc?export=view&id=1IKS5RQhbzWL7DkiDYTbjjlxYnoc3sSqF" style={{
    justifyContent:'space-around',width:'auto'
						  }}></Image>
						  </Grid>
						  <Grid item sx={{m:"10px"}}>
						  <Image src="https://drive.google.com/uc?export=view&id=1MyFr-3hwERNPf6SOSsUuFfR7ndN3V0rN" style={{
    justifyContent:'space-around',width:'auto'
						  }}></Image>
						  </Grid>
						  <Grid item sx={{m:"10px"}}>
						  <Image src="https://drive.google.com/uc?export=view&id=1RIPmuZQcSxdOalMQSGm4_zhg3MfatCMr" style={{
    justifyContent:'space-around',width:'auto'
						  }}></Image>
						  </Grid>
					  </Grid>
					  <Grid item xs={6}>&reg; All rights reserved to Hubhawks 2022 </Grid>
          </Box>
        
      </Box>
    </footer>
  );
}