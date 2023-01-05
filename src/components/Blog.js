import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Box, Typography } from "@mui/material";
import Footer from "../footer";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import ResponsiveAppBar from "./menu";
export default function Blog() {
	return (<>
	  <ResponsiveAppBar/>
    <Box sx={{ margin: "100px" }}>
      
		  <ImageListItem>
		  <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=278&h=170&fit=crop&auto=format"
              style={{ m: "auto",transitionDuration:'0',animation:'0',width: 560,
			  height: 282}}
            />
		  </ImageListItem>
      <ImageList
        sx={{ margin: "50px" }}
        cols={4}
        style={{ overflow: "hidden" }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=278&h=170&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <Typography>{item.rajiv}</Typography>
            <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
          </ImageListItem>
        ))}
		  </ImageList>
		  <Grid container xs={12}>
				  <Grid item xs={12}>
				<Button variant='contained'sx={{
					my:
						  '80px',borderRadius:'8px',width:'148px',height:'48px',backgroundColor:'#3A81F3',fontSize:'14px'
				  }}>See More</Button>
					  </Grid>
				  </Grid>
	  </Box>
	  <Footer />
	  </>
  );
}

const itemData = [
	{
		img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		title: 'Breakfast',
		author: '@bkristastucchio',
	  },
	  {
		img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
		title: 'Burger',
		author: '@rollelflex_graphy726',
	  },
	  {
		img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
		title: 'Camera',
		author: '@helloimnik',
	  },
	  {
		img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
		title: 'Coffee',
		author: '@nolanissac',
	  },
	  {
		img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
		title: 'Hats',
		author: '@hjrc33',
	  },
	  {
		img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
		title: 'Honey',
		author: '@arwinneil',
	  },
	  {
		img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
		title: 'Basketball',
		author: '@tjdragotta',
	  },
	  {
		img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
		title: 'Fern',
		author: '@katie_wasserman',
	  },
	  {
		img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
		title: 'Mushrooms',
		author: '@silverdalex',
	  },
	  {
		img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
		title: 'Tomato basil',
		author: '@shelleypauls',
	  },
	  {
		img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
		title: 'Sea star',
		author: '@peterlaster',
	  },
	  {
		img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
		title: 'Bike',
		author: '@southside_customs',
	  },
	];
