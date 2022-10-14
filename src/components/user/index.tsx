import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stack, Link, Grid, Button, Divider } from '@mui/material';
import { Back, Avatar } from '../../assets/icons';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import GeneralDetails from './generalDetails'


interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}
interface Props {
    color : string,
    text : string
}
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
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      style= {{background:'#ffffff', minWidth: '200px'}}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function UserDetails() {
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx = {{padding: {md:'0 2rem'}}}>
        <Box sx = {{py : 6, display:'flex', justifyContent:'space-between'}}>
            <Stack sx = {{mt:3}} spacing = {3.5}>
                <Typography align = 'left' sx = {{color: '#545F7D', cursor: 'pointer'}}>
                    <Link href='#' color = 'inherit' underline = 'none'>
                        <Back/> <span style = {{paddingLeft:'4px'}}>Back to users</span>
                    </Link>
                </Typography>
                <Typography variant = 'caption' align = 'left' component = 'div'>
                    User Details
                </Typography>
            </Stack>
            <Grid container direction={{xs: 'column', md:'row'}}  spacing = {2} sx = {{width:400, justifyContent:'end', alignItems: 'end'}} >
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
                    <Avatar/>
                    <Grid container 
                        direction={{xs:'column', md:'row'}}
                        columnSpacing= {4}
                        rowSpacing = {1} 
                        sx = {{height:{md:'70px'}, pl:2}}
                    >
                        <Grid item className = 'flex-center' >
                            <Typography variant = 'caption' sx = {{fontSize: '22px'}}> Grace Effiom</Typography>
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
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <StyledTab label="General details" {...a11yProps(0)} />
                    <StyledTab label="Documents" {...a11yProps(1)} />
                    <StyledTab label="Bank details" {...a11yProps(2)} />
                    <StyledTab label="loans" {...a11yProps(3)} />
                    <StyledTab label="savings" {...a11yProps(4)} />
                    <StyledTab label="app and system" {...a11yProps(5)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <GeneralDetails/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Three
            </TabPanel>
        </Box>
    </Box>
  );
}