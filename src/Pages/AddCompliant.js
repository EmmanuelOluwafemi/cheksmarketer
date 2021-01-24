import React from 'react';
import Styled from 'styled-components';
import AdminDashboardLayout from '../Layout/AdminDashboardLayout';

import { RiEmotionUnhappyFill } from 'react-icons/ri';

import {DashboardHeader} from '../Style/DashboardHeader';

const AddCompliant = () => {
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
            <Content>
                <form>
                    <InputGroup>
                        <label for="title">Title</label>
                        <input type="text" name="title" value="title" />
                    </InputGroup>
                    <InputGroup>
                        <label for="title">Compliant</label>
                        <textarea name="complaint" placeholder="Add Your Compliant" />
                    </InputGroup>
                    <InputGroup>
                        <button type="submit">Submit Compliant</button>
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

    input, textarea {
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