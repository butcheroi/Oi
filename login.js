import React,{useContext, useState} from 'react';
import { AuthContext } from './authcontext';

const Login = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const{login} = useContext(AuthContext);

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(login(username,password)){
            setError('');
        }
        else{
            setError('Invalid creadentials');
        }
    };

    return ( 
        <div> 
          <h2>Login</h2> 
          <form onSubmit={handleSubmit}> 
            <div> 
              <label>Username: </label> 
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              /> 
            </div> 
            <div> 
              <label>Password: </label> 
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              /> 
            </div> 
            <button type="submit">Login</button> 
          </form> 
          {error && <p style={{ color: 'red' }}>{error}</p>} 
        </div> 
    ); 
}; 
     
export default Login;

    
