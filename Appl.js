import React, { useContext } from 'react'; 
import AuthProvider, { AuthContext } from './components/authcontext'; 
import Login from './components/login'; 
import Home from './components/home'; 
function App() { 
const { user } = useContext(AuthContext); 
return ( 
<div className="App"> 
{user ? <Home /> : <Login />} 
</div> 
); 
} 
export default function AppWrapper() { 
return ( 
<AuthProvider> 
<App /> 
</AuthProvider> 
); 
}
