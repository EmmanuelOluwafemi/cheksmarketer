import React from 'react';
import Styled from 'styled-components';
import AdminDashboardLayout from '../Layout/AdminDashboardLayout';

const Messages = () => {
    return (
        <AdminDashboardLayout>
            <MessageStyle>
                <div className="row">
                    <div className="col-md-8 message-container">
                        <div className="message-head">
                            <img src="http://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt="avatar" />
                            <h5>james Julius</h5>
                        </div>
                        <div className="message-body">
                            <div className="chat"></div>
                            <div className="chat"></div>
                            <div className="chat"></div>
                            <div className="chat"></div>
                            <div className="chat"></div>
                        </div>
                        <div className="message-foot">
                            <input type="text" />
                            <button type="submit">Send</button>
                        </div>
                    </div>
                    <div className="col-md-4 users">
                        <div className="user-content">
                            <img src="http://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt="avatar" />
                            <div className="user-message">
                                <h4>james Julius</h4>
                                <p>Hello......</p>
                            </div>
                        </div>
                        <div className="user-content">
                            <img src="http://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt="avatar" />
                            <div className="user-message">
                                <h4>james Julius</h4>
                                <p>Hello......</p>
                            </div>
                        </div>
                        <div className="user-content">
                            <img src="http://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt="avatar" />
                            <div className="user-message">
                                <h4>james Julius</h4>
                                <p>Hello......</p>
                            </div>
                        </div>
                    </div>
                </div>
            </MessageStyle>
        </AdminDashboardLayout>
    )
}

export default Messages;

const MessageStyle = Styled.div`
    width: 100%;

    .message-container {
        width: 100%;
        height: 75vh;
        border-radius: 8px;
        box-shadow: 0 0 5px 0 #ccc;
        background: #fff;
        padding: 0 1rem;
    }
    .message-head {
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        img {
            width: 48px;
            height: auto;
            margin-right: 1rem;
        }

        h5 {
            font-size: 1.5rem;
        }
    }

    .message-body {
        width: 100%;
        height: 50vh;
    }

    .message-foot {
        width: 100%;
        height: 60px;
        padding: 8px;
        display: flex;

        input {
            width: 100%;
            height: 100%;
            border-radius: 8px;
            outline: none;
            padding: 0 8px;
            border: 1px solid #ccc;
        }

        button {
            padding: 0 1.5rem;
            margin-left: 1rem;
            border-radius: 8px;
            border: none;
            outline: none;
            background: #0175b1;
            color: #fff;

            &:hover {
                background: #035f8d;
            }
        }
    }

    .users {
        width: 100%;
        height: 75vh;
        padding: 2rem 2rem;
        box-shadow: 0 0 2px 0 #ccc;
        overflow-y: auto;

        .user-content {
            display: flex;
            border-bottom: 1px solid #e9e9e9;
            margin-bottom: 1rem;
            cursor: pointer;
            padding: .4rem .8rem;
            border-radius: 8px;

            &:hover {
                background: #f8f8f8;
            }

            img {
                width: 40px;
                height: 40px;
                margin-right: 1rem;
            }

            .user-message {
                h4 {
                    font-size: 1.2rem;
                    text-transform: capitalize;
                }

                p {
                    font-size: .8rem;
                }
            }
        }
    }
`;