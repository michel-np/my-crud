import React, {useState} from 'react'
import { TextField, IconButton } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles'
import SendIcon from '@material-ui/icons/Send';

const useStyle = makeStyles(theme => ({
   formContainer:{
    backgroundColor:'white',
    width:'30vw',
    display:'flex', 
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'left',
    padding:'50px',
    '& .MuiTextField-root': {
        margin:5
    }
   }

}))

const EmailPage = (props) => {
    const classes = useStyle();
    const [formData, setFormData] = useState({
        yourname:'',
        email:'',
        subject:'',
        body:''
    })
    const [emailInvalid, setEmailInvalid] = useState(null)

    const handleNameChange = (e) => {
        setFormData({...formData, yourname:e.target.value})
    }
    const handleEmailChange = (e) => {
        const email = e.target.value;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(email).toLowerCase())) {
            setEmailInvalid(false);
        }
        else {
            setEmailInvalid(true);

        }
        setFormData({...formData, email:email});
    }
    const handleSubjectChange = (e) => {
        setFormData({...formData, subject:e.target.value})
    }
    const handleBodyChange = (e) => {
        console.log(formData)
        setFormData({...formData, body:e.target.value})
        
    }

    const handleSendingMessage = () => {
        const messageContent = formData;
        
    }

    return (
        <div className = {classes.formContainer}>
            <h2>Me envie um e-mail!</h2>
            <TextField label='Nome' onChange={handleNameChange}/>
            <TextField label='E-mail' error={emailInvalid} onChange={handleEmailChange}/>
            <TextField label='Assunto' onChange={handleSubjectChange}/>
            <TextField multiline  label='Mensagem' onChange={handleBodyChange}/>
            <IconButton onClick={handleSendingMessage} style={{width:'10%', height:'10%', margin:10}}>
                <SendIcon style={{fontSize:50}} />
            </IconButton>
        </div>
    );
}


export default EmailPage;