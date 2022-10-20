import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stack, Link, Grid, Button, Divider, Avatar, Backdrop, CircularProgress, Alert } from '@mui/material';
import { Back } from '../../assets/icons';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import GeneralDetails from './generalDetails';
import DummyText from './dummyText'
import useRequest from '../../hooks/useRequest'
import { urls } from '../../constants/urls';
import {useParams} from 'react-router-dom';
import {user } from './types'
import {Props, TabPanelProps} from './types.index'
import useStorage from '../../hooks/useStorage';


function CustomButton({color, text} : Props){
    return (
        <Button variant="outlined" sx = {{
            color: color,
            fontWeight:'600',
            size: '14px',
            height: '40px',
            width: '170px',
            borderRadius: '8px',
            border: `1px solid ${color}`
        }}>{text}</Button>
    )
}

const StyledTab = styled(Tab)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        flex: 1,
    },
    textTransform: 'capitalize',
    fontSize: '16px',
    '& .css-ih1hio-MuiButtonBase-root-MuiTab-root, &.Mui-selected' : {
        color: '#39CDCC'
    },
  }));

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tabpanel-${index}`}
      style= {{background:'#ffffff'}}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tabpanel-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function UserDetails() {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true)
  const [errMsg, setErrMsg] = useState<string>('')
  const [User, setUser] = useState<user>({} as user)
  const [localUser, setLocalUser] = useState<user>({} as user)
  const {getUser} = useStorage()
  const {getRequest} = useRequest()

  let { id } = useParams()

  //handle tab switching
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const userAPI = React.useCallback(()=> {
    getRequest(`${urls.getUsers}/${id}`).then((response) => {
        setUser(response.data)
        setLoading(false)
    }).catch((err)=>{
        setLoading(false)
        if(err.response){
          setErrMsg(err.response.statusText)  
        }else{
          setErrMsg(err.message)
        }
    });
  }, [])

  const userLocal = React.useCallback( async (id:any) => {
    let user = await getUser()
    const localUser = user.find((item:any) => item.id === id)
    if(localUser){
        setUser(localUser)
        setLoading(false)
    }
    else{
        userAPI()
    }
  },[userAPI])
  

  useEffect(() => {
    userLocal(id)
  },[])

  return (
    loading?(
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
        >
        <CircularProgress color="inherit" />
    </Backdrop>):errMsg?(
    <Box sx = {{height:'100vh', pt: 10}}>
        <Typography align = 'left' sx = {{color: '#545F7D', my: 4}}>
            <Link href='/users' color = 'inherit' underline = 'none'>
                <Back/> <span style = {{paddingLeft:'4px'}}>Back to users</span>
            </Link>
        </Typography>
        <Alert severity="error">User not found</Alert>
    </Box>):(
    <Box sx = {{padding: {md:'0 2rem'}}}>
        <Box sx = {{py : 6, display:'flex', justifyContent:'space-between'}}>
            <Stack sx = {{mt:3}} spacing = {3.5}>
                <Typography align = 'left' sx = {{color: '#545F7D', cursor: 'pointer'}}>
                    <Link href='/users' color = 'inherit' underline = 'none'>
                        <Back/> <span style = {{paddingLeft:'4px'}}>Back to users</span>
                    </Link>
                </Typography>
                <Typography variant = 'caption' align = 'left' component = 'div'>
                    User Details
                </Typography>
            </Stack>
            <Grid container direction={{xs: 'column', md:'row'}}  spacing = {2} sx = {{width:'fit-content', justifyContent:'end', alignItems: 'end'}} >
                <Grid item>
                    <CustomButton color='#E4033B' text ='blacklist user' />
                </Grid>
                <Grid item>
                    <CustomButton color='#39CDCC' text ='activate user' />          
                </Grid>
            </Grid>
        </Box>
        <Box  sx={{minWidth: '200px'}}>
            <Box sx={{ mb:3, bgcolor: '#FFFFFF', p:3, pb: 0}}>
                <Stack direction = 'row'
                    sx = {{
                        display: 'flex', alignItems:'center', pb: 3, 
                    }}>
                    <Avatar
                        alt={User.profile.firstName}
                        src={User.profile.avatar}
                        sx={{ width: 56, height: 56 }}
                    />
                    <Grid container 
                        direction={{xs:'column', md:'row'}}
                        columnSpacing= {4}
                        rowSpacing = {1} 
                        sx = {{height:{md:'70px'}, pl:2}}
                    >
                        <Grid item className = 'flex-center' >
                            <Typography variant = 'caption' sx = {{fontSize: '22px'}}>
                                {User.profile.firstName +' '+ User.profile.lastName}
                            </Typography>
                            <Typography align='left' sx = {{fontSize: '14px', color:'#545F7D'}} >LSQFf587g90</Typography>
                        </Grid>
                        <Grid item md = {0}>
                            <Divider orientation="vertical" />
                        </Grid>
                        <Grid item className = 'flex-center'>
                            <Typography variant = 'subtitle1' sx ={{fontSize:'14px', py:1}}>
                                User's Tier
                            </Typography>
                            <Rating name="size-small" defaultValue={2} size="small" max ={3} />
                        </Grid>
                        <Grid item md = {0}>
                            <Divider orientation="vertical" />
                        </Grid>
                        <Grid item className = 'flex-center' >
                            <Typography variant = 'caption' sx = {{fontSize: '22px'}}>#200,000.00</Typography>
                            <Typography align='left' sx = {{fontSize: '12px'}}>9912345678/Providus Bank</Typography>
                        </Grid>
                    </Grid>
                </Stack>
                <Tabs value={value} onChange={handleChange} variant = "scrollable" aria-label="basic tabs example">
                    <StyledTab label="General details" {...a11yProps(0)} />
                    <StyledTab label="Documents" {...a11yProps(1)} />
                    <StyledTab label="Bank details" {...a11yProps(2)} />
                    <StyledTab label="loans" {...a11yProps(3)} />
                    <StyledTab label="savings" {...a11yProps(4)} />
                    <StyledTab label="app and system" {...a11yProps(5)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <GeneralDetails  user = {User} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <DummyText/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <DummyText/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <DummyText/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <DummyText/>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <DummyText/>
            </TabPanel>
        </Box>
    </Box>)
  );
}