import Styled from 'styled-components';

export const ModalContent = Styled.div`
width: 100%;
backgroud: red;
padding: 1.5rem 3rem;

h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #0175B1;
    margin-bottom: 24px;
}

.buttonContainer {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    button {
        width: 120px;
        height: 40px;
        border: none;
        outline: none;
        background: #0175B1;
        border-radius: 4px;
        font-size: .8rem;
        color: #fff;
        padding: 0.3rem 1rem;
    }
}
 
.inputGroup {
        label {
            display: block;
            font-size: .8rem;
            color: rgba(0, 0, 0, .8);
        }

        input {
            width: 100%;
            height: 40px;
            background: #F7F7F7;
            color: rgba(0, 0, 0, .9);
            font-size: .9rem;
            border: none;
            outline: none;
            margin-bottom: 24px;
            padding-left: 16px;
        }

        .error {
            font-size: .8rem;
            color: red;
        }
    }

    .row {
        margin-top: 16px;

        p {
            font-size: .8rem;
        }

        h5 {
            font-size: 1.1rem;
        }
    }

    .content {
        padding: 0;
        margin: 1rem 0;

        h2 {
            font-size: 1.6rem;
            font-weight: bold;
        }
    }

    .imgContainer {
        display: block;

        img {
            width: 120px;
            height: auto;
            margin-right: .7rem;
            margin-bottom: .7rem;

            @media (max-width: 768px) {
                width: 80px;
                height: auto;
            }
        }
    }
`;