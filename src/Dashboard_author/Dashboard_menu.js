import * as React from 'react';
import { useRef } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useForm , Controller, FormProvider } from "react-hook-form";
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ResponsiveAppBar from '../components/menu';
import Image from "mui-image";
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link, Navigate } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { borderColor } from '@mui/system';
import axios from 'axios';
// import Editing from './Editing';

import { green, blue, grey, red } from "@mui/material/colors";

const pages = [ 'Home','Services','About','Contact','Blog','Signin'];
const drawerWidth = 240;



function Dashboard_menu(props, status, r, profile) {
	const { register, watch,control,handleSubmit,setValue, formState: { errors } } = useForm();
	const { window } = props;
	const form = useRef();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [adventurous, setAdventurous] = useState("");
	const [Autobiographical, setAutobiographical] = useState("");
	const [Biography, setBiography] = useState("");
	const [Candid, setCandid] = useState("");
	const [Classic, setClassic] = useState("");
	const [Coming, setComing] = useState("");
	const [Dark, setDark] = useState("");
	const [Deep, setDeep] = useState("");
	const [Diverse, setDiverse] = useState("");
	const [Educational, setEducational] = useState("");
	const [Empowering, setEmpowering] = useState("");
	const [Fictional, setFictional] = useState("");
	const [Futuristic, setFuturistic] = useState("");
	const [Funny, setFunny] = useState("");
	const [Emotional,setEmotional] = useState("");
	const [selectedOption, setSelectedOption] = useState("");
	const [textInput, setTextInput] = useState("");

	const [write, setWrite] = useState("");
	


const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
	};
	const handlewrite = (event) => {
		setWrite(event.target.value);
	}

	const onSubmit = async (data,e) => {
		const formData = new FormData();
		console.log(data);
		e.preventDefault();
		const response = await fetch("http://localhost:5000/users", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((res) => res.json()).then(async (res) => {
			const resData = await res;
			console.log(resData);
			if (resData.status === "success") {
				alert("Message Sent");
			} else if (resData.status === "fail") {
				alert("Message failed to send");
			}
		})
		console.log(JSON.stringify(data));
		console.log(FormData, 'hi');
	  };
	function colorForStatus(status) {
		switch (status) {
		  case "Adventurous":
		  case "Autobiographical":
			case "Biography":
			case "Candid":
			case "Classic":
			case "Coming":
			case "Dark":
			case "Deep":
			case "Diverse":
			case "Educational":
			case "Empowering":
			case "Fictional":
			case "Futuristic":
			case "Funny":
			case "Emotional":
				
				
			return blue;
		  
		  default:
			return grey;
		}
	}
	const handleLogout = () => {
		localStorage.removeItem("token");
		
		
	};
	const onValueChange=(event)=> {
		setSelectedOption(event.target.value);
		console.log(event.target.value);	
	  }
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
	};
	const handleClick = () => {
		console.info('You clicked the Chip.');
	  };

  const drawer = (
    <div>
		  <Toolbar />
		  <Box sx={{m:"auto"}}>
			  <Image duration={0} src="https://drive.google.com/uc?export=view&id=1DAyaOiRTn1fi2eVSohkY6-2XgHxuwLd5" style={{
    width: '98px',
    height: '105px'
			  }}></Image>
		  
          </Box>
	  <Divider />
      <List>
        {["Progress", "Marketplace", "FAQ","setting"].map((text, index) => (
			<>
				
		  <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
			</ListItem>
				<Divider />
				
				</>
		))}
			  
			  <button onClick={handleLogout}>
				<Link to ='/'>Logout</Link>	
				</button>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (<>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ color:'#FFFFFF', display: { xs: 'flex', md: 'flex'}, marginleft:"20px",margin:'auto'}}>
  
            {pages.map((page) => (
              <Button
					key={page}
					onClick={()=>{}}
                sx={{ my: 3, color: 'black', display: 'block',mx:3}}
              >			
					<Link to={`/${page}`} style={{textDecoration:'none'}}>{page}</Link>
              </Button>
			))}
			   <Link to='/SignUp'><Button variant='contained' sx={{ margin: "25px" }} >SignUp </Button> </Link>
			
		  	
		  
		  </Box>
		 
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
		  </Box>
		  <Box sx={{ color:'#FFFFFF', display: { xs: 'flex', md: 'flex'}, marginleft:"20px",margin:'auto'}}>
  
  {pages.map((page) => (
	<Button
		  key={page}
		  onClick={()=>{}}
	  sx={{ my: 3, color: 'black', display: 'block',mx:3}}
	>			
		  <Link to={`/${page}`} style={{textDecoration:'none'}}>{page}</Link>
	</Button>
  ))}
	 <Link to='/SignUp'><Button variant='contained' sx={{ margin: "25px" }} >SignUp </Button> </Link>
  
	

</Box>
		 
	  </Box>
	  <Box component='nav'>
	  <Link to="/Editing">
              Editing
            </Link>
            <Link to="/CoverDesigning" >
              CoverDesigning
            </Link>
            <Link to="/Translation" >
              Translation
            </Link>
            <Link to="/GhostWriting">
              GhostWriting
		  </Link>
		  <Link to="/AmazonAds">
              AmazonAds
            </Link>
			<Link to="/BookReviews">
			BookReviews
            </Link>
			<Link to="/BookTrailer">
              BookTrailer
            </Link>
			<Link to="/Bookstore">
			Bookstore
            </Link>
		  
		  </Box>
	  </>
  );
}
export default Dashboard_menu;