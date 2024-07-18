import React from 'react'; 
const Header = ({ setPage }) => { 
return ( 
<header> 
<h1>My Website</h1> 
<nav> 
<a href="#" onClick={() => setPage('home')}>Home</a> <span></span>
<a href="#" onClick={() => setPage('about')}>About</a> <span></span>
<a href="#" onClick={() => setPage('contact')}>Contact</a> 
</nav> 
</header> 
); 
}; 
export default Header; 
