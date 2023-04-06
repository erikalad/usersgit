import { Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";

export default function PrincipalInformation(props){
    const {userState} = props
    console.log(userState);
  
    return(
        <Fragment>
            <Stack 
            direction="row"
            sx={{justifyContent:"space-between"}}>
            <Typography variant="h4">{userState.name}</Typography>
            <Typography variant="subtitle2"> {new Date(userState.created_at).toLocaleDateString('es-ar')}</Typography>
            </Stack>
            <Typography variant="caption">@{userState.login}</Typography>
        </Fragment>
    )
}