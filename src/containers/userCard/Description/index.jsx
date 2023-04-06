import { Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import PaperInformation from "../../../components/PaperInformation";
import LocationInformation from "../../../components/LocationInformation";

export default function Description(props){
    const {userState} =props
    return(
        <Fragment>
            <Stack
            sx={{justifyContent:"center"}}>
        {
        userState.bio !== null 
        ? <Typography variant="body1">{userState.bio}</Typography>
        : <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nemo magnam dolorum aspernatur tenetur repellat assumenda nostrum nobis, sit illo ducimus. Voluptate nobis eum, eligendi animi eos dolorem aut fugit!</Typography>
        }
            </Stack>
          <PaperInformation userState={userState}/>
          <LocationInformation userState={userState}/>
        </Fragment>
    )
}