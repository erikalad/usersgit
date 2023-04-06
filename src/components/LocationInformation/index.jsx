import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';


export default function LocationInformation(props){
    const {userState} =props
    return(
        <Grid 
        container
        spacing={2} 
        sx={{
            marginTop:"15px"
        }}
        >
            <Grid item xs={6}>
                <Stack direction="row" spacing={2}>
                    <LocationOnIcon/>
                   
                    {userState.location !== null
                         ? <Typography>{userState.location}</Typography>
                         : <Typography>Not Available</Typography>
                     }
                  
                </Stack>
            </Grid>
            <Grid item xs={6}>
            <Stack direction="row" spacing={2}>
                <TwitterIcon/>
                {userState.twitter_username !== null
                         ? <Typography>{userState.twitter_username}</Typography>
                         : <Typography>Not Available</Typography>
                     }
                </Stack>
            </Grid>
            <Grid item xs={6}>
            <Stack direction="row" spacing={2}>
                <LanguageIcon/>
                {userState.blog !== null
                         ? <a target="_blank" href={userState.blog}><Typography>{userState.blog}</Typography></a>
                         : <Typography>Not Available</Typography>
                     }
                </Stack>
            </Grid>
            <Grid item xs={6}>
            <Stack direction="row" spacing={2}>
                <BusinessIcon/>
                {userState.company !== null
                         ? <Typography>{userState.company}</Typography>
                         : <Typography>Not Available</Typography>
                     }
                </Stack>
            </Grid>
        </Grid>
    )
}