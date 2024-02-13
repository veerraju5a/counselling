import React, {useState} from 'react'
import {AppBar, Toolbar, Tabs, Tab, Typography} from '@mui/material'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import {NavLink} from 'react-router-dom'
import logo from '../images/klulogo.png'
const Header = () => {
    const [value, setValue] = useState()
  return (
    <div>
        <AppBar sx={{backgroundColor:'#232F3D'}} position='sticky'>
            <Toolbar>
            {/* <Typography> */}
              <img src={logo} width={80} height={80}/>
              {/* <LibraryAddIcon/> */}
              {/* </Typography> */}
            <Typography variant='h5'>COUNSELLING AND VISITOR MANAGEMENT SYSTEM</Typography>
                 <Tabs sx={{ml: "auto"}}
                  textColor='inherit' 
                  indicatorColor='primary' 
                    value={value} 
                    onChange={(e,val)=>setValue(val)}>
                  <Tab LinkComponent={NavLink} to='/signin' label="Signin"/>
                  <Tab LinkComponent={NavLink} to='/signup' label="SignUp"/>
                  <Tab LinkComponent={NavLink} to='/show' label="Registrations"/>
                  <Tab LinkComponent={NavLink} to='/session' label="About Session"/>
                  <Tab LinkComponent={NavLink} to='/appointment' label="Appointment"/>
            </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header;