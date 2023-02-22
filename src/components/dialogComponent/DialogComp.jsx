import { Dialog, DialogContent } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './DialogComp.css'
import images from '../../assets/index'
import { useDispatch, useSelector } from 'react-redux';
import { addCandidate, dialogClose } from '../../redux/TableDataSlice';

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

let newdate = day + "." + month + "." + year;

const initialValues = {
    candidateName: '',
    idNumber: '',
    phone: '',
    email: '',
    role: '',
    clinic: '',
    EstablishedIn: newdate,
    createdBy: 'user',
    confirmingFactor: '',
    status: 'ממתין',
    rank: 'ג',
  };

const DialogComp = () => {
    
    const dispatch = useDispatch();

    const dialogState = useSelector((state) => state.TableDate.dialogState)
    const candidateViewState = useSelector((state) => state.TableDate.candidateView)

    const [open, setOpen] = useState(dialogState);
    const [values, setValues] = useState(initialValues);
    
    
    // close the dialog
    const handleClose = () => {

        dispatch(dialogClose());
        setValues(initialValues);

    };

    // submit form to state
    const handleSubmit = (event) => {

        event.preventDefault();
        dispatch(addCandidate(values));
        setValues(initialValues);
        handleClose();

    }

    // handle the user input in our form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
        
      };

    //  render the component on state update specificly 
    // dialogState = true/ false
    // candidateView object
    useEffect(() => {

        setOpen(dialogState)
        setValues(JSON.stringify(candidateViewState) === '{}' ? initialValues : candidateViewState )

    },[dialogState,candidateViewState])

    return (
        <div className='DialogComp'>
            <Dialog
                open={open}
                fullWidth
                maxWidth='md'
            >
                <DialogContent >
                    <div className="DialogComp-dialog">

                        <div className="DialogComp-dialog_icon">

                            <img src={images.XIcon} alt="" onClick={handleClose}/>
                            
                        </div>

                        <div className="DialogComp-dialog_title">

                            <p>{`מועמד חדש`}</p>

                        </div>

                        <div className="DialogComp-dialog_form">

                            <form id='candidate-form' onSubmit={handleSubmit} >

                                <input 
                                    type="text"
                                    value={values.candidateName}
                                    onChange={handleInputChange}
                                    name='candidateName'
                                    label='CandidateName'
                                    placeholder='*שם מלא'
                                    required ={true}
                                    pattern = "^[a-zA-Z ]*$"
                                    />

                                <input 
                                    type='number'
                                    value={values.idNumber}
                                    onChange={handleInputChange}
                                    name='idNumber'
                                    label='IdNumber'
                                    placeholder='*תעודת זאות'
                                    required ={true}
                                    />
                                
                                <input 
                                    type='email'
                                    value={values.email}
                                    onChange={handleInputChange}
                                    name='email'
                                    label='Email'
                                    placeholder='*כתובת אימייל'
                                    required ={true}
                                    />
                                
                                <input 
                                    type='number'
                                    value={values.phone}
                                    onChange={handleInputChange}
                                    name='phone'
                                    label='Phone'
                                    placeholder='*טלפון'
                                    required ={true}
                                    />
                                
                                <select 
                                    value={values.clinic} 
                                    name='clinic' 
                                    label='Clinic' 
                                    onChange={handleInputChange}
                                    required ={true}
                                    >

                                    <option value="" disabled >{`מרפאה`}</option>

                                    <option value={`אשדוד`}>{`אשדוד`}</option>

                                    <option value={`תל-אביב`}>{`תל-אביב`}</option>

                                    <option value={`חיפה`}>{`חיפה`}</option>

                                </select>

                                <select 
                                    value={values.role} 
                                    name='role' 
                                    label='Role'  
                                    onChange={handleInputChange}
                                    required ={true}
                                    >

                                    <option value="" disabled >{`תפקיד`}</option>

                                    <option value={`סמנכ"ל מרפאה`}>{`סמנכ"ל מרפאה`}</option>

                                    <option value={`סמנכ"ל מא`}>{`סמנכ"ל מא`}</option>

                                    <option value={`מנהל רפואה`}>{`מנהל רפואה`}</option>

                                </select>

                                <input 
                                    value={values.confirmingFactor}
                                    onChange={handleInputChange}
                                    name='confirmingFactor'
                                    label='ConfirmingFactor'
                                    placeholder='גורם מאשר'
                                    required ={true}
                                    />

                            </form>
                            
                        </div>

                        <div className="DialogComp-dialog_buttons">
                            
                            <button id='buttonCancel' onClick={handleClose}>{`ביטול`}</button>
                            
                            <input id='buttonSubmit' type="submit" value={`אישור`} form='candidate-form' disabled = {JSON.stringify(candidateViewState) !== '{}' ? true : false}/>
                        
                        </div>
                    </div>

                </DialogContent>
            </Dialog>
        </div>
    );
};

export default DialogComp;