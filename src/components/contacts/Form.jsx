import React, { useState } from 'react';
import './css/Form.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import content from './content.json';

const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)', 
        maxWidth: '80%',
        width: 400, 
        padding: theme.spacing(3),
    },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main), 
    '&.MuiDialogTitle-root': {
        background: 'var(--dark-Green)', 
        color: 'var(--pink)',
        fontSize: '1.5rem',
    },
}));

const StyledDialogContentText = styled(DialogContentText)(({ theme }) => ({
    fontSize: '1.3rem',
}));

const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
    justifyContent: 'center',
    '& .MuiButton-root': {
        color: 'var(--pink)',
        fontSize: '1.3rem',
    },
}));

const Form = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [errors, setErrors] = useState({});
    const [open, setOpen] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });

        let tempErrors = { ...errors };
        switch (name) {
            case 'fullName':
                tempErrors.fullName = value ? '' : content.form.errorname;
                break;
            case 'email':
                tempErrors.email = value ? '' : content.form.erroremail;
                break;
            case 'subject':
                tempErrors.subject = value ? '' : content.form.errorsubject;
                break;
            case 'message':
                tempErrors.message = value ? '' : content.form.errormessage;
                break;
            default:
                break;
        }
        setErrors(tempErrors);
    };
    
    const validate = () => {
        let tempErrors = {};
        if (!formData.fullName) tempErrors.fullName = content.form.errorname;
        if (!formData.email) tempErrors.email = content.form.erroremail;
        if (!formData.subject) tempErrors.subject = content.form.errorsubject;
        if (!formData.message) tempErrors.message = content.form.errormessage;
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const googleFormUrl = content.configform.url;
            
            const formDataSubmit = new FormData();
            formDataSubmit.append(content.configform.name, formData.fullName); 
            formDataSubmit.append(content.configform.email, formData.email); 
            formDataSubmit.append(content.configform.subject, formData.subject);
            formDataSubmit.append(content.configform.message, formData.message);

            const currentDate = new Date();
            const date = currentDate.toISOString().split('T')[0];
            const time = currentDate.toTimeString().split(' ')[0];

            const [year, month, day] = date.split('-');
            formDataSubmit.append(content.configform.year, year); 
            formDataSubmit.append(content.configform.month, month);
            formDataSubmit.append(content.configform.day, day);

            const [hour, minute] = time.split(':');
            formDataSubmit.append(content.configform.hour, hour);
            formDataSubmit.append(content.configform.minute, minute);

            console.log([...formDataSubmit.entries()]);

            fetch(googleFormUrl, {
                method: 'POST',
                body: formDataSubmit,
                mode: 'no-cors'
            }).then(() => {
                setOpen(true);
                setFormData({
                  fullName: '',
                  email: '',
                  subject: '',
                  message: ''
                });
                setErrors({});
            }).catch(error => {
                console.error(content.form.errorform, error);
            });
        }
    };

    const handleClose = () => {
      setOpen(false);
    };
    
    return (
      <div className="form-container">
        <div className="form-title">
            <h1>{content.form.tittleform}</h1>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="fullName">{content.form.tittlename}</label>
                <input 
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                />
                {errors.fullName && <span className="error">{errors.fullName}</span>}
            </div>
            <div className="form-control">
                <label htmlFor="email">{content.form.tittleemail}</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-control">
                <label htmlFor="subject">{content.form.tittlesubject}</label>
                <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                />
                {errors.subject && <span className="error">{errors.subject}</span>}
            </div>
            <div className="form-control">
                <label htmlFor="message">{content.form.tittlemesaage}</label>
                <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                ></textarea>
                {errors.message && <span className="error">{errors.message}</span>}
            </div>
            <button type="submit">Enviar</button>
        </form>

        <StyledDialog
           open={open}
           onClose={handleClose}
        >
          <StyledDialogTitle>{content.styleddialog.tittle}</StyledDialogTitle>
          <DialogContent>
            <StyledDialogContentText>
                {content.styleddialog.message}
            </StyledDialogContentText>
          </DialogContent>
          <StyledDialogActions>
            <Button onClick={handleClose} color="primary">
                {content.styleddialog.tittlebutton}
            </Button>
          </StyledDialogActions>
        </StyledDialog>

      </div>
    );
}

export default Form;