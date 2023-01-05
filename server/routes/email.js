const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

const path = require('path');
const express = require('express');
 
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors')
app.use(cors())
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath)); 
 
app.post('/users',(req,res)=>{
	
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	console.log(data, 'hhhl');
	let mailOptions = {
		from: `${req.body.email}`,
		to: 'rajiv@hubhawks.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong>What type of editing are you looking for?</strong><br> ${req.body.EditingType}<br> <strong>Which three words describe your book?</strong><br>  ${req.body.words1}<br>${req.body.words2}<br>${req.body.words3}<br>${req.body.words4}<br>${req.body.words5}<br>${req.body.words6}<br>${req.body.words7}<br>${req.body.words8}<br>${req.body.words9}<br>${req.body.words10}<br>${req.body.words11}<br>${req.body.words12}<br>${req.body.words13}<br>${req.body.words14}<br>${req.body.words15}
		<br><strong>How many words are there in your book?<strong><br>${req.body.Wordsbook}<br><strong>Additional comments (Optional)</strong><br>${req.body.Comments}`,
	  };
 
	
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
app.post('/editing',async (req,res)=>{
	
	// const response =  await fetch("http://localhost:5000/users", {
	// 		method: "GET",
	// 		headers: {
	// 			"Content-type": "application/json",
	// 		},
	// 		body: JSON.stringify(data),
	// 	}).then((res) => res.json()).then(async (res) => {
	// 		const resData = await res;
	// 		console.log(resData);
	// 		if (resData.status === "success") {
	// 			alert("Message Sent");
	// 		} else if (resData.status === "fail") {
	// 			alert("Message failed to send");
	// 		}
	// 	})
	// 	console.log(JSON.stringify(data));
		
	  
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	
	let mailOptions = {
		from: `${req.body.weather}`,
		to: 'rajiv@hubhawks.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong>What type of editing are you looking for?</strong><br> ${req.body.EditingType}<br> <strong>Which three words describe your book?</strong><br>  ${req.body.words1}<br>${req.body.words2}<br>${req.body.words3}<br>${req.body.words4}<br>${req.body.words5}<br>${req.body.words6}<br>${req.body.words7}<br>${req.body.words8}<br>${req.body.words9}<br>${req.body.words10}<br>${req.body.words11}<br>${req.body.words12}<br>${req.body.words13}<br>${req.body.words14}<br>${req.body.words15}
		<br><strong>How many words are there in your book?<strong><br>${req.body.Wordsbook}<br><strong>Additional comments (Optional)</strong><br>${req.body.Comments}`,
	  };
 
    
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
app.post('/translation',(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	
	let mailOptions = {
		from: `${req.body.weather}`,
		to: 'rajiv@hubhawks.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong>What type of editing are you looking for?</strong><br> ${req.body.EditingType}<br> <strong>Which three words describe your book?</strong><br>  ${req.body.words1}<br>${req.body.words2}<br>${req.body.words3}<br>${req.body.words4}<br>${req.body.words5}<br>${req.body.words6}<br>${req.body.words7}<br>${req.body.words8}<br>${req.body.words9}<br>${req.body.words10}<br>${req.body.words11}<br>${req.body.words12}<br>${req.body.words13}<br>${req.body.words14}<br>${req.body.words15}
		<br><strong>How many words are there in your book?<strong><br>${req.body.Wordsbook}<br><strong>Additional comments (Optional)</strong><br>${req.body.Comments}`,
	  };
 
    
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
app.post('/translation',(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	
	let mailOptions = {
		from: `${req.body.weather}`,
		to: 'rajiv@hubhawks.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong>What type of editing are you looking for?</strong><br> ${req.body.EditingType}<br> <strong>Which three words describe your book?</strong><br>  ${req.body.words1}<br>${req.body.words2}<br>${req.body.words3}<br>${req.body.words4}<br>${req.body.words5}<br>${req.body.words6}<br>${req.body.words7}<br>${req.body.words8}<br>${req.body.words9}<br>${req.body.words10}<br>${req.body.words11}<br>${req.body.words12}<br>${req.body.words13}<br>${req.body.words14}<br>${req.body.words15}
		<br><strong>How many words are there in your book?<strong><br>${req.body.Wordsbook}<br><strong>Additional comments (Optional)</strong><br>${req.body.Comments}`,
	  };
 
    
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
app.post('/ghostwriting',(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	
	let mailOptions = {
		from: `${req.body.weather}`,
		to: 'rajiv@hubhawks.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong>What type of editing are you looking for?</strong><br> ${req.body.EditingType}<br> <strong>Which three words describe your book?</strong><br>  ${req.body.words1}<br>${req.body.words2}<br>${req.body.words3}<br>${req.body.words4}<br>${req.body.words5}<br>${req.body.words6}<br>${req.body.words7}<br>${req.body.words8}<br>${req.body.words9}<br>${req.body.words10}<br>${req.body.words11}<br>${req.body.words12}<br>${req.body.words13}<br>${req.body.words14}<br>${req.body.words15}
		<br><strong>How many words are there in your book?<strong><br>${req.body.Wordsbook}<br><strong>Additional comments (Optional)</strong><br>${req.body.Comments}`,
	  };
 
    
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
app.post('/amazonAds',(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	
	let mailOptions = {
		from: `${req.body.weather}`,
		to: 'rajiv@hubhawks.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong>What type of editing are you looking for?</strong><br> ${req.body.EditingType}<br> <strong>Which three words describe your book?</strong><br>  ${req.body.words1}<br>${req.body.words2}<br>${req.body.words3}<br>${req.body.words4}<br>${req.body.words5}<br>${req.body.words6}<br>${req.body.words7}<br>${req.body.words8}<br>${req.body.words9}<br>${req.body.words10}<br>${req.body.words11}<br>${req.body.words12}<br>${req.body.words13}<br>${req.body.words14}<br>${req.body.words15}
		<br><strong>How many words are there in your book?<strong><br>${req.body.Wordsbook}<br><strong>Additional comments (Optional)</strong><br>${req.body.Comments}`,
	  };
 
    
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
app.post('/booktrailer',(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	
	let mailOptions = {
		from: `${req.body.weather}`,
		to: 'rajiv@hubhawks.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong>What type of editing are you looking for?</strong><br> ${req.body.EditingType}<br> <strong>Which three words describe your book?</strong><br>  ${req.body.words1}<br>${req.body.words2}<br>${req.body.words3}<br>${req.body.words4}<br>${req.body.words5}<br>${req.body.words6}<br>${req.body.words7}<br>${req.body.words8}<br>${req.body.words9}<br>${req.body.words10}<br>${req.body.words11}<br>${req.body.words12}<br>${req.body.words13}<br>${req.body.words14}<br>${req.body.words15}
		<br><strong>How many words are there in your book?<strong><br>${req.body.Wordsbook}<br><strong>Additional comments (Optional)</strong><br>${req.body.Comments}`,
	  };
 
    
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
app.post('/bookstore',(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	
	let mailOptions = {
		from: `${req.body.weather}`,
		to: 'rajiv@hubhawks.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong>What type of editing are you looking for?</strong><br> ${req.body.EditingType}<br> <strong>Which three words describe your book?</strong><br>  ${req.body.words1}<br>${req.body.words2}<br>${req.body.words3}<br>${req.body.words4}<br>${req.body.words5}<br>${req.body.words6}<br>${req.body.words7}<br>${req.body.words8}<br>${req.body.words9}<br>${req.body.words10}<br>${req.body.words11}<br>${req.body.words12}<br>${req.body.words13}<br>${req.body.words14}<br>${req.body.words15}
		<br><strong>How many words are there in your book?<strong><br>${req.body.Wordsbook}<br><strong>Additional comments (Optional)</strong><br>${req.body.Comments}`,
	  };
 
    
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
// listen to the port
app.listen(5000, () => {
    console.log('server start on port 3030');
  });

module.exports = router;