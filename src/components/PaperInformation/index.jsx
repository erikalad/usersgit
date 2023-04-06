import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

export default function PaperInformation(props){
    const { userState } = props
    return(
        <Paper elevation={3}> 
    <Stack 
    spacing={3} 
    direction="row"
    sx={{justifyContent:"space-evenly", margin:"20px"}}
    >
        <Stack>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
                Public Repos
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
                {userState.public_repos}
            </Typography>
        </Stack>
        <hr></hr>
        <Stack>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
                Followers
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
                {userState.followers}
            </Typography>
        </Stack>
        <hr></hr>
        <Stack>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
               Following
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
                {userState.following}
            </Typography>
        </Stack>
    </Stack>
        </Paper>
    )
}