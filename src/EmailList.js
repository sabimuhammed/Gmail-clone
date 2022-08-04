import React, { useEffect, useState } from 'react';
import './EmailList.css';
import Section from './Section';
import EmailRows from './EmailRows';
import { IconButton, Checkbox } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import SellIcon from '@mui/icons-material/Sell';
import { useHistory } from 'react-router-dom';
import { db } from './firebase';


function EmailList() {
    const history = useHistory();
    const [emails, setEmails] = useState([]);

    // connect to db 
    // and onsnpashot is basically enything added or modified or deleted then give a snapshot
    // and re run the code any time ist changes


   useEffect(()=>{
    db.collection("emails").orderBy("timestamp",'desc').onSnapshot(snapshot => setEmails(snapshot.docs.map(doc => ({
        id:doc.id,
        data:doc.data()
    }))))
   },[])


    return (
        <div className="emailList">
            <div className="email__settings">
                <div className="emailSetting__left">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailSettings__right">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__section">
               
                <Section Icon={InboxIcon} title="Primery" color='red' selected />
                <Section Icon={PeopleIcon} title="Social" color='#1A73e8' />
                <Section Icon={SellIcon} title="Promotions" color='green' />


            </div>
            {emails.map(({id,data:{to,subject,timestamp,message}}) => (
                <EmailRows 
                className="emailList__list"
                id={id}
                key={id}
                title={to}
                subject={subject}
                description={message}  
                time={new Date(timestamp?.seconds * 1000).toUTCString()}
                />
            ))}
            {/* <div onClick={() => history.push("/mail")} className="emailList__list">
                <EmailRows title="twich" id="" subject="hey fellow man" description="this is lit" time="1:40PM" />
                <EmailRows title="twich" id="" subject="hey fellow man" description="this is lit" time="1:40PM" />
            </div> */}
        </div>
    )
}

export default EmailList