import React from 'react';
import './EmailRows.css';
import Checkbox from '@mui/material/Checkbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';
import { useHistory } from 'react-router-dom';

function EmailRows({ id, title, description, time, subject }) {
    const dispatch = useDispatch()
    const history = useHistory()

    const openMail = () => {
        dispatch(selectMail({
            id,
            title,
            description,
            time,
            subject
        }))
        history.push("/mail")
    }

    return (
        <div onClick={openMail} className="email__rows">
            <div className="emailRow__option">
            <Checkbox />
            <IconButton>
                <StarBorderIcon />
            </IconButton>
            <IconButton>
                <LabelImportantIcon />
            </IconButton>
            </div>
            <h3 className="emailRow__title">{title}</h3>
            <div className="emailRow__message">
                <h4>{subject}</h4>
                <span className="emailRow__description">-
                    {description}
                </span>
            </div> 
            <div className="emailRow__time">
                {time}
            </div>

        </div>
    )
}

export default EmailRows