import React from 'react';
import {Grid, Box, Typography, Stack, Divider } from '@mui/material'
import {Props} from './types.generalDetails'



function GeneralDetails({user} : Props) {
    return (
        <Stack spacing= {2}>
            <Box>
                <Typography align= 'left' sx = {{fontWeight:'500', py:2}}>
                    Personal Information
                </Typography>
                <Grid container columnSpacing = {4} rowSpacing={5.5} sx = {{py:2}}>
                    <Grid item xs = {6} md = {4} lg = {2.3}>
                        <Typography variant = 'subtitle2'>full name</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>
                            {user.profile.firstName +' '+ user.profile.lastName}
                        </Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.3} >
                        <Typography variant = 'subtitle2'>phone number</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>{user.profile.phoneNumber}</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {3.5} >
                        <Typography variant = 'subtitle2'>email address</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>{user.email}</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.1} >
                        <Typography variant = 'subtitle2'>bvn</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>{user.profile.bvn}</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.3} >
                        <Typography variant = 'subtitle2'>gender</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>{user.profile.gender}</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.3} >
                        <Typography variant = 'subtitle2'>marital status</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>null</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {3.5} >
                        <Typography variant = 'subtitle2'>children</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>null</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.3} >
                        <Typography variant = 'subtitle2'>type of residence</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>null</Typography>
                    </Grid> 
                </Grid> 
            </Box>
            <Divider orientation="horizontal" variant="middle" flexItem />
            <Box>
                <Typography align= 'left' sx = {{fontWeight:'500', py:2}}>
                    Education and Employment
                </Typography>
                <Grid container columnSpacing = {4} rowSpacing={5.5} sx = {{py:2}}>
                    <Grid item xs = {6} md = {4} lg = {3.5}>
                        <Typography variant = 'subtitle2'>Level of education</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>{user.education.level}</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {3.5} >
                        <Typography variant = 'subtitle2'>employment status</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>{user.education.employmentStatus}</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.5} >
                        <Typography variant = 'subtitle2'>sector of employment</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>{user.education.sector}</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.5} >
                        <Typography variant = 'subtitle2'>duration of employment</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>{user.education.duration}</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {3.5}  >
                        <Typography variant = 'subtitle2'>office email</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>{user.education.officeEmail}</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {3.5} >
                        <Typography variant = 'subtitle2'>monthly income</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>
                            { 
                                user.education.monthlyIncome
                                .map((data)=> { return ('\u20A6' + data)})
                                .join(" - ")
                            }
                        </Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.5} >
                        <Typography variant = 'subtitle2'>loan repayment</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>
                            &#x20A6;{user.education.loanRepayment}
                        </Typography>
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
                        <Typography variant = 'subtitle1' align= 'left'>{user.socials.twitter}</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.3} >
                        <Typography variant = 'subtitle2'>facebook</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>{user.socials.facebook}</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.3} >
                        <Typography variant = 'subtitle2'>instagram</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>{user.socials.instagram}</Typography>
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
                        <Typography variant = 'subtitle1' align= 'left'>
                        {user.guarantor.firstName + ' ' + user.guarantor.lastName}
                        </Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.3} >
                        <Typography variant = 'subtitle2'>phone number</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>{user.guarantor.phoneNumber}</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.8} >
                        <Typography variant = 'subtitle2'>email address</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>{user.guarantor.address}</Typography>
                    </Grid>
                    <Grid item xs = {6} md = {4} lg = {2.3} >
                        <Typography variant = 'subtitle2'>relationship</Typography>
                        <Typography variant = 'subtitle1' align= 'left'>null</Typography>
                    </Grid>
                </Grid> 
            </Box>

        </Stack>
    );
}

export default GeneralDetails;