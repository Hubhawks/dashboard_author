import React from 'react'
//import * as React from 'react';
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


import { green, blue, grey, red } from "@mui/material/colors";
import Dashboard_au from './Dashboard_author';


// const pages = ['Home', 'Services', 'About', 'Contact', 'Blog', 'Signin'];
// const dashboard1=['Editing','CoverDesigning','Translation','GhostWriting','AmazonAds','BookReviews','BookTrailer','BookStore']
// const drawerWidth = 240;



function BookTrailer(props, status, r, profile) {
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
	const [user, setUser] = useState({
		to: "rajeevkhanduja@gmail.com",
		subject: "",
		description: "",
		
	  });
// 	const [color, setColor] = useState("");
	const [write, setWrite] = useState("");
	const [msg,setMsg] = useState('');
//   const handleColor = () => {
//     setColor("#3A81F3");
//     setTextColor("white");
//   };

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
		const response = await fetch("http://localhost:5000/editing", {
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

//   const drawer = (
//     <div>
// 		  <Toolbar />
// 		  <Box sx={{m:"auto"}}>
// 			  <Image duration={0} src="https://drive.google.com/uc?export=view&id=1DAyaOiRTn1fi2eVSohkY6-2XgHxuwLd5" style={{
//     width: '98px',
//     height: '105px'
// 			  }}></Image>
		  
//           </Box>
// 	  <Divider />
//       <List>
//         {["Progress", "Marketplace", "FAQ","setting"].map((text, index) => (
// 			<>
				
// 		  <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
// 			</ListItem>
// 				<Divider />
				
// 				</>
// 		))}
			  
// 			  <button onClick={handleLogout}>
// 				<Link to ='/'>Logout</Link>	
// 				</button>
//       </List>
//     </div>
//   );

  const container = window !== undefined ? () => window().document.body : undefined;

	return (<>
	  <Dashboard_au />
    <Box  component='div'   sx={{ marginLeft: "350px" }}>
		
			<Grid container xs={12}>
			 <Grid item xs={12} sx={{textAlign:'initial'}}>
					<Typography>Describe your book’s storyline?</Typography>
				</Grid>
				<Grid item xs={6} sx={{textAlign:'initial'}}>
						  <TextField 
							 required
							 id="Summary"
							 name="Summary"
							 label="Summary"
						fullWidth
						size='small'
							 margin="dense"
							 {...register('Summary')}
							 error={errors.Summary ? true : false}
        />
				</Grid> 
		
				  </Grid>
		
			<Grid container xs={12}>
				<Grid item xs={12} sx={{textAlign:'initial'}}>
				<Typography>What kind of trailer do you want? </Typography>	
				</Grid>
				<Grid item xs={6}  sx={{textAlign:'initial'}}>
				<label htmlFor="field-rain">
                    <input
                        {...register("EditingType")}
                        type="radio"
                        value="Live-action trailer"
                        id="field-rain"
                    />
                    Live-action trailer
                </label><br/>
                <label htmlFor="field-wind">
                    <input
                        {...register("EditingType")}
                        type="radio"
                        value="Stock-based trailer"
                        id="field-wind"
                    />
                    Stock-based trailer
			</label>
				</Grid>
			</Grid>

				  
		
			<Grid container xs={12}>
				<Grid item xs={12} sx={{textAlign:'initial'}}>
					<Typography>What is the expected timeline?</Typography>
				</Grid>
				<Grid item xs={6} sx={{textAlign:'initial'}}>
				<label htmlFor="looking">
                    <input
                        {...register("EditingType")}
                        type="radio"
                        value="1 week"
                        id="looking"
                    />
                    1 week
					  </label><br/>
					  <label htmlFor="looking">
                    <input
                        {...register("EditingType")}
                        type="radio"
                        value="2-3 weeks"
                        id="looking"
                    />
                    2-3 weeks
					  </label><br/>
					  <label htmlFor="looking">
                    <input
                        {...register("EditingType")}
                        type="radio"
                        value="3-4 weeks"
                        id="looking"
                    />
                    3-4 weeks
			</label><br/>
				</Grid>
			</Grid>
			
               
			
			
			
				
				
				  <Grid container xs={12}>
					 
				<Grid item xs={12} sx={{textAlign:'initial'}}>
					<Typography>Additional comments (Optional)</Typography>
				</Grid>
				<Grid item xs={6} sx={{textAlign:'initial'}}>
						  <TextField 
							 required
							 id="Comments"
							 name="Comments"
							 label="Comments"
						fullWidth
						size="small"
							 margin="dense"
							 {...register('Comments')}
							 error={errors.Comments ? true : false}
        />
				</Grid>
				
					  </Grid>
					 
					
					  <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Register
            </Button>
			
		</Box>
		</>
  );
}
export default BookTrailer;