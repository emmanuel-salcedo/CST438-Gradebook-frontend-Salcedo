
import React, { Component } from 'react';
import {SERVER_URL} from '../constants.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import {DataGrid} from '@material-ui/data-grid';
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';
import TextField from '@material-ui/core/TextField';
import styles from './NewAssignment.module.css';


export default function NewAssignment(props) {
    var today = new Date();
    var month = today.getMonth()+1;
    var year = today.getFullYear();
    var day = today.getDate();

    if(month < 10) {
        month = '0' + month;
    }

    const [formData, setFormData] = React.useState({
        dueDate: year + '-' + month + '-' + day,
        name: "New Assignment",
        courseId: "123456"
    })

    function handleChange(event) {
        const {name, value} = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));

    }

    function handleSubmit(event) {

        const queryURL = `${SERVER_URL}/course/${formData.courseId}/addAssignment?` + new URLSearchParams({
            assignment_name: formData.name,
            due_date: formData.dueDate
        })

        fetch(queryURL, {method: 'POST'})
        .then(res => {
            console.log(res)
            if(res.status === 200) {
                toast.success("Assignment Added", {
                    position: toast.POSITION.BOTTOM_CENTER
                })
            } else if (res.status === 400) {
                toast.error("Error: " + res.status + " - BAD REQUEST (Did you enter a valid course ID?)", {
                    position: toast.POSITION.BOTTOM_CENTER
                })
            }
        })
        .catch( err => {
            console.error(err);
            toast.error("Error when adding (did you forget a field?)", {
                position: toast.POSITION.BOTTOM_CENTER
            })
        });
        
        event.preventDefault();
        // When the form is submitted, this executes.
    }
    
    return (
        <div className={styles.container}>
            <h2 className>Add Assignment</h2>
            <form onSubmit={handleSubmit} className={styles.formContainer} autoComplete="off">
                <TextField className={styles.inputField} id="name" name="name" label="Name" variant="filled" value={formData.name} onChange={handleChange} />
                <TextField className={styles.inputField} id="course-id" name="courseId" label="Course ID" variant="filled" value={formData.courseId} onChange={handleChange} />
                <TextField
                    className={styles.dateSelector}
                    id="date"
                    name="dueDate"
                    label="Due Date"
                    type="date"
                    value={formData.dueDate}
                    defaultValue="2023-01-01"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleChange}
                />
                <div className={styles.buttonsContainer}>
                        <Button id="SubmitAssig" variant="outlined" color="primary" style={{margin: 10}} type="submit">
                            Submit
                        </Button>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <Button id="Back" variant="outlined" color="primary" style={{margin: 10}}>
                            Back
                        </Button>
                    </Link>
                </div>
            </form>
            <ToastContainer autoClose={1500}/>
        </div>
    )
}