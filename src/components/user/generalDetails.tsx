import React from 'react';
import {Grid, Box, Typography, Stack, Divider} from '@mui/material'
import { userInfo } from 'os';


type education = {
    duration : string,
    employmentStatus : string,
    level : string,
    loanRepayment : string,
    officeEmail : string,
    sector : string,
    monthlyIncome: number[]
}
type guarantor = {
    address : string,
    firstName : string,
    gender : string,
    lastName : string,
    phoneNumber : string
}
type profile = {
    address : string,
    avatar : string,
    bvn : string,
    currency : string,
    firstName : string,
    gender : string,
    lastName : string,
    phoneNumber : string
}
type socials = {
    facebook : string,
    instagram : string,
    twitter : string
}
type user = {
    accountBalance: string,
    accountNumber: string,
    createdAt: Date,
    education: education,
    id: string,
    lastActiveDate: Date,
    orgName: string,
    phoneNumber: string,
    userName: string,
    guarantor: guarantor,
    profile: profile,
    socials: socials
}
interface Props {
    user: user
}
function GeneralDetails({user} : Props) {
    console.log(user.profile.firstName)
    return (
        <Stack spacing= {2}>
            <Box>
                <Typography align= 'left' sx = {{fontWeight:'500', py:2}}>
                    Personal Information
                </Typography>
                <Grid container columnSpacing = {4} rowSpacing={5.5} sx = {{py:2}}>
                    <Grid item xs = {6} md = {4} lg = {2.3}>
                        <Typography variant = 'subtitle2'>full name</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>{user.profile.firstName+' '+ user.profile.lastName}</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.3} >
                        <Typography variant = 'subtitle2'>phone number</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>Grace Effiom</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.8} >
                        <Typography variant = 'subtitle2'>email address</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>Grace Effiom</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.3} >
                        <Typography variant = 'subtitle2'>bvn</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>Grace Effiom</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.3} >
                        <Typography variant = 'subtitle2'>gender</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>Grace Effiom</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.3} >
                        <Typography variant = 'subtitle2'>marital status</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>Grace Effiom</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.3} >
                        <Typography variant = 'subtitle2'>children</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>Grace Effiom</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.3} >
                        <Typography variant = 'subtitle2'>type of residence</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>Grace Effiom</Typography>
                    </Grid> 
                </Grid> 
            </Box>
            <Divider orientation="horizontal" variant="middle" flexItem />
            <Box>
                <Typography align= 'left' sx = {{fontWeight:'500', py:2}}>
                    Education and Employment
                </Typography>
                <Grid container columnSpacing = {4} rowSpacing={5.5} sx = {{py:2}}>
                    <Grid item xs = {6} md = {4} lg = {2.5}>
                        <Typography variant = 'subtitle2'>Level of education</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>Grace Effiom</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {3.5} >
                        <Typography variant = 'subtitle2'>employment status</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>Grace Effiom</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.5} >
                        <Typography variant = 'subtitle2'>sector of employment</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>Grace Effiom</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.5} >
                        <Typography variant = 'subtitle2'>duration of employment</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>Grace Effiom</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.5} >
                        <Typography variant = 'subtitle2'>office email</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>Grace Effiom</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {3.5} >
                        <Typography variant = 'subtitle2'>monthly income</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>Grace Effiom</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.5} >
                        <Typography variant = 'subtitle2'>loan repayment</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>Grace Effiom</Typography>
                    </Grid>
                </Grid> 
            </Box>
            <Divider orientation="horizontal" variant="middle" flexItem />
            <Box>
                <Typography align= 'left' sx = {{fontWeight:'500', py:2}}>
                    Socials
                </Typography>
                <Grid container columnSpacing = {4} rowSpacing={5.5} sx = {{py:2}}>
                    <Grid item xs = {6} md = {4} lg = {2.3}>
                        <Typography variant = 'subtitle2'>twitter</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>Grace Effiom</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.3} >
                        <Typography variant = 'subtitle2'>facebook</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>Grace Effiom</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.3} >
                        <Typography variant = 'subtitle2'>instagram</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>Grace Effiom</Typography>
                    </Grid>
                </Grid> 
            </Box>
            <Divider orientation="horizontal" variant="middle" flexItem />
            <Box>
                <Typography align= 'left' sx = {{fontWeight:'500', py:2}}>
                    Guarantor
                </Typography>
                <Grid container columnSpacing = {4} rowSpacing={5.5} sx = {{py:2}}>
                    <Grid item xs = {6} md = {4} lg = {2.3}>
                        <Typography variant = 'subtitle2'>full name</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>Grace Effiom</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.3} >
                        <Typography variant = 'subtitle2'>phone number</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>Grace Effiom</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.8} >
                        <Typography variant = 'subtitle2'>email address</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>Grace Effiom</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.3} >
                        <Typography variant = 'subtitle2'>relationship</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>Grace Effiom</Typography>
                    </Grid>
                </Grid> 
            </Box>

        </Stack>
    );
}

export default GeneralDetails;