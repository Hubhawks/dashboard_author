import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import  Grid  from '@mui/material/Grid';
import { TextField, Typography }  from '@mui/material';
import Button from '@mui/material/Button';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "mui-image";
import Footer from './footer';
import { Link } from 'react-router-dom';
import SwipeableTextMobileStepper from './components/Testimonial'
import ResponsiveAppBar from './components/menu';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
function LandingPage()
{
	return (
		<>
			<ResponsiveAppBar />
			<Box>
			<Grid container xs={12} sx={{marginTop:'90px',marginBottom:'100px'}}>
				<Grid container xs={4}sx={{marginLeft:'150px'}}>
			<Grid item xs={12} sm={12} >
						<Typography variant='h1' sx={{ fontWeight: '700',fontSize:'56px',color:'#333335',textAlign:'initial',lineHeight: '65.63px',fontStyle:"normal",width: '449px',
							height:
								'132px'}}>One stop literary<Grid xs={10}> marketplace</Grid></Typography>	
					</Grid>
					<Grid item xs={12}>
						<Typography variant='h6' sx={{ fontWeight: '400', fontSize: '18px', color: '#333335',textAlign:'initial'}}>Bridging the gap between good to great, make your 
						</Typography>
							<Grid item xs={12} sx={{backgroundImage:'url(https://drive.google.com/uc?export=view&id=1fe-sxrSCiDYou_uv53Qj60LAT1-55l6L)',backgroundRepeat:'no-repeat',backgroundPosition:'65px 21px'}}>
								<Typography variant='h6' sx={{ fontWeight: '400', fontSize: '18px', color: '#333335',textAlign:'initial',marginBottom:'50px' }}>book for bestseller</Typography>
							</Grid>
		
					</Grid>	
					<Grid item xs={2}>
					<Button variant='contained' size='large' sx={{mx:0,width:'158px',height:'48px',borderRadius: '8px'}} >Get Started</Button>
					</Grid>	
				</Grid>
				<Grid Container xs={4}sx={{marginLeft:'50px'}}>
				<Grid item xs={12} >
				<Image Duration={0} src="https://drive.google.com/uc?export=view&id=1ME-L6biUpvR1C4aD-GG5X3aiJw37xLQ9" style={{
    justifyContent:'space-around',width:'560px',height:'352px',transitionDuration:'0',animation:'0' 
						}}></Image>
						</Grid>
				</Grid>
			</Grid>
			</Box>
			<Grid container xs={12} >
			<Grid item xs={12}>
			<Typography variant='h5' sx={{fontStyle: 'normal',fontWeight: '600',fontSize: '24px',lineheight: '40px'}}>Publishers We Have Worked With</Typography>
				</Grid>	
			<Grid container xs={12} sx={{m:'100px'}}>
				<Grid item xs={2}>
				<Image Duration={0} src="https://drive.google.com/uc?export=view&id=1_R6Y-rgNyOtfvQRMofUe2X-he6a_NeYi" style={{
   justifyContent:'space-around',width:'173px',height:'120px',transitionDuration:'0',animation:'0' 
  }}></Image>
				</Grid>
				<Grid item xs={2}>
				<Image Duration={0} src="https://drive.google.com/uc?export=view&id=1o06m-nr_x3hnjH8cg6Q-d3EDdb4SFi3_" style={{
   justifyContent:'space-around',width:'173px',height:'120px',transitionDuration:'0',animation:'0' 
  }}></Image>
				</Grid>
				<Grid item xs={2}>
				<Image Duration={0} src="https://drive.google.com/uc?export=view&id=1eO72ezicWb325O0sCJKozZgfSUldQ0Gx" style={{
    justifyContent:'space-around',width:'174px',height:'120px',transitionDuration:'0',animation:'0' 
  }}></Image>
				</Grid>
				<Grid item xs={2}>
				<Image  Duration={0} src="https://drive.google.com/uc?export=view&id=11NhcuuyvNDCtCbBlEUCyWazQePiA9fwA" style={{
    justifyContent:'space-around',width:'173px',height:'108px',transitionDuration:'0',animation:'0' 
  }}></Image>
				</Grid>
				<Grid item xs={2}>
				<Image  Duration={0} src="https://drive.google.com/uc?export=view&id=1oxOpbsvHPzmZz7El_wFTVxsp6t9U7gYL" style={{
    justifyContent:'space-around',width:'173px',height:'104px',transitionDuration:'0',animation:'0' 
  }}></Image>
				</Grid>
				<Grid item xs={2}>
				<Image  Duration={0} src="https://drive.google.com/uc?export=view&id=1RFPo_Uqxz8lYvx0ZSR5rtn9jdTL3kx-h" style={{
    justifyContent:'space-around',width:'173px',height:'120px',transitionDuration:'0',animation:'0' 
  }}></Image>
				</Grid>
				</Grid>
			</Grid>
			<Grid container xs={12} >
				<Grid item xs={12} sx={{mb:'50px'}}>
					<Typography variant='h3' sx={{
fontstyle: 'normal',
fontWeight: '600',
fontsize: '36px',
lineheight: '48px'}}>Services Offered</Typography>
				</Grid>
				<Box sx={{ display:'flex',marginLeft: '150px',backgroundImage:"url(https://drive.google.com/uc?export=view&id=1jg23sMuMUpsHmrtk4vj8syKV1XhTELd6)", backgroundRepeat: 'no-repeat'}}>
					<ImageList 
        sx={{ margin: "29px" }}
        cols={4} gap={20}
        style={{ overflow: "hidden" }}
				>
					<>
          <ImageListItem> 
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=19g12d7cnoN8cwe3FCzImAzxkW7e7M-26"
              style={{ m: "auto",transitionDuration:'0',animation:'0',width:'270px',height:'142px'}}
            />
            <Typography variant='h4' sx={{fontSize:'18px',textAlign:'initial',fontWeight: '600',fontStyle: 'normal'}}>Editing</Typography>           
          </ImageListItem>     
          <ImageListItem>
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1bKNPL8v-xRco7O0CY7Fd2rzK_3e-SyT1"
              style={{ m: "auto",transitionDuration:'0',animation:'0',width:'270px',height:'142px'  }}
            />
            <Typography sx={{fontSize:'18px',textAlign:'initial',fontWeight: '600',fontStyle: 'normal'}}> BookStore </Typography>
            
          </ImageListItem>
          <ImageListItem>
            <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1UReQ66aY349xHnCACnDMGBGSEN_K2k5k"
              style={{ m: "auto",transitionDuration:'0',animation:'0',width:'270px',height:'142px'}}
            />
							<Typography sx={{fontSize:'18px',textAlign:'initial',fontWeight: '600',fontStyle: 'normal'}}> Ghost Writing</Typography>
							</ImageListItem>
							<Box sx={{ width:'335px',display: 'flex', backgroundImage: "url(https://drive.google.com/uc?export=view&id=1jg23sMuMUpsHmrtk4vj8syKV1XhTELd6)", backgroundRepeat: 'no-repeat',backgroundPosition: '235px 112px' }} >
							<ImageListItem>
							<Image src="https://drive.google.com/uc?export=view&id=1JlhoJV-AJhEpbGWJDVi4qqfAxQPMwFER"style={{ m: "auto",transitionDuration:'0',animation:'0',width:'270px',height:'142px'  }} />
								
								<Typography sx={{fontSize:'18px',textAlign:'initial',fontWeight: '600',fontStyle: 'normal'}}> Translation</Typography>
								</ImageListItem>	
							</Box>
           
        </>
					</ImageList>
					
					</Box>
			
			</Grid>
			<Box sx={{backgroundColor:'#bb00000a',
height: '521px',
left: '0px',
right: '0px',
				top: '1424px', marginTop: '70px'
			}} >
				<Box sx={{m:'80px',alignItems:'center',backgroundImage:'url(https://drive.google.com/uc?export=view&id=1SNCsWeUdLlpXUWq3cwwEbywWMbZk4BDj)',backgroundRepeat:'no-repeat',backgroundPosition:'31px 81px'}}>
			<Grid container xs={12} sx={{justifyContent:'center'}}>
					<Typography variant='h2' component='div'sx={{
						textAlign: 'center',
fontStyle: 'normal',
fontWeight: '600',
fontSize: '36px',
lineHeight: '48px'}}>Partner With Hubhawks</Typography></Grid>
			<Grid container xs={12} sx={{margin:'50px'}}>
				
					<Grid container xs={5} >
					
				<Grid item xs={6} >
								<Image Duration={0} src="https://drive.google.com/uc?export=view&id=1wFizUuVWnSqCCa5RvVmVR6fM2NigCfsL" style={{
    justifyContent:'space-around',width:'463px',height:'244px',borderRadius: '12px'
						}}></Image>
					</Grid>
				</Grid>
				<Grid container xs={6} sx={{marginLeft:'0px'}}>
				<Grid item xs={5} sx={{backgroundColor:'#FFFFFF',borderRadius:'12px', m:'auto',width:'20px',height:'104px'}}>
				<Grid container xs={12} sx={{ml:'7px',mt:'18px'}}>
							<Grid item xs={2} sm={2}>
								<Image src="https://drive.google.com/uc?export=view&id=1UFCpEs32Dv1vUZH2fe5Mi_LWzjrOQKLA" style={{
    justifyContent:'space-around',width:'52.78px',height:'48px',margin:'12px'
									}}></Image></Grid>
								
							<Grid container xs={8} sx={{m:"auto"}}>
							<Grid item xs={12} sm={12} spacing={3} sx={{margin:'auto'}}>
									<Typography sx={{  fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '24px',textAlign:'initial' }}>200+ Authors actively
									</Typography>
									<Grid item xs={12}>
									<Typography sx={{  fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '24px',marginRight:'43px',textAlign:'initial'}}>working with us</Typography></Grid>
									</Grid>
								</Grid>
								</Grid>	

						</Grid>	

						
						<Grid item xs={5} sx={{backgroundColor:'#FFFFFF',borderRadius:'12px', m:'auto',width:'20px',height:'104px'}}>
				<Grid container xs={12} sx={{ml:'7px',mt:'18px'}}>
							<Grid item xs={2} sm={2}>
								<Image src="https://drive.google.com/uc?export=view&id=10ZBFOkSfmgx1jibPD4GAZvv8gnN0wDHO" style={{
    justifyContent:'space-around',width:'52.78px',height:'48px',margin:'12px'
									}}></Image></Grid>
								
							<Grid container xs={8} sx={{m:"auto"}}>
							<Grid item xs={12} sm={12} spacing={3} sx={{margin:'auto'}}>
									<Typography sx={{ fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '24px',textAlign:'initial'}}>100k+ content
									</Typography>
									<Grid item xs={12}>
									<Typography sx={{ fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '24px',marginRight:'43px',textAlign:'initial'}}> pieces delivered</Typography></Grid>
									</Grid>
								</Grid>
								</Grid>	

						</Grid>	

						<Grid item xs={5} sx={{backgroundColor:'#FFFFFF',borderRadius:'12px', m:'auto',width:'20px',height:'104px'}}>
				<Grid container xs={12} sx={{ml:'7px',mt:'18px'}}>
							<Grid item xs={2} sm={2}>
								<Image src="https://drive.google.com/uc?export=view&id=1DkRa9ZXUDbUsLqOc_5MIWZ1xkz1I87sw" style={{
    justifyContent:'space-around',width:'52.78px',height:'48px',margin:'12px'
									}}></Image></Grid>
								
							<Grid container xs={8} sx={{m:"auto"}}>
							<Grid item xs={12} sm={12} spacing={3} sx={{margin:'auto'}}>
									<Typography sx={{ fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '24px',textAlign:'initial' }}>Connect with like
									</Typography>
									<Grid item xs={12}>
									<Typography sx={{  fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '24px',marginRight:'43px',textAlign:'initial'}}>-minded clients</Typography></Grid>
									</Grid>
								</Grid>
								</Grid>	

						</Grid>	


						
						<Grid item xs={5} sx={{backgroundColor:'#FFFFFF',borderRadius:'12px', m:'auto',width:'20px',height:'104px'}}>
				<Grid container xs={12} sx={{ml:'7px',mt:'18px'}}>
							<Grid item xs={2} sm={2}>
								<Image src="https://drive.google.com/uc?export=view&id=16M4SXr_kZ02n8n59_88qFjZD_ezAo4nd" style={{
    justifyContent:'space-around',width:'52.78px',height:'48px',margin:'12px'
									}}></Image></Grid>
								
							<Grid container xs={8} sx={{m:"auto"}}>
							<Grid item xs={12} sm={12} spacing={3} sx={{margin:'auto'}}>
									<Typography sx={{  fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '24px',textAlign:'initial' }}>200+ Authors actively
									</Typography>
									<Grid item xs={12}>
									<Typography variant='h4' sx={{ fontStyle: 'normal', fontWeight: '600', fontSize: '18px', lineHeight: '24px',marginRight:'43px',textAlign:'initial'}}>working with us</Typography></Grid>
									</Grid>
								</Grid>
								</Grid>	

						</Grid>	
				</Grid>
				</Grid>
					
					<Link to='/Partnerus' sx={{textDecoration: 'none'}}>
						<Typography variant='h5' sx={{
						textAlign: 'center', m: '78px',
						
						fontStyle: 'normal',
						fontWeight: 500,
						fontSize: '16px',
						lineHeight: '24px',						
						color: '#3A81F3'}}>
							Work with us</Typography>
					</Link>
					
					</Box>
				</Box>
			<Box sx={{ alignItems:'center',margin:'auto'}}>
			<Typography variant='h5' sx={{
				textAlign: 'center', mt: '20px', fontWeight: '600',
fontSize: '36px',
lineHeight: '48px' }}>Why Hubhawks</Typography>
			<Box sx={{ml:'130px',marginTop:'50px',marginBottom:'50px'}}>
			<Grid container xs={12} >
				<Grid container xs={12}>
						<Grid item sx={{ width: '271px', height:'212px',background:'#06B2BB1A',borderRadius: '12px',margin:"10px"}} >	
					<Grid item xs={12} >
					<Image src="https://drive.google.com/uc?export=view&id=1zoezVSzeufCNtDl38mhaGFYNDFrl3ZOb" style={{
    justifyContent:'center',width:'60px',height:'60px',margin:'12px'
							}}>
							</Image>
							</Grid>			
							<Grid item xs={9} sx={{m:'auto',textAlign:'initial'}}>	
						<Typography sx={{fontSize:"18px",fontWeight:'400',lineHeight:'24px'}}>10X your work and grow exponentially with us</Typography></Grid>
					</Grid>
					<Grid item sx={{ width: '271px', height:'212px',background:'#FDD2191A',borderRadius: '12px',margin:"10px"}} >
					<Grid item xs={12} sm={12}>
					<Image src="https://drive.google.com/uc?export=view&id=1h5IpQn5jPBMo5_-oB2MXj-1w3wAJBfjL" style={{
    justifyContent:'center',width:'60px',height:'60px',margin:'12px'
							}}>
							</Image>
							</Grid>			
							<Grid item xs={11} sx={{m:'auto',textAlign:'initial'}} >	
						<Typography sx={{fontSize:"18px",fontWeight:'400',lineHeight:'24px'}}>Have collaborated with over 20 bestselling authors and over 100 authors</Typography></Grid>
					
					</Grid>
					<Grid item sx={{ width: '271px', height:'212px',background:'#F788281A',borderRadius: '12px',margin:"10px"}} >
					
					<Grid item xs={12} sm={12}>
					<Image src="https://drive.google.com/uc?export=view&id=1GpeL2-xt5ORIeJ9QpJ8YOQCLQWLvmLxw" style={{
    justifyContent:'center',width:'60px',height:'60px',margin:'12px'
							}}>
							</Image>
							</Grid>			
							<Grid item xs={11} sx={{m:'auto',textAlign:'initial'}} >	
						<Typography sx={{fontSize:"18px",fontWeight:'400',lineHeight:'24px'}}>Invested over 17,000+ hours on author asset creation</Typography></Grid>
					
					</Grid>
					<Grid item  sx={{ width: '271px', height:'212px',background:'#FA54561A',borderRadius: '12px',margin:"10px"}}>
					
					<Grid item xs={12} sm={12}>
					<Image src="https://drive.google.com/uc?export=view&id=1vg2YBMFZNeBAFg1tLPFOqwmgh1vxSWyG" style={{
    justifyContent:'center',width:'60px',height:'60px',margin:'12px'
							}}>
							</Image>
							</Grid>			
							<Grid item xs={11} sx={{m:'auto',textAlign:'initial'}}>	
						<Typography sx={{fontSize:"18px",fontWeight:'400',lineHeight:'24px'}}>Guided by National bestselling author Kevin Missal who sold over 3L+ copies</Typography></Grid>
					
					</Grid>
				</Grid>
				
					<Grid container  sx={{ width: '271px', height:'212px',background:'#06B2BB1A',borderRadius: '12px',margin:"10px"}}>
					
					<Grid item xs={12} sm={12}>
					<Image src="https://drive.google.com/uc?export=view&id=1hzLWJ4fFKbyqWN_Vz6zeuhPbeR3jZ-0a" style={{
    justifyContent:'center',width:'60px',height:'60px',margin:'12px'
							}}>
							</Image>
							</Grid>			
							<Grid item xs={11} sx={{m:'auto',textAlign:'initial'}}>	
						<Typography sx={{fontSize:"18px",fontWeight:'400',lineHeight:'24px'}}>Pick your service and get it done with the utmost convenience</Typography></Grid>
					
					</Grid>
					<Grid container  sx={{ width: '271px', height:'212px',background:'#FDD2191A',borderRadius: '12px',margin:"10px"}}>
					
					<Grid item xs={12} sm={12}>
					<Image src="https://drive.google.com/uc?export=view&id=1ghc1eYAAk-SMF_ZQVuEEHvYh3syTfZZ6" style={{
    justifyContent:'center',width:'60px',height:'60px',margin:'12px'
							}}>
							</Image>
							</Grid>			
							<Grid item xs={12} sx={{m:'auto',textAlign:'initial'}}>	
						<Typography sx={{fontSize:"18px",fontWeight:'400',lineHeight:'24px'}}>Have worked with top publishers like Penguin, Simon & Schuster, Fingerprint, etc.</Typography></Grid>
					
					</Grid>
					<Grid container  sx={{ width: '271px', height:'212px',background:'#F788281A',borderRadius: '12px',margin:"10px"}}>
					
					<Grid item xs={12} sm={12}>
					<Image src="https://drive.google.com/uc?export=view&id=11FkVFXbHh5SVXtejfGFO01gXMz07YXhg" style={{
    justifyContent:'center',width:'60px',height:'60px',margin:'12px'
							}}>
							</Image>
							</Grid>			
							<Grid item xs={11} sx={{m:'auto'}}>	
						<Typography sx={{fontSize:"18px",fontWeight:'400',lineHeight:'24px'}}>Pocket-friendly services</Typography></Grid>
						
					
				</Grid>
				<Grid container  sx={{ width: '271px', height:'212px',background:'#FA54561A',borderRadius: '12px',margin:"10px"}}>
				
					<Grid item xs={12} sm={12}>
					<Image src="https://drive.google.com/uc?export=view&id=1D-xyyOa-Bp5WwY_OovRYXKpkEINfWeSM" style={{
    justifyContent:'center',width:'60px',height:'60px',margin:'12px'
							}}>
							</Image>
							</Grid>			
							<Grid item xs={11} sx={{m:'auto',textAlign:'initial'}}>	
						<Typography sx={{fontSize:"18px",fontWeight:'400',lineHeight:'24px'}}>India’s first e-commerce platform for authors needs</Typography></Grid>	
					
					</Grid>
					
					</Grid>
					</Box>
			</Box>
			
			{/*Testimonials */}
			<Box sx={{margin:"auto"}}>
				<Typography variant='h2' sx={{fontSize:'36px',
fontStyle: 'normal',color: '#000000',
fontWeight: 600,
lineHeight: '48px'}}>Testimonials</Typography>	
				<Grid container xs={12}>
				<Grid item xs={1}>
				<Image src="https://drive.google.com/uc?export=view&id=1C0q5be4_iBseQdLM_uX7uq0AJpznpjBk" style={{
    justifyContent:'space-around',width:'70px',height:'48px'
					}}>
					</Image>		
					</Grid>
					
				</Grid> 	
				
				<SwipeableTextMobileStepper />
				
				<Image  duration={0} src="https://drive.google.com/uc?export=view&id=1CdOU3VwHUCO-2WT2GBkp32REKzJYxPpC" style={{
    width:'70px',height:'48px',marginLeft:"1300px"
					}}>
					</Image>
					
						
			

</Box>

			{/*Founder story for home page*/}
			{/* <Box>
			
			<Paper sx={{backgroundColor:'#bb00000a'}}>
			<Typography variant='h5'>Founder Story</Typography>
			<Grid container xs={12}>
			<Grid container xs={12} sx={{m:'50px',backgroundColor:'#FFFFFF',borderRadius:'20px'}}>
				<Grid item xs={6}sx={{m:'20px'}}>
					<Typography sx={{fontsize:'16px',fontStyle:'Roboto',fontWeight:'400px',color:'#000000'}}>
					Kevin Missal wrote his first book at the age of 14, and at 22, the St. Stephens graduate has turned out to be a bestselling author and a full-time writer with the first two books in his Kalki series being runaway successes. Along with the Narasimha series being published by Harper Collins, his recent release with Penguin reimagines the fabled story of Sinbad the Sailor. Kevin loves fantasy fiction and has always been a fan of mythology. His books have been featured in publications like the Sunday Guardian, The New Indian Express and Millennium Post.
						</Typography>
						</Grid>
						<Grid item xs={5} sx={{mx:'0px'}} >
						
						<Image src="https://drive.google.com/uc?export=view&id=1uXojzON_Pp414rpaWSVCPOJO7E8cY9xL" style={{
    justifyContent:'space-around',width:'200px',height:'200px'
					}}></Image>	
							
							</Grid>
					

				</Grid>
				</Grid>
				</Paper>
				</Box> */}
			<Box sx={{ display: 'flex',backgroundColor: '#bb00000a',height:'527px',flexDirection: 'column'}}>
			<Typography component="div" variant="h2" sx={{fontWeight: '600',textAlign:'center',margin:"auto",
fontSize: '36px',
lineHeight: '48px'}}>
            Founder's Story
          </Typography>
				<Card sx={{
					display: 'flex', backgroundColor: '-moz-initial', width: '1140px',margin:'auto',
height: '329px',borderRadius:'20px',marginRight:'auto',marginLeft:'auto'}}>
      		<Box sx={{ display: 'flex', flexDirection: 'column',margin:'auto'}}>
      		  <CardContent sx={{ flex: '1 0 auto' }}>
          
          <Typography variant="subtitle1" component="div" sx={{width: '643px',height: '168px',fontStyle: 'normal',fontSize: '16px',lineHeight: '24px',textAlign: 'initial'}}>
		  Kevin Missal wrote his first book at the age of 14, and at 22, the St. Stephens graduate has turned out to be a bestselling author and a full-time writer with the first two books in his Kalki series being runaway successes. Along with the Narasimha series being published by Harper Collins, his recent release with Penguin reimagines the fabled story of Sinbad the Sailor. Kevin loves fantasy fiction and has always been a fan of mythology. His books have been featured in publications like the Sunday Guardian, The New Indian Express and Millennium Post.
					
          </Typography>
					</CardContent>
					</Box>
        <Box sx={{ display: 'flex', alignItems: 'center', margin:'auto'}}>
          
		<CardMedia
        component="img"
        sx={{ width: 209,height:242 }}
        image="https://drive.google.com/uc?export=view&id=1uXojzON_Pp414rpaWSVCPOJO7E8cY9xL"
        alt="Live from space album cover"
				/>
      
		</Box> 
				
			</Card>
			</Box>
			<Paper sx={{height:'386px'}}>
				<Box sx={{backgroundColor:'#EFF2F5',width: '1140px',height: '272px',borderRadius: '12px',margin:'100px',marginLeft:'auto',marginRight:'auto'}}>
					<Grid container xs={12}>
						<Grid item xs={12} sx={{textAlign:'center',display:'flex',margin:'30px'}}>
							<Typography variant='h3' sx={{margin:'auto',
						
						
						fontStyle: 'normal',
						fontWeight: 600,
						fontSize: '24px',
						lineHeight: '40px',
						/* or 167% */
						
						textAlign: 'center',
								
						width: '601px',
						height: '80px'
								
								
								
					}}>Sign up for free tips and tricks to hawk your readership, and get 5% off on your first purchase</Typography>
						</Grid>
					</Grid>
					<Grid container xs={12}>
						<Grid container xs={6}>
							<Grid item xs={12} sx={{marginLeft:"278px"}}>
								<TextField fullwidth  size="small" sx={{width: '372px',backgroundColor:'white',height: '40px'}} placeholder='enter your email'  />
								<Typography variant='subtitle2' sx={{textAlign:'initial'}}>We know spam hurts, we won’t spam you</Typography>
							</Grid>
						</Grid>
						<Grid container xs={6} sx={{marginLeft:"-78px"}}>
						<Grid item xs={12}>
								<Button variant='contained' size="large" sx={{width:'226px',borderRadius:'8px'}}>Activate 5% off</Button >
								<Typography variant='subtitle2' sx={{fontSize:'14px',color: '#3A81F3'}}>No thanks, discounts aren’t my thing</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</Paper>
			<Footer />
			</>
	);

}
export default LandingPage;