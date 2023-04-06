import { CardMedia, Grid, Stack } from "@mui/material";
import React from "react";
import PrincipalInformation from "../../components/PrincipalInformation";
import Description from "./Description";


export default function UserCard(props){
const { userState } = props
console.log(userState)
    return(
        <Grid
       container
       spacing={2}
       sx={{
        marginTop:"15px",

         }}  
        >
            {userState !== undefined &&
            <>
            <Grid item xs={3}>
            <CardMedia 
            component="img"
            image={userState.avatar_url}
            alt="Github User"
            sx={{
                borderRadius:"50%",
                marginLeft:"5px"
            }}
            />
            </Grid>
            <Grid item xs={9}>
                <Stack 
                direction="column"
                spacing={1}
                sx={{margin:"30px"}}>
                <PrincipalInformation userState={userState}/>
                <Description userState={userState}/>
                </Stack>
            </Grid>
            
            </>
            }
        
        </Grid>
    )
}