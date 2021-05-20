import React, {useState} from 'react';
import Styled from 'styled-components';
import AdminDashboardLayout from '../Layout/AdminDashboardLayout';

import { RiEmotionUnhappyFill } from 'react-icons/ri';

import {DashboardHeader} from '../Style/DashboardHeader';
import { Snackbar } from "@material-ui/core";

import AxiosAuth from "../lib/AxiosAuth";

const AddCompliant = () => {

    const [submitted, setSubmitted] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [department, setDepartment] = useState("");
    const [priority, setPriority] = useState("");
    const [showSnackBar, setShowSnackBar] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    //   reset State
    const reset = () => {
        setSubmitted();
        setTitle("");
        setBody("");
        setPriority("");
        setDepartment("");
    };

    // handle err
    const handleClick = (mes) => {
        setErrorMessage(mes);
        setShowSnackBar(true);
        setSubmitted(false);
    };

    const handleClose = () => {
        setShowSnackBar(false);
    };

    //   check error

  const checkSubmit = () => {
        if (title === '' || body === '' || department === '' || priority === '' ) {
        handleClick("All Fields Are Required");
        } else {
        const data = {
            title,
            body,
            priority,
            department
        };
        return AxiosAuth().post("/marketer/create-complaint", data)
            .then((res) => {
            handleClick(
                `Successfully Created`
            );
            reset();
            })
            .catch((err) => {
            console.log(err.response.data.message);
            handleClick(err.response.data.message);
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        checkSubmit();
        setSubmitted(true);
      };

    return (
        <AdminDashboardLayout>
            <DashboardHeader>
                <div className="icon">
                    <RiEmotionUnhappyFill className='icon-fill' />
                </div>
                <div className="heading">
                    <h6>Add Compliant</h6>
                    <p>Do you Face any challenges today, you can drop it for the admin.</p>
                </div>
            </DashboardHeader>
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                open={showSnackBar}
                onClose={handleClose}
                message={errorMessage}
                key={"top center"}
            />
            <Content>
                <form onSubmit={handleSubmit}>
                    <InputGroup>
                        <label for="title">Title</label>
                        <input type="text" name="title" value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                    </InputGroup>
                    <div className="row">
                        <div className="col-md-6">
                            <InputGroup>
                                <label for="title">Priotity</label>
                                <select name="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </InputGroup>
                        </div>
                        <div className="col-md-6">
                            <InputGroup>
                                <label for="title">Department</label>

                                <select name="department" value={department} onChange={(e) => setDepartment(e.target.value)}>
                                    <option value="sales">Sales</option>
                                    <option value="technical">Technical</option>
                                    <option value="productGrowth">Product Growth</option>
                                </select>
                            </InputGroup>
                        </div>
                    </div>
                    <InputGroup>
                        <label for="title">Compliant</label>
                        <textarea name="body" placeholder="Add Your Compliant" 
                            value={body}
                            onChange={(e) => setBody(e.target.value)}  />
                    </InputGroup>
                    <InputGroup>
                        <button type="submit">{submitted ? (
                <div className="spinner-border text-dark" role="status"></div>
              ) : (
                "Send Compliant"
              )}</button>
                    </InputGroup>
                </form>
            </Content>
        </AdminDashboardLayout>
    )
}

export default AddCompliant;

const Content = Styled.div`
    width: 100%;
    background: #fff;
    padding: 2rem;

    .row {
        max-width: 720px;
    }
`;

const InputGroup = Styled.div`
    width: 100%;
    max-width: 700px;
    min-height: 56px;
    margin-bottom: 24px;

    label {
        display: block;
        width: 100%;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 24px;
        color: #000000;
    }

    input, textarea, select {
        width: 100%;
        height: 40px;
        background: #f8f8f8;
        border: none;
        outline: none;
        padding: 8px 24px;
    }

    textarea {
        height: 200px;
    }

    button {
        background: #0175B1;
        border-raadius: 4px;
        padding: 18px 11px;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 24px;
        color: #fff;
        border: none;
        outline: none;
        transition: all .3s ease-in;

        &:hover {
            transform: scale(1.04);
        }
    }
`;