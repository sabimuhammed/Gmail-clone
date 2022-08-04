import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { closeSendMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux';
import firebase from 'firebase'
import { db } from './firebase';


function SendMail() {
  const { register, watch, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()
  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    dispatch(closeSendMessage())
  }
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>Message</h3>
        <CloseIcon className="sendMail__close" onClick={() => dispatch(closeSendMessage())} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}  >
        <input name="to"
          placeholder="To"
          type="email"
          ref={register({ required: true })} />

        {errors.to && <p className="sendMail__error">To is required</p>}

        <input name="subject"
          placeholder="Subject"
          type="text"
          ref={register({ required: true })} />

        {errors.subject && <p className="sendMail__error">subject  is required</p>}

        <input name="message"
          placeholder="Message"
          className="sendMail__message"
          type="text"
          ref={register({ required: true })} />

        {errors.message && <p className="sendMail__error">message is required</p>}

        <div className="sendMail__option">
          <Button className="sendMailOption__button"
            varient="contained"
            color="primary"
            type="submit"
          >Send</Button>
        </div>

      </form>


    </div>
  )
}

export default SendMail