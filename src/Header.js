import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import sbi from './images/sbi.jpeg'
import { logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const signOut = ()=> {
        auth.signOut().then(()=> {
            dispatch(logout())
        })
    }
  return (
    <div className="header">
        <div className="header__left">
        <IconButton>
            <MenuIcon/>
        </IconButton>  
        <img src="https://pbs.twimg.com/media/EjotwoWXgAEUFxe.jpg:large" alt="gmail logo" />
        </div>
        <div className="header__middle">
            <SearchIcon/>
            <input placeholder="Search mail" type="text"></input>
            <ArrowDropDownIcon className="header__inputCaret"/> 
        </div>
        <div className="header__right">
            <IconButton id="icon">
                <AppsIcon/>
            </IconButton>
            <IconButton id="icon">
                <NotificationsIcon/>
            </IconButton>
            <div className="header__signout">

                <Avatar className="header__avatar" src={user?.photourl} onClick={signOut}/> 
                <p>Signout</p>
            </div>
        </div>
    </div>
  )
}

export default Header