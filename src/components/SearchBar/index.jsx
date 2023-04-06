import { IconButton, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import './../../App.css'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';



const dark = createTheme({
  palette: {
    text: {
      primary: "#fff",
      secondary: "#fff", 
    },
  },
});

const ligth = createTheme({
    palette: {
      text: {
        primary: "#000000",
        secondary: "#000000", 
      },
    },
  });

  





export default function Searcher(props){
    const{setInputUser,mode} = props
    console.log(mode)

    const [valueInput, setvalueInput]  = useState("")

     const handleSubmit = () =>{
    setInputUser(valueInput)
    
    } 

    const onSearchValueChange = (event) =>{
      let inputValue = event.target.value
      setvalueInput(inputValue) 
    
    }

   
   

    return(
        
        <Stack
        direction= "row" 
        sx={{
            marginTop:"30px",
            width:"80%"
           
        }}>
            {mode !== false ? 

     <ThemeProvider theme={ligth}>
       <TextField
          id="outlined-basic" 
          label="Github User" 
          variant="outlined"
          placeholder="Octocat"
          size="small"
          value={valueInput}
          onChange={onSearchValueChange}
          sx={{
            width:"100%",
           
          }}
        />
         <IconButton
         onClick={handleSubmit} 
         size="small"
          sx={{
          left:"-45px",
          color:"black"
          }}>
          <SearchIcon/>
          </IconButton>
        </ThemeProvider>
            :
          
       <ThemeProvider theme={dark}>
        <TextField
              id="outlined-basic" 
              label="Github User" 
              variant="outlined"
              placeholder="Octocat"
              size="small"
              value={valueInput}
              onChange={onSearchValueChange}
              sx={{
                width:"100%",
                color: "white",
                borderRadius: 5,
              }}
             
        />
        
        
            <IconButton
            onClick={handleSubmit} 
            size="small"
             sx={{
             left:"-45px",
             color:"white"
             }}>
             <SearchIcon/>
             </IconButton>
             </ThemeProvider>
           
           }
          
        
        </Stack>
       
    )
}