import React,{createContext, useState, useEffect} from 'react';


export const AuthContext = createContext();

const AuthProvider = ({children}) =>{
    const [user,setUser] = useState(null);

    useEffect(()=>{
        const storedUser = localStorage.getItem('user');
        if(storedUser){
            setUser(JSON.parse(storedUser));
        }
    },[]);

    const login = (username,password)=>{
        const predefinedUser = [
            { username:'user', password:'pass'},
            { username:'admin', password:'admin'},
        ];

        const user = predefinedUser.find(
            (u) => u.username === username && u.password === password
        );

        if(user){
            setUser(user);
            localStorage.setItem('user',JSON.stringify(user));
            return true;
        }
// Suggested code may be subject to a license. Learn more: ~LicenseLog:669815998.
        return false;
    };

    const logout = () =>{
        setUser(null);
        localStorage.removeItem('user');
    }

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
