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



function BookReviews(props, status, r, profile) {
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
    <Box component='form' encType="multipart/form-data"
      method="post"  onSubmit={handleSubmit}  sx={{ m: "50px" }}>
		
			<Grid container xs={12}>
			{/* <Grid item>
						  <Typography>What is the author’s background?</Typography>
						  <TextField 
							 required
							 id="Summary"
							 name="Summary"
							 label="Summary"
							 fullWidth
							 margin="dense"
							 {...register('Summary')}
							 error={errors.Summary ? true : false}
        />
				</Grid> */}
		
				  </Grid>
				  {/* <Grid container>
					  <Typography sx={{fontSize:'18px'}}>Which three words describe your book?</Typography>
				  <Stack direction="row" spacing={2}>
				<Button label="Adventurous" 
							 style={{
								backgroundColor: colorForStatus((status = adventurous))[300],
								color: "white"
								  }} 
								  value={user.description}
							  onClick={(e) => {
								  setAdventurous("Adventurous");
								  setValue("words1", "Adventurous");
								  
							  }} >Adventurous </Button>
						  <Button
							  style={{
								backgroundColor: colorForStatus((status = Autobiographical))[300],
								color: "white"
							  }} 
							  label="Autobiographical"
							   onClick={(e) => {
								   setAutobiographical("Autobiographical");
								   setValue("words2", "Autobiographical");
							  }} >Autobiographical </Button> */}
						 {/* //onDelete={ (e) => {
					// 		setAutobiographical("")
					//    }}  */}
						  {/* <Button label="Biography"
							  style={{
								  backgroundColor: colorForStatus((status = Biography))[300],
								  color: "white"
							  }}
							  onClick={(e) => {
								  setBiography("Biography");
								  setValue("words3", "Biography"); }} >Biography</Button>
						  <Button label="Candid"
							  style={{
								  backgroundColor: colorForStatus((status = Candid))[300],
								  color: "white"
							  }} onClick={(e) => {
								  setCandid("Candid");
							  setValue("word4","Candid")}} >Candid</Button>
						  
						  <Button label="Classic"
							  style={{
								  backgroundColor: colorForStatus((status = Classic))[300],
								  color: "white"
							  }} onClick={(e) => {
								setClassic("Classic");
								  setValue("word5","Classic")
							  }} >Classic</Button>
						  <Button label="Coming-of-age"
							  style={{
								  backgroundColor: colorForStatus((status = Coming))[300],
								  color: "white"
							  }}
							  onClick={(e) => {
								  setComing("Coming-of-age");
							  setValue("word6","Coming-of-age")}} >Coming-of-age</Button>

						  <Button label="Dark"
							  style={{
								  backgroundColor: colorForStatus((status = Dark))[300],
								  color: "white"
							  }}
							  onClick={(e) => {
								  setDark("Dark");
							  setValue("word7","Dark")}} >Dark</Button>
						  <Button label="Deep"
							  style={{
								backgroundColor: colorForStatus((status = Deep))[300],
								color: "white"
							  }}
							  onClick={(e) => {
								  setDeep("Deep");
							  setValue("word8","Deep")}} >Deep</Button>
						  <Button label="Diverse"
							 style={{
								backgroundColor: colorForStatus((status = Diverse))[300],
								color: "white"
							  }} onClick={(e) => {
								  setDiverse("Diverse");
							  setValue("word9","Diverse")}} >Diverse</Button>
						  <Button label="Educational"
							  style={{
								  backgroundColor: colorForStatus((status = Educational))[300],
								  color: "white"
							  }} onClick={(e) => {
								  setEducational("Educational");
								  setValue("word10","Educational")}}>Educational</Button>
						  <Button label="Empowering"
							 style={{
								backgroundColor: colorForStatus((status = Empowering))[300],
								color: "white"
							  }} onClick={(e) => {
								  setEmpowering("Empowering");
								  setValue("words11", "Empowering");
							  }} >Empowering</Button>
						  <Button label="Emotional"
							 style={{
								backgroundColor: colorForStatus((status = Emotional))[300],
								color: "white"
							  }} onClick={(e) => {
								  setEmotional("Emotional");
								  setValue("word12", "Emotional");
							  }} >Emotional</Button>
						  <Button label="Fictional"
							 style={{
								backgroundColor: colorForStatus((status = Fictional))[300],
								color: "white"
							  }} onClick={(e) => {
								  setFictional("Fictional");
								  setValue("words13", "Fictional");}} >Fictional</Button>
						  <Button label="Funny"
							  style={{
								  backgroundColor: colorForStatus((status = Funny))[300],
								  color: "white"
							  }} onClick={(e) => {
								  setFunny("Funny");
							  setValue("words14","Funny")}}>Funny </Button>
						  <Button label="Futuristic"
							  style={{
								  backgroundColor: colorForStatus((status = Futuristic))[300],
								  color: "white"
							  }} onClick={(e) => {
								  setFuturistic("Futuristic");
							  setValue("words15","Futuristics")}}>Futuristic</Button>
    </Stack>
			</Grid> */}
			<Typography>Choose the preferred platform </Typography>		  
		<label htmlFor="field-rain">
                    <input
                        {...register("EditingType")}
                        type="radio"
                        value="Instagram"
                        id="field-rain"
                    />
                    Instagram
                </label>
                <label htmlFor="field-wind">
                    <input
                        {...register("EditingType")}
                        type="radio"
                        value="Goodreads"
                        id="field-wind"
                    />
                    Goodreads
			</label>
			<label htmlFor="field-wind">
                    <input
                        {...register("EditingType")}
                        type="radio"
                        value="Amazon"
                        id="field-wind"
                    />
                    Amazon
			</label>
			<Typography>How many reviews would you like to have?</Typography>	
                <label htmlFor="looking">
                    <input
                        {...register("EditingType")}
                        type="radio"
                        value="50"
                        id="looking"
                    />
                    50
					  </label>
					  <label htmlFor="looking">
                    <input
                        {...register("EditingType")}
                        type="radio"
                        value="100"
                        id="looking"
                    />
                    100
					  </label>
					  <label htmlFor="looking">
                    <input
                        {...register("EditingType")}
                        type="radio"
                        value="150"
                        id="looking"
                    />
                    150
			</label>
			<label htmlFor="looking">
                    <input
                        {...register("EditingType")}
                        type="radio"
                        value="200"
                        id="looking"
                    />
                    200
			</label>
			
			<Grid item>
						  <Typography>Drop your amazon book link </Typography>
						  <TextField 
							 required
							 id="Comments"
							 name="Comments"
							 label="Comments"
							 fullWidth
							 margin="dense"
							 {...register('Comments')}
							 error={errors.Comments ? true : false}
        />
				</Grid>
				
				
				  <Grid container>
					 
				<Grid item>
						  <Typography>Additional comments (Optional)</Typography>
						  <TextField 
							 required
							 id="Comments"
							 name="Comments"
							 label="Comments"
							 fullWidth
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
export default BookReviews;