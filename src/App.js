import './App.css';
import LandingPage from './landingpage';
import ResponsiveAppBar from './components/menu'
import Services from './components/Services';
import About from './components/About';
import  Editing  from './Dashboard_author/Editing';
import Appl from './components/stepper';
import Contact from './components/contact';
import Home from './components/signup';
import Signin from './components/signin';
import Signup from './components/signup';
import Blog from './components/Blog';
import Partnerus from './components/Partnerus';
import { Route, Routes } from 'react-router-dom';
import Dashboard_au from './Dashboard_author/Dashboard_author';
import CoverDesigning from './Dashboard_author/CoverDesigning';
import Translation from './Dashboard_author/Translation';
import GhostWriting from './Dashboard_author/GhostWriting';
import AmazonAds from './Dashboard_author/AmazonAds';
import BookReviews from './Dashboard_author/BookReviews';
import BookTrailer from './Dashboard_author/BookTrailer';
import BookStore from './Dashboard_author/BookStore';
function App() {
	const user = localStorage.getItem("token");
  return (
	  <div className="App">
		  <Routes>
		  {user && <Route path="/r" exact element={<Dashboard_au />} />}
			  <Route path='/' element={<LandingPage />} />
			  <Route path='Home' element={<LandingPage />} />
			  <Route path='Services' element={<Services />} />
			  <Route path='Signin' element={<Signin />} />
			  <Route path='Blog' element={<Blog />} />
			  <Route path='About' element={<About />} />
			  <Route path='Signup' element={<Signup />} />
			  <Route path='Contact' element={<Contact />} />
			  <Route path='Partnerus' element={<Partnerus />} />
			  <Route path='dashboard_au' element={<Dashboard_au />} />
			  <Route path="Editing" element={<Editing />} />
			  <Route path="CoverDesigning" element={<CoverDesigning />} />
			  <Route path="Translation" element={<Translation />} />
			  <Route path="GhostWriting" element={<GhostWriting />} />
			  <Route path="AmazonAds" element={<AmazonAds />} />
			  <Route path="BookReviews" element={<BookReviews />} />
			  <Route path="BookTrailer" element={<BookTrailer />} />
			  <Route path="BookStore" element={<BookStore />} />
 		</Routes> 
		  
		 
    </div>
  );
}

export default App;
