import React from 'react'
import './Sidebar.css'
import { Button,IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@mui/icons-material/Star';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import CallIcon from '@mui/icons-material/Call';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';


function Sidebar() {
    const dispatch = useDispatch()
  return (
    <div className="sidebar">
        <Button startIcon={<AddIcon fontSize="large" />}
        className="compose__icon" onClick={()=>dispatch(openSendMessage())}>
            Compose
        </Button>
        <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
        <SidebarOption Icon={StarIcon} title="Starred" number={54}/>
        <SidebarOption Icon={ScheduleIcon} title="Starred" number={54}/>
        <SidebarOption Icon={LabelImportantIcon} title="Important" number={54}/>
        <SidebarOption Icon={NearMeIcon} title="Send" number={54}/>
        <SidebarOption Icon={NoteIcon} title="Draft" number={54}/>
        <SidebarOption Icon={ExpandMoreIcon} title="More" number={54}/>
        <div className="footer">
            <div className="footerIcon">
                <IconButton>
                    <PersonIcon/>
                </IconButton>
                <IconButton>
                    <DuoIcon/>
                </IconButton>
                <IconButton>
                    <CallIcon/>
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Sidebar