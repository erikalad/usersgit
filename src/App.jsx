import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Searchbar from "./components/SearchBar";
import { gettingUsers } from "./services/users";
import UserCard from "./containers/userCard";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const App = ()=>  {
    const [inputUser, setInputUser] = useState('octocat');
    const [userState, setUserState] = useState(inputUser)
    const [notFound, setNotFound] = useState(false)
    const [mode, setmode] = useState(true);


  

    const handleMenu = () => {
        setmode(!mode);
    };

    const gettinUser = async (user)=> {
        const userResponse = await gettingUsers(user)

        if (userState === 'octocat'){
            localStorage.setItem('octocat',JSON.stringify(userResponse))
        }

        if (userResponse.message === 'Not Found'){
            const { octocat } = localStorage
            setInputUser(octocat)
            setUserState(JSON.parse(octocat))
            setNotFound(true)
        } else {
            setUserState(userResponse)
            setNotFound(false)
        }
    }
    
    useEffect(()=> {
        gettinUser(inputUser)
    }, [inputUser])

    const containerStylesLigth = 
    {
        background: 'whitesmoke',
        width: '80vw',
        height: '500px',
        borderRadius: '16px',
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

    const containerStyles = 
    {
        background: '#000022',
        width: '80vw',
        height: '500px',
        borderRadius: '16px',
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: "white"
    }

    return (
        <>
        {mode ? 
        <>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background:"whitesmoke", color:"black"  }}>
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Github Users
                </Typography>
                
                
                    <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                    {mode ? <LightModeIcon /> : <DarkModeIcon />} 
                    </IconButton>
                    </div>
                
                </Toolbar>
            </AppBar>
            </Box>
            
             <Container sx={containerStylesLigth}>
             <Searchbar inputUser={inputUser} setInputUser={setInputUser} notFound={notFound} />
             <UserCard userState={userState} />
         </Container>
         </>
            :  
        <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background:"#000036", color:"white"  }}>
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Github Users
                </Typography>
                
                    <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                    {mode ? <LightModeIcon /> : <DarkModeIcon />} 
                    </IconButton>
                    </div>
                
                </Toolbar>
            </AppBar>
            </Box>
            
               <Container sx={containerStyles}>
               <Searchbar inputUser={inputUser} setInputUser={setInputUser} notFound={notFound} mode={mode}/>
               <UserCard userState={userState} />
           </Container>
           </>
            }

        </>
    );
}

export default App;