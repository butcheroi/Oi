import React from 'react'; 
import Header from './components/header'; 
import Footer from './components/footer'; 
import Home from './components/home'; 
import About from './components/about'; 
import Contact from './components/contactus'; 
const App = () => { 
const [page, setPage] = React.useState('home'); 
const renderPage = () => { 
switch (page) { 
case 'about': 
return <About />; 
case 'contact': 
return <Contact />; 
default: 
return <Home />; 
} 

}; 
return ( 
<div> 
<Header setPage={setPage} /> 
{renderPage()} 
<Footer /> 
</div> 
); 
}; 
export default App; 
